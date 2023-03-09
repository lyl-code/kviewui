import { PropType, ExtractPropTypes } from 'vue';
import { ShapeEnum, globalProps } from '../shared/types';

export type TypeEnum = 'linear' | 'circle';

export const progressProps = {
    // 引入组件公共props
    ...globalProps,
    /**
	 * @zh 进度条类型
	 */
	type: {
		type: String as PropType<TypeEnum>,
		default: 'linear' as TypeEnum
	},
	/**
	 * @zh 进度条进度百分比
	 */
	percent: {
		type: Number,
		default: 0
	},
	/**
	 * @zh 进度条标签
	 */
	label: {
		type: Boolean,
		default: true
	},
	/**
	 * @zh 进度条标签位置
	 */
	labelInside: {
		type: Boolean,
		default: false
	},
	/**
	 * @zh 进度条自定义标签样式
	 */
	insideLabelStyle: {
		type: Object,
		default: {}
	},
	/**
	 * @zh 进度条形状
	 */
	shape: {
		type: String as PropType<ShapeEnum>,
		default: 'round' as ShapeEnum
	},
	/**
	 * @zh 进度条背景色
	 */
	color: {
		type: String,
		default: '#00BC79'
	},
	/**
	 * @zh 未选择的背景色
	 */
	trackColor: {
		type: String,
		default: ''
	},
	/**
	 * @zh 进度条宽度
	 */
	lineWidth: {
		type: Number,
		default: 20
	},
	/**
	 * @zh 是否显示进度条轨迹
	 */
	track: {
		type: Boolean,
		default: true
	},
	/**
	 * @zh 进度条大小
	 */
	size: {
		type: Number,
		default: 200
	},
	/**
	 * @zh 进度条原点
	 */
	rotate: {
		type: String,
		default: ''
	},
	/**
	 * @zh 进度条标签文本大小
	 */
	labelTextSize: {
		type: Number,
		default: 14
	},
	/**
	 * @zh 进度条标签文本颜色
	 */
	labelTextColor: {
		type: String,
		default: ''
	},
	/**
	 * @zh 进度条从左往右的动画
	 */
	active: {
		type: Boolean,
		default: false
	},
	/**
	 * @zh 图标名称
	 */
	iconName: {
		type: String,
		default: ''
	},
	/**
	 * @zh labelInside 下边距位置
	 */
	labelInsideTextBottom: {
		type: String,
		default: ''
	},
	/**
	 * @zh 唯一标识
	 */
	id: {
		type: String,
		default: ''
	}
};

export type ProgressProps = ExtractPropTypes<typeof progressProps>;