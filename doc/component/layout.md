# Layout 布局

Layout 提供了 `kui-row` 和 `kui-col` 两个辅助布局的组件，帮助您高效率的进行页面布局。

<!--@include: ./tips/introduce.md-->

<TipsIntroduce />

## 基本用法

`kui-row` 组件把一行平均分为 `24` 份 栅格，`kui-col` 组件提供 `span` 属性可以设置这一列所占的栅格数，`offset` 属性设置这一列偏移的栅格数。

<!-- <show-code com-type="layout" com-show-type="base" /> -->
::: code-group

<<< @/examples/layout/Base.vue

:::

## 分栏间隔

通过 `kui-row` 组件的 `gutter` 属性可以设置列之间的间距，默认为 0。

<!-- <show-code com-type="layout" com-show-type="gutter" /> -->
::: code-group

<<< @/examples/layout/Gutter.vue

:::

## Flex对齐方式

布局组件默认使用 `flex` 布局，通过 `kui-row` 组件的 `justify` 属性可以设置主轴对齐方式，`align` 属性可以设置交叉轴对齐方式。

<!-- <show-code com-type="layout" com-show-type="flex" /> -->
::: code-group

<<< @/examples/layout/Flex.vue

:::

## API

### Row Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| type | 布局方式，可选值为flex | String | -
| gutter | 列元素之间的间距（单位为rpx） | Number | -
| justify | Flex 主轴对齐方式，可选值为 `start` `end` `center` `space-around` `space-between` `space-evenly` | String | `start`
| align | Flex 交叉轴对齐方式，可选值为 `start` `center` `end` `baseline` `stretch` | String | `flex-start`
| wrap | Flex是否换行，可选值为 `nowrap` `wrap` `reverse` | String | `wrap`

### Col Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| span | 列元素宽度（共分为24份，例如设置一行3个，那么span值为8） | Number | 24
| offset | 列元素偏移距离 | Number | 0

### Col Slots

| 字段 | 说明
|----- | -----
| default | 列显示内容
