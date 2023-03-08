# Sticky 粘性布局

Sticky组件基于CSS中的 `position: sticky` 属性实现的效果，当组件在屏幕或者指定容器范围内时，按照正常的布局排列，当组件超出屏幕或者指定容器范围时，始终固定在屏幕或者指定容器顶部。

<!--@include: ./tips/introduce.md-->

<TipsIntroduce />

## 基本用法

<!-- <show-code com-type="sticky" com-show-type="base" /> -->
::: code-group

<<< @/examples/sticky/Base.vue

:::

## 吸顶距离

通过 `top` 属性可以设置吸顶距离。

<!-- <show-code com-type="sticky" com-show-type="top" /> -->
::: code-group

<<< @/examples/sticky/Top.vue

:::

## 指定容器

指定容器需要在组件外层提供 `ref` 用来获取容器dom，多端兼容时需要提供和 `ref` 等值的 `id` 属性。获取的外层 `ref` 信息需要赋值给组件的 `container` 属性，组件的 `container-id` 属性需要和外层的 `id` 属性等值。具体实现思路可以参考如下演示代码。

<TipsDemoWarning />

<!-- <show-code language="ts" com-type="sticky" com-show-type="container-ts" /> -->

<!-- <show-code com-type="sticky" com-show-type="container" /> -->
::: code-group

<<< @/examples/sticky/Container.vue

:::

## 吸底距离

暂不支持。

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| position         | 吸附位置（`top`、`bottom`）               | String | `top`                |
| top         | 吸顶距离               | Number | `0`                |
| bottom `暂不支持`         | 吸底距离               | Number | `0`                |
| container         | 容器的 `HTML` 节点, 在小程序环境下需要同时指定 `id`               | Element | -                |
| container-id         | 容器的 `id` 值, 在非H5环境下需要指定               | Element | -                |
| z-index         | 吸附时的层级               | Number | `2000`               |
| proxy         | 父组件实例               | Object | -                |
