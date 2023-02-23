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
export function useDebounce(fn: Function, delay: number, immediate: boolean = false) {
    // 定义定时器，保存上一次的定时器
    let timer: any = null;
    let isInvokeImmediate = false; // 是否为立即执行状态

    // 防抖执行函数
    const _debounce = function (this: unknown, ...args: any[]) {
        return new Promise((resolve, _) => {
            // 取消上一次的定时器
            if (timer) clearTimeout(timer);

            // 判断是否需要立即执行
            if (immediate && !isInvokeImmediate) {
                const callback = fn.apply(null, args);
                resolve(callback);
                isInvokeImmediate = true;
            } else {
                // 延迟执行传入的函数
                timer = setTimeout(() => {
                    const callback = fn.apply(this, args);
                    resolve(callback);
                    isInvokeImmediate = true;
                }, delay);
            }
        });
    }

    // 取消功能
    const _cancel = function () {
        if (timer) clearTimeout(timer);
        timer = null;
        isInvokeImmediate = false;
    }

    // 立即执行功能
    const _flush = function (this: unknown, ...args: any[]) {
        _cancel();
        return new Promise((resolve, _) => {
            const callback = fn.apply(this, args);
            resolve(callback);
        });
    }

    _debounce.cancel = _cancel;
    _debounce.flush = _flush;

    return _debounce;
}