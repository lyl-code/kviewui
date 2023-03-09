<template>
	<view :class="[customClass]" :style="{
        ...customStyle
    }">
		<view class="kui-flex kui-items-center" v-if="type === 'linear'">
			<view class="kui-progress kui-relative kui-w-full" :style="{
                ...commonStyle,
                ...rootStyle
            }">
				<view class="kui-flex">
					<view class="kui-absolute kui-h-full progress" :style="{
                        ...commonStyle,
                        ...contentStyle
                    }">
						<view class="kui-progress-active" v-if="active"></view>
					</view>
					<view class="kui-flex kui-flex-col kui-justify-center kui-absolute" style="top: -25%;"
						:style="{
                            left: `${state.percent-5}%`, 
                            top: `${lineWidth < 20 ? -100 : -25}%`,
                            ...insideLabelStyle
                        }" v-if="labelInside">
						<slot>
							<view :style="labelInsideStyle">
								<view class="kui-relative kui-flex kui-justify-center kui-items-center kui-h-full" :style="labelInsideTextStyle">
									<kui-text :size="`${12}px`" color="white" :value="`${state.percent}%`" />
								</view>
							</view>
						</slot>
					</view>
				</view>
			</view>
			<view class="kui-ml-1" :style="labelStyle" v-if="label && !labelInside && !iconName">
				<kui-text :size="`${state.labelTextSize}px`" :color="state.labelTextColor" :value="`${state.percent}%`" />
			</view>
			<view class="kui-ml-1" :style="labelStyle" v-if="iconName">
				<kui-icons :name="iconName" :size="state.labelTextSize" :color="state.labelTextColor" />
			</view>
		</view>
		<view class="kui-relative" v-if="type === 'circle'">
			<!-- <view class="kui-progress-circle kui-relative">
				<view>
					<view class="wrapper right">
						<view class="circle-progress-bar circle-right" :style="{
							'--color': state.backgroundColor
						}"></view>
					</view>
					<view class="wrapper left">
						<view class="circle-progress-bar circle-left"></view>
					</view>
				</view>
				<view class="kui-absolute kui-h-full kui-w-full kui-flex kui-justify-center kui-items-center">
					<slot>
						<view>
							<kui-text>{{ 75 }}%</kui-text>
						</view>
					</slot>
				</view>
			</view> -->
			<canvas class="kui-progress-circle kui-absolute1" :id="state.canvasId" :canvas-id="state.canvasId" :style="circleStyle">
			</canvas>
			<view class="kui-absolute kui-w-full kui-h-full kui-flex kui-justify-center kui-items-center kui-transform" style="transform: scale(2);left: 0;top: 0;" :style="circleStyle">
				<slot>
					<!-- <kui-text>{{ state.percent }}%</kui-text> -->
				</slot>
			</view>
			<!-- <canvas class="kui-progress-circle kui-absolute" :id="state.canvasId2" :canvas-id="state.canvasId2" style="z-index: -5;" :style="circleStyle"></canvas> -->
		</view>
	</view>
</template>

