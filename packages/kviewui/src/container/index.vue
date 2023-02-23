<template>
  <view
    :class="[customClass]"
    class="kui-container kui-flex kui-flex-col kui-box-border kui-flex-shrink"
    :style="{
      width: width,
      height: height,
      color: data.backgroundColor,
      borderTopLeftRadius: data.topLeftRadius,
      borderTopRightRadius: data.topRightRadius,
      borderBottomLeftRadius: data.bottomLeftRadius,
      borderBottomRightRadius: data.bottomRightRadius,
      paddingLeft: `${paddingX}rpx`,
      paddingRight: `${paddingX}rpx`,
      paddingTop: `${paddingY}rpx`,
      paddingBottom: `${paddingY}rpx`,
      marginLeft: `${marginX}rpx`,
      marginRight: `${marginX}rpx`,
      marginTop: `${marginY}rpx`,
      marginBottom: `${marginY}rpx`,
      backgroundColor: data.backgroundColor,
      flexShrink: 0,
      ...customStyle,
    }"
  >
    <slot></slot>
  </view>
</template>

<script lang="ts">
import { reactive } from "vue";

import { createComponent } from "@kviewui/utils";
import { theme as themeApp } from "@kviewui/theme";

const { create } = createComponent("container");

import { containerProps } from "./types";
import { getThemeColor } from "../shared/tools";

export default create({
  props: containerProps,
  setup(props) {
    // const theme: KuiNamespace.Theme = (uni as any)['$kView'].theme;
    const theme = themeApp;

    const data = reactive({
      mode: props.mode,
      backgroundColor: props.backgroundColor,
      topLeftRadius: props.topLeftRadius,
      topRightRadius: props.topRightRadius,
      bottomLeftRadius: props.bottomLeftRadius,
      bottomRightRadius: props.bottomRightRadius,
      darken: props.darken,
    });

    data.backgroundColor = !props.backgroundColor
      ? theme.colors[data.mode]["grey"][1]
      : props.backgroundColor;

    if (props.radius) {
      data.topLeftRadius = data.topRightRadius = data.bottomLeftRadius = data.bottomRightRadius =
        props.radius;
    }
    const changeMode = () => {
      if (data.mode === "light") {
        data.backgroundColor = !props.backgroundColor
          ? theme.colors[data.mode]["grey"][1]
          : props.backgroundColor;
      }
      if (data.mode === "dark") {
        // data.backgroundColor = !props.backgroundColor
        //   ? theme.colors[data.mode]["grey"][1]
        //   : `hsl(${theme.colors.darken(props.backgroundColor, data.darken).color[0]}, ${
        //       theme.colors.darken(props.backgroundColor, data.darken).color[1]
        //     }%, ${theme.colors.darken(props.backgroundColor, data.darken).color[2]}%)`;
        const colorLevel = !props.backgroundColor ? 1 : 5;
        data.backgroundColor = getThemeColor(
          props.backgroundColor || "grey",
          "dark",
          colorLevel
        );
      }
    };

    uni.$on("changeMode", (e) => {
      data.mode = e;
      changeMode();
    });

    return {
      data,
    };
  },
});
</script>
