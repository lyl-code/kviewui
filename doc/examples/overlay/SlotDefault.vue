<template>
    <kui-overlay 
        is-wrapper 
        radius-size="sm" 
        :close-on-click-overlay="false" 
        v-model:visible="insideOverlayVisible">
        <view class="kui-mt-0">
            <view class="kui-mt-3 kui-p-3 kui-box-border">
                <kui-space :gap="[40, 20]">
                    <kui-button type="primary" value="主要按钮" />
                    <kui-button type="info" value="信息按钮" />
                    <kui-button value="默认按钮" />
                    <kui-button type="success" value="成功按钮" />
                    <kui-button type="warning" value="警告按钮" />
                    <kui-button type="danger" value="危险按钮" />
                    <kui-button type="danger" background-color="orange" text-color="black" value="自定义按钮" />
                </kui-space>
            </view>
        </view>
    </kui-overlay>
</template>

<script lang="ts" setup>
import {
    ref
} from 'vue';
const insideOverlayVisible = ref(false);
</script>