<script lang="ts">
	import {
		reactive,
		getCurrentInstance,
		defineComponent,
		SetupContext,
		CSSProperties,
		computed,
		watch
	} from 'vue';

	import { progressProps } from './types';

    import { theme as appTheme } from '@kviewui/theme';

    import { createComponent } from '@kviewui/utils';

    const { create } = createComponent('progress');

    import KuiText from '../text/index.vue';
    import KuiIcons from '../icons/index.vue';

	export default create({
		props: progressProps,
        components: {
            KuiText,
            KuiIcons
        },
		setup(props, context: SetupContext) {
			const {
				proxy
			}: any = getCurrentInstance();
			// const theme = proxy.$theme;
            const theme: KuiNamespace.Theme = appTheme;
			const state = reactive({
				labelTextSize: props.labelTextSize,
				labelTextColor: '',
				lineWidth: props.lineWidth,
				backgroundColor: props.color,
				backgroundImage: '',
				labelInsideTextBottom: '',
				percent: props.percent < 0 ? 0 : props.percent,
				ctx_e: {} as any,
				z: 0,
				canvasId: '',
				canvasId2: '',
				sAngle: null,
				loadOK: false,
				timer: '',
				animation: {
					step: 1,
					transEnd: 300
				}
			});

			state.percent = props.percent > 100 ? 100 : state.percent;
			// state.backgroundColor = props.color ? props.color : theme.colors['light']['primary'][5];

			const commonStyle = computed(() => {
				const style: CSSProperties = reactive({});
				state.lineWidth = props.lineWidth;

				style.height = `${state.lineWidth}rpx`;
				style.borderRadius = `${state.lineWidth}px`;

				if (props.shape === 'square') {
					style.borderRadius = `5rpx`;
				}

				state.labelTextColor = props.labelTextColor ? props.labelTextColor : theme.colors['light'][
					'grey'
				][7];
				state.labelTextColor = theme.colors['light'][props.labelTextColor] ? theme.colors['light'][
					props.labelTextColor
				][5] : state.labelTextColor;

				return style;
			});

			const rootStyle = computed(() => {
				const style: CSSProperties = reactive({});

				style.backgroundColor = props.trackColor ? props.trackColor : theme.colors['dark']['grey'][
					8
				];

				return style;
			});

			const contentStyle = computed(() => {
				const style: CSSProperties = reactive({});

				style.width = `${state.percent}%`;
				state.backgroundImage = theme.colors['light'][props.color] ?
					`linear-gradient(to right, ${theme.colors['light'][props.color][5]}, ${theme.colors['light'][props.color][4]})` :
					state.backgroundColor;

				style.backgroundColor = state.backgroundColor;
				style.backgroundImage = state.backgroundImage;
				style.transition = 'all 0.4s ease';

				return style;
			});

			const labelStyle = computed(() => {
				const style: CSSProperties = reactive({});
				style.fontSize = `${theme.size.fonts.sm}${theme.size.fontUnit}`;

				return style;
			});

			const labelInsideStyle = computed(() => {
				const style: CSSProperties = reactive({});
				const height = props.lineWidth * 1.5;

				style.height = `${height}rpx`;
				style.width = '70rpx';
				// style.top = '10%';
				if (props.lineWidth < 20) {
					style.height = '30rpx';
					// style.bottom = '100%';
				}
				// style.lineHeight = `${height/2}px`;
				style.borderRadius = '10rpx';
				style.backgroundColor = state.backgroundColor;
				style.backgroundImage = state.backgroundImage;

				return style;
			});

			const labelInsideTextStyle = computed(() => {
				const style: CSSProperties = reactive({});

				const bottom = props.labelInsideTextBottom ? props.labelInsideTextBottom : '';

				style.bottom = bottom;

				return style;
			});
			
			const dpr = uni.getSystemInfoSync().pixelRatio;
			
			const circleStyle = computed(() => {
				const style: CSSProperties = reactive({});
				
				style.width = style.height = `${props.size}px`;
				style.zoom = 0.5;
				
				return style;
			});
			
			const isZero = (val: number) => {
				// return val === 0
				return false;
			}
			
			// 拒绝值为0默认到1
			const notZero = (val: number) => {
				return isZero(val) ? 1 : val
			}
			
			const animationDraw = (ctx: UniApp.CanvasContext, init = true) => {
				const trackColor = props.trackColor ? props.trackColor : theme.colors['dark']['grey'][8];
				//计算完成角度
				const oRadio = 2 * (Math.PI / (notZero(20)) * notZero(20 * (state.percent / 100)));
				// const oRadio = Math.PI / (Math.PI * 0.1);
				console.log(oRadio);
				//计算未完成角度
				const pRadio = isZero(20) ? 0 : 2 * (Math.PI / notZero(20)) * notZero(100 - state.percent);
				//当前数值
				let z = 0;
				//结束数值
				let end = state.animation.transEnd || 200;
				state.timer = setInterval(() => {
					state.loadOK = true
					if (!(z > end)) {
						ctx.clearRect(0, 0, props.size, props.size)
						//绘制未完成半环
						let sAngle = oRadio / end * z
						let eAngle = pRadio / end * z
						//绘制未完成一次
						fillRing(ctx, {
							x: props.size / 2,
							y: props.size / 2,
							radius: props.size / 2 - props.lineWidth,
							sAngle: -Math.PI,
							eAngle: Math.PI,
							counterclockwise: false,
							fillColor: trackColor,
							lineWidth: props.lineWidth
						})
						// state.sAngle += -Math.PI + sAngle;
						//绘制完成半环
						fillRing(ctx, {
							x: props.size / 2,
							y: props.size / 2,
							radius: props.size / 2 - props.lineWidth,
							sAngle: -Math.PI,
							eAngle: -Math.PI + sAngle,
							counterclockwise: false,
							fillColor: state.backgroundColor,
							lineWidth: props.lineWidth
						})
						// state.sAngle = sAngle;
						// console.log(-Math.PI + sAngle);
						//绘制
						z += state.animation.step || 1;
						ctx.draw()
					} else {
						clearInterval(state.timer as unknown as number)
					}
				}, 0) as any
			}
			
			const fillRing = (ctx: UniApp.CanvasContext, option: { x: any; y: any; radius: any; sAngle: any; eAngle: any; counterclockwise: any; fillColor: any; lineWidth: any; }) => {
				const {
					x,
					y,
					radius,
					sAngle,
					eAngle,
					counterclockwise,
					lineWidth,
					fillColor
				} = option;
				let grd = ctx.createLinearGradient(0, 0, 0, 0); //从左到右
				// ctx.scale(dpr, dpr);
				ctx.beginPath();
				ctx.lineWidth = lineWidth;
				ctx.strokeStyle = fillColor;
				ctx.lineCap = 'round';
				ctx.setFillStyle(grd);
				ctx.arc(x, y, radius, sAngle, eAngle, counterclockwise);
				ctx.stroke();
			}
			
			const initDraw = () => {
				// ctx_e.scale(dpr, dpr);
				setTimeout(() => {
					animationDraw(state.ctx_e);
				}, 200);
			}
			
			if (props.type === 'circle') {
				const canvasIdInit = 'progress-circle';
				state.canvasId = props.id ? `${canvasIdInit}-${props.id}` : canvasIdInit;
				const ctx_s = uni.createCanvasContext(state.canvasId2, proxy);
				const view = uni.createSelectorQuery().in(proxy).select(`#${state.canvasId}`);
				const trackColor = props.trackColor ? props.trackColor : theme.colors['dark']['grey'][8];
				state.ctx_e = uni.createCanvasContext(state.canvasId, proxy);
				initDraw();
			}

			watch(
				() => props.percent,
				(newVal) => {
					if (newVal < 0) {
						state.percent = 0;
						return false;
					}
					if (newVal > 100) {
						state.percent = 100;
						return false;
					}
					setTimeout(() => {
						state.percent = newVal;
						if (props.type === 'circle') {
							animationDraw(state.ctx_e);
						}
						console.log(state.percent);
					}, 200);
				}
			);

			return {
				commonStyle,
				rootStyle,
				contentStyle,
				labelStyle,
				labelInsideStyle,
				labelInsideTextStyle,
				circleStyle,
				fillRing,
				initDraw,
				state
			};
		}
	});
</script>

<style lang="less">
	page {
		background-color: red !important;
	}
	.kui-progress-active {
		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			border-radius: 0%;
			overflow: hidden;
			animation: progressActive 2s ease-in-out infinite;
		}
	}

	@keyframes progressActive {
		0% {
			background: rgba(255, 255, 255, 0.1);
			width: 0;
		}

		20% {
			background: rgba(255, 255, 255, 0.5);
			width: 0;
		}

		to {
			background: rgba(255, 255, 255, 0);
			width: 100%;
		}
	}

	.kui-progress-circle {
		display: inline-block;
		margin-top: 0px;
	}
</style>
