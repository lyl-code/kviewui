<template>
	<view
		:style="{
			transform: `scale(${data.scale})`
		}"
	>
		<view
			class="square-turn"
			v-if="data.type === 'square-turn'"
			:style="{
				width: `${data.width}rpx`,
				height: `${data.height}rpx`,
				backgroundColor: data.backgroundColor
			}"
		></view>
		<view
			class="chase"
			v-if="data.type === 'chase-dot'"
			:style="{
				width: `${data.width}rpx`,
				height: `${data.height}rpx`
			}"
		>
			<template v-for="i in 6" :key="i">
				<view
					class="chase-dot"
					:style="{
						'--color': data.backgroundColor
					}"
				></view>
			</template>
		</view>
		<view
			class="double"
			v-if="data.type === 'double-bounce'"
			:style="{
				'--width': `${data.width}rpx`,
				'--height': `${data.height}rpx`
			}"
		>
			<template v-for="i in 2" :key="i">
				<view
					:class="`double-bounce${i}`"
					:style="{
						'--background-color': data.backgroundColor
					}"
				></view>
			</template>
		</view>
		<view
			class="rect"
			v-if="data.type === 'rect'"
			:style="{
				'--width': `${data.width}rpx`,
				'--height': `${data.height}rpx`
			}"
		>
			<template v-for="i in 4" :key="i">
				<view
					class="rect-item"
					:class="`rect-item${i}`"
					:style="{
						'--color': data.backgroundColor
					}"
				></view>
			</template>
		</view>
		<view
			class="cube1"
			v-if="data.type === 'cube1'"
			:style="{
				'--width': `${data.width}rpx`,
				'--height': `${data.height}rpx`
			}"
		>
			<template v-for="i in 2" :key="i">
				<view
					:class="`cube1-item${i}`"
					:style="{
						'--color': data.backgroundColor
					}"
				></view>
			</template>
		</view>
		<view
			class="spinner"
			v-if="data.type === 'spinner'"
			:style="{
				'--width': `${data.width}rpx`,
				'--height': `${data.height}rpx`,
				'--color': data.backgroundColor
			}"
		></view>
		<view
			class="dot"
			v-if="data.type === 'dot'"
			:style="{
				'--width': `${data.width}rpx`,
				'--height': `${data.height}rpx`
			}"
		>
			<template v-for="i in 2" :key="i">
				<view
					:class="`dot-item${i}`"
					:style="{
						'--color': data.backgroundColor
					}"
				></view>
			</template>
		</view>
		<view class="bounce" v-if="data.type === 'bounce'">
			<template v-for="i in 3" :key="i">
				<view
					class="bounce-item"
					:class="`bounce-item${i}`"
					:style="{
						'--color': data.backgroundColor
					}"
				></view>
			</template>
		</view>
		<view
			class="circle-dot"
			v-if="data.type === 'circle-dot'"
			:style="{
				'--width': `${data.width}rpx`,
				'--height': `${data.height}rpx`
			}"
		>
			<template v-for="i in 12" :key="i">
				<view
					class="circle-dot-item"
					:class="`circle-dot-item${i}`"
					:style="{
						'--color': data.backgroundColor
					}"
				></view>
			</template>
		</view>
		<view
			class="cube2"
			v-if="data.type === 'cube2'"
			:style="{
				'--width': `${data.width}rpx`,
				'--height': `${data.height}rpx`
			}"
		>
			<template v-for="i in 9" :key="i">
				<view
					class="cube2-item"
					:class="`cube2-item${i}`"
					:style="{
						'--color': data.backgroundColor
					}"
				></view>
			</template>
		</view>
		<view class="circle-dot2" v-if="data.type === 'circle-dot2'" :style="{
			'--width': `${data.width}rpx`,
			'--height': `${data.height}rpx`
		}">
			<template v-for="i in 12" :key="i">
				<view class="circle-dot2-item" :class="`circle-dot2-item${i}`" :style="{
					'--color': data.backgroundColor
				}"></view>
			</template>
		</view>
		<view class="cube3" v-if="data.type === 'cube3'" :style="{
			'--width': `${data.width}rpx`,
			'--height': `${data.height}rpx`
		}">
			<view class="cube3-item cube3-item1" :style="{
				'--color': data.backgroundColor
			}"></view>
			<view class="cube3-item cube3-item2" :style="{
				'--color': data.backgroundColor
			}"></view>
			<view class="cube3-item cube3-item4" :style="{
				'--color': data.backgroundColor
			}"></view>
			<view class="cube3-item cube3-item3" :style="{
				'--color': data.backgroundColor
			}"></view>
		</view>
		<view class="circle-dot3" v-if="data.type === 'circle-dot3'" :style="{
			'--width': `${data.width/1.5}rpx`,
			'--height': `${data.height/1.5}rpx`
		}">
			<template v-for="i in 12" :key="i">
				<view class="circle-dot3-item" :class="`circle-dot3-item${i}`" :style="{
					'--color': data.backgroundColor
				}"></view>
			</template>
		</view>
		<view class="square-dot" v-if="data.type === 'square-dot'" :style="{
			'--width': `${data.width}rpx`,
			'--height': `${data.height}rpx`
		}">
			<template v-for="i in 12" :key="i">
				<view class="square-dot-item" :class="`square-dot-item${i}`" :style="{
					'--color': data.backgroundColor
				}"></view>
			</template>
		</view>
		<view class="square-dot2" v-if="data.type === 'square-dot2'" :style="{
			'--width': `${data.width}rpx`,
			'--height': `${data.height}rpx`
		}">
			<template v-for="i in 12" :key="i">
				<view class="square-dot2-item" :class="`square-dot2-item${i}`" :style="{
					'--color': data.backgroundColor
				}"></view>
			</template>
		</view>
	</view>
