import { ExtractPropTypes, PropType } from 'vue';
import { globalProps } from '../shared/types';

export type DirectionEnum = 'vertical' | 'horizontal'

export const gridProps = {
    // 引入组件公共props
    ...globalProps,
    /**
	 * @zh 列数
	 */
	columns: {
		type: Number,
		default: 4
	},
	/**
	 * @zh 图标大小
	 */
	iconSize: {
		type: Number,
		default: 30
	},
	/**
	 * @zh 图标颜色
	 */
	iconColor: {
		type: String,
		default: ''
	},
	/**
	 * @zh 宫格内间距
	 */
	gutter: {
		type: Number,
		default: 0
	},
	/**
	 * @zh 内容反向
	 */
	reverse: {
		type: Boolean,
		default: false
	},
	/**
	 * @zh 宫格内容排列方向
	 */
	direction: {
		type: String as PropType<DirectionEnum>,
		default: 'vertical' as DirectionEnum
	},
	/**
	 * @zh 是否显示边框
	 */
	border: {
		type: Boolean,
		default: true
	},
	/**
	 * @zh 是否需要点击反馈
	 */
	clickable: {
		type: Boolean,
		default: false
	}
};

export type GridProps = ExtractPropTypes<typeof gridProps>;