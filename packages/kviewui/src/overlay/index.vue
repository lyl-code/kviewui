<template>
    <kui-animate v-if="data.show" :name="(duration === 0 ? 'none' : animateName as KuiNamespace.AnimateTypeEnum)"
        :duration="duration">
        <view ref="overlayRef" class="kui-relative" :class="[data.classes, customClass]" :style="{
                ...customStyle
            }" @tap="onClose">
            <slot></slot>
            <view class="kui-flex-1" :class="[blur ? 'blur' : '']" :style="{
                    position: isWrapper ? 'absolute' : 'fixed',
                    left: 0,
                    right: 0,
                    top: data.top,
                    bottom: 0,
                    height: data.height,
                    backgroundColor: `rgba(0, 0, 0, ${opacity})`,
                    borderRadius: `${data.radiusSize}rpx`,
                    zIndex: zIndex,
                }" @touchmove.prevent @wheel="onWheel" @touchmove="onMove" @tap="onClose">
                <view class="kui-flex kui-flex-1" :class="vnodeCenter ? 'kui-justify-center kui-items-center' : ''" :style="{
                    }">
                    <slot name="vnode"></slot>
                </view>
            </view>
        </view>
    </kui-animate>
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
    useSlots,
    computed,
    WatchStopHandle,
    onUnmounted
} from "vue";

import { overlayProps } from './types';
import { theme as appTheme } from '@kviewui/theme';
import { useFadeIn, useFadeOut } from '@kviewui/animate';

import KuiAnimate from '../animate/index.vue';

import { AnimateTypeEnum } from '../shared/types';

import { createComponent, getElId } from '@kviewui/utils';
const { create } = createComponent('overlay');

let stopWatch: WatchStopHandle;

export default create({
    props: overlayProps,
    components: {
        KuiAnimate
    },
    emits: ['click', 'update:visible', 'closed'],
    setup(props, { emit }) {
        const theme: KuiNamespace.Theme = appTheme;
        // const slots = proxy.$slots;
        // const slotDefault = slots.default;

        const { proxy }: any = getCurrentInstance();
        const overlayRef = ref(null);
        // const animateRef = ref(null);
        const slots = useSlots();

        console.log(props.visible);

        let animateName = ref('none');

        const data = reactive({
            width: "100%",
            top: 0,
            height: "",
            show: props.visible,
            classes: '',
            isMaskClick: props.closeOnClickOverlay,
            radiusSize: theme.size.radiusSize[props.radiusSize],
        });

        // let animateName = computed((): KuiNamespace.AnimateTypeEnum => {
        //     return 'none';
        // });

        // #ifdef H5
        if (!props.isWrapper) {
            data.top = props.headerHeight;
        }
        // #endif

        const sysinfo = uni.getSystemInfoSync();

        const open = () => {
            data.height = `${sysinfo.windowHeight}px`;
            // data.show = true;
            // data.classes = 'fade-in';
            // animateName.value = 'none';

            animateName.value = 'fade-in';
        }

        const close = () => {
            animateName.value = 'fade-out';
            setTimeout(() => {
                emit('update:visible', false);
                data.show = false;
                // animateName.value = 'fade-in';
                emit('closed');
            }, 0);
        }

        const onClose = (e: TouchEvent) => {
            emit('click', e);
            if (data.isMaskClick) {
                close();
            }
        }

        const changeMaskClick = (v: boolean) => {
            data.isMaskClick = v;
        }

        const onWheel = (e: WheelEvent) => {
            if (props.lockScroll) {
                e.preventDefault();
            }
            return true;
        }

        const onMove = (e: TouchEvent) => {
            if (props.lockScroll) {
                e.preventDefault();
            }
            return true;
        }

        stopWatch = watch(
            () => props.visible,
            (newVal) => {
                console.log(newVal);
                if (!newVal) {
                    close();
                } else {
                    data.show = newVal;
                    open();
                }
            }
        );

        onUnmounted(() => {
            stopWatch();
        });

        return {
            theme,
            slots,
            data,
            open,
            close,
            onClose,
            changeMaskClick,
            overlayRef,
            animateName,
            onWheel,
            onMove
            // animateRef
        }
    }
});
</script>

<style scoped>
/* #ifndef APP-NVUE */
.blur {
    backdrop-filter: blur(10rpx);
}

/* #endif */
</style>
