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
export function useThrottle(fn: Function, interval: number, options: {
    leading?: boolean;
    trailing?: boolean;
} = {
        leading: true,
        trailing: false
    }) {
    // 记录上一次的开始时间
    const { leading, trailing } = options;
    let lastTime = 0;
    // 定义定时器，实现最后是否执行函数
    let timer: any = null;

    // 节流执行函数
    const _throttle = function (this: unknown, ...args: any[]) {
        return new Promise((resolve, _) => {
            // 获取当前时间触发的时间
            const nowTime = new Date().getTime();

            // 第一次不触发函数
            if (!lastTime && !leading) lastTime = nowTime;

            // 计算函数执行的剩余时间
            const remainTime = interval - (nowTime - lastTime);

            if (remainTime <= 0) {
                if (timer) {
                    clearTimeout(timer);
                    timer = null;
                }
                const callback = fn.apply(this, args);
                resolve(callback);
                // 保留上次触发的时间
                lastTime = nowTime;
                return;
            }

            // 最后不执行函数，通过定时器实现
            if (!trailing && !timer) {
                timer = setTimeout(() => {
                    timer = null;
                    lastTime = !leading ? 0 : new Date().getTime();
                    const callback = fn.apply(this, args);
                    resolve(callback);
                }, remainTime);
            }
        });
    }

    // 取消功能
    const _cancel = function() {
        if (timer) clearTimeout(timer);
        timer = null;
        lastTime = 0;
    }

    // 立即执行
    const _flush = function(this: unknown, ...args: any[]) {
        _cancel();
        return new Promise((resolve, _) => {
            const callback = fn.apply(this, args);
            resolve(callback);
        });
    }

    _throttle.cancel = _cancel;
    _throttle.flush = _flush;

    return _throttle;
}