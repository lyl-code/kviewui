<template>
    <kui-button type="primary" 
        block 
        @click="slotContentOverlayVisible = true" 
        value="显示遮罩层" />
    <kui-overlay 
        ref="overlay" 
        :header-height="top" 
        vnode-center
        v-model:visible="slotContentOverlayVisible">
        <template v-slot:vnode>
			<view class="kui-w-full kui-h-full kui-flex kui-flex-col kui-flex-1 kui-justify-center kui-items-center">
				<kui-container height="100px" width="300px" radius="10px" background-color="#FFFFFF">
					<view class="kui-text-center kui-h-full kui-flex kui-flex-col kui-justify-center">
						<kui-text value="自定义插槽内容" />
					</view>
				</kui-container>
			</view>
		</template>
    </kui-overlay>
</template>

<script lang="ts" setup>
import {
    ref
} from 'vue';
const slotContentOverlayVisible = ref(false);

const top = ref(0);

// #ifdef H5
top.value = 44;
// #endif
</script>