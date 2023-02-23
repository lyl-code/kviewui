<template>
  <view class="kui-flex kui-items-start kui-leading-none">
    <view
      class="kui-badge kui-relative kui-leading-none"
      :style="{
        ...spaceStyle,
      }"
    >
      <view
        ref="slotRef"
        :id="slotId"
        :style="{
          ...slotStyle,
        }"
      >
        <slot />
      </view>
      <view
        class="content kui-flex kui-flex-row"
        :class="[customClass]"
        :style="{
          backgroundColor: state.backgroundColor,
          backgroundImage: state.backgroundImage,
          padding: state.padding,
          borderRadius: `999px`,
          width: state.width,
          height: state.height,
          ...positionStyle,
          ...customStyle,
        }"
        v-if="state.show"
      >
        <kui-text
          :value="(state.value as string)"
          :size="state.fontSize"
          :color="state.color"
          v-if="!dot && !icon"
        />
        <view class="kui-relative" v-else>
          <kui-icons :color="state.color" :size="iconSize" :name="icon"></kui-icons>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { reactive, watch, computed, CSSProperties, ref, getCurrentInstance } from "vue";

import { badgeProps } from "./types";

import {
  createComponent,
  getUnitSize,
  getFontSize,
  getNumberByUnit,
  getElId,
  useKviewuiRect,
} from "@kviewui/utils";
import { getSpaceProvideOptions } from "../shared/tools";

import KuiText from "../text/index.vue";
import KuiIcons from "../icons/index.vue";
import { theme } from "@kviewui/theme";

const { create } = createComponent("badge");

// #ifdef APP-NVUE
const dom = uni.requireNativePlugin("dom");
// #endif

export default create({
  props: badgeProps,
  components: {
    KuiText,
    KuiIcons,
  },
  setup(props) {
    // const theme = proxy.$theme;
    // const theme: KuiNamespace.Theme = (uni as any)['$kView']['theme'];

    const state = reactive({
      backgroundColor: "",
      backgroundImage: "",
      color: "",
      padding: "",
      fontSize: "",
      width: "",
      height: "",
      value: props.value ?? 5,
      maxShowPlus: false,
      show: props.show,
      mode: props.mode,
    });

    const init = (steep: number = 0) => {
      state.fontSize = getFontSize(props.fontSize as string);
      state.padding = "0px 4px";
      // #ifndef APP-NVUE
      state.padding = "2px 4px";
      // #endif
      state.backgroundColor = props.type
        ? theme.colors[props.mode][props.type][5 + steep]
        : theme.colors[props.mode]["grey"][2 + steep];
      state.color = "#FFFFFF";
      // 自定义颜色徽标
      state.backgroundColor = props.color ? props.color : state.backgroundColor;

      // 渐变主题徽标
      if (props.type && props.gradient) {
        state.backgroundImage = `linear-gradient(to right, ${
          theme.colors[props.mode][props.type][4 + steep]
        }, ${theme.colors[props.mode][props.type][5 + steep]})`;
      }

      // 圆点徽标
      if (props.dot) {
        state.width = getUnitSize(props.dotSize as string);
        state.height = getUnitSize(props.dotSize as string);
        state.padding = "";
      }

      // 处理最大值
      if (props.max > 0) {
        state.value = `${props.max}+`;
      }
    };

    const positionStyle = computed(() => {
      const style: CSSProperties = reactive({});

      if (props.position) {
        style.position = "absolute";
        switch (props.position) {
          case "right-top":
            style.right = style.top = "0px";
            break;
          case "right-bottom":
            style.right = style.bottom = "0px";
            break;
          case "left-top":
            style.left = style.top = "0px";
            break;
          case "left-bottom":
            style.left = style.bottom = "0px";
            break;
        }
      }

      return style;
    });

    // 引入space组件的provide参数
    const { spaceOptions } = getSpaceProvideOptions();

    const spaceStyle = computed(() => {
      const style: CSSProperties = reactive({});

      if (props.spaceProvide) {
        style.marginBottom = spaceOptions.marginBottom;
        style.marginRight = spaceOptions.marginRight;
      }

      return style;
    });

    init();

    const slotId = getElId();
    const slotRef = ref(null);

    const { proxy }: any = getCurrentInstance();

    const getDom = (fn: Function) => {
      // #ifndef APP-NVUE
      useKviewuiRect(slotRef, slotId, proxy).then((res: any) => {
        const width = res.width;
        const height = res.height;
        fn(width, height);
      });
      // #endif
      // #ifdef APP-NVUE
      dom.getComponentRect((slotRef.value as any).ref, (ret: any) => {
        const width = ret.size.width;
        const height = ret.size.height;
        fn(width, height);
      });
      // #endif
    };

    const slotStyle = computed(() => {
      const style: CSSProperties = reactive({});

      if (props.position) {
        style.padding = props.dot
          ? getUnitSize(getNumberByUnit(state.width) / 2)
          : getUnitSize(getNumberByUnit(state.fontSize) / 2);
      }

      return style;
    });

    uni.$on("changeMode", () => {
      const number = state.mode === "light" ? 0 : 1;
      init(number);
    });

    watch(
      () => props.show,
      (newVal) => {
        // console.log(newVal);
        state.show = newVal;
      }
    );

    return {
      state,
      spaceStyle,
      slotId,
      slotRef,
      slotStyle,
      positionStyle,
      init,
    };
  },
});
</script>
