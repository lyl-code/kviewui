<template>
  <kui-space :gap="[30, 20]">
    <kui-tag type="primary" checkable text="默认未选中" />
    <kui-tag type="primary" checkable :default-checked="true" text="默认选中" />
    <kui-tag
      name="checkTag1"
      type="info"
      ref="checkableTag1"
      checkable
      :default-checked="state.checked1"
      text="点击选中"
      @click="onCheck1"
    />
    <kui-tag
      name="checkTag2"
      type="info"
      ref="checkableTag2"
      checkable
      :default-checked="state.checked2"
      :auto-checked="state.autoChecked"
      text="点击手动选中"
      @click="onCheck2"
    />
  </kui-space>
</template>

<script lang="ts" setup>
import { reactive, getCurrentInstance } from "vue";

import { showModal } from "@kviewui/utils";

const { proxy }: any = getCurrentInstance();

const state = reactive({
  checked1: false,
  checked2: false,
  autoChecked: false,
});

const onCheck1 = (e) => {
  nextTick(() => {
    state.checked1 = !state.checked1;
    setTimeout(() => {
      console.log(proxy.$refs["checkableTag1"].getState());
    }, 0);
  });
};

const onCheck2 = (e) => {
  nextTick(() => {
    state.autoChecked = false;
    if (!state.checked2) {
      showModal(
        "提示",
        "是否选中",
        true,
        "否",
        "是",
        "#999",
        "#00BC79",
        false,
        (res: UniNamespace.ShowModalRes) => {
          if (res.confirm) {
            state.autoChecked = true;
            state.checked2 = true;
            setTimeout(() => {
              console.log(proxy.$refs["checkableTag2"].getState());
            }, 0);
          }
        }
      );
    } else {
      showModal(
        "提示",
        "是否取消选中",
        true,
        "否",
        "是",
        "#999",
        "#00BC79",
        false,
        (res: UniNamespace.ShowModalRes) => {
          if (res.confirm) {
            state.autoChecked = true;
            state.checked2 = false;
            setTimeout(() => {
              console.log(proxy.$refs["checkableTag2"].getState());
            }, 0);
          }
        }
      );
    }
    console.log(proxy.$refs["checkableTag2"].getState());
  });
};
</script>
