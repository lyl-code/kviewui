<template>
  <view
    class="kui-flex kui-items-start"
    :style="{
      ...spaceStyle,
    }"
  >
    <view
      class="kui-tag kui-flex kui-items-center"
      :class="[block ? 'kui-flex-1 kui-justify-center' : '', customClass]"
      :style="{
        padding: data.padding,
        height: `${data.height}rpx`,
        borderTopLeftRadius: `${data.topLeftRadius}rpx`,
        borderTopRightRadius: `${data.topRightRadius}rpx`,
        borderBottomLeftRadius: `${data.bottomLeftRadius}rpx`,
        borderBottomRightRadius: `${data.bottomRightRadius}rpx`,
        backgroundColor: data.backgroundColor,
        color: data.textColor,
        fontSize: data.fontSize,
        borderColor: data.borderColor,
        borderWidth: `${data.borderWidth}rpx`,
        lineHeight: `${data.height}rpx`,
        flexGrow: block ? 1 : 0,
        width: block ? 'auto' : 'max-content',
        ...customStyle,
      }"
      v-if="data.show"
      @click="onClick"
    >
      <view
        class="kui-relative1 kui-ml-0"
        :style="{
          lineHeight: 0,
          margin: 0,
        }"
      >
        <slot name="left-icon"></slot>
      </view>
      <view
        :style="{
          margin: data.textMargin,
          ...textOutViewStyle,
        }"
      >
        <slot>
          <kui-text :value="text" :color="data.textColor" :size="data.fontSize" />
        </slot>
      </view>
      <view
        class="kui-relative kui-mr-0"
        :style="{
          fontSize: `${data.iconSize}rpx`,
          lineHeight: 0,
        }"
      >
        <slot name="right-icon"></slot>
      </view>
      <view class="kui-relative" v-if="loading">
        <view class="kui-leading-normal kui-mr-0">
          <kui-animate name="spin" loop>
            <kui-icons :size="data.iconSize" :name="loadingIcon"></kui-icons>
          </kui-animate>
        </view>
      </view>
      <view class="kui-relative kui-mr-0" v-if="closable" @click="close">
        <kui-icons :name="closeIcon" :size="data.iconSize"></kui-icons>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import {
  reactive,
  getCurrentInstance,
  SetupContext,
  watch,
  computed,
  CSSProperties,
} from "vue";

import { tagProps } from "./types";
import KuiIcons from "../icons/index.vue";
import KuiText from "../text/index.vue";
import KuiAnimate from "../animate/index.vue";
import { getSpaceProvideOptions } from "../shared/tools";
import { theme as themeApp } from "@kviewui/theme";

import { createComponent } from "@kviewui/utils";
const { create } = createComponent("tag");

