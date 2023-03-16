import { colorBuilder } from '@kviewui/color-builder';
import { isThemeColor } from '@kviewui/utils';
import { theme as appTheme } from '@kviewui/theme';

// 组件库预设色板名称
export const colorPresetNames = [{
    name: '浪漫红',
    enName: 'red',
  }, {
    name: '晚秋红',
    enName: 'orangered',
  }, {
    name: '活力橙',
    enName: 'orange',
  }, {
    name: '黄昏色',
    enName: 'gold',
  }, {
    name: '柠檬黄',
    enName: 'yellow',
  }, {
    name: '新生绿',
    enName: 'lime',
  }, {
    name: '翡翠绿',
    enName: 'green',
  }, {
    name: '碧涛青',
    enName: 'cyan',
  }, {
    name: '海空蓝',
    enName: 'blue',
  }, {
    name: '极致蓝',
    enName: 'deepblue',
  }, {
    name: '暗夜紫',
    enName: 'purple',
  }, {
    name: '青春紫',
    enName: 'pinkpurple',
  }, {
    name: '品红色',
    enName: 'magenta',
  }, {
    name: '中性灰',
    enName: 'grey',
  }]

/**
 * 获取主题色色值，如果是主题色变量则直接获取，否则根据颜色工具获取自定义颜色的主题色
 * @param {string} color 颜色变量
 * @param {ModeEnum} mode 明亮模式或暗黑模式
 * - dark 暗黑模式
 * - light 明亮模式
 * @param {KuiNamespace.ColorLevel} colorLevel 颜色色阶[0-9]
 * @returns 
 */
export const getThemeColor = (
  color: string = 'primary',
  mode: KuiNamespace.ModeEnum = 'light',
  colorLevel: KuiNamespace.ColorLevel = 5): string => {
    const theme: KuiNamespace.Theme = appTheme;
    if (isThemeColor(color)) {
      return theme.colors[mode][color][colorLevel];
    }

    if (!color) {
      return '';
    }

    return colorBuilder.generate(color, {
      dark: mode !== 'light',
      list: true,
      index: 5
    })[colorLevel];
}