<template>
    <view class="kui-box-border kui-w-full kui-flex" :class="[customClass]" :style="{
        flexWrap: wrap,
        justifyContent: justify,
        alignItems: align,
        columnGap: `${gutter}rpx`,
        ...rowStyle,
        ...spaceStyle,
        ...customStyle
    }">
        <slot></slot>
    </view>
</template>

<script lang="ts">
import {
    reactive,
    provide,
    computed,
    CSSProperties,
    ref
} from 'vue';

import { rowProps, RowProvideOptions } from './types';
import { createComponent } from '@kviewui/utils';
import { rowProvideKey } from '../shared/symbols';
import { getSpaceProvideOptions } from '../shared/tools';

const { create } = createComponent('row');

export default create({
    props: rowProps,
    setup(props) {
        // 处理非nvue端像素容错
        let gutter = props.gutter;
        // #ifndef APP-NVUE
        gutter = gutter / 2;
        // #endif
        const providerOptions: RowProvideOptions = reactive({
            marginRight: gutter ?? 0,
            width: props.width
        });

        provide(rowProvideKey, providerOptions);

        const rowStyle = computed(() => {
            const style: CSSProperties = reactive({});

            // #ifdef APP-NVUE
            style.width =  `${props.width}rpx`;
            // #endif

            return style;
        });

        const { spaceOptions } = getSpaceProvideOptions();

        const spaceStyle = computed(() => {
            const style: CSSProperties = reactive({});

            if (props.spaceProvide) {
                style.marginBottom = spaceOptions.marginBottom;
            }

            return style;
        });

        const justify = ref(props.justify);

        // #ifdef APP-PLUS

        // #endif

        return {
            justify,
            rowStyle,
            spaceStyle
        }
    }
});
</script>