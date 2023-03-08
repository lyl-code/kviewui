<template>
  <kui-collapse v-model="accordionActiveName">
    <kui-collapse-item :active-title-taped-state="false" name="1" title="标题1">
      <kui-text value="前端监控之性能与异常" />
    </kui-collapse-item>
  </kui-collapse>
</template>

<script lang="ts" setup>
const accordionActiveName = ref("1");
</script>
