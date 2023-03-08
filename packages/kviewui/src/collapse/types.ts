import { ExtractPropTypes } from 'vue';
import { globalProps } from '../shared/types';

export const collapseProps = {
    // 引入组件公共props
    ...globalProps,
    /**
     * 当前展开面板的标识
     */
    modelValue: {
        type: [Number, String, Array<number|string>],
        default: ''
    },
    /**
     * 是否开启手风琴效果
     */
    accordion: {
        type: Boolean,
        default: false
    }
};

export type CollapseProps = ExtractPropTypes<typeof collapseProps>;