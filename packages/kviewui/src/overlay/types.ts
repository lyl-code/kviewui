import { RadiusSizeEnum, globalProps } from '../shared/types';

import { ExtractPropTypes, PropType } from 'vue';
import { theme } from '@kviewui/theme';

export const overlayProps = {
    // 引入组件公共props
    ...globalProps,
    /**
	 * 层级
	 */
	zIndex: {
		type: Number,
		default: 99
	},
	// /**
	//  * 填充内容
	//  */
	// vnode: {
	// 	type: String,
	// 	default: ''
	// },
	/**
	 * 填充内容是否居中显示
	 */
	vnodeCenter: {
		type: Boolean,
		default: false
	},
	/**
	 * 圆角大小
	 */
	radiusSize: {
		type: String as PropType<RadiusSizeEnum>,
		default: 'none' as RadiusSizeEnum
	},
	/**
	 * 磨砂玻璃效果
	 */
	blur: {
		type: Boolean,
		default: false
	},
	/**
	 * 是否显示
	 */
	visible: {
		type: Boolean,
		default: false
	},
	/**
	 * 单击遮罩是否关闭
	 */
	closeOnClickOverlay: {
		type: Boolean,
		default: true
	},
	/**
	 * 遮罩透明度
	 */
	opacity: {
		type: Number,
		default: theme.size.shadeOpenness
	},
	/**
	 * 动画时长，单位ms
	 */
	duration: {
		type: Number,
		default: 300
	},
    /**
     * 是否需要包裹内容
     */
    isWrapper: {
        type: Boolean,
        default: false
    },
    /**
     * 页面导航高度，H5有效
     */
    headerHeight: {
        type: Number,
        default: 44
    },
    /**
     * 是否锁定背景滚动
     */
    lockScroll: {
        type: Boolean,
        default: true
    }
};

export type OverlayProps = ExtractPropTypes<typeof overlayProps>;