</template>

<script lang="ts">
	/**
	 * Spin 加载动画组件
	 * @description 展示常用的加载动画
	 * @param {String} type = [square-turn/chase-dot/double-bounce/rect/cube1/spinner/dot/bounce/circle-dot/cube2/circle-dot2/cube3/circle-dot3/square-dot/square-dot2] 动画类型 
	 * @param {String} background-color 背景色
	 * @param {String} size = [sm/base/lg/xl] 大小
	 * @template
	 * <kui-spin></kui-spin>
	 */
import { reactive, defineComponent, SetupContext, getCurrentInstance } from 'vue';

import { createComponent } from '@kviewui/utils';
import { theme as appTheme } from '@kviewui/theme';

const { create } = createComponent('spin');

import { spinProps } from './types';
import { getThemeColor } from '../shared/tools';

export default create({
	props: spinProps,
	setup(props, context: SetupContext) {
		// const { proxy } = getCurrentInstance();
		// const theme = proxy.$theme;
        const theme: KuiNamespace.Theme = appTheme;

		const data = reactive({
			type: props.type,
			width: props.width || 80,
			height: props.height || 80,
			duration: 0,
			backgroundColor: getThemeColor(props.backgroundColor ? props.backgroundColor : 'grey', props.mode, props.backgroundColorLevel),
			dots: [1, 2, 3, 4, 5, 6],
			scale: 1
		});

		/**
		 * 大小设置
		 */
		const initSize = () => {
			if (props.scale !== 0) { data.scale = props.scale; return; }
			if (props.size === 'sm') {
				data.scale = 0.8;
			} else if (props.size === 'base') {
				data.scale = 1;
			} else if (props.size === 'lg') {
				data.scale = 1.2;
			} else if (props.size === 'xl') {
				data.scale = 1.4;
			} else {
				data.scale = 1;
			}
		};

		/**
		 * 速度设置 [暂时没用]
		 */
		const initSpeed = () => {
			if (props.speed === 'sm') {
				data.duration = 0.8;
			} else if (props.speed === 'base') {
				data.duration = 1.2;
			} else if (props.speed === 'lg') {
				data.duration = 1.6;
			} else if (props.speed === 'xl') {
				data.duration = 2.0;
			}
		};

		const init = () => {
			initSize();

			initSpeed();
		};

		init();

		return {
			theme,
			data
		};
	}
});
</script>

<style lang="less" scoped>
.square-turn {
	width: var(--width);
	height: var(--height);
	background-color: var(--background-color);
	animation: rotateplane 1.2s infinite ease-in-out;
}

@keyframes rotateplane {
	0% {
		transform: perspective(120px) rotateX(0deg) rotateY(0deg);
	}

	50% {
		transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
	}

	100% {
		transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
	}
}

.chase {
	width: var(--width);
	height: var(--height);
	position: relative;
	animation: chase 2.5s infinite linear both;

	&-dot {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		animation: chase-dot 2.0s infinite ease-in-out both;

		&:before {
			content: '';
			display: block;
			width: 25%;
			height: 25%;
			background-color: var(--color);
			border-radius: 100%;
			animation: chase-dot-before 2.0s infinite ease-in-out both;
		}

		@range: 1, 2, 3, 4, 5, 6;
		each(@range, {
			&:nth-child(@{value}) {
				animation-delay: (-1.2s+(@value * 0.1));
				&:before {
					animation-delay: (-1.2s+(@value * 0.1));
				}
			}
		})
	}
}

