<template>
    <view :id="elId" :style="{
        ...animateStyle,
        ...customStyle
    }" ref="animateRef" :class="[animateClasses, animateLoopClass, customClass]">
        <slot></slot>
    </view>
</template>

<script lang="ts">

import { computed, onMounted, ref, toRefs, watch, nextTick, CSSProperties, reactive } from 'vue';
import { createComponent, getElId } from '@kviewui/utils';
import { animateProps } from './types';

const { create } = createComponent('animate');

// #ifdef APP-NVUE
import {
    useSpin,
    usePulse,
    useBounce,
    useHeartbeat,
    useShake,
    useFadeIn,
    useFadeOut
} from '@kviewui/animate';
// #endif

export default create({
    props: animateProps,
    setup(props) {
        const animateRef = ref(null);

        const elId = ref(getElId());

        const { name } = toRefs(props);

        const animateClass = (name: KuiNamespace.AnimateTypeEnum) => {
            let str = '';

            switch (name) {
                case 'spin':
                    return 'kui-animate-spin';
                case 'pulse':
                    return 'kui-animate-pulse';
                case 'bounce':
                    return 'kui-animate-bounce';
                case 'heartbeat':
                    return 'kui-animate-heartbeat';
                case 'shake':
                    return 'kui-animate-shake';
                case 'fade-in':
                    return 'kui-animate-fade-in';
                case 'fade-out':
                    return 'kui-animate-fade-out';
            }
        };

        const animateClasses = ref(animateClass(props.name));

        const animateLoopClass = computed(() => {
            if (props.loop) return 'kui-animate-ic-loop';
            return '';
        });

        const getAnimateDuration = (name: KuiNamespace.AnimateTypeEnum): number => {
            let duration: number = 0;

            switch (name) {
                case 'spin':
                    duration = 46000;
                    break;
                case 'pulse':
                    duration = 1000;
                    break;
                case 'bounce':
                    duration = 500;
                    break;
                case 'heartbeat':
                    duration = 500;
                    break;
                case 'shake':
                    duration = 50;
                    break;
                case 'fade-in':
                    duration = 300;
                    break;
                case 'fade-out':
                    duration = 300;
                    break;
            }

            return duration;
        }

        const useAnimate = (name: KuiNamespace.AnimateTypeEnum) => {
            animateClasses.value = animateClass(name);
            // #ifdef APP-NVUE
            switch (name) {
                case 'spin':
                    useSpin((animateRef.value as any).ref, props.loop, props.durationAuto ? getAnimateDuration('spin') : props.duration, props.delay);
                    break;
                case 'pulse':
                    usePulse((animateRef.value as any).ref, props.loop, props.durationAuto ? getAnimateDuration('pulse') : props.duration, props.delay);
                    break;
                case 'bounce':
                    useBounce((animateRef.value as any).ref, props.loop, props.durationAuto ? getAnimateDuration('bounce') : props.duration, props.delay);
                    break;
                case 'heartbeat':
                    useHeartbeat((animateRef.value as any).ref, props.loop, props.durationAuto ? getAnimateDuration('heartbeat') : props.duration, props.delay);
                    break;
                case 'shake':
                    useShake((animateRef.value as any).ref, props.loop, props.durationAuto ? getAnimateDuration('shake') : props.duration, props.delay);
                    break;
                case 'fade-in':
                    useFadeIn((animateRef.value as any).ref, props.loop, props.durationAuto ? getAnimateDuration('fade-in') : props.duration, props.delay);
                    break;
                case 'fade-out':
                    useFadeOut((animateRef.value as any).ref, props.loop, props.durationAuto ? getAnimateDuration('fade-out') : props.duration, props.delay);
                    break;
            }
            // #endif
        };

        const animateStyle = computed(() => {
            const style: CSSProperties = reactive({});

            // #ifndef APP-NVUE
            style.display = 'inline-block';
            // #endif

            style.animationDuration = `${props.duration}ms !important`;
            style.animationDelay = `${props.delay}ms !important`;

            return style;
        });

        nextTick(() => {
            useAnimate(props.name);
        })

        onMounted(() => {
            // useAnimate(props.name);

            watch(
                () => props.name,
                (newVal) => {
                    console.log(`新的值：${newVal}`);
                    useAnimate(newVal);
                    nextTick(() => {
                        // useFadeIn((animateRef.value as any).ref, props.loop);
                        // useAnimate(newVal);
                    })
                }
            );
        })

        return { animateRef, animateClass, animateLoopClass, animateClasses, elId, animateStyle };
    }
})
</script>