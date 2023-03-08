<template>
  <kui-collapse v-model="accordionActiveName">
    <kui-collapse-item :animation="false" name="1" title="标题1">
      <kui-text value="前端监控之性能与异常" />
    </kui-collapse-item>
  </kui-collapse>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const accordionActiveName = ref("1");
</script>
