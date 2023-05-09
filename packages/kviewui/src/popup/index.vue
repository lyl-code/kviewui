<template>
    <view :id="elId">
        <kui-overlay v-model:visible="show" :close-on-click-overlay="false" :duration="duration" @click="close"
            @closed="onClosedOverlay">
        </kui-overlay>
        <view v-if="show" @tap="onClosedOverlay">
            <view v-if="position === 'center'" class="kui-fixed kui-inset-t-0 kui-inset-l-0 kui-w-full kui-h-full" :style="{
                    ...styles
                }">
                <view class="kui-flex kui-flex-col kui-flex-1 kui-items-center kui-justify-center kui-h-full">
                    <slot />
                </view>
            </view>
        </view>
    </view>
</template>

<script lang="ts">
import { createComponent, getElId } from '@kviewui/utils';
import { computed, CSSProperties, onUnmounted, reactive, ref, watch, WatchStopHandle } from 'vue';
import { popupProps } from './types';

import KuiOverlay from '../overlay/index.vue';

const { create } = createComponent('popup');

let stopWatch: WatchStopHandle;

export default create({
    props: popupProps,
    emits: ['update:visible', 'closed'],
    components: {
        KuiOverlay
    },
    setup(props, { emit }) {
        // 随机生成元素ID
        const elId = getElId();
        const show = ref(props.visible);
        // #ifdef APP-NVUE
        const systemInfo = uni.getSystemInfoSync();
        // #endif

        const styles = computed(() => {
            const style: CSSProperties = reactive({});

            style.zIndex = props.zIndex;

            style.animationDuration = `${props.duration}ms`;

            // #ifdef APP-NVUE
            style.width = `${systemInfo.windowWidth}px`;
            style.height = `${systemInfo.windowHeight}px`;
            // #endif

            // #ifdef H5
            style.marginTop = props.navigationStyle === 'custom' ? '0px' : '44px';
            // #endif

            return style;
        });

        const close = () => {
            // emit('update:visible', false);
            onClosedOverlay();
        };

        const onClosedOverlay = () => {
            console.log(2222);
            setTimeout(() => {
                show.value = false;
                emit('update:visible', show.value);
                emit('closed');
            }, props.duration);
        };

        stopWatch = watch(
            () => props.visible,
            (newValue) => {
                console.log(newValue);
                if (!newValue) {
                    close();
                } else {
                    show.value = newValue;
                }
            }
        );

        onUnmounted(() => {
            stopWatch();
        });

        return {
            elId: elId,
            show,
            styles,
            close,
            onClosedOverlay
        };
    }
});
</script>