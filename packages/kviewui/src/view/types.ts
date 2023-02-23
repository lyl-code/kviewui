import { ExtractPropTypes } from 'vue';
import { globalProps } from '../shared/types';

export const viewProps = {
    // 引入组件公共props
    ...globalProps,
    /**
     * @zh 指定按下去的样式类。当 hover-class="none" 时，没有点击态效果
     * @see [参考文档：https://uniapp.dcloud.net.cn/component/view.html](https://uniapp.dcloud.net.cn/component/view.html)
     */
    hoverClass: {
        type: String,
        default: 'none'
    },
    /**
     * @zh 指定是否阻止本节点的祖先节点出现点击态，App、H5、支付宝小程序、百度小程序不支持（支付宝小程序、百度小程序文档中都有此属性，实测未支持）
     * @see [参考文档：https://uniapp.dcloud.net.cn/component/view.html](https://uniapp.dcloud.net.cn/component/view.html)
     */
    hoverStopPropagation: {
        type: Boolean,
        default: false
    },
    /**
     * @zh 按住后多久出现点击态，单位毫秒
     * @see [参考文档：https://uniapp.dcloud.net.cn/component/view.html](https://uniapp.dcloud.net.cn/component/view.html)
     */
    hoverStartTime: {
        type: Number,
        default: 50
    },
    /**
     * @zh 手指松开后点击态保留时间，单位毫秒
     * @see [参考文档：https://uniapp.dcloud.net.cn/component/view.html](https://uniapp.dcloud.net.cn/component/view.html)
     */
    hoverStayTime: {
        type: Number,
        default: 400
    },
    // 自定义传参
    options: {
        type: [Object, Number, String, Array],
        default: ''
    }
};

export type ViewProps = ExtractPropTypes<typeof viewProps>;