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
var animationTransitionSpin = async (ref, deg, duration) => {
  return await animationTransition(ref, {
    transform: `rotate(${deg})`
  }, duration, 0, false, "linear");
};
var useSpin = async (ref, loop = false) => {
  let tasks = [
    () => animationTransitionSpin(ref, 0, 0),
    () => animationTransitionSpin(ref, 360, 46e3)
  ];
  _use.useTaskReduce.call(void 0, tasks).then(() => {
    if (loop)
      useSpin(ref, loop);
  });
};
var animationTransitionPulse = async (ref, opacity) => {
  return await animationTransition(ref, {
    opacity
  }, 1e3, 0, false, "cubic-bezier(0.4, 0, 0.6, 1)");
};
var usePulse = async (ref, loop = false) => {
  let tasks = [
    () => animationTransitionPulse(ref, 0.5),
    () => animationTransitionPulse(ref, 1)
  ];
  _use.useTaskReduce.call(void 0, tasks).then(() => {
    if (loop)
      usePulse(ref, loop);
  });
};
var animationTransitionBounce = async (ref, y, timingFunction) => {
  return await animationTransition(ref, {
    transform: `translateY(${y})`
  }, 500, 0, false, timingFunction);
};
var useBounce = async (ref, loop = false) => {
  let tasks = [
    () => animationTransitionBounce(ref, "-25%", "cubic-bezier(0.8, 0, 1, 1)"),
    () => animationTransitionBounce(ref, "0", "cubic-bezier(0, 0, 0.2, 1)")
  ];
  _use.useTaskReduce.call(void 0, tasks).then(() => {
    if (loop)
      useBounce(ref, loop);
  });
};
var animationTransitionHeartbeat = async (ref, scale) => {
  return await animationTransition(ref, {
    transform: `scale(${scale})`
  }, 500, 0, false);
};
var useHeartbeat = async (ref, loop = false) => {
  let tasks = [
    () => animationTransitionHeartbeat(ref, 1.1),
    () => animationTransitionHeartbeat(ref, 1)
  ];
  _use.useTaskReduce.call(void 0, tasks).then(() => {
    if (loop)
      useHeartbeat(ref, loop);
  });
};
var animationTransitionShake = async (ref, x) => {
  return await animationTransition(ref, {
    transform: `translateX(${x})`
  }, 50, 0, false, "ease-out");
};
var useShake = async (ref, loop = false) => {
  let tasks = [
    () => animationTransitionShake(ref, "-8px"),
    () => animationTransitionShake(ref, "7px"),
    () => animationTransitionShake(ref, "-6px"),
    () => animationTransitionShake(ref, "5px"),
    () => animationTransitionShake(ref, "-4px"),
    () => animationTransitionShake(ref, "3px"),
    () => animationTransitionShake(ref, "-2px"),
    () => animationTransitionShake(ref, "1px")
  ];
  let doTask = _use.useTaskReduce.call(void 0, tasks);
  doTask.then(() => {
    if (loop)
      setTimeout(() => {
        useShake(ref, loop);
      }, 200);
  });
};
var animationTransitionFadeIn = async (ref, opacity) => {
  return await animationTransition(ref, {
    opacity
  }, 2e3, 0, false, "cubic-bezier(.39, .575, .565, 1.000)");
};
var useFadeIn = async (ref, loop = false) => {
  let tasks = [
    () => animationTransitionFadeIn(ref, 0),
    () => animationTransitionFadeIn(ref, 1)
  ];
  _use.useTaskReduce.call(void 0, tasks).then(() => {
    if (loop)
      setTimeout(() => {
        useFadeIn(ref, loop);
      });
  });
};
var animationTransitionFadeOut = async (ref, opacity) => {
  return await animationTransition(ref, {
    opacity
  }, 300, 0, false, "ease-out");
};
var useFadeOut = async (ref, loop = false) => {
  let tasks = [
    () => animationTransitionFadeOut(ref, 1),
    () => animationTransitionFadeOut(ref, 0)
  ];
  _use.useTaskReduce.call(void 0, tasks).then(() => {
    if (loop)
      setTimeout(() => {
        useFadeOut(ref, loop);
      });
  });
};









exports.animationTransition = animationTransition; exports.useBounce = useBounce; exports.useFadeIn = useFadeIn; exports.useFadeOut = useFadeOut; exports.useHeartbeat = useHeartbeat; exports.usePulse = usePulse; exports.useShake = useShake; exports.useSpin = useSpin;
