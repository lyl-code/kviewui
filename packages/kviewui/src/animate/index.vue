<template>
    <view :id="elId" style="display: inline-block;" ref="animateRef" :class="[animateClasses, animateLoopClass, customClass]">
        <slot></slot>
    </view>
</template>

<script lang="ts">

import { computed, onMounted, ref, toRefs, watch, nextTick } from 'vue';
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

        const useAnimate = (name: KuiNamespace.AnimateTypeEnum) => {
            animateClasses.value = animateClass(name);
            // #ifdef APP-NVUE
            switch (name) {
                case 'spin':
                    useSpin((animateRef.value as any).ref, props.loop);
                    break;
                case 'pulse':
                    usePulse((animateRef.value as any).ref, props.loop);
                    break;
                case 'bounce':
                    useBounce((animateRef.value as any).ref, props.loop);
                    break;
                case 'heartbeat':
                    useHeartbeat((animateRef.value as any).ref, props.loop);
                    break;
                case 'shake':
                    useShake((animateRef.value as any).ref, props.loop);
                    break;
                case 'fade-in':
                    useFadeIn((animateRef.value as any).ref, props.loop);
                    break;
                case 'fade-out':
                    useFadeOut((animateRef.value as any).ref, props.loop);
            }
            // #endif
        };

        console.log(`旧的值：${props.name}`);

        nextTick(() => {
            useAnimate(props.name);
        })

        onMounted(() => {
            // useAnimate(props.name);

            watch(
                () => props.name,
                (newVal) => {
                    console.log(`新的值：${newVal}`);
                    // useAnimate(newVal);
                    nextTick(() => {
                        // useFadeIn((animateRef.value as any).ref, props.loop);
                        // useAnimate(newVal);
                    })
                }
            );
        })

        return { animateRef, animateClass, animateLoopClass, animateClasses, elId };
    }
})
</script>