import { ExtractPropTypes, PropType } from 'vue';
import { globalProps } from '../shared/types';

export const sectionProps = {
    // 引入组件公共props
    ...globalProps,
    /**
     * 主标题
     */
    title: {
        type: String,
        default: ''
    },
    /**
     * 主标题字体大小
     */
    titleFontSize: {
        type: [Number, String],
        default: '16px'
    },
    /**
     * 主标题颜色
     */
    titleColor: {
        type: String,
        default: 'black'
    },
    /**
     * 主标题颜色色阶
     */
    titleColorLevel: {
        type: Number as PropType<KuiNamespace.ColorLevel>,
        default: 5
    },
    /**
     * 副标题
     */
    subTitle: {
        type: String,
        default: ''
    },
    /**
     * 副标题字体大小
     */
    subTitleFontSize: {
        type: String,
        default: '12px'
    },
    /**
     * 副标题颜色
     */
    subTitleColor: {
        type: String,
        default: 'grey'
    },
    /**
     * 副标题颜色色阶
     */
    subTitleColorLevel: {
        type: Number as PropType<KuiNamespace.ColorLevel>,
        default: 5
    },
    /**
     * 
     */
    padding: {
        type: [Boolean, String],
        default: '14px'  
    }
};

export type SectionProps = ExtractPropTypes<typeof sectionProps>;