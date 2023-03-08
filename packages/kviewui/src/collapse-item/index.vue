<template>
  <view class="kui-bg-white" :id="elId">
    <view
      ref="titleRef"
      class="kui-py-2 kui-px-3 kui-flex kui-items-center kui-justify-between kui-bg-white"
      :class="[
        (data.isOpen && activeTitleTapedState) || disabled
          ? 'kui-opacity-40'
          : 'kui-opacity-100',
      ]"
      @click="onClick(!data.isOpen)"
    >
      <view>
        <slot name="title">
          <kui-text :value="title" :size="15" />
        </slot>
      </view>
      <kui-icons
        :custom-style="{
          ...iconsStyle,
        }"
        :name="icon"
      />
    </view>
    <view
      class="kui-px-3 kui-overflow-hidden"
      :class="[animation ? 'kui-transition-height kui-duration-300 kui-ease' : '']"
      :style="{
        ...contentStyle,
      }"
    >
      <view ref="contentRef" :id="contentElId" class="kui-py-0 kui-leading-normal">
        <slot />
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import { collapseItemProps } from "./types";
import { CollapseProps } from "../collapse/types";
import { createComponent, getElId, useKviewuiRect } from "@kviewui/utils";
import {
  computed,
  CSSProperties,
  getCurrentInstance,
  inject,
  onMounted,
  reactive,
  ref,
  watch,
} from "vue";

const { create } = createComponent("collapse-item");

import KuiIcons from "../icons/index.vue";
import KuiText from "../text/index.vue";

export default create({
  props: collapseItemProps,
  components: {
    KuiIcons,
    KuiText,
  },
  setup(props, { slots }) {
    const { proxy }: any = getCurrentInstance();

    const titleElId = getElId();
    const elId = getElId();
    const contentElId = getElId();

    const titleRef = ref(null);
    const contentRef = ref(null);

    const collapseParent: {
      props: CollapseProps;
      children: any[];
      setAccordion: Function;
      onChange: Function;
    } = inject("collapseParent") as {
      props: CollapseProps;
      children: any[];
      setAccordion: Function;
      onChange: Function;
    };
    // console.log(collapseParent.props);

    const data = reactive({
      isOpen: false,
      slotDefault: slots.default,
      contentHeight: "0",
      name: props.name || elId,
    });

    const contentStyle = computed(() => {
      const style: CSSProperties = reactive({});

      //   style.height = "0px";

      return style;
    });

    const iconsStyle = computed(() => {
      const style: CSSProperties = reactive({});

      style.transitionProperty = "transform";
      style.transitionDuration = props.animation ? "300ms" : "0ms";
      style.transform = data.isOpen ? "rotate(-180deg)" : "rotate(0deg)";

      return style;
    });

    const onClick = (isOpen: boolean) => {
      if (props.disabled) return;
      data.isOpen = isOpen;
      //   if (isOpen) {
      //     contentStyle.value.height = data.contentHeight;
      //   }
      contentStyle.value.height = isOpen ? data.contentHeight : "0px";
      iconsStyle.value.transform = isOpen ? "rotate(-180deg)" : "rotate(0deg)";
      collapseParent.setAccordion(data.name);
      collapseParent.onChange(data.name);
    };

    watch(
      () => data.isOpen,
      (newVal) => {
        setTimeout(() => {
          contentStyle.value.height = newVal ? data.contentHeight : "0px";
        }, 0);
      }
    );

    onMounted(() => {
      if (collapseParent) {
        collapseParent.children.push(data);
      }
      // console.log(contentRef.value);
      useKviewuiRect(contentRef, contentElId, proxy).then(
        (res: KuiNamespace.useKviewuiRectPromiseCallback) => {
          //   console.log(res);
          data.contentHeight = `${res.height - 30}px`;
          console.log(data.isOpen);
          contentStyle.value.height = data.isOpen ? data.contentHeight : "0px";
        }
      );
    });

    return {
      elId,
      titleRef,
      titleElId,
      contentRef,
      contentElId,
      data,
      iconsStyle,
      contentStyle,
      onClick,
    };
  },
});
</script>
