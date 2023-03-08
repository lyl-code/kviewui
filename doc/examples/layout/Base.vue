<template>
  <kui-space :gap="[10, 0]" direction="column">
    <kui-row>
      <kui-col>
        <view
          class="kui-w-full kui-h-8 kui-rounded-md kui-bg-green-5 kui-flex kui-justify-center kui-items-center kui-text-white"
        >
          <text>span:24</text>
        </view>
      </kui-col>
    </kui-row>
    <kui-row>
      <template v-for="(item, index) in state.span12" :key="index">
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
    <kui-row>
      <template v-for="(item, index) in state.span8" :key="index">
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
    <kui-row>
      <template v-for="(item, index) in state.span6" :key="index">
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
  </kui-space>
</template>

<script lang="ts" setup>
const state = reactive({
  span12: [12, 12],
  span8: [8, 8, 8],
  span6: [6, 6, 6, 6],
  span6a: [6, 6, 6],
});
</script>
