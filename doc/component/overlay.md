# Overlay 遮罩

创建一个遮罩层，用来强调特定的元素，防止用户进行其他操作。

<!--@include: ./tips/introduce.md-->

<TipsIntroduce />

::: warning Tips

全屏遮罩组件建议放到所有组件最外层。

:::

## 安装
```ts
// 仅仅H5环境支持
import { KuiOverlay } from 'kviewui';
// 或 跨端推荐
import KuiOverlay from 'kviewui/src/overlay/index.vue';
```

## 基本用法

::: tip 提示
下面所有演示代码中的 `kui-config-provider` 组件为全局配置组件，可参考 <a href="/components/config-provider">ConfigProvider 全局配置</a>
:::

<!-- <show-code com-type="overlay" com-show-type="base" /> -->
::: code-group

<<< @/examples/overlay/Base.vue

:::

## 自定义透明度

通过 `overlay-ness` 属性可以设置遮罩透明度。

<!-- <show-code com-type="overlay" com-show-type="overlay-ness" /> -->
::: code-group

<<< @/examples/overlay/OverlayNess.vue{9}

:::

## 自定义插槽内容

通过组件提供的 `vnode` 插槽可以设置遮罩内的自定义内容。

<!-- <show-code com-type="overlay" com-show-type="content" /> -->
::: code-group

<<< @/examples/overlay/SlotContent.vue{11-19}

:::

## 区间遮罩

通过`is-wrapper`属性可以声明为区间遮罩，在组件提供的 `default` 插槽（默认插槽）内可以实现区间遮罩样式，`close-on-click-mask` 属性设置为`false`可以禁用点击关闭遮罩，具体可参考下面演示代码。

<!-- <show-code com-type="overlay" com-show-type="slot-default" /> -->
::: code-group

<<< @/examples/overlay/SlotDefault.vue{3,5,7-19}

:::

## 磨砂玻璃遮罩

通过组件提供的 `blur` 属性可以设置磨砂玻璃效果。

<!-- <show-code com-type="overlay" com-show-type="blur" /> -->
::: code-group

<<< @/examples/overlay/Blur.vue{3}

:::

## API

### Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| z-index | 层级 | Number | `99`
| vnode-center | 富文本内容是否居中显示 | Boolean | `false`
| radius-size | 圆角大小，可选值为 `none` `xs` `sm` `base` `lg` `xl` `max` | String | `none`
| blur | 是否设置磨砂玻璃效果 | Boolean | `false`
| visible | 是否显示遮罩 | Boolean | `false`
| close-on-click-overlay | 单击遮罩是否关闭 | Boolean | `true`
| overlay-ness | 遮罩透明度 | Number | `0.6`
| is-wrapper | 是否包裹内容，`区间遮罩`和`磨砂玻璃遮罩`有效 | Boolean | `false`
| header-height | 页面导航高度，H5环境有效 | Number | `0`
| lock-scroll | 是否锁定背景滚动 | Boolean | `true`
| mode [`公共属性`](#) | 页面模式，见 [组件公共属性](/guide/component#组件公共属性) | String | `light` 
| custom-class [`公共属性`](#) | 自定义class，见 [组件公共属性](/guide/component#组件公共属性) | String | -
| custom-style [`公共属性`](#) | 自定义style，见 [组件公共属性](/guide/component#组件公共属性) | CSSProperties | {}

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
| vnode                  | 自定义内容            |

### Events
| 事件名 | 说明 | 回调参数
| --- | --- | ---
| click | 点击时触发 | event: MouseEvent

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


