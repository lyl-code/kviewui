import { Plugin, defineComponent, Ref } from 'vue';

declare type SFCWithInstall<T> = T & Plugin;
declare const withInstall: <T>(comp: T) => SFCWithInstall<T>;

/**
 * 节流hook
 * @param {(..._args: A) => R} func 需要执行的函数
 * @param {number} wait 延迟时间
 * @param {boolean} isTimer 是否开启定时器响应事件结束后的回调
 */
declare function useThrottle<A extends Array<any>, R = void>(func: (..._args: A) => R, wait: number, isTimer?: boolean): void;

/**
 * 创建组件
 * @param name
 * @returns
 */
declare const createComponent: (name: string) => {
    componentName: string;
    create: typeof defineComponent;
};

/**
 * @zh 获取单位
 * @param e
 */
declare const getUnitByUnit: (e: any) => String;
/**
 * @zh 获取尺寸单位数字
 * @param e 尺寸单位
 * @return
 */
declare const getNumberByUnit: (e: any) => any;

/**
 * @zh 获取图片信息
 * @param {String} src 图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径
 * @return
 */
declare const getImageInfo: (src: string) => any;
/**
* @zh 从本地file或者blob对象创建url
* @param {Blob|File} file
* @@return {string}
*/
declare const fileToUrl: (file: File) => string;
/**
* @zh 图片压缩
* @param {File} file
* @param {Number} quality 压缩质量
*/
declare const compress: (file: KuiNamespace.ImageFile, quality?: number) => Promise<KuiNamespace.ImageFile>;
/**
 * @zh 校验链接是否为图片格式
 * @param {string} url 文件地址
 * @return {boolean}
 */
declare const isImage: (url: string) => boolean;

/**
 * @zh 随机生成元素ID
 * @param {string} prefix 前缀
 * @return {string} elId 元素ID
 */
declare const getElId: (prefix?: string) => string;
/**
 * @zh 获取节点的大小及相对于视图窗口的位置信息
 * @param {Element | Window | any} eleRef 节点标签的ref
 * @param {String} eleId 节点的id，非H5环境下需要
 * @param {any} proxy 组件实例，非H5环境下需要
 * @return
 * 	width 节点宽度 number
 * 	height 节点高度 number
 * 	top 节点上边界坐标
 * 	left 节点左边界坐标
 * 	right 节点右边界坐标
 * 	bottom 节点下边界坐标
 */
declare const useKviewuiRect: (eleRef: (Element | Window | any) | Ref<Element | Window | any>, eleId: string | undefined, proxy: any) => any;

declare const useProvide: (config?: {}) => void;

declare const useConfig: (config?: {}) => void;
declare const useInject: () => any;

/**
 * 判断是否为数字
 * @param {any} e 校验内容
 * @returns {boolean}
 */
declare const isNumber: (e: any) => boolean;
/**
 * 判断是否为字符串
 * @param {any} e 校验内容
 * @returns {boolean}
 */
declare const isString: (e: any) => boolean;
/**
 * 判断是否为对象
 * @param {any} e 校验内容
 * @returns {boolean}
 */
declare const isObject: (e: any) => boolean;
/**
 * 判断是否为布尔类型
 * @param {any} e 校验内容
 * @returns {boolean}
 */
declare const isBoolean: (e: any) => boolean;
/**
 * 判断是否为数组，不支持ES5以前的环境
 * @param {any} e 校验内容
 * @returns {boolean}
 */
declare const isArray: (e: any) => boolean;

/**
 * 获取字体大小
 * @param {string | number} size
 * @returns {string}
 */
declare const getFontSize: (size: string | number) => string;
/**
 * 获取长度单位
 * @description 一般用于设置字体大小，宽度/高度，内外间距场景
 * @param {string | number} size 尺寸单位
 * @returns {string}
 */
declare const getUnitSize: (size: string | number) => string;

/**
 * @zh 显示消息提示框
 * @param {string} title 提示的内容，长度与icon取值有关
 * @param icon
 * @see [原API文档](https://uniapp.dcloud.net.cn/api/ui/prompt.html#showtoast)
 */
declare const showToast: (title: string, icon?: 'success' | 'loading' | 'error' | 'none') => void;
/**
 * @zh 隐藏消息提示框
 * @see [原API文档](https://uniapp.dcloud.net.cn/api/ui/prompt.html#hideToast)
 */
declare const hideToast: () => void;
/**
 * @zh 显示loading提示框
 * @param {string} title 提示的文字内容，显示在loading的下方
 * @see [原API文档](https://uniapp.dcloud.net.cn/api/ui/prompt.html#showloading)
 */
declare const showLoading: (title: string) => void;
/**
 * @zh 隐藏loading提示框
 * @see [原API文档](https://uniapp.dcloud.net.cn/api/ui/prompt.html#hideloading)
 */
declare const hideLoading: () => void;
/**
 * @zh 显示模态弹窗
 *
 * 参考：[原API文档](https://uniapp.dcloud.net.cn/api/ui/prompt.html#showModal)
 *
 * @param {string} title 提示标题
 * @param {string} content 提示内容
 * @param {boolean} showCancel 是否显示取消按钮
 * @param {string} cancelText 取消按钮文本
 * @param {string} confirmText 确定按钮文本
 * @param {string} cancelColor 取消按钮文字颜色
 * @param {string} confirmColor 确定按钮文字颜色
 * @param {boolean} editable 是否显示输入框
 * @param {Function} success 成功回调
 * @param {Function} fail 失败回调
 * @param {Function} complete 完成回调
 */
declare const showModal: (title?: string, content?: string, showCancel?: boolean, cancelText?: string, confirmText?: string, cancelColor?: string, confirmColor?: string, editable?: boolean, success?: any, fail?: any, complete?: any) => void;

/**
 * 组件库内置主题色
 * @see [主题色文档](https://cn.kviewui.com/guide/palette)，[设计变量文档](https://cn.kviewui.com/guide/token)
 */
declare const themeColors: string[];
/**
 * 判断是否是主题色变量
 * @param {string} color 颜色变量名
 * @returns {boolean}
 */
declare const isThemeColor: (color: string) => boolean;

/**
 * 设置剪贴板内容
 * @description 设置剪贴板内容
 * 参考：[https://uniapp.dcloud.net.cn/api/system/clipboard.html#setclipboarddata](https://uniapp.dcloud.net.cn/api/system/clipboard.html#setclipboarddata)
 * @property {string} data 需要设置的内容
 * @property {boolean} showToast 是否弹出提示
 * @returns {Promise}
 */
declare const setCliboardData: (data: string, showToast?: boolean) => Promise<any>;

export { SFCWithInstall, compress, createComponent, fileToUrl, getElId, getFontSize, getImageInfo, getNumberByUnit, getUnitByUnit, getUnitSize, hideLoading, hideToast, isArray, isBoolean, isImage, isNumber, isObject, isString, isThemeColor, setCliboardData, showLoading, showModal, showToast, themeColors, useConfig, useInject, useKviewuiRect, useProvide, useThrottle, withInstall };
