<template>
	<view class=" kui-flex kui-flex-col kui-w-full">
		<view :render-whole="true" :id="elId" ref="kuiGrid" class="kui-flex kui-flex-row kui-flex-wrap"
			:class="[customClass]" :style="{
				...rootStyle,
				...customStyle
			}">
			<slot />
		</view>
	</view>
</template>

<script lang="ts">
import {
	reactive,
	provide,
	computed,
	CSSProperties,
	onMounted,
	nextTick,
	ref,
	getCurrentInstance
} from 'vue';

import { gridProps } from './types';

import { createComponent, getElId, useKviewuiRect } from '@kviewui/utils';

const { create } = createComponent('grid');

// #ifdef APP-NVUE
const dom = uni.requireNativePlugin('dom');
// #endif

export default create({
	props: gridProps,
	emits: ['change'],
	setup(props, { emit }) {
		const elId = getElId();
		const kuiGrid = ref(null);

		const state = reactive({
			iconSize: props.iconSize,
			iconColor: props.iconColor,
			reverse: props.reverse,
			direction: props.direction,
			border: props.border,
			childrens: [],
			marginLeft: `${props.gutter}rpx`,
			clickable: props.clickable
		});

		const rootStyle = computed(() => {
			const style: CSSProperties = reactive({});
			const percent = `${100 / props.columns}%`;
			// style.gridTemplateColumns = `repeat(${props.columns}, ${percent})`;
			// style.columnGap = `${props.gutter}rpx`;
			// style.gridRowGap = `${props.gutter}rpx`;
			style.marginLeft = state.marginLeft;
			return style;
		});

		// 获取元素宽度
		const {
			proxy
		}: any = getCurrentInstance();

		const getDomWidth = (fn: Function) => {
			// #ifndef APP-NVUE
			useKviewuiRect(kuiGrid, elId, proxy).then((res: any) => {
				const width = `${(res.width - 2) / props.columns}`;
				fn(width);
			})
			// #endif
			// #ifdef APP-NVUE
			dom.getComponentRect((kuiGrid.value as any).ref, (ret: any) => {
				const width = `${parseInt(((ret.size.width - 1) / props.columns) + '')}`;
				fn(width);
			})
			// #endif
		}

		const change = (e: Event) => {
			// console.log(e);
			emit('change', e);
		}

		onMounted(() => {
			nextTick(() => {
				if (state.childrens) {
					// console.log(state.childrens);
					getDomWidth((width: number) => {
						state.childrens.forEach((vm: any, idx: number) => {
							vm.width = `${width - props.gutter / 2 - 1}px`;
							// vm.height = `${vm.square ? width : 0}px`;
							vm.marginRight = `${props.gutter}rpx`;
							vm.index = idx;
							if (vm.square) {
								vm.height = vm.width;
							}
							if (props.border) {
								if (idx > 0 && (idx + 1) % props.columns === 0) {
									vm.showRightBorder = false;
									vm.marginRight = '0px';
								}

								if (idx >= props.columns) {
									vm.showTopBorder = true;
								}
							}

							// grid设置间距不再显示边框
							if (props.gutter > 0) {
								vm.showRightBorder = vm.showTopBorder = false;
							}
						});
					})
				}
			})
		})

		provide('kui-grid', {
			...state,
			change
		});

		return {
			elId,
			kuiGrid,
			state,
			rootStyle
		}
	}
});
</script>