"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/weex-animation/index.ts
var _use = require('@kviewui/use');
var animation = uni.requireNativePlugin("animation");
var animationTransition = (ref, options, duration = 0, delay = 0, needLayout = false, timingFunction = "linear") => {
  return new Promise((resolve, _) => {
    animation.transition(ref, {
      styles: {
        ...options
      },
      duration,
      delay,
      needLayout,
      timingFunction
    }, () => {
      resolve(null);
    });
  });
};
var animationTransitionSpin = async (ref, deg, duration, delay) => {
  return await animationTransition(ref, {
    transform: `rotate(${deg})`
  }, duration, delay, false, "linear");
};
var useSpin = async (ref, loop = false, duration = 46e3, delay = 0) => {
  let tasks = [
    () => animationTransitionSpin(ref, 0, 0, delay),
    () => animationTransitionSpin(ref, 360, duration, delay)
  ];
  _use.useTaskReduce.call(void 0, tasks).then(() => {
    if (loop)
      useSpin(ref, loop, duration, delay);
  });
};
var animationTransitionPulse = async (ref, opacity, duration, delay) => {
  return await animationTransition(ref, {
    opacity
  }, duration, delay, false, "cubic-bezier(0.4, 0, 0.6, 1)");
};
var usePulse = async (ref, loop = false, duration = 1e3, delay = 0) => {
  let tasks = [
    () => animationTransitionPulse(ref, 0.5, duration, delay),
    () => animationTransitionPulse(ref, 1, duration, delay)
  ];
  _use.useTaskReduce.call(void 0, tasks).then(() => {
    if (loop)
      usePulse(ref, loop, duration, delay);
  });
};
var animationTransitionBounce = async (ref, y, timingFunction, duration, delay) => {
  return await animationTransition(ref, {
    transform: `translateY(${y})`
  }, duration, delay, false, timingFunction);
};
var useBounce = async (ref, loop = false, duration = 500, delay = 0) => {
  let tasks = [
    () => animationTransitionBounce(ref, "-25%", "cubic-bezier(0.8, 0, 1, 1)", duration, delay),
    () => animationTransitionBounce(ref, "0", "cubic-bezier(0, 0, 0.2, 1)", duration, delay)
  ];
  _use.useTaskReduce.call(void 0, tasks).then(() => {
    if (loop)
      useBounce(ref, loop, duration, delay);
  });
};
var animationTransitionHeartbeat = async (ref, scale, duration, delay) => {
  return await animationTransition(ref, {
    transform: `scale(${scale})`
  }, duration, delay, false);
};
var useHeartbeat = async (ref, loop = false, duration = 500, delay = 0) => {
  let tasks = [
    () => animationTransitionHeartbeat(ref, 1.1, duration, delay),
    () => animationTransitionHeartbeat(ref, 1, duration, delay)
  ];
  _use.useTaskReduce.call(void 0, tasks).then(() => {
    if (loop)
      useHeartbeat(ref, loop, duration, delay);
  });
};
var animationTransitionShake = async (ref, x, duration, delay) => {
  return await animationTransition(ref, {
    transform: `translateX(${x})`
  }, duration, delay, false, "ease-out");
};
var useShake = async (ref, loop = false, duration = 50, delay = 0) => {
  let tasks = [
    () => animationTransitionShake(ref, "-8px", duration, delay),
    () => animationTransitionShake(ref, "7px", duration, delay),
    () => animationTransitionShake(ref, "-6px", duration, delay),
    () => animationTransitionShake(ref, "5px", duration, delay),
    () => animationTransitionShake(ref, "-4px", duration, delay),
    () => animationTransitionShake(ref, "3px", duration, delay),
    () => animationTransitionShake(ref, "-2px", duration, delay),
    () => animationTransitionShake(ref, "1px", duration, delay)
  ];
  let doTask = _use.useTaskReduce.call(void 0, tasks);
  doTask.then(() => {
    if (loop)
      setTimeout(() => {
        useShake(ref, loop, duration, delay);
      }, 200);
  });
};
var animationTransitionFadeIn = async (ref, opacity, duration, delay) => {
  return await animationTransition(ref, {
    opacity
  }, duration, delay, false, "ease-in");
};
var useFadeIn = async (ref, loop = false, duration = 2e3, delay = 0) => {
  let tasks = [
    () => animationTransitionFadeIn(ref, 1, duration, delay)
  ];
  _use.useTaskReduce.call(void 0, tasks).then(() => {
    if (loop)
      setTimeout(() => {
        useFadeIn(ref, loop, duration, delay);
      });
  });
};
var animationTransitionFadeOut = async (ref, opacity, duration, delay) => {
  return await animationTransition(ref, {
    opacity
  }, duration, delay, false, "ease-out");
};
var useFadeOut = async (ref, loop = false, duration = 300, delay = 0) => {
  let tasks = [
    () => animationTransitionFadeOut(ref, 0, duration, delay)
  ];
  _use.useTaskReduce.call(void 0, tasks).then(() => {
    if (loop)
      setTimeout(() => {
        useFadeOut(ref, loop, duration, delay);
      });
  });
};









exports.animationTransition = animationTransition; exports.useBounce = useBounce; exports.useFadeIn = useFadeIn; exports.useFadeOut = useFadeOut; exports.useHeartbeat = useHeartbeat; exports.usePulse = usePulse; exports.useShake = useShake; exports.useSpin = useSpin;
