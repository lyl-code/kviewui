import { ExtractPropTypes, PropType } from "vue";
import { globalProps } from "../shared/types";

export type PositionEnum = 'top' | 'bottom';

export const stickyProps = {
    // 引入组件公共props
    ...globalProps,
    /**
	 * @zh 吸顶位置
	 */
	position: {
		type: String as PropType<PositionEnum>,
		default: 'top' as PositionEnum
	},
	/**
	 * @zh 吸顶距离
	 */
	top: {
		type: Number,
		default: 0
	},
	/**
	 * @zh 吸底距离
	 */
	bottom: {
		type: Number,
		default: 0
	},
	/**
	 * @zh 吸顶层级
	 */
	zIndex: {
		type: Number,
		default: 1000
	},
	/**
	 * @zh 指定容器的HTML标签
	 */
	container: {
		type: Object as PropType<Element>
	},
	/**
	 * @zh 指定容器的ID
	 */
	containerId: {
		type: String,
		default: ''
	},
	/**
	 * @zh
	 */
	proxy: {
		type: Object
	},
    navigationStyle: {
        type: String as PropType<NavigationStyle>,
        default: 'default' as NavigationStyle
    }
};

export type StickyProps = ExtractPropTypes<typeof stickyProps>;
export type NavigationStyle = 'default' | 'custom';