<template>
    <view v-if="!loading">
        <slot></slot>
    </view>
    <view class="kui-skeleton kui-w-full kui-flex kui-flex-col" :class="[customClass]" :style="{
        ...customStyle
    }" v-else>
        <kui-animate :name="animate && animateType === 'flash' ? 'pulse' : 'none'" loop>
            <view class="kui-h-20 kui-relative kui-rounded-md kui-flex-shrink kui-overflow-hidden kui-mb-3"
                :class="[state.animateClass]" :style="{
                    ...commonStyle,
                    ...cardStyle
                }" v-if="card">
                <view class="kui-skeleton--animation" v-if="animate && animateType === 'backpos'" />
            </view>
        </kui-animate>
        <view class="kui-flex">
            <kui-animate :name="animate && animateType === 'flash' ? 'pulse' : 'none'" loop>
                <view class="kui-relative kui-rounded-md kui-flex-shrink-0 kui-mr-4 kui-overflow-hidden"
                    :class="[state.animateClass]" :style="{
                        ...commonStyle,
                        ...avatarStyle
                    }" v-if="avatar">
                    <view class="kui-skeleton--animation" v-if="animate && animateType === 'backpos'"></view>
                </view>
            </kui-animate>
            <view class="kui-w-full kui-flex kui-flex-col">
                <kui-animate :name="animate && animateType === 'flash' ? 'pulse' : 'none'" loop>
                    <view class="kui-h-3 kui-rounded-sm kui-mb-2 kui-relative kui-overflow-hidden"
                        :class="[state.animateClass]" :style="{
                            ...commonStyle,
                            ...rowStyle,
                            ...titleStyle
                        }" v-if="title">
                        <view class="kui-skeleton--animation" v-if="animate && animateType === 'backpos'"></view>
                    </view>
                </kui-animate>
                <template v-for="item in state.rows" :key="item">
                    <kui-animate :name="animate && animateType === 'flash' ? 'pulse' : 'none'" loop>
                        <view class="kui-h-3 kui-rounded-sm kui-mb-2 kui-relative kui-overflow-hidden"
                            :class="[state.animateClass]" :style="{
                                ...commonStyle,
                                ...rowStyle(item - 1)
                            }">
                            <view class="kui-skeleton--animation" v-if="animate && animateType === 'backpos'"></view>
                        </view>
                    </kui-animate>
                </template>
            </view>
        </view>
    </view>
</template>

<script lang="ts">
import { reactive, CSSProperties, computed } from 'vue';

import { skeletonProps } from './types';
import KuiAnimate from '../animate/index.vue';

import { theme as appTheme } from '@kviewui/theme';
import { createComponent, getUnitSize } from '@kviewui/utils';
const { create } = createComponent('skeleton');

export default create({
    props: skeletonProps,
    components: {
        KuiAnimate
    },
    setup(props) {
        const theme: KuiNamespace.Theme = appTheme;

        const state = reactive({
            rows: props.rows,
            animateClass: (props.animate && props.animateType === 'flash') ? 'kui-animate-pulse' : '',
            animateType: props.animateType
        });

        const titleStyle = computed(() => {
            const style: CSSProperties = reactive({});

            style.width = '50%';

            return style;
        });

        const bgColor = props.backgroundColor ? props.backgroundColor : theme.colors['dark']['grey'][8];

        const commonStyle = computed(() => {
            const style: CSSProperties = reactive({});

            style.backgroundColor = bgColor;

            // if ()

            return style;
        });

        const rowStyle = (item: number = 0) => {
            const style: CSSProperties = reactive({});

            style.height = props.height ? props.height : '';
            style.width = props.width ? props.width : '';

            // 自定义段落宽度
            if (props.rowsWidth) {
                style.width = getUnitSize(props.rowsWidth[item] as string);
            }

            // 段落圆角
            if (props.rowsRound) {
                style.borderRadius = '100rpx';
            }

            return style;
        };

        const avatarStyle = computed(() => {
            const style: CSSProperties = reactive({});

            style.width = style.height = props.avatarSize ? props.avatarSize : '100rpx';

            style.borderRadius = props.avatarShape === 'round' ? style.width : '';

            return style;
        });

        const cardStyle = computed(() => {
            const style: CSSProperties = reactive({});

            style.width = '100%';
            style.height = props.cardHeight ? props.cardHeight : '300rpx';

            return style;
        });

        return {
            commonStyle,
            titleStyle,
            rowStyle,
            avatarStyle,
            cardStyle,
            state
        };
    }
});
</script>

<style lang="less">
view {
  display: flex;
  /* #ifndef APP-NVUE */
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  -ms-flex-negative: 1;
      flex-shrink: 1 !important;
  -ms-flex-preferred-size: auto !important;
      flex-basis: auto !important;
  -ms-flex-line-pack: start !important;
      align-content: flex-start !important;
  -webkit-box-flex: 0 !important;
    -ms-flex-positive: 0;
    -webkit-box-align: stretch !important;
      -ms-flex-align: stretch !important;
  /* #endif */
      flex-grow: 0 !important;
      align-items: stretch !important;
}
.kui-skeleton {
    &--animation {
        position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            animation: backpos 1.5s infinite;
            background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.5) 50%, hsla(0, 0%, 100%, 0) 80%);
            transition: 0.25s background-color;
        // &::after {
        //     content: '';
        //     position: absolute;
        //     top: 0;
        //     left: 0;
        //     width: 100%;
        //     height: 100%;
        //     z-index: 1;
        //     animation: backpos 1.5s infinite;
        //     background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.5) 50%, hsla(0, 0%, 100%, 0) 80%);
        //     transition: 0.25s background-color;
        // }
    }
}

@keyframes backpos {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(100%);
    }
}
</style>
