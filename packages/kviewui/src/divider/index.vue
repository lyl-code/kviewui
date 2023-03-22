<template>
  <view
    v-if="!textDescribe"
    class="kui-flex kui-divider"
    :style="{
      ...rootStyle,
      ...customStyle,
    }"
    :class="[
      state.useDefaultSlots ? 'kui-divider1' : '',
      minPx ? 'kui-divider-minpx' : '',
      customClass,
    ]"
  >
    <slot />
  </view>
  <template v-else>
    <view
      class="kui-flex kui-items-center kui-flex-grow-0"
      :class="[customClass]"
      :style="{
        ...customStyle,
      }"
    >
      <view
        class="kui-flex kui-divider"
        :style="{
          ...rootStyle,
          ...describeDividerStyle('left'),
        }"
        :class="[minPx ? 'kui-divider-minpx' : '']"
      />
      <view>
        <slot />
      </view>
      <view
        class="kui-flex kui-divider"
        :style="{
          ...rootStyle,
          ...describeDividerStyle('right'),
        }"
        :class="[minPx ? 'kui-divider-minpx' : '']"
      />
    </view>
  </template>
</template>

<script lang="ts">
import { reactive, useSlots, CSSProperties, computed } from "vue";

import { dividerProps } from "./types";
import { createComponent, getNumberByUnit } from "@kviewui/utils";
import { getThemeColor } from "../shared/tools";
import { theme } from "@kviewui/theme";

const { create } = createComponent("divider");

export default create({
  props: dividerProps,
  setup(props) {
    // const { proxy }: any = getCurrentInstance();
    // const theme = proxy.$theme;
    // const theme: KuiNamespace.Theme = uni["$kView"];
    // const theme: KuiNamespace.Theme = theme;

    const state = reactive({
      useDefaultSlots: useSlots().default,
    });

    const rootStyle = computed(() => {
      const style: CSSProperties = reactive({});

      style.position = "relative";
      style.height = 0;
      style.border = "none";
      const borderWidth: string = props.minPx ? "0.5rpx" : "1px";
      let borderStyle: string = "solid";
      let borderColor: string = theme.colors["light"]["grey"][3];
      let inset: string = props.inset ? props.inset : "";

      if (props.dashed) {
        borderStyle = "dashed";
      }
      // borderColor = '#909ca4';
      // 自定义颜色
      borderColor = props.color ? props.color : borderColor;
      // borderColor = props.theme ? theme.colors["light"][props.theme][5] : borderColor;
      borderColor = getThemeColor(props.color, props.mode, props.colorLevel);
      style.borderTop = `${borderWidth} ${borderStyle} ${borderColor}`;
      style.margin = "16rpx 0";
      if (props.margin) {
        style.margin = props.margin;
      }
      // 缩进方向判断
      if (props.inset) {
        if (props.insetDirection === "start") {
          style.left = inset;
        }
      }

      // #ifndef APP-NVUE
      style.width = `calc(100% - ${inset})`;
      // #endif

      // #ifdef APP-NVUE
      if (props.inset) {
        style.width = `${props.width - getNumberByUnit(inset)}rpx`;
      }
      // #endif

      // 垂直分割线
      if (props.direction === "column") {
        style.width = 0;
        style.height = "24rpx";
        style.margin = props.margin ? props.margin : "0 24rpx";
        style.borderLeft = `${borderWidth} ${borderStyle} ${borderColor}`;
      }

      // 带文本描述的分割线
      // if (useSlots().default) {
      //   style.display = "flex";
      //   style.borderTop = "none";
      //   // style["--border-color"] = borderColor;
      //   style.borderColor = borderColor;
      //   let leftMaxWidth: string = "100%";
      //   let rightMaxWidth: string = "100%";

      //   // 文本位置
      //   if (props.textPosition == "left") {
      //     leftMaxWidth = "15%";
      //   }
      //   if (props.textPosition == "right") {
      //     rightMaxWidth = "15%";
      //   }

      //   style["--border-left-max-width"] = leftMaxWidth;
      //   style["--border-right-max-width"] = rightMaxWidth;
      // }

      // 最小像素边框
      if (props.minPx) {
        style.transform = "scaleY(0.5)";
      }

      return style;
    });

    const describeDividerStyle = (p: string) => {
      const style: CSSProperties = reactive({});

      let widthPercent = 1 / 2;

      if (props.textPosition === "left") {
        if (p === "left") {
          widthPercent = 3 / 20;
        } else {
          widthPercent = 17 / 20;
        }
      }

      if (props.textPosition === "right") {
        if (p === "left") {
          widthPercent = 17 / 20;
        } else {
          widthPercent = 3 / 20;
        }
      }

      // #ifndef APP-NVUE
      style.width = `${widthPercent * 100}%`;
      // #endif

      // #ifdef APP-NVUE
      style.width = `${props.width * widthPercent}rpx`;
      console.log(`${style.width}`);
      // #endif

      return style;
    };

    return {
      rootStyle,
      state,
      describeDividerStyle,
    };
  },
});
</script>

<style>
.kui-divider {
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
  flex-grow: 0 !important;
  /* #endif */
  align-items: stretch !important;
}
</style>
