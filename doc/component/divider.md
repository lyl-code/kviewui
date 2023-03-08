# Divider 分割线
    
用于将内容分隔为多个区域。

<!--@include: ./tips/introduce.md-->

<TipsIntroduce />

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

<<< @/examples/divider/Dashed.vue

:::

## 缩进

通过 `inset` 属性可以设置分割线的缩进长度，通过 `margin` 属性可以设置分割线的外间距，通过 `inset-direction` 属性可以设置分割线缩进的方向。

<!-- <show-code com-type="divider" com-show-type="inset" /> -->
::: code-group

<<< @/examples/divider/Inset.vue

:::

## 垂直分割线

通过 `direction` 属性可以设置分割线为垂直方向。

<!-- <show-code com-type="divider" com-show-type="direction"/> -->
::: code-group

<<< @/examples/divider/Direction.vue

:::

## 内容描述

通过组件的默认插槽可以插入分割线自定义内容。

<!-- <show-code com-type="divider" com-show-type="slot" /> -->
::: code-group

<<< @/examples/divider/Text.vue

:::

## 内容位置

通过 `text-direction` 属性可以设置内容的位置，支持左边、居中和右边三个位置。

<!-- <show-code com-type="divider" com-show-type="text-direction" /> -->
::: code-group

<<< @/examples/divider/TextDirection.vue

:::

## 最小像素边框

通过 `min-px` 属性可以设置为最小像素边框。

<!-- <show-code com-type="divider" com-show-type="min-px" /> -->
::: code-group

<<< @/examples/divider/MinPx.vue

:::

## 自定义颜色和主题

通过 `color` 属性可以设置分割线颜色，通过 `theme` 属性可以设置分割线主题色。

<!-- <show-code com-type="divider" com-show-type="color-theme" /> -->
::: code-group

<<< @/examples/divider/ColorTheme.vue

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
    