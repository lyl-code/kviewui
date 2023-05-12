<template>
  <kui-grid 
    @change="onChangeGrid" 
    clickable 
    icon-color="danger" 
    :columns="3">
    <template v-for="i in 9" :key="i">
      <kui-grid-item custom-class="kui-flex-1 kui-items-center kui-justify-center" square>
        <kui-text custom-class="kui-italic kui-font-black" :value="i + ''" :size="40" />
      </kui-grid-item>
    </template>
  </kui-grid>
</template>

<script lang="ts" setup>
import { showToast } from "@kviewui/utils";

const onChangeGrid = (e: any) => {
  showToast(`第${e.detail.index + 1}个宫格被点击`, "none");
};
</script>