export default create({
  props: tagProps,
  components: { KuiIcons, KuiAnimate, KuiText },
  emits: ["click", "click-left-icon", "click-right-icon", "close", "on-check"],
  setup(props, { emit }) {
    const { proxy }: any = getCurrentInstance();
    // const theme: KuiNamespace.Theme = (uni as any)['$kView']['theme'];
    const theme = themeApp;

    const data = reactive({
      type: props.type && theme.colors[props.mode][props.type] ? props.type : "",
      padding: "",
      textMargin: "0 4px",
      height: 0,
      radius: props.shape !== "square" ? 999 : 5,
      topLeftRadius: props.shape !== "square" ? 999 : 5,
      topRightRadius: props.shape !== "square" ? 999 : 5,
      bottomLeftRadius: props.shape !== "square" ? 999 : 5,
      bottomRightRadius: props.shape !== "square" ? 999 : 5,
      backgroundColor: "",
      textColor: props.textColor ? props.textColor : theme.colors[props.mode]["grey"][7],
      borderColor: "",
      borderWidth: 0,
      fontSize: "",
      mode: props.mode,
      iconTop: 0,
      closeIconLeft: 0,
      iconSize: 0,
      slotLeftIconLeft: 0,
      show: true,
      checkable: props.checkable,
      defaultChecked: props.defaultChecked,
      autoChecked: props.autoChecked,
    });

    const init = (steep: number = 0) => {
      if (!props.plain) {
        // 设置标签背景色和文本色
        if (!data.type) {
          data.backgroundColor = theme.colors[data.mode]["grey"][2 + steep];
        } else {
          data.backgroundColor = theme.colors[data.mode][data.type][5 + steep];
        }
        data.textColor =
          data.mode === "light" && data.type
            ? "#FFFFFF"
            : theme.colors["dark"]["grey"][9];
        data.textColor = data.type
          ? "#FFFFFF"
          : theme.colors[data.mode]["grey"][7 + steep];
        data.borderColor = props.type ? "" : theme.colors[data.mode]["grey"][3 + steep];
        // 特殊样式处理
        if (!props.type && steep) {
          data.backgroundColor = theme.colors[data.mode]["grey"][3];
        }

        data.backgroundColor = props.backgroundColor
          ? props.backgroundColor
          : data.backgroundColor;
        data.textColor = props.textColor ? props.textColor : data.textColor;
      } else {
        data.backgroundColor = "transparent";
        data.borderColor = data.textColor = data.type
          ? theme.colors[data.mode][props.type][5 + steep]
          : theme.colors[data.mode]["grey"][7 + steep];
        data.borderColor = props.borderColor ? props.borderColor : data.textColor;
        data.textColor = props.textColor ? props.textColor : data.textColor;
        data.borderWidth = 1;
      }

      // 可选中标签样式
      if (props.checkable) {
        if (!data.defaultChecked) {
          data.backgroundColor = "transparent";
          data.borderWidth = 0;
          data.textColor = data.type
            ? theme.colors[data.mode][data.type][5 + steep]
            : theme.colors[data.mode]["grey"][7 + steep];
        } else {
          data.backgroundColor = data.type
            ? theme.colors[data.mode][data.type][1 + steep]
            : theme.colors[data.mode]["grey"][2 + steep];
          data.textColor = data.type
            ? theme.colors[data.mode][data.type][5 + steep]
            : theme.colors[data.mode]["grey"][7 + steep];
        }
      }

      // 标签大小
      switch (props.size) {
        case "mini":
          data.padding = "8px 0px";
          // data.textMargin = '0 2px';
          data.fontSize = "12px";
          // data.height = 32;
          // data.iconTop = 2;
          data.closeIconLeft = 0;
          data.iconSize = 28;
          break;
        case "small":
          data.padding = "10px 0px";
          // data.textMargin = '0 2px';
          data.fontSize = "14px";
          // data.height = 48;
          // data.iconTop = 8;
          data.closeIconLeft = 0;
          data.iconSize = 32;
          break;
        case "large":
          data.padding = "14px 1px";
          // data.textMargin = props.shape !== 'capsule' ? '0 6px' : '0 3px';
          data.fontSize = "18px";
          // data.height = 70;
          // data.iconTop = 19;
          data.closeIconLeft = 10;
          data.iconSize = 40;
          break;
        default:
          data.padding = "12px 0px";
          // data.textMargin = props.shape !== 'capsule' ? '0 1px' : '0 2px';
          data.fontSize = "16px";
          // data.height = 64;
          // data.iconTop = 15;
          data.closeIconLeft = 2;
          data.iconSize = 18;
          break;
      }

      // 半圆角标签
      if (props.halfRound === "left") {
        data.topRightRadius = 5;
        data.bottomRightRadius = 5;
        // data.textMargin = '2px';
      } else if (
        props.shape === "round" &&
        props.size !== "small" &&
        props.size !== "mini"
      ) {
        // 圆角标签
        data.textMargin = "0 6px";
      }

      if (props.halfRound === "right") {
        data.topLeftRadius = 5;
        data.bottomLeftRadius = 5;
        // data.textMargin = '2px';
      }
    };

    init();

    uni.$on("changeMode", (e) => {
      data.mode = e;
      init();
    });

    const clickLeftIcon = (e: any) => {
      emit(
        "click-left-icon",
        {
          eventType: "click-left-icon",
          name: props.name,
        },
        e
      );
    };

    const clickRightIcon = (e: any) => {
      emit(
        "click-right-icon",
        {
          eventType: "click-right-icon",
          name: props.name,
        },
        e
      );
    };

    const close = (e: any) => {
      data.show = false;
      emit(
        "close",
        {
          eventType: "close",
          name: props.name,
        },
        e
      );
    };

    const onClick = (e: any) => {
      emit(
        "click",
        {
          eventType: "click",
          name: props.name,
        },
        e
      );
    };

    const getState = () => {
      return {
        name: props.name,
        checked: data.defaultChecked,
      };
    };

    // 获取space组件全局provide
    let { spaceOptions } = getSpaceProvideOptions();

    const spaceStyle = computed(() => {
      const style: CSSProperties = reactive({});

      if (props.spaceProvide) {
        style.marginBottom = spaceOptions.marginBottom;
        style.marginRight = spaceOptions.marginRight;
      }

      return style;
    });

    watch(
      () => [props.defaultChecked, props.autoChecked],
      (newVal, oldVal) => {
        if (newVal[1]) {
          data.defaultChecked = newVal[0];
          init();
        }
      }
    );

    return {
      data,
      spaceStyle,
      clickLeftIcon,
      clickRightIcon,
      close,
      onClick,
      getState,
    };
  },
});
</script>
