# Progress 进度条

用来展示当前操作的进度。

<!--@include: ./tips/introduce.md-->

<TipsIntroduce />

## 安装
```ts
// 仅仅H5环境支持
import { KuiProgress } from 'kviewui';
// 或 跨端推荐
import KuiProgress from 'kviewui/src/progress/index.vue';
```

## 基本用法

通过组件提供的 `percent` 属性可以设置进度条的百分比。

<!-- <show-code com-type="progress" com-show-type="base" /> -->
::: code-group

<<< @/examples/progress/Base.vue

:::

## 设置宽度和颜色

通过组件提供的 `line-width` 属性可以设置进度条的宽度，通过 `color` 属性可以设置进度条的背景色，通过 `label-text-color` 属性可以设置进度条右边 `label` 区域的文本色。

<!-- <show-code com-type="progress" com-show-type="width-color" /> -->
::: code-group

<<< @/examples/progress/WidthColor.vue

:::

## 不显示百分比

组件默认的百分比是在组件右边的 `label` 区域设置，通过 `label` 属性可以关闭百分比的显示。

<!-- <show-code com-type="progress" com-show-type="label" /> -->
::: code-group

<<< @/examples/progress/Label.vue

:::

## 标签內显

通过组件提供的 `label-inside` 属性可以设置标签內显效果，通过 `label-inside-text-bottom` 属性可以设置标签内文本的显示位置。

<!-- <show-code com-type="progress" com-show-type="label-inside" /> -->
::: code-group

<<< @/examples/progress/LabelInside.vue

:::

## 自定义内容內显

通过组件提供的默认插槽可以设置进度条标签自定义内容，通过 `label-inside` 属性可以设置标签內显，通过 `inside-label-style` 属性可以设置內显的 `label` 区样式。

<!-- <show-code com-type="progress" com-show-type="slot-label-inside" /> -->
::: code-group

<<< @/examples/progress/SlotLabelInside.vue

:::

## 开启进度条动画

通过组件提供的 `active` 属性可以开启进度条加载动画。

<!-- <show-code com-type="progress" com-show-type="active" /> -->
::: code-group

<<< @/examples/progress/Active.vue

:::

## 自定义图标

通过组件提供的 `icon-name` 属性可以设置`label`的图标。

<!-- <show-code com-type="progress" com-show-type="icon-name" /> -->
::: code-group

<<< @/examples/progress/Icon.vue

:::

## 方角进度条

通过组件提供的 `shape` 属性可以设置进度条边框形状，支持方角和圆角。

<!-- <show-code com-type="progress" com-show-type="shape" /> -->
::: code-group

<<< @/examples/progress/Square.vue

:::

## 动态改变

<!-- <show-code com-type="progress" com-show-type="demo" /> -->
::: code-group

<<< @/examples/progress/Click.vue

:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| percent | 进度条百分比 | Number | `0`
| label | 是否显示标签 | Boolean | `true`
| label-inside | 标签是否內显 | Boolean | `false`
| inside-label-style | 自定义标签样式 | Object | {}
| shape`通用属性` | 进度条形状，可选值为 `square` `round` | String  | `round`
| color | 进度条背景色 | String | `#00BC79`
| track-color | 未选择的背景色 | String | -
| line-width | 进度条宽度 | Number | `20`
| track | 是否显示进度轨迹 | Boolean | `true`
| size | 进度条大小 | Number | `200`
| rotate | 进度条圆点 | String | -
| label-text-size | 进度条标签文本大小 | Number | `14`
| label-text-color | 进度条标签文本色 | String | -
| active | 是否开启进度条动画 | Boolean | `false`
| icon-name | 图标名称 | String | -
| label-inside-text-bottom | 內显文本下边距位置 | String | -
| id | 唯一标识 | String | -

### Shape 有效值
| 值 | 说明
|----|-----
| square | 方角进度条
| round | 圆角进度条

### Slots
| 值 | 说明
|----| -----
| default | 自定义标签内容区

## 平台兼容性说明
| 运行平台 | 是否兼容
| --- | ---
| app-vue | ✅
| app-nvue | ❌
| H5 | ✅
| 微信小程序 | ✅
| 支付宝小程序 | 待测试
| QQ小程序 | ✅
| 字节小程序 | 待测试