@keyframes chase {
	100% {
		transform: rotate(360deg);
	}
}

@keyframes chase-dot {

	80%,
	100% {
		transform: rotate(360deg);
	}
}

@keyframes chase-dot-before {
	50% {
		transform: scale(0.4);
	}

	100%,
	0% {
		transform: scale(1.0);
	}
}

.double {
	width: var(--width);
	height: var(--height);
	position: relative;

	&-bounce1,
	&-bounce2 {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background-color: var(--background-color);
		opacity: 0.6;
		position: absolute;
		top: 0;
		left: 0;

		animation: bounce 2.0s infinite ease-in-out;
	}

	&-bounce2 {
		animation-delay: -1.0s;
	}
}

@keyframes bounce {

	0%,
	100% {
		transform: scale(0.0);
	}

	50% {
		transform: scale(1.0);
	}
}

.rect {
	width: var(--width);
	height: var(--height);
	text-align: center;
	font-size: 10px;

	&-item {
		background-color: var(--color);
		height: 100%;
		width: 6px;
		display: inline-block;

		animation: stretchdelay 1.2s infinite ease-in-out;
	}

	@range: 1, 2, 3, 4;
	each(@range, {
		&-item@{value} {
			animation-delay: (-1.2s + (@value * 0.1));
		}
	})
}

@keyframes stretchdelay {

	0%,
	40%,
	100% {
		transform: scaleY(0.4);
	}

	20% {
		transform: scaleY(1.0);
	}
}

.cube1 {
	width: var(--width);
	height: var(--height);
	position: relative;

	&-item1,
	&-item2 {
		background-color: var(--color);
		width: 15px;
		height: 15px;
		position: absolute;
		top: 0;
		left: 0;
		animation: cubemove 1.8s infinite ease-in-out;
	}

	&-item2 {
		animation-delay: -0.9s;
	}
}

@keyframes cubemove {
	25% {
		transform: translateX(42px) rotate(-90deg) scale(0.5);
	}

	50% {
		transform: translateX(42px) translateY(42px) rotate(-179deg);
	}

	50.1% {
		transform: translateX(42px) translateY(42px) rotate(-180deg);
	}

	75% {
		transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
	}

	100% {
		transform: rotate(-360deg);
	}
}

.spinner {
	width: var(--width);
	height: var(--height);
	background-color: var(--color);

	border-radius: 100%;
	animation: scaleout 1.0s infinite ease-in-out;
}

@keyframes scaleout {
	0% {
		transform: scale(0);
	}

	100% {
		transform: scale(1.0);
		opacity: 0;
	}
}

.dot {
	width: var(--width);
	  height: var(--height);
	  position: relative;
	  text-align: center;
	  animation: rotate 2.0s infinite linear;
	  &-item1,
	  &-item2 {
		  width: 60%;
		    height: 60%;
		    display: inline-block;
		    position: absolute;
		    top: 0;
		    background-color: var(--color);
		    border-radius: 100%;
			animation: bounce 2.0s infinite ease-in-out;
	  }
	  &-item2 {
		  top: auto;
		    bottom: 0;
		    animation-delay: -1.0s;
	  }
}

@keyframes rotate { 100% { transform: rotate(360deg); }}
@keyframes bounce {
  0%, 100% {
    transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
  }
}

.bounce {
	width: 70px;
	text-align: center;
	&-item {
		width: 18px;
		height: 18px;
		background-color: var(--color);
		border-radius: 100%;
		display: inline-block;
		animation: bouncedelay 1.4s infinite ease-in-out both;
	}
	@range: 1, 2;
	each(@range, {
		&-item@{value} {
			animation-delay: (-0.32s + (@value * 0.16));
		}
	})
}

@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
}

.circle-dot {
	width: var(--width);
	height: var(--height);
	position: relative;
	&-item {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		right: 0;
		&:before {
			content: '';
			display: block;
			width: 15%;
			height: 15%;
			background-color: var(--color);
			border-radius: 100%;
			animation: circleBounceDelay 1.2s infinite ease-in-out both;
		}
	}

	@range: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12;
	each(@range, {
		&-item@{value} {
			transform: rotate(((@value)-1) * 30deg);
			&:before {
				animation-delay: ((-1.1 + ((@value)-1)*0.1) * 1s);
			}
		}
	});
}

@keyframes circleBounceDelay {
  0%, 80%, 100% {
            transform: scale(0);
  } 40% {
            transform: scale(1);
  }
}

