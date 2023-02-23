<template>
  <view class="kui-absolute kui-bg-transparent kui-h-full" style="z-index: 999">
    <view
      class="kui-sticky"
      :style="{
        ...rootStyle,
        ...observerStyle,
      }"
    >
      <slot></slot>
    </view>
  </view>
</template>

<script lang="ts">
import {
  defineComponent,
  CSSProperties,
  computed,
  reactive,
  onMounted,
  getCurrentInstance,
  unref,
  ref,
} from "vue";

import { stickyProps } from "./types";
import { useKviewuiRect, createComponent } from "@kviewui/utils";

const { create } = createComponent("sticky");

export default create({
  props: stickyProps,
  setup(props) {
    const root = ref<HTMLElement>();
    const rootStyle = computed(() => {
      const style: CSSProperties = reactive({});
      let top: number = props.top ? props.top : 0;
      let bottom: number = props.bottom ? props.bottom : 0;

      // #ifdef H5
      top = top === 0 ? (props.navigationStyle === "default" ? 44 : 0) : props.top;
      // #endif

      // #ifndef H5
      top = top / 2;
      // #endif

      if (props.position === "top") {
        style.top = `${top}px`;
      } else {
        style.bottom = `${bottom}px`;
      }

      // style.height = `100vh`;
      // style.position = 'fixed';
      if (props.container) {
        style.top = "44px";
      }

      if (props.containerId) {
        style.top = "";
      }

      return style;
    });

    let observerStyle: CSSProperties = reactive({});

    const observerStart = (e: UniNamespace.ObserveResult) => {
      if (e.intersectionRatio === 0) {
        // #ifdef H5
        observerStyle.top = "44px";
        // #endif
        // #ifndef H5
        observerStyle.top = "0px";
        // #endif
      } else {
        observerStyle.top = "";
      }
    };

    const observerEnd = (e: UniNamespace.ObserveResult) => {
      if (e.intersectionRatio === 0) {
        observerStyle.top = "";
      } else {
        // #ifdef H5
        observerStyle.top = "44px";
        // #endif
        // #ifndef H5
        observerStyle.top = "0px";
        // #endif
      }
    };

    // const {
    // 	proxy
    // }: any = getCurrentInstance();

    onMounted(() => {});

    return {
      rootStyle,
      observerStyle,
      observerStart,
      observerEnd,
    };
  },
});
</script>

<style>
view {
  background-color: transparent;
}
.content {
  top: 0px;
}
</style>
