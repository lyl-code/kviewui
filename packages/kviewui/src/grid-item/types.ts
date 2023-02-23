import { ExtractPropTypes } from 'vue';
import { globalProps } from '../shared/types';

export const gridItemProps = {
    // 引入组件公共props
    ...globalProps,
    /**
	 * @zh 文字
	 */
	text: {
		type: String,
		default: ''
	},
	/**
	 * @zh 图标名称
	 */
	icon: {
		type: String,
		default: ''
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
	 * @zh 唯一标识
	 */
	id: {
		type: String,
		default: ''
	},
	/**
	 * @zh 内容外间距
	 */
	contentMargin: {
		type: String,
		default: ''
	},
	/**
	 * @zh 圆角大小
	 */
	radiusSize: {
		type: String,
		default: 'none'
	},
	/**
	 * @zh 背景颜色
	 */
	backgroundColor: {
		type: String,
		default: '#FFFFFF'
	},
	/**
	 * @zh 背景色色阶号
	 */
	backgroundColorLevel: {
		type: [String, Number],
		default: 5
	},
	/**
	 * @zh 是否为正方形栅格
	 */
	square: {
		type: Boolean,
		default: false
	},
	/**
	 * @zh 内间距，设置为正方形栅格时，该参数失效
	 */
	padding: {
		type: String,
		default: '10px 0'
	}
};

export type GridItemProps = ExtractPropTypes<typeof gridItemProps>;