.cube2 {
	width: var(--width);
	height: var(--height);
	&-item {
		width: 33%;
		height: 33%;
		background-color: var(--color);
		float: left;
		animation: cubeGridScaleDelay 1.3s infinite ease-in-out;
	}
	@range1: 1, 2, 3;
	each(@range1, {
		&-item@{value} {
			animation-delay: (0.2s + (@value - 1) * 0.1);
		}
	})

	@range2: 4, 5, 6;
	each(@range2, {
		&-item@{value} {
			animation-delay: (0.1s + (@value - 4) * 0.1);
		}
	})
	&-item7 {
		animation-delay: 0s;
	}

	@range3: 8, 9;
	each(@range3, {
		&-item@{value} {
			animation-delay: (0.1s + (@value - 8) * 0.1);
		}
	})
}

@keyframes cubeGridScaleDelay {
  0%, 70%, 100% {
        transform: scale3D(1, 1, 1);
  } 35% {
        transform: scale3D(0, 0, 1);
  }
}

.circle-dot2 {
	width: var(--width);
	height: var(--height);
	position: relative;
	&-item {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		&:before {
			content: '';
			  display: block;
			  margin: 0 auto;
			  width: 15%;
			  height: 15%;
			  background-color: var(--color);
			  border-radius: 100%;
			  animation: circleFadeDelay 1.2s infinite ease-in-out both;
		}
	}
	@range: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12;
	each(@range, {
		&-item@{value} {
			transform: rotate(30deg * ((@value)-1));
			&:before {
				animation-delay: (-1.2s + ((@value) - 1) * 0.1);
			}
		}
	})
}

.circle-dot3 {
	width: var(--width);
	height: var(--height);
	position: relative;
	&-item {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		&:before {
			content: '';
			  display: block;
			  margin: 0 auto;
			  width: 15%;
			  height: 15%;
			  background-color: var(--color);
			  border-radius: 100%;
			  animation: circleFadeDelay 1.2s infinite ease-in-out both;
		}
	}
	@range: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12;
	each(@range, {
		&-item@{value} {
			transform: rotate(30deg * ((@value)-1));
			&:before {
				animation-delay: (-1.2s + ((@value) - 1) * 0.1);
			}
		}
	})
}

.square-dot {
	width: var(--width);
	height: var(--height);
	position: relative;
	&-item {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		&:before {
			content: '';
			  display: block;
			  margin: 0 auto;
			  width: 10%;
			  height: 30%;
			  background-color: var(--color);
			  border-radius: 50%;
			  animation: circleFadeDelay 1.2s infinite ease-in-out both;
		}
	}
	@range: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12;
	each(@range, {
		&-item@{value} {
			transform: rotate(30deg * ((@value)-1));
			&:before {
				animation-delay: (-1.2s + ((@value) - 1) * 0.1);
			}
		}
	})
}

.square-dot2 {
	width: var(--width);
	height: var(--height);
	position: relative;
	&-item {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		&:before {
			content: '';
			  display: block;
			  margin: 0 auto;
			  width: 10%;
			  height: 30%;
			  background-color: var(--color);
			  border-radius: 10%;
			  animation: circleFadeDelay 1.2s infinite ease-in-out both;
		}
	}
	@range: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12;
	each(@range, {
		&-item@{value} {
			transform: rotate(30deg * ((@value)-1));
			&:before {
				animation-delay: (-1.2s + ((@value) - 1) * 0.1);
			}
		}
	})
}

@keyframes circleFadeDelay {
  0%, 39%, 100% { opacity: 0; }
  40% { opacity: 1; } 
}

.cube3 {
	width: var(--width);
	height: var(--height);
	position: relative;
	transform: rotateZ(45deg);
	&-item {
		float: left;
		width: 50%;
		height: 50%;
		position: relative;
		transform: scale(1.1);
		&:before {
			content: '';
			  position: absolute;
			  top: 0;
			  left: 0;
			  width: 100%;
			  height: 100%;
			  background-color: var(--color);
			  animation: foldCubeAngle 2.4s infinite linear both;
			  transform-origin: 100% 100%;
		}
	}
	@range: 2, 3, 4;
	each(@range, {
		&-item@{value} {
			transform: scale(1.1) rotateZ(90deg + ((@value) - 2) * 90);
			&:before {
				animation-delay: (0.3s + ((@value) - 2) * 0.3);
			}
		}
	})
}

@keyframes foldCubeAngle {
  0%, 10% {
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
    transform: perspective(140px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
    transform: perspective(140px) rotateY(180deg);
    opacity: 0; 
  }
}
</style>
