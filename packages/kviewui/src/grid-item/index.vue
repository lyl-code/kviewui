<template>
  <view
    v-if="state.width"
    class="kui-flex"
    :style="rootStyle"
    @touchstart="onTouchstart"
    @touchend="onTouchend"
    @touchmove="onTouchmove"
  >
    <view
      class="kui-flex kui-relative"
      :class="[customClass]"
      :style="{
        ...contentStyle,
        ...customStyle,
      }"
      @click="onClick"
    >
      <slot>
        <view
          class="kui-leading-none kui-flex-1"
          :style="{
            ...slotStyle,
          }"
        >
          <view class="kui-flex kui-flex-2 kui-items-center kui-justify-center">
            <slot name="icon">
              <kui-icons :name="icon" :color="state.iconColor" :size="state.iconSize" />
            </slot>
          </view>
          <view
            class="kui-flex kui-items-center kui-justify-center kui-leading-none"
            :style="{
              ...textStyle,
            }"
            :class="[
              parent.reverse ? 'kui-mb-1' : '',
              parent.direction == 'horizontal' ? 'kui-ml-1' : '',
            ]"
          >
            <slot name="text">
              <kui-text :size="state.fontSize" :value="text" />
            </slot>
          </view>
        </view>
      </slot>
    </view>
  </view>
</template>

<script lang="ts">
import {
  reactive,
  inject,
  computed,
  CSSProperties,
  getCurrentInstance,
  onMounted,
} from "vue";

import { gridItemProps } from "./types";
import { getThemeColor } from "../shared/tools";
import { theme as themeApp } from "@kviewui/theme";

import KuiText from "../text/index.vue";
import KuiIcons from "../icons/index.vue";

import { createComponent } from "@kviewui/utils";
const { create } = createComponent("grid-item");

export default create({
  props: gridItemProps,
  components: {
    KuiText,
    KuiIcons,
  },
  emits: ["click", "touchstart", "touchend", "touchmove"],
  setup(props, { emit }) {
    const parent: any = inject("kui-grid");
    // console.log(parent);
    // if (!parent) return;
    const { proxy }: any = getCurrentInstance();
    // const theme = proxy.$theme;
    // const theme: KuiNamespace.Theme = (uni as any)['$kView']['theme'];
    const theme = themeApp;

    const state = reactive({
      iconSize: props.iconSize ?? parent.iconSize,
      iconColor: props.iconColor ? props.iconColor : parent.iconColor,
      showRightBorder: parent.border,
      showTopBorder: false,
      fontSize: `${theme.size.fonts.base}px`,
      marginRight: "",
      marginBottom: "",
      width: "",
      height: "",
      square: props.square,
      index: "",
    });

    // if (props.iconSize > parent.iconSize) {
    // 	state.iconSize = props.iconSize
    // }

    const rootStyle = computed(() => {
      const style: CSSProperties = reactive({});
      const backgroundColorMap =
        (theme as any).colors[props.mode][props.backgroundColor] ||
        getThemeColor(props.backgroundColor, props.mode);
      style.backgroundColor = backgroundColorMap[props.backgroundColorLevel];
      style.borderRadius = `${(theme as any).size.radiusSize[props.radiusSize]}rpx`;
      const borderColor = theme.colors["light"]["grey"][3];
      const borderWidth = "1rpx";
      const borderStyle = "solid";
      const border = `${borderWidth} ${borderStyle} ${borderColor}`;
      style.borderRight = state.showRightBorder ? border : "";
      style.borderTop = state.showTopBorder ? border : "";
      style.marginRight = state.marginRight;
      // style.height = '100%';
      return style;
    });

    const contentStyle = computed(() => {
      const style: CSSProperties = reactive({});
      style.width = state.width;
      style.height = state.height;
      style.lineHeight = 1;
      style.backgroundColor = getThemeColor(
        props.backgroundColor,
        props.mode,
        props.backgroundColorLevel as any
      );
      // style.textAlign = 'center';
      // style.margin = props.contentMargin ?? '32rpx 0rpx';
      // style.display = 'flex';
      // style.flexDirection = 'column';
      if (!state.square) {
        style.padding = props.padding;
      }

      return style;
    });

    const textStyle = computed(() => {
      const style: CSSProperties = reactive({});

      // #ifndef APP-NVUE
      style.marginTop = "6px";
      // #endif

      return style;
    });

    const slotStyle = computed(() => {
      const style: CSSProperties = reactive({});

      style.display = "flex";
      style.flexDirection = "column";
      style.alignItems = "center";
      style.justifyContent = "center";

      if (parent.direction === "horizontal") {
        style.flexDirection = "row";
        style.alignItems = "center";
      }

      if (parent.reverse) {
        style.flexDirection = "column-reverse";
      }

      // #ifndef APP-NVUE
      // style.padding = '20px 0';
      // #endif
      // #ifdef APP-NVUE
      // style.padding = '15px 0';
      // #endif

      return style;
    });

    onMounted(() => {
      // 判断有无父元素实例
      if (parent && parent.childrens.indexOf(state) === -1) {
        parent.childrens.push(state);
      }
    });

    const onClick = (event: any) => {
      if (!parent.clickable) return;
      event.detail["id"] = props.id;
      event.detail["index"] = state.index;
      emit("click", event);
      // console.log(parent);
      parent.change(event);
    };

    const onTouchstart = (event: any) => {
      if (!parent.clickable) return;
      event.detail["id"] = props.id;
      emit("touchstart", event);
    };

    const onTouchend = (event: any) => {
      if (!parent.clickable) return;
      event.detail["id"] = props.id;
      emit("touchend", event);
    };

    const onTouchmove = (event: any) => {
      if (!parent.clickable) return;
      event.detail["id"] = props.id;
      emit("touchmove", event);
    };

    return {
      state,
      rootStyle,
      contentStyle,
      slotStyle,
      parent,
      textStyle,
      onClick,
      onTouchstart,
      onTouchend,
      onTouchmove,
    };
  },
});
</script>
