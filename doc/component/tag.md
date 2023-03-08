# Tag 标签

用于标记关键词和主要内容。

<!--@include: ./tips/introduce.md-->

<TipsIntroduce />

::: warning
以下代码演示中的 `kui-space` 为组件库的 <a href="/components/space">Space 间隔</a> 组件。
:::

## 标签类型

标签支持 `primary`、`info`、`warning`、`danger`、`success` 五种主题类型，默认为 ''。

<!-- <show-code com-type="tag" com-show-type="type" /> -->
::: code-group

<<< @/examples/tag/Type.vue

:::

## 空心标签

通过 `plain` 属性可以设置空心标签样式。

<!-- <show-code com-type="tag" com-show-type="plain" /> -->
::: code-group

<<< @/examples/tag/Plain.vue

:::

## 标签形状

通过 `shape` 属性可以设置标签形状，支持 方形和圆形，默认为圆形。

<!-- <show-code com-type="tag" com-show-type="shape" /> -->
::: code-group

<<< @/examples/tag/Shape.vue

:::

## 标签尺寸

通过 `size` 属性可以设置标签尺寸，支持大号、普通、小型和迷你不同的尺寸。

<!-- <show-code com-type="tag" com-show-type="size" /> -->
::: code-group

<<< @/examples/tag/Size.vue

:::

## 块级标签

通过 `block` 属性可以设置独立行的块级标签。

<!-- <show-code com-type="tag" com-show-type="block" /> -->
::: code-group

<<< @/examples/tag/Block.vue

:::

## 半圆角标签

通过 `half-round` 属性可以设置半圆角标签，支持左半圆和右半圆。

<!-- <show-code com-type="tag" com-show-type="half-round" /> -->
::: code-group

<<< @/examples/tag/HalfRound.vue

:::

## 可关闭标签

通过 `closable` 属性可以设置为可关闭标签，使用 `close-icon` 属性可设置标签的关闭图标样式（必须在 `closable` 为 `true` 下才能生效）。

<!-- <show-code com-type="tag" com-show-type="closable" /> -->
::: code-group

<<< @/examples/tag/Closable.vue

:::

## 加载中标签

通过 `loading` 属性可以设置加载中状态的标签，使用 `loading-icon` 属性可以设置标签的加载中图标样式（必须在 `loading` 为 `true` 下才能生效）。

<!-- <show-code com-type="tag" com-show-type="loading" /> -->
::: code-group

<<< @/examples/tag/Loading.vue

:::

## 可选中标签

通过 `checkable` 属性可以设置标签为可选中，使用 `default-checked` 属性可以设置标签默认选中状态。

<!-- <show-code com-type="tag" com-show-type="checkable" /> -->
::: code-group

<<< @/examples/tag/Checkable.vue

:::

## 自定义颜色

通过 `background-color` 属性可以设置标签背景色，`text-color` 属性可以设置标签文本色。

<!-- <show-code com-type="tag" com-show-type="custom-color" /> -->
::: code-group

<<< @/examples/tag/CustomColor.vue

:::

## 自定义插槽

通过 `left-icon` 插槽可以设置标签左图标区域内容，`right-icon` 插槽可以设置标签右图标区域内容，也可以同时设置左右两个插槽内容。

<!-- <show-code com-type="tag" com-show-type="slot" /> -->
::: code-group

<<< @/examples/tag/Slot.vue

:::

## API

### Props 

| 字段       | 说明                                             | 类型    | 默认值    |
|------------|--------------------------------------------------|---------|-----------|
| type       | 标签类型，可选值为 `primary` `info` `danger` `warning` `success` | String  |  |
| block      | 是否为块级标签                                         | Boolean  | `false`         |
| size      | 标签尺寸，可选值为 `large` `normal` `small` `size`      | String  | `normal`         |
| shape      | 标签形状，可选值为 `square` `round`                    | String  | `round`         |
| plain      | 是否为空心标签                                         | Boolean  | `false`         |
| background-color      | 标签背景颜色                                | String  | -         |
| border-color      | 标签边框颜色                                         | String  | -         |
| text-color | 标签文本颜色                                     | String  | -   |
| half-round      | 半圆角标签，可选值为 `left` `right`          | String  | -         |
| theme      | 标签主题色                                       | String  | -         |
| closable  | 是否为可关闭标签                                 | Boolean | `false`   |
| close-icon      | 可关闭标签的关闭图标                         | String  | `cancel`         |
| left-icon      | 标签左图标                                         | String  | -         |
| right-icon      | 标签右图标                                         | String  | -         |
| name      | 标签唯一标识                                         | String  | -         |
| loading      | 是否为加载中标签                                | Boolean  | `false`         |
| loading-icon      | 加载中图标                                         | String  | `spinner8`         |
| checkable      | 是否为可选中标签                                         | Boolean  | `false`         |
| default-checked      | 可选中标签的默认选中状态                   | Boolean  | `false`         |
| auto-checked      | 是否自动选中                                         | Boolean  | `true`         |
| mode`通用属性`      | 页面模式，可选值为 `light` `dark`                   | String  | `light`         |

### Type 有效值
| 值 | 说明 |
|----|------|
| primary | 主要标签 |
| info | 信息标签 |
| danger | 危险标签 |
| warning | 警告标签 |
| success | 成功标签 |

### Size 有效值
| 值 | 说明 |
|----|------|
| large | 大号标签 |
| normal | 普通标签 |
| small | 小号标签 |
| size | 迷你标签 |

### Shape 有效值
| 值 | 说明 |
|----|------|
| square | 方角标签 |
| round | 圆角标签 |

### HalfRound 有效值
| 值 | 说明 |
|----|------|
| left | 左半圆角标签 |
| right | 右半圆角标签 |

### Mode 有效值
| 值 | 说明 |
|----|------|
| light | 明亮模式 |
| dark | 暗黑模式 |


### Slots

| 名称    | 说明         |
|---------|--------------|
| left-icon | 标签左图标区域 |
| default | 标签内容 |
| right-icon | 标签右图标区域 |

### Events

| 事件名称 | 说明     | 回调参数 |
|----------|----------|----------|
| click    | 点击事件 | event    |
| click-left-icon | 左图标点击事件 | name |
| click-right-icon | 右图标点击事件 | name |
| close    | 关闭事件 | name    |
