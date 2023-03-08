import { ExtractPropTypes } from 'vue';
import { globalProps } from '../shared/types';

export const collapseItemProps = {
    // 引入组件公共props
    ...globalProps,
    // /**
	//  * 是否展开
	//  */
	// open: {
	// 	type: Boolean,
	// 	default: false
	// },
    /**
     * 左侧标题
     */
    title: {
        type: String,
        default: ''
    },
    /**
     * 自定义折叠图标
     */
    icon: {
        type: String,
        default: 'pulldown'
    },
	/**
	 * 是否开启动画
	 */
	animation: {
		type: Boolean,
		default: true
	},
	/**
	 * 是否禁用
	 */
	disabled: {
		type: Boolean,
		default: false
	},
	/**
	 * 唯一标识符
	 */
	name: {
		type: String,
		default: ''
	},
	/**
	 * 背景色
	 */
	backgroundColor: {
		type: String,
		default: ''
	},
	/**
	 * 标题文本色
	 */
	color: {
		type: String,
		default: ''
	},
	/**
	 * 底框颜色
	 */
	borderColor: {
		type: String,
		default: ''
	},
	/**
	 * 内容背景色
	 */
	wrapBackgroundColor: {
		type: String,
		default: ''
	},
	/**
	 * 是否开启点击态
	 */
	activeTitleTapedState: {
		type: Boolean,
		default: true
	}
};

export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>;