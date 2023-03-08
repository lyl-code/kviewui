<template>
  <kui-space :gap="[30, 40]">
    <kui-badge type="danger" :show="state.show" position="right-top" value="0">
      <kui-tag :space-provide="false" shape="square" text="动态显示" />
    </kui-badge>
    <kui-button type="primary" @click="onChange" value="点击切换徽标状态" />
  </kui-space>
</template>

<script lang="ts" setup>
const state = reactive({
  show: true,
});

const onChange = () => {
  state.show = !state.show;
};
</script>
