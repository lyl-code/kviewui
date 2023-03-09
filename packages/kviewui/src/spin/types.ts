import { PropType, ExtractPropTypes, Prop } from 'vue';
import { SpinTypeEnum, ThemeEnum, globalProps } from '../shared/types';

export type SizeEnum = 'sm' | 'base' | 'lg' | 'xl';

export const spinProps = {
    // 引入组件公共props
    ...globalProps,
    /**
	 * 动画类型
	 */
	type: {
		type: String as PropType<SpinTypeEnum>,
		default: 'circle-dot' as SpinTypeEnum
	},
	/**
	 * 大小
	 */
	size: {
		type: String as PropType<SizeEnum>,
		default: 'base' as SizeEnum
	},
	/**
	 * 背景色
	 */
	backgroundColor: {
		type: String,
		default: 'grey'
	},
    /**
     * 背景色色阶
     */
    backgroundColorLevel: {
        type: Number as PropType<KuiNamespace.ColorLevel>,
        default: 5
    },
	/**
	 * 动画速度
	 */
	speed: {
		type: String as PropType<SizeEnum>,
		default: 'base' as SizeEnum
	},
	/**
	 * 缩放系数
	 */
	scale: {
		type: Number,
		default: 0
	},
	/**
	 * 宽度
	 */
	width: {
		type: Number,
		default: 80
	},
	/**
	 * 高度
	 */
	height: {
		type: Number,
		default: 80
	}
};

export type SpinProps = ExtractPropTypes<typeof spinProps>;