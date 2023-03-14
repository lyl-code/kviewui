<template>
    <kui-button type="primary" 
        block 
        @click="overlayNessVisible = true" 
        value="显示遮罩层" />
    <kui-overlay 
        ref="overlay" 
        :header-height="top" 
        :overlay-ness="0.4"
        v-model:visible="overlayNessVisible" />
</template>

<script lang="ts" setup>
import {
    ref
} from 'vue';
const overlayNessVisible = ref(false);

const top = ref(0);

// #ifdef H5
top.value = 44;
// #endif
</script>