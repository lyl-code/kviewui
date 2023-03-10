# Overlay 遮罩

创建一个遮罩层，用来强调特定的元素，防止用户进行其他操作。

<!--@include: ./tips/introduce.md-->

<TipsIntroduce />

::: warning Tips

全屏遮罩组件建议放到所有组件最外层。

:::

## 基本用法

::: tip 提示
下面所有演示代码中的 `kui-config-provider` 组件为全局配置组件，可参考 <a href="/components/config-provider">ConfigProvider 全局配置</a>
:::

<show-code com-type="overlay" com-show-type="base" />

## 自定义透明度

通过 `overlay-ness` 属性可以设置遮罩透明度。

<show-code com-type="overlay" com-show-type="overlay-ness" />

## 自定义插槽内容

通过组件提供的 `content` 插槽可以设置遮罩内的自定义内容。

<show-code com-type="overlay" com-show-type="content" />

## 自定义富文本内容

通过组件提供的 `vnode` 属性可以设置遮罩内的富文本HTML内容。

<show-code com-type="overlay" com-show-type="vnode" />

## 区间遮罩

在组件提供的 `default` 插槽（默认插槽）内可以实现区间遮罩样式，`close-on-click-mask` 属性设置为`false`可以禁用点击关闭遮罩，具体可参考下面演示代码。

<show-code com-type="overlay" com-show-type="slot-default" />

## 磨砂玻璃遮罩

通过组件提供的 `blur` 属性可以设置磨砂玻璃效果。

<show-code com-type="overlay" com-show-type="blur" />

## API

### Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| z-index | 层级 | Number | `99`
| vnode | 富文本内容 | HTMLElement | -
| vnode-center | 富文本内容是否居中显示 | Boolean | `false`
| radius-size`通用属性` | 圆角大小，可选值为 `none` `xs` `sm` `base` `lg` `xl` `max` | String | `none`
| blur | 是否设置磨砂玻璃效果 | Boolean | `false`
| show | 是否显示遮罩 | Boolean | `false`
| close-on-click-mask | 单击遮罩是否关闭 | Boolean | `true`
| overlay-ness | 遮罩透明度 | Number | `0.6`


### RadiusSize 有效值
| 值 | 说明 |
|----|------|
| none | `0rpx` |
| xs | `10rpx` |
| sm | `20rpx` |
| base | `30rpx` |
| lg | `40rpx` |
| xl | `50rpx` |
| max | `9999rpx` |

### Slots
| 名称                   | 说明                 |
|-----------------------|----------------------|
| default               | 自定义插入元素         |
| content                  | 自定义内容            |


