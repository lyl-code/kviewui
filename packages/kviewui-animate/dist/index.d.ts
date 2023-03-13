import { Ref } from 'vue';

/**
 * 单个动画执行程序
 * @description 单个动画执行程序
 *
 * 参考：[https://weexapp.com/zh/docs/modules/animation.html#transition](https://weexapp.com/zh/docs/modules/animation.html#transition)
 *
 * @param {Ref} ref 将要执行的动画元素
 * @param {KuiNamespace.AnimationTransitionStylesOptions} options 动画参数
 * @param {number} duration 指定动画的持续时间 (单位是毫秒)，默认值是 0，表示瞬间达到动画结束状态。
 * @param {number} delay 指定请求动画操作到执行动画之间的时间间隔 (单位是毫秒)，默认值是 0，表示没有延迟，在请求后立即执行动画。
 * @param {boolean} needLayout 动画执行是否影响布局，默认值是false。
 * @param {string} timingFunction 描述动画执行的速度曲线，用于描述动画已消耗时间和动画完成进度间的映射关系。默认值是 linear，表示动画从开始到结束都拥有同样的速度。下表列出了所有合法的属性:
 * - linear: 动画从头到尾的速度是相同的
 * - ease-in: 动画速度由慢到快
 * - ease-out: 动画速度由快到慢
 * - ease-in-out: 动画先加速到达中间点后减速到达终点
 * - cubic-bezier(x1, y1, x2, y2): 在三次贝塞尔函数中定义变化过程，函数的参数值必须处于 0 到 1 之间。更多关于三次贝塞尔的信息请参阅 [cubic-bezier](http://cubic-bezier.com/?spm=a2c7j.-zh-docs-modules-animation.0.0.209e20b6OR9Q9f) 和 [Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve?spm=a2c7j.-zh-docs-modules-animation.0.0.209e20b6OR9Q9f)。
 * @returns
 */
declare const animationTransition: (ref: Ref, options: KuiNamespace.AnimationTransitionStylesOptions, duration?: number, delay?: number, needLayout?: boolean, timingFunction?: string) => Promise<any>;
/**
 * 旋转动画
 * @description 旋转动画
 * @param {Ref} ref 将要执行的动画元素
 * @param {boolean} loop 是否循环执行
 */
declare const useSpin: (ref: Ref, loop?: boolean) => Promise<void>;
/**
 * 脉搏动画
 * @description 脉搏动画，元素透明度显隐切换
 * @param {Ref} ref 将要执行的动画元素
 * @param {boolean} loop 是否循环执行
 */
declare const usePulse: (ref: Ref, loop?: boolean) => Promise<void>;
/**
 * 上下跳动动画
 * @description 上下跳动动画
 * @param {Ref} ref 将要执行的动画元素
 * @param {boolean} loop 是否循环执行
 */
declare const useBounce: (ref: Ref, loop?: boolean) => Promise<void>;
/**
 * 心跳动画
 * @param {Ref} ref 将要执行的动画元素
 * @param {boolean} loop 是否循环执行
 */
declare const useHeartbeat: (ref: Ref, loop?: boolean) => Promise<void>;
/**
 * 抖动动画
 * @param {Ref} ref 将要执行的动画元素
 * @param {boolean} loop 是否循环执行
 */
declare const useShake: (ref: Ref, loop?: boolean) => Promise<void>;
/**
 * 渐显动画
 * @param {Ref} ref 将要执行的动画元素
 * @param {boolean} loop 是否循环执行
 */
declare const useFadeIn: (ref: Ref, loop?: boolean) => Promise<void>;
/**
 * 渐隐动画
 * @param {Ref} ref 将要执行的动画元素
 * @param {boolean} loop 是否循环执行
 */
declare const useFadeOut: (ref: Ref, loop?: boolean) => Promise<void>;

export { animationTransition, useBounce, useFadeIn, useFadeOut, useHeartbeat, usePulse, useShake, useSpin };
