<template>
  <view
    :class="[customClass]"
    :style="{
      ...rootStyle,
      ...customStyle,
    }"
  >
    <view
      :style="{
        ...titleStyle,
      }"
      >{{ title }}</view
    >
  </view>
</template>
<script lang="ts">
import { sectionProps } from "./types";
import { getThemeColor } from "../shared/tools";

import { createComponent, getFontSize } from "@kviewui/utils";
import { computed, CSSProperties, reactive } from "vue";

const { create } = createComponent("section");

export default create({
  props: sectionProps,
  setup(props) {
    const rootStyle = computed(() => {
      const style: CSSProperties = reactive({});

      if (props.padding) {
        style.padding = props.padding as string;
      }

      return style;
    });

    const titleStyle = computed(() => {
      const style: CSSProperties = reactive({});

      style.fontSize = getFontSize(props.titleFontSize);
      style.color = getThemeColor(props.titleColor, props.mode, props.titleColorLevel);

      return style;
    });

    return {
      rootStyle,
      titleStyle,
    };
  },
});
</script>
