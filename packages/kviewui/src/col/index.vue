<template>
    <view class="kui-flex" :class="[customClass]" :style="{
        // #ifndef APP-NVUE
        flexGrow: state.span,
        // #endif
        // #ifdef APP-NVUE
        width: width,
        // #endif
        // flexGrow: 1,
        // flexShrink: 0,
        ...rowStyle,
        ...customStyle
    }">
        <slot></slot>
    </view>
</template>

<script lang="ts">
import {
    reactive,
    SetupContext,
    inject,
    ref
} from 'vue';

import { colProps } from './types';
import { RowProvideOptions } from '../row/types';
import { createComponent } from '@kviewui/utils';
import { rowProvideKey } from '../shared/symbols';

const { create } = createComponent('row');

export default create({
    props: colProps,
    setup(props, context: SetupContext) {
        const state = reactive({
            span: props.span / 24,
            width: 0
        });

        const rowProvideOptions = inject(rowProvideKey, reactive({
            marginRight: 0,
            width: 0
        }));

        // row组件传递的style样式
        const rowStyle: RowProvideOptions = reactive({
            marginRight: `${props.closeGutter ? 0 : rowProvideOptions?.marginRight}rpx`
        });

        // nvue需要手动计算宽度，安卓中存在像素差距，所以这里减去1
        const width = ref(`${((rowProvideOptions?.width as number) - 1 - (24 / props.span - 1) * rowProvideOptions?.marginRight) * state.span}rpx`);

        return {
            state,
            rowStyle,
            width
        }
    }
});
</script>