import { globalProps, JustifyEnum, AlignEnum } from '../shared/types';
import { ExtractPropTypes, PropType } from 'vue';

export type WrapEnum = 'wrap' | 'nowrap' | 'wrap-reverse';
export type TypeEnum = 'flex';

export interface RowProvideOptions {
    marginRight: any,
    width?: number
}

export const rowProps = {
    // 引入组件公共props
    ...globalProps,
    /**
	 * @zh 子元素布局方式
	 */
	type: {
		type: String as PropType<TypeEnum>,
		default: 'flex' as TypeEnum
	},
	/**
	 * @zh 子元素间距
	 */
	gutter: {
		type: Number,
		default: 0
	},
	/**
	 * @zh Flex 子元素主轴对齐方式
	 */
	justify: {
		type: String as PropType<JustifyEnum>,
		default: 'start' as JustifyEnum
	},
	/**
	 * @zh Flex 子元素交叉轴对齐方式
	 */
	align: {
		type: String as PropType<AlignEnum>,
		default: 'start' as AlignEnum
	},
	/**
	 * @zh 子元素换行方式
	 */
	wrap: {
		type: String as PropType<WrapEnum>,
		default: 'wrap' as WrapEnum
	},
    // #ifdef APP-NVUE
    /**
     * @zh 宽度，nvue中不支持百分比宽度，所以需要手动设置宽度
     */
    width: {
        type: Number,
        default: 698
    }
    // #endif
}

export type RowProps = ExtractPropTypes<typeof rowProps>;