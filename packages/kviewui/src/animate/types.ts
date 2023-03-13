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
    }
};

export type AnimateProps = ExtractPropTypes<typeof animateProps>;