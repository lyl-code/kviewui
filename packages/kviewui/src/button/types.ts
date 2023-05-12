import {
    SpinTypeEnum, 
    ShadowSizeEnum, 
    TypeEnum,
    globalProps
} from '../shared/types';

import { 
	PropType,
    ExtractPropTypes
} from 'vue';

export type SizeEnum = 'large' | 'normal' | 'small' | 'mini';
export type ShapeEnum = 'square' | 'capsule' | 'round';
export type ThrottleEnum = 1 | 2 | 0
export type FormTypeEnum = 'submit' | 'reset' | ''
export type OpenTypeEnum = 'feedback' | 'share' | 'getUserInfo' | 'contact' | 'getPhoneNumber' | 'launchApp' | 'openSetting' | 'getAuthorize' | 'contactShare' | 'lifestyle' | 'openGroupProfile' | ''
export type LangEnum = 'en' | 'zn_CN' | 'zn_TW'

export const buttonProps = {
    ...globalProps,
    /**
	 * 按钮主题类型
	 * + primary - 主要按钮
	 * + info - 信息按钮
	 * + success - 成功按钮
	 * + warning - 警告按钮
	 * + danger - 危险按钮
	 */
	type: {
		type: String as PropType<TypeEnum>,
		default: '' as TypeEnum
	},
    /**
     * 按钮内容
     */
    value: {
        type: String,
        default: ''
    },
	/**
	 * 通栏按钮
	 */
	full: {
		type: Boolean,
		default: false
	},
	/**
	 * 垂直方向外间距
	 */
	marginY: {
		type: Number,
		default: 0
	},
	/**
	 * 按钮大小
	 */
	size: {
		type: String as PropType<SizeEnum>,
		default: 'normal' as SizeEnum
	},
	/**
	 * 按钮形状
	 */
	shape: {
		type: String as PropType<ShapeEnum>,
		default: 'capsule' as ShapeEnum
	},
	/**
	 * 圆角大小
	 */
	radius: {
		type: Number,
		default: 5
	},
	/**
	 * 是否是文本按钮
	 */
	text: {
		type: Boolean,
		default: false
	},
	/**
	 * 是否带外边框
	 */
	outline: {
		type: Boolean,
		default: false
	},
	/**
	 * 背景色
	 */
	backgroundColor: {
		type: String,
		default: ''
	},
	/**
	 * 主题背景渐变
	 */
	gradient: {
		type: Boolean,
		default: true
	},
	/**
	 * 文本色
	 */
	textColor: {
		type: String,
		default: ''
	},
	/**
	 * 边框色
	 */
	borderColor: {
		type: String,
		default: ''
	},
	/**
	 * 是否使用水波纹
	 */
	ripple: {
		type: Boolean,
		default: false
	},
	/**
	 * 是否禁用
	 */
	disabled: {
		type: Boolean,
		default: false
	},
	/**
	 * 加载状态
	 */
	loading: {
		type: Boolean,
		default: false
	},
	/**
	 * 加载动画类型
	 */
	loadingType: {
		type: String as PropType<SpinTypeEnum>,
		default: 'square-dot' as SpinTypeEnum
	},
	/**
	 * 图标名称
	 */
	icon: {
		type: String,
		default: ''
	},
	/**
	 * 块级按钮
	 */
	block: {
		type: Boolean,
		default: false
	},
	/**
	 * 按钮阴影
	 */
	shadow: {
		type: Boolean,
		default: false
	},
	/**
	 * 阴影大小
	 */
	shadowSize: {
		type: String as PropType<ShadowSizeEnum>,
		default: '' as ShadowSizeEnum
	},
	/**
	 * 防抖节流 0 关闭 1 节流 2 防抖
	 */
	throttle: {
		type: Number as PropType<ThrottleEnum>,
		default: 0 as ThrottleEnum
	},
	/**
	 * 防抖节流延迟毫秒数
	 */
	throttleWait: {
		type: Number,
		default: 500
	},
	/**
	 * @desc 下列属性同uniapp官方组件属性效果看齐
	 * form-type
	 * open-type
	 * hover-class
	 * hover-start-time
	 * hover-stay-time
	 * app-parameter
	 * hover-stop-propagation
	 * lang
	 * session-from
	 * send-message-title
	 * send-message-path	
	 * send-message-img
	 * show-message-card
	 * @url https://uniapp.dcloud.net.cn/component/button.html
	 */
	
	/**
	 * 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
	 */
	formType: {
		type: String as PropType<FormTypeEnum>,
		default: '' as FormTypeEnum
	},
	/**
	 * 开放能力
	 * @url https://uniapp.dcloud.net.cn/component/button.html
	 */
	openType: {
		type: String as PropType<OpenTypeEnum>,
		default: '' as OpenTypeEnum
	},
	/**
	 * 指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果
	 */
	hoverClass: {
		type: String,
		default: 'button-hover'
	},
	/**
	 * 按住后多久出现点击态，单位毫秒
	 */
	hoverStartTime: {
		type: Number,
		default: 20
	},
	/**
	 * 手指松开后点击态保留时间，单位毫秒
	 */
	hoverStayTime: {
		type: Number,
		default: 70
	},
	/**
	 * 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
	 */
	appParameter: {
		type: String,
		default: ''
	},
	/**
	 * 指定是否阻止本节点的祖先节点出现点击态
	 */
	hoverStopPropagation: {
		type: Boolean,
		default: false
	},
	/**
	 * 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。
	 */
	lang: {
		type: String as PropType<LangEnum>,
		default: 'en' as  LangEnum
	},
	/**
	 * 会话来源，open-type="contact"时有效
	 */
	sessionFrom: {
		type: String,
		default: ''
	},
	/**
	 * 会话内消息卡片标题，open-type="contact"时有效
	 */
	sendMessageTitle: {
		type: String,
		default: ''
	},
	/**
	 * 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
	 */
	sendMessagePath: {
		type: String,
		default: ''
	},
	/**
	 * 会话内消息卡片图片，open-type="contact"时有效
	 */
	sendMessageImg: {
		type: String,
		default: ''
	},
	/**
	 * 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效
	 */
	showMessageCard: {
		type: Boolean,
		default: false
	}
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;