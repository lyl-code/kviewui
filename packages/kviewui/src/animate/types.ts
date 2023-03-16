import { 
	PropType,
    ExtractPropTypes
} from 'vue';

import {
    globalProps,
    AnimateTypeEnum
} from '../shared/types';

export const animateProps = {
    ...globalProps,
    /**
     * 动画类型
     */
    name: {
        type: String as PropType<KuiNamespace.AnimateTypeEnum>,
        default: 'none' as KuiNamespace.AnimateTypeEnum
    },
    /**
     * 是否循环执行
     */
    loop: {
        type: Boolean,
        default: false
    },
    /**
     * 开始动画延迟时间
     */
    delay: {
        type: Number,
        default: 0
    },
    /**
     * 动画执行时间
     */
    duration: {
        type: Number,
        default: 600
    },
    /**
     * 动画执行时间是否自动设置，组件库将根据不同的动画类型设置默认的动画执行时间，app-nvue有效
     */
    durationAuto: {
        type: Boolean,
        default: true
    }
};

export type AnimateProps = ExtractPropTypes<typeof animateProps>;