<template>
    <template v-if="data.show">
        <view class="kui-overlay" @tap="onClose" :catch-move="lockScroll">
            <slot></slot>
            <view class="kui-flex-1" :class="[blur ? 'blur' : '']" :style="{
                position: isWrapper ? 'absolute' : 'fixed',
                left: 0,
                right: 0,
                top: data.top,
                bottom: 0,
                height: data.height,
                backgroundColor: `rgba(0, 0, 0, ${overlayNess})`,
                borderRadius: `${data.radiusSize}rpx`,
                zIndex: zIndex,
            }" @tap="onClose">
                <view class="kui-flex kui-flex-1" :class="vnodeCenter ? 'kui-justify-center kui-items-center' : ''" :style="{
                }">
                    <slot name="vnode"></slot>
                </view>
            </view>
        </view>
    </template>
</template>

<script lang="ts">
/**
 * Shade 遮罩组件
 * @description 可自动全屏或者给某个区块包裹的遮罩蒙层
 * @property {Number} zIndex = 999 层级
 * @property {String} vnode 填充内容[支持HTML字符串]
 * @property {Boolean} vnodeCenter = [true/false] 填充内容是否居中显示
 *  @value true 是
 *  @value false 否
 * @property {Number} radius 圆角
 * @property {Boolean} isMaskClick = [true/false] 遮罩点击是否关闭
 *  @value true 是
 *  @value false 否
 * @example
 *  <kui-shade>
 *    <view>测试</view>
 *  </kui-shade>
 */
import {
    reactive,
    ref,
    watch,
    getCurrentInstance,
    nextTick,
    onMounted,
    useSlots
} from "vue";

import { overlayProps } from './types';
import { theme as appTheme } from '@kviewui/theme';

import { createComponent } from '@kviewui/utils';
const { create } = createComponent('overlay');

export default create({
    props: overlayProps,
    emits: ['click', 'update:visible'],
    setup(props, { emit }) {
        const theme: KuiNamespace.Theme = appTheme;
        // const slots = proxy.$slots;
        // const slotDefault = slots.default;

        const { proxy }: any = getCurrentInstance();
        const overlay = ref(null);
        const slots = useSlots();

        console.log(props.visible);

        const data = reactive({
            width: "100%",
            top: 0,
            height: "",
            show: props.visible,
            classes: '',
            isMaskClick: props.closeOnClickOverlay,
            radiusSize: theme.size.radiusSize[props.radiusSize]
        });

        // #ifdef H5
        if (!props.isWrapper) {
            data.top = props.headerHeight;
        }
        // #endif

        const sysinfo = uni.getSystemInfoSync();

        const open = () => {
            data.height = `${sysinfo.windowHeight}px`;
            // data.show = true;
            data.classes = 'fade-in';
        }

        const close = () => {
            data.classes = 'fade-out';
            // setTimeout(() => {
            // 	data.show = false;
            // }, 120);
        }

        const onClose = (e: MouseEvent) => {
            if (data.isMaskClick) {
                close();
                setTimeout(() => {
                    data.show = false;
                    emit('update:visible', false);
                }, 120);
            }

            emit('click', e);
        }

        const changeMaskClick = (v: boolean) => {
            data.isMaskClick = v;
        }

        // context.expose({
        // 	open,
        // 	close,
        // 	changeMaskClick
        // });

        onMounted(() => {
            watch(
                () => props.visible,
                (newVal) => {
                    // console.log(newVal);
                    // console.log(slots)
                    // console.log(proxy.slots);
                    // console.log(overlay.value);
                    data.show = newVal;
                    open();
                }
            );
        })

        return {
            theme,
            slots,
            data,
            open,
            close,
            onClose,
            changeMaskClick,
            overlay
        }
    }
});
</script>

<style scoped>
.kui-overlay {
    position: relative;
}

/* #ifndef APP-NVUE */
.blur {
    backdrop-filter: blur(10rpx);
}

.fade-in {
    animation: fade-in .3s cubic-bezier(.39, .575, .565, 1.000) both;
}

.fade-out {
    animation: fade-out .3s ease-out both;
}

@keyframes fade-in {
    0% {
        opacity: 0
    }

    100% {
        opacity: 1
    }
}

@keyframes fade-out {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0
    }
}

/* #endif */
</style>
