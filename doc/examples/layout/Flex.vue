<template>
  <kui-space :gap="[10, 0]" direction="column">
    <kui-row>
      <template v-for="(item, index) in state.span6a" :key="index">
        <kui-col :span="item">
          <view
            class="kui-w-full kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white"
            :class="index % 2 == 0 ? 'kui-bg-green-5' : 'kui-bg-green-2'"
          >
            <text>span:{{ item }}</text>
          </view>
        </kui-col>
      </template>
    </kui-row>
    <kui-row justify="flex-end">
      <template v-for="(item, index) in state.span6a" :key="index">
        <kui-col :span="item">
          <view
            class="kui-w-full kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white"
            :class="index % 2 == 0 ? 'kui-bg-green-5' : 'kui-bg-green-2'"
          >
            <text>span:{{ item }}</text>
          </view>
        </kui-col>
      </template>
    </kui-row>
    <kui-row justify="center">
      <template v-for="(item, index) in state.span6a" :key="index">
        <kui-col :span="item">
          <view
            class="kui-w-full kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white"
            :class="index % 2 == 0 ? 'kui-bg-green-5' : 'kui-bg-green-2'"
          >
            <text>span:{{ item }}</text>
          </view>
        </kui-col>
      </template>
    </kui-row>
    <kui-row justify="space-between">
      <template v-for="(item, index) in state.span6a" :key="index">
        <kui-col :span="item">
          <view
            class="kui-w-full kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white"
            :class="index % 2 == 0 ? 'kui-bg-green-5' : 'kui-bg-green-2'"
          >
            <text>span:{{ item }}</text>
          </view>
        </kui-col>
      </template>
    </kui-row>
    <kui-row justify="space-around">
      <template v-for="(item, index) in state.span6a" :key="index">
        <kui-col :span="item">
          <view
            class="kui-w-full kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white"
            :class="index % 2 == 0 ? 'kui-bg-green-5' : 'kui-bg-green-2'"
          >
            <text>span:{{ item }}</text>
          </view>
        </kui-col>
      </template>
    </kui-row>
    <!-- #ifndef APP-NVUE -->
    <kui-row justify="space-evenly">
      <template v-for="(item, index) in state.span6a" :key="index">
        <kui-col :span="item">
          <view
            class="kui-w-full kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white"
            :class="index % 2 == 0 ? 'kui-bg-green-5' : 'kui-bg-green-2'"
          >
            <text>span:{{ item }}</text>
          </view>
        </kui-col>
      </template>
    </kui-row>
    <!-- #endif -->
  </kui-space>
</template>

<script lang="ts" setup>
const state = reactive({
  span6a: [6, 6, 6],
});
</script>
