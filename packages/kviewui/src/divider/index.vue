<template>
  <view
    :style="{
      ...rootStyle,
      ...customStyle,
    }"
    :class="[
      state.useDefaultSlots ? 'kui-divider' : '',
      minPx ? 'kui-divider-minpx' : '',
      customClass,
    ]"
  >
    <slot></slot>
  </view>
</template>

<script lang="ts">
import { reactive, useSlots, CSSProperties, computed } from "vue";

import { dividerProps } from "./types";
import { createComponent } from "@kviewui/utils";
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
      const borderWidth: string = "1rpx";
      let borderStyle: string = "solid";
      let borderColor: string = theme.colors["light"]["grey"][3];
      let inset: string = props.inset ? props.inset : "";

      if (props.dashed) {
        borderStyle = "dashed";
      }
      // borderColor = '#909ca4';
      // 自定义颜色
      borderColor = props.color ? props.color : borderColor;
      borderColor = props.theme ? theme.colors["light"][props.theme][5] : borderColor;
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
      style.width = `calc(100% - ${inset})`;

      // 垂直分割线
      if (props.direction === "column") {
        style.width = 0;
        style.height = "24rpx";
        style.margin = props.margin ? props.margin : "0 24rpx";
        style.borderLeft = `${borderWidth} ${borderStyle} ${borderColor}`;
      }

      // 带文本描述的分割线
      if (useSlots().default) {
        style.display = "flex";
        style.borderTop = "none";
        style["--border-color"] = borderColor;
        let leftMaxWidth: string = "100%";
        let rightMaxWidth: string = "100%";

        // 文本位置
        if (props.textPosition == "left") {
          leftMaxWidth = "15%";
        }
        if (props.textPosition == "right") {
          rightMaxWidth = "15%";
        }

        style["--border-left-max-width"] = leftMaxWidth;
        style["--border-right-max-width"] = rightMaxWidth;
      }

      // 最小像素边框
      if (props.minPx) {
        style.transform = "scaleY(0.5)";
      }

      return style;
    });

    return {
      rootStyle,
      state,
    };
  },
});
</script>

<style lang="less">
.kui-divider {
  display: flex;
  align-items: center;
  font-size: 28rpx;
  margin: 16rpx 0;
  /* #ifndef APP-NVUE */
  &::before,
  &::after {
    content: "";
    border-top: 4px solid var(--border-color);
    border-width: 1rpx 0 0;
    height: 0px;
    flex: 1;
  }
  &::before {
    margin-right: 32rpx;
    max-width: var(--border-left-max-width);
  }
  &::after {
    margin-left: 32rpx;
    max-width: var(--border-right-max-width);
  }
  /* #endif */
}
</style>
