<template>
  <kui-collapse v-model="disabledActiveName">
    <kui-collapse-item name="1" title="标题1">
      <kui-text value="前端监控之性能与异常" />
    </kui-collapse-item>
    <kui-collapse-item name="2" disabled title="标题2">
      <kui-text value="争执不断，但低代码的发展已经成为趋势" />
    </kui-collapse-item>
    <kui-collapse-item name="3" disabled title="标题3">
      <kui-text value="前后端开发的边界越来越模糊" />
    </kui-collapse-item>
  </kui-collapse>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const disabledActiveName = ref("1");
</script>
