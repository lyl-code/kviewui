import { ExtractPropTypes } from 'vue';
import { globalProps } from '../shared/types';

export const colProps = {
    // 引入组件公共props
    ...globalProps,
    /**
	 * @zh 元素宽度 (共分为24等份)
	 */
	span: {
		type: Number,
		default: 24
	},
	/**
	 * @zh 元素偏移
	 */
	offset: {
		type: Number,
		default: 0
	},
	/**
	 * @zh 是否关闭row组件的gutter值，一般用于处理特殊col组件，比如屏幕右边的不需要gutter
	 */
	closeGutter: {
		type: Boolean,
		default: false
	}
}

export type ColProps = ExtractPropTypes<typeof colProps>;