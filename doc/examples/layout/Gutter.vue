<template>
  <kui-row :gutter="20">
    <template v-for="(item, index) in state.span8" :key="index">
      <kui-col
        :close-gutter="index === state.span8.length - 1 ? true : false"
        :span="item"
      >
        <view
          class="kui-w-full kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white"
          :class="index % 2 == 0 ? 'kui-bg-green-5' : 'kui-bg-green-2'"
        >
          <text>span:{{ item }}</text>
        </view>
      </kui-col>
    </template>
  </kui-row>
</template>

<script lang="ts" setup>
const state = reactive({
  span8: [8, 8, 8],
});
</script>
