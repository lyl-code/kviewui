/**
 * 防抖函数
 * @description 多次执行时只会执行最后一次
 *
 * 使用场景
 * + 输入框中频繁输入内容
 * + 频繁点击按钮
 * + 监听浏览器或者页面的滚动事件
 * + 用户缩放浏览器的resize监听等
 * @param {Function} fn 需要执行的函数
 * @param {number} delay 函数延迟执行的时间，单位ms
 * @param {boolean} immediate 是否立即执行函数，即第一次不会有延迟
 * @event cancel 取消延迟
 * @event flush 立即执行函数
 * @example
 *  ```js
 *  import { useDebounce } from '@kviewui/use';
 *  let counter = 0;
 *  const fn = function(event) {
 *      console.log(`触发第${++counter}次`);
 *      // 返回值示例
 *      return '我是fn返回值';
 *  }
 *
 *  // 防抖处理基本使用
 *  const debounceFn = useDebounce(fn, 2000, false);
 *
 *  // 取消功能
 *  debounceFn.cancel();
 *
 *  // 立即执行函数
 *  debounceFn.flush().then(res => {
 *      // 接收fn函数返回值示例
 *      console.log(res);
 *  })
 * ```
 * @returns
 */
declare function useDebounce(fn: Function, delay: number, immediate?: boolean): {
    (this: unknown, ...args: any[]): Promise<unknown>;
    cancel: () => void;
    flush: (this: unknown, ...args: any[]) => Promise<unknown>;
};

/**
 * 节流函数
 * @description 多次执行时会每隔一段时间再执行
 * @param fn 被执行的函数
 * @param interval 间隔时间，单位ms
 * @param options 执行条件，对象格式，包含 `leading` 参数和 `trailing` 参数
 * - leading 第一次是否触发函数执行，有效值为 `true` 和 `false`
 * - trailing 结束时是否触发函数执行，有效值为 `true` 和 `false`
 * @example
 *  ```js
 *  let counter = 0;
 *  const fn = function(event) {
 *      console.log(`触发第${++counter}次`);
 *      // 返回值示例
 *      return '我是fn返回值';
 *  }
 *
 *  // 节流处理基本使用
 *  const throttleFn = useThrottle(fn, 2000, {
 *      leading: false,
 *      trailing: true
 *  });
 *
 *  // 取消功能
 *  throttleFn.cancel();
 *
 *  // 立即执行函数
 *  throttleFn.flush().then(res => {
 *      // 接收fn函数返回值示例
 *      console.log(res);
 *  })
 * ```
 * @returns
 */
declare function useThrottle(fn: Function, interval: number, options?: {
    leading?: boolean;
    trailing?: boolean;
}): {
    (this: unknown, ...args: any[]): Promise<unknown>;
    cancel: () => void;
    flush: (this: unknown, ...args: any[]) => Promise<unknown>;
};

/**
 * 多个promise顺序执行队列
 * @param {Array<() => Promise<any>>} tasks 待执行的promise任务数组
 * @returns
 */
declare const useTaskReduce: (tasks: Array<() => Promise<any>>) => Promise<any>;

export { useDebounce, useTaskReduce, useThrottle };
