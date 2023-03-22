import { PropType, ExtractPropTypes } from 'vue';
import { DirectionEnum, globalProps } from '../shared/types';

export type InsetDirectionEnum = 'start' | 'end'
export type TextPositionEnum = 'left' | 'center' | 'right'

export const dividerProps = {
    // 引入组件公共props
    ...globalProps,
    /**
	 * @zh 是否是虚线
	 */
	dashed: {
		type: Boolean,
		default: false
	},
	/**
	 * @zh 方向
	 */
	direction: {
		type: String as PropType<DirectionEnum>,
		default: 'row' as DirectionEnum
	},
	/**
	 * @zh 缩进
	 */
	inset: {
		type: String,
		default: ''
	},
	/**
	 * @zh 缩进方向
	 */
	insetDirection: {
		type: String as PropType<InsetDirectionEnum>,
		default: 'start' as InsetDirectionEnum
	},
	/**
	 * @zh margin
	 */
	margin: {
		type: String,
		default: ''
	},
	/**
	 * @zh 最小像素
	 */
	minPx: {
		type: Boolean,
		default: false
	},
	/**
	 * @zh 是否启用内容描述形式
	 */
	textDescribe: {
		type: Boolean,
		default: false
	},
	/**
	 * @zh 描述文本位置
	 */
	textPosition: {
		type: String as PropType<TextPositionEnum>,
		default: 'center' as TextPositionEnum
	},
	/**
	 * @zh 分割线颜色，支持内置颜色，自定义颜色和内置主题
	 */
	color: {
		type: String,
		default: 'grey'
	},
	/**
	 * @zh 分割线颜色色阶
	 */
	colorLevel: {
		type: Number as PropType<KuiNamespace.ColorLevel>,
		default: 5
	},
	/**
	 * @zh 宽度，app-nvue缩进场景和内容描述开启时需要宽度计算
	 */
	width: {
		type: Number,
		default: 0
	}
};

export type DividerProps = ExtractPropTypes<typeof dividerProps>;