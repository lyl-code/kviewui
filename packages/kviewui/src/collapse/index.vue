<template>
  <view
    :class="[customClass]"
    :style="{
      ...customStyle,
    }"
  >
    <slot />
  </view>
</template>
<script lang="ts">
import { createComponent, isArray } from "@kviewui/utils";
import { nextTick, provide, reactive } from "vue";
import { collapseProps } from "./types";

const { create } = createComponent("collapse");

export default create({
  props: collapseProps,
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const children: any[] = [];

    const data = reactive({
      name: props.accordion ? [] : "",
    });

    nextTick(() => {
      if (children) {
        children.forEach((vm: { name: string; isOpen: boolean }) => {
          if (
            typeof props.modelValue === "string" ||
            typeof props.modelValue === "number"
          ) {
            if (props.modelValue === vm.name) {
              vm.isOpen = true;
            }
          }
          if (isArray(props.modelValue)) {
            if ((props.modelValue as Array<string | number>).indexOf(vm.name) > -1) {
              vm.isOpen = true;
            }
          }
        });
      }
    });

    const setAccordion = (name: string) => {
      nextTick(() => {
        if (children) {
          children.forEach((vm: { name: string; isOpen: boolean }) => {
            if (name !== vm.name && props.accordion) {
              vm.isOpen = false;
            }
          });
        }
      });
    };

    const onChange = (name: string) => {
      nextTick(() => {
        if (children) {
          children.forEach((vm: { name: string; isOpen: boolean }) => {
            if (name === vm.name && vm.isOpen) {
              if (!props.accordion) {
                data.name = name;
              } else {
                (data.name as string[]).push(name);
              }

              emit("update:modelValue", data.name);
              emit("change", data.name);
            }
          });
        }
      });
    };

    provide("collapseParent", {
      props,
      children: children,
      setAccordion,
      onChange,
    });

    return {};
  },
});
</script>
