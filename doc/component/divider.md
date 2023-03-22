# Divider 分割线
    
用于将内容分隔为多个区域。

<!--@include: ./tips/introduce.md-->

<TipsIntroduce />

## 安装
```ts
// 仅仅H5环境支持
import { KuiDivider } from 'kviewui';
// 或 跨端推荐
import KuiDivider from 'kviewui/src/divider/index.vue';
```

## 基本用法

默认渲染一条水平分割线。

<!-- <show-code com-type="divider" com-show-type="base" /> -->
::: code-group

<<< @/examples/divider/Base.vue

:::

## 虚线

通过 `dashed` 属性使分割线渲染为虚线。

<!-- <show-code com-type="divider" com-show-type="dashed" /> -->
::: code-group

<<< @/examples/divider/Dashed.vue{3}

:::

## 缩进

通过 `inset` 属性可以设置分割线的缩进长度，通过 `margin` 属性可以设置分割线的外间距，通过 `inset-direction` 属性可以设置分割线缩进的方向。

<!-- <show-code com-type="divider" com-show-type="inset" /> -->
::: code-group

<<< @/examples/divider/Inset.vue{3,5-6,8-10}

:::

## 垂直分割线

通过 `direction` 属性可以设置分割线为垂直方向。

<!-- <show-code com-type="divider" com-show-type="direction"/> -->
::: code-group

<<< @/examples/divider/Direction.vue{5,8}

:::

## 内容描述

通过组件的默认插槽可以插入分割线自定义内容。

<!-- <show-code com-type="divider" com-show-type="slot" /> -->
::: code-group

<<< @/examples/divider/Text.vue

:::

## 内容位置

通过 `text-position` 属性可以设置内容的位置，支持左边、居中和右边三个位置。

<!-- <show-code com-type="divider" com-show-type="text-direction" /> -->
::: code-group

<<< @/examples/divider/TextPosition.vue{4,10,16}

:::

## 最小像素边框

通过 `min-px` 属性可以设置为最小像素边框。

<!-- <show-code com-type="divider" com-show-type="min-px" /> -->
::: code-group

<<< @/examples/divider/MinPx.vue{3}

:::

## 自定义颜色

通过 `color` 属性可以设置分割线颜色。

::: warning 注意
+ 基于组件库出色的主题设计以及自动获取自定义颜色主题能力，所以组件库所有组件的颜色类属性都支持自定义颜色、组件库内置颜色和组件库内置主题。参考 [颜色](/guide/palette) 和 [主题](/guide/token#主题色)
+ 基于组件库特色的主题颜色色阶设计，所以组件库所有组件的颜色类属性都支持对应的色阶设置。参考 [颜色色阶](/guide/palette#颜色色阶)
:::

<!-- <show-code com-type="divider" com-show-type="color-theme" /> -->
::: code-group

<<< @/examples/divider/ColorTheme.vue{4}

:::

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| dashed         | 是否使用虚线               | Boolean | false                |
| direction         | 分割线方向，可选值为 `row` `column`               | String | `row`                |
| inset         | 缩进长度，如 `100rpx` `60px`               | String | -                |
| inset-direction         | 缩进位置，可选值为 `start` `end`               | String | `start`                |
| margin         | 外间距，如 `60rpx 0`               | String | -                |
| min-px        | 是否使用 最小像素 线                         | Boolean | false                |
| text-position        | 内容位置，可选值为 `left` `center` `right`                         | String | center                |
| color         | 分割线颜色               | String | -                |
| theme         | 分割线主题色               | String | -                |

### Slots

| 名称 | 说明           | 
|--------|----------------|
| default  | 内容 | 

## 平台兼容性说明
| 运行平台 | 是否兼容
| --- | ---
| app-vue | ✅
| app-nvue | ✅
| H5 | ✅
| 微信小程序 | ✅
| 支付宝小程序 | 待测试
| QQ小程序 | ✅
| 字节小程序 | 待测试
    