interface fontType {
    'xs'?: number;
    'sm'?: number;
    'base'?: number;
    'lg'?: number;
    'xl'?: number;
    '2xl'?: number;
    '3xl'?: number;
    '4xl'?: number;
    '5xl'?: number;
    '6xl'?: number;
    '7xl'?: number;
    '8xl'?: number;
    '9xl'?: number;
}
/**
   * 定义字体单位
   */
declare const fontUnit = "px";
/**
   * 定义字体大小
   */
declare const fonts: fontType;
interface RadiusSize {
    'none': number;
    'xs': number;
    'sm': number;
    'base': number;
    'lg': number;
    'xl': number;
    'max': number;
}
/**
   * 定义圆角大小
   */
declare const radiusSize: RadiusSize;
interface fontWeightType {
    'thin': number;
    'extralight': number;
    'light': number;
    'normal': number;
    'medium': number;
    'semibold': number;
    'bold': number;
    'extrabold': number;
    'black': number;
}
/**
   * 定义字体粗细
   */
declare const fontWeight: fontWeightType;
/**
   * 定义行高基数
   */
declare const lineBase = 16;
/**
   * 定义段落间距系数
   */
declare const spacing = 1.5;
/**
   * 定义遮罩透明度
   */
declare const shadeOpenness = 0.6;
interface motionTimesType {
    'base': string;
    'lg': string;
    'xl': string;
}
/**
   * 定义元素运动时长
   */
declare const motionTimes: motionTimesType;

declare const sizeConfig_fontUnit: typeof fontUnit;
declare const sizeConfig_fontWeight: typeof fontWeight;
declare const sizeConfig_fonts: typeof fonts;
declare const sizeConfig_lineBase: typeof lineBase;
declare const sizeConfig_motionTimes: typeof motionTimes;
declare const sizeConfig_radiusSize: typeof radiusSize;
declare const sizeConfig_shadeOpenness: typeof shadeOpenness;
declare const sizeConfig_spacing: typeof spacing;
declare namespace sizeConfig {
  export {
    sizeConfig_fontUnit as fontUnit,
    sizeConfig_fontWeight as fontWeight,
    sizeConfig_fonts as fonts,
    sizeConfig_lineBase as lineBase,
    sizeConfig_motionTimes as motionTimes,
    sizeConfig_radiusSize as radiusSize,
    sizeConfig_shadeOpenness as shadeOpenness,
    sizeConfig_spacing as spacing,
  };
}

/**
 * @description
 * @zh 时间缓动函数曲线
 * @source https://animista.net
 */
/**
 * @zh 时间缓动函数曲线类型定义
 */
interface TimingFunction {
    'linear'?: string;
    'ease'?: string;
    'ease-out'?: string;
    'ease-in'?: string;
    'ease-in-out'?: string;
    'ease-in-quad'?: string;
    'ease-in-cubic'?: string;
    'ease-in-quart'?: string;
    'ease-in-quint'?: string;
    'ease-in-sine'?: string;
    'ease-in-expo'?: string;
    'ease-in-circ'?: string;
    'ease-in-back'?: string;
    'ease-out-quad'?: string;
    'ease-out-cubic'?: string;
    'ease-out-quart'?: string;
    'ease-out-quint'?: string;
    'ease-out-sine'?: string;
    'ease-out-expo'?: string;
    'ease-out-circ'?: string;
    'ease-out-back'?: string;
    'ease-in-out-quad'?: string;
    'ease-in-out-cubic'?: string;
    'ease-in-out-quart'?: string;
    'ease-in-out-quint'?: string;
    'ease-in-out-sine'?: string;
    'ease-in-out-expo'?: string;
    'ease-in-out-circ'?: string;
    'ease-in-out-back'?: string;
}
/**
 * @zh 时间缓动函数定义
 */
declare const timingFunctionMap: TimingFunction;

declare const theme: {
    colors: {
        light: KuiNamespace.ColorsMap;
        dark: KuiNamespace.ColorsMap;
    };
    size: typeof sizeConfig;
    config: {
        shade: string;
        colorPresetPanel: {
            red: string;
            orangered: string;
            orange: string;
            gold: string;
            yellow: string;
            lime: string;
            green: string;
            brandgreen: string;
            cyan: string;
            blue: string;
            deepblue: string;
            purple: string;
            pinkpurple: string;
            magenta: string;
            grey: string;
            primary: string;
            success: string;
            danger: string;
            warning: string;
            link: string;
            info: string;
        };
    };
};

export { theme, timingFunctionMap };
