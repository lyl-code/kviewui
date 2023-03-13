"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/useDebounce/index.ts
function useDebounce(fn, delay, immediate = false) {
  let timer = null;
  let isInvokeImmediate = false;
  const _debounce = function(...args) {
    return new Promise((resolve, _) => {
      if (timer)
        clearTimeout(timer);
      if (immediate && !isInvokeImmediate) {
        const callback = fn.apply(null, args);
        resolve(callback);
        isInvokeImmediate = true;
      } else {
        timer = setTimeout(() => {
          const callback = fn.apply(this, args);
          resolve(callback);
          isInvokeImmediate = true;
        }, delay);
      }
    });
  };
  const _cancel = function() {
    if (timer)
      clearTimeout(timer);
    timer = null;
    isInvokeImmediate = false;
  };
  const _flush = function(...args) {
    _cancel();
    return new Promise((resolve, _) => {
      const callback = fn.apply(this, args);
      resolve(callback);
    });
  };
  _debounce.cancel = _cancel;
  _debounce.flush = _flush;
  return _debounce;
}

// src/useThrottle/index.ts
function useThrottle(fn, interval, options = {
  leading: true,
  trailing: false
}) {
  const { leading, trailing } = options;
  let lastTime = 0;
  let timer = null;
  const _throttle = function(...args) {
    return new Promise((resolve, _) => {
      const nowTime = (/* @__PURE__ */ new Date()).getTime();
      if (!lastTime && !leading)
        lastTime = nowTime;
      const remainTime = interval - (nowTime - lastTime);
      if (remainTime <= 0) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        const callback = fn.apply(this, args);
        resolve(callback);
        lastTime = nowTime;
        return;
      }
      if (!trailing && !timer) {
        timer = setTimeout(() => {
          timer = null;
          lastTime = !leading ? 0 : (/* @__PURE__ */ new Date()).getTime();
          const callback = fn.apply(this, args);
          resolve(callback);
        }, remainTime);
      }
    });
  };
  const _cancel = function() {
    if (timer)
      clearTimeout(timer);
    timer = null;
    lastTime = 0;
  };
  const _flush = function(...args) {
    _cancel();
    return new Promise((resolve, _) => {
      const callback = fn.apply(this, args);
      resolve(callback);
    });
  };
  _throttle.cancel = _cancel;
  _throttle.flush = _flush;
  return _throttle;
}

// src/useTaskReduce/index.ts
var useTaskReduce = (tasks) => {
  return tasks.reduce((prev, next) => prev.then(() => next()), Promise.resolve());
};




exports.useDebounce = useDebounce; exports.useTaskReduce = useTaskReduce; exports.useThrottle = useThrottle;
