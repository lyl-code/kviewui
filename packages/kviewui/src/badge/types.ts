import { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import { globalProps } from '../shared/types';

export type PositionEnum = 'right-top' | 'right-bottom' | 'left-top' | 'left-bottom';

export const badgeProps = {
    // 引入组件公共props
    ...globalProps,
    /**
	 * @zh 徽标类型
	 */
	type: {
		type: String as PropType<KuiNamespace.ThemeToken>,
		default: '' as KuiNamespace.ThemeToken
	},
	/**
	 * @zh 原点徽标
	 */
	dot: {
		type: Boolean,
		default: false
	},
	/**
	 * @zh 徽标内容
	 */
	value: {
		type: String,
		default: '0'
	},
	/**
	 * @zh 最大值
	 */
	max: {
		type: Number,
		default: 0
	},
	/**
	 * @zh 徽标颜色
	 */
	color: {
		type: String,
		default: ''
	},
	/**
	 * @zh 徽标显示状态
	 */
	show: {
		type: Boolean,
		default: true
	},
	/**
	 * @zh 徽标图标
	 */
	icon: {
		type: String,
		default: ''
	},
    /**
     * @zh 图标大小
     */
    iconSize: {
        type: [String, Number],
        default: 10
    },
	/**
	 * @zh 徽标位置
	 */
	position: {
		type: String as PropType<PositionEnum>,
		default: '' as PositionEnum
	},
	/**
	 * @zh 渐变主题徽标
	 */
	gradient: {
		type: Boolean,
		default: false
	},
	/**
	 * @zh 圆点大小，dot开启有效
	 */
	dotSize: {
		type: [String, Number] as PropType<CSSProperties['width'] | CSSProperties['height']>,
		default: 8
	},
	/**
	 * @zh 徽标字体大小，非圆点徽标有效
	 */
	fontSize: {
		type: [String, Number] as PropType<CSSProperties['fontSize']>,
		default: '14px'
	}
}

export type BadgeProps = ExtractPropTypes<typeof badgeProps>;

