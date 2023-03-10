import { globalProps, ShapeEnum } from '../shared/types';

import { ExtractPropTypes, PropType } from 'vue';

export type AnimateTypeEnum = 'flash' | 'backpos';

export const skeletonProps = {
    // 引入组件公共props
    ...globalProps,
    /**
	 * @zh 是否开启骨架加载
	 */
	loading: {
		type: Boolean,
		default: true
	},
	/**
	 * @zh 每行宽度
	 */
	width: {
		type: [String, Number],
		default: ''
	},
	/**
	 * @zh 每行高度
	 */
	height: {
		type: [String, Number],
		default: ''
	},
	/**
	 * @zh 是否展示标题
	 */
	title: {
		type: Boolean,
		default: false
	},
	/**
	 * @zh 是否展示头像
	 */
	avatar: {
		type: Boolean,
		default: false
	},
	/**
	 * @zh 标题宽度
	 */
	titleWidth: {
		type: String,
		default: ''
	},
	/**
	 * @zh 头像大小
	 */
	avatarSize: {
		type: String,
		default: ''
	},
	/**
	 * @zh 头像形状
	 */
	avatarShape: {
		type: String as PropType<ShapeEnum>,
		default: 'round' as ShapeEnum
	},
	/**
	 * @zh 行数
	 */
	rows: {
		type: Number,
		default: 3
	},
	/**
	 * @zh 每行宽度
	 */
	rowsWidth: {
		type: [String, Array],
		default: ''
	},
	/**
	 * @zh 每行是否为圆角
	 */
	rowsRound: {
		type: Boolean,
		default: false
	},
	/**
	 * @zh 是否显示卡片
	 */
	card: {
		type: Boolean,
		default: false
	},
	/**
	 * @zh 卡片高度
	 */
	cardHeight: {
		type: String,
		default: ''
	},
	/**
	 * @zh 是否开启加载动画
	 */
	animate: {
		type: Boolean,
		default: true
	},
	/**
	 * @zh 动画方式
	 */
	animateType: {
		type: String as PropType<AnimateTypeEnum>,
		default: 'backpos' as AnimateTypeEnum
	},
	/**
	 * @zh 骨架背景色
	 */
	backgroundColor: {
		type: String,
		default: ''
	}
};

export type SkeletonProps = ExtractPropTypes<typeof skeletonProps>;