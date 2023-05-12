import { globalProps } from "../shared/types";
import { overlayProps } from '../overlay/types';
import { ExtractPropTypes, PropType } from "vue";

export const popupProps = {
    // 引入组件公共props
    ...globalProps,
    // 引入overlay组件props
    ...overlayProps,
    /**
     * 是否显示
     */
    visible: {
        type: Boolean,
        default: false
    },
    /**
     * 显示和隐藏时的动画时间
     */
    duration: {
        type: Number,
        default: 300
    },
    /**
     * 导航栏样式
     * + default 原生导航
     * + custom 自定义导航
     */
    navigationStyle: {
        type: String as PropType<'default' | 'custom'>,
        default: 'default'
    },
    /**
     * 弹出位置
     * + center 居中弹出
     * + top 顶部弹出
     * + right 右侧弹出
     * + bottom 底部弹出
     * + left 左侧弹出
     */
    position: {
        type: String as PropType<'center' | 'top' | 'right' | 'bottom' | 'left'>,
        default: 'center'
    }
};

export type PopupProps = ExtractPropTypes<typeof popupProps>;