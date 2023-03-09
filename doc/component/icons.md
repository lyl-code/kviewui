# Icons 图标

可支持多种 字体图标平台的图标集，可以通过 Icons 组件使用。

<!--@include: ./tips/introduce.md-->

<TipsIntroduce />

## 安装
```ts
// 仅仅H5环境支持
import { KuiIcons } from 'kviewui';
// 或 跨端推荐
import KuiIcons from 'kviewui/src/icons/index.vue';
```

## 基本用法

`Icons` 的 `name` 属性支持传入图标名称。

<!-- <show-code com-type="icon" com-show-type="base" /> -->
::: code-group

<<< @/examples/icons/Base.vue

:::

## 图标颜色

`Icons` 的 `color` 属性用来设置图标的颜色，支持 [`颜色`](/guide/palette) 和 [`主题色`](/guide/token#主题色)

<!-- <show-code com-type="icon" com-show-type="color" /> -->
::: code-group

<<< @/examples/icons/Color.vue

:::

## 图标大小

`Icons` 的 `size` 属性用来设置图标的尺寸大小，默认单位为 `rpx`。

<!-- <show-code com-type="icon" com-show-type="size" /> -->
::: code-group

<<< @/examples/icons/Size.vue

:::

## 图标粗细

`Icons` 的 `weight` 属性用来设置图标的尺寸大小。

<!-- <show-code com-type="icon" com-show-type="weight" /> -->
::: code-group

<<< @/examples/icons/Weight.vue

:::

## 动态图标 | 动效组件方式

可以通过 <a href="animate">Animate 动效组件</a> 实现图标的动画效果

<!-- <show-code com-type="icon" com-show-type="animation" /> -->
::: code-group

<<< @/examples/icons/Animate.vue

:::

## 动态图标 | class动画方式

可以通过 class 设置组件库内置动画效果， 可在组件的公共属性 `custom-class` 加 class 动画效果

<!-- <show-code com-type="icon" com-show-type="class-animation" /> -->
::: code-group

<<< @/examples/icons/Class.vue

:::

## 自定义图标

如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用。

> 引入 [iconfont](https://www.iconfont.cn/)   推荐此方案

第一步：首先在 [iconfont](https://www.iconfont.cn/) 生成你自定义的Icon文件下载存放至本地项目  [详细使用说明](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code)

<!-- <show-code language="bash" com-type="icon" com-show-type="custom" /> -->
```shell
/assets/font/demo.css
/assets/font/demo_index.html
/assets/font/iconfont.css
/assets/font/iconfont.js
/assets/font/iconfont.json
/assets/font/iconfont.ttf
/assets/font/iconfont.woff
/assets/font/iconfont.woff2
```

第二步：项目入口文件 main.js 引用 `iconfont.css`

<!-- <show-code language="js" com-type="icon" com-show-type="iconfont" /> -->
```js
import './assets/font/iconfont.css';
```

第三步

<!-- <show-code com-type="icon" com-show-type="iconfont3" /> -->
```vue
<!--
  custom-class-name 指定类名为默认 iconfont，示例：
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
  }
  custom-prefix 指定Icon图标class前缀，示例：icon-close
  name 值根据 iconfont.css 中值对应填写
-->
<kui-icons custom-class-name="iconfont" custom-prefix="icon" name="close" />
```


<!-- > 方案二 第三方自定义字体库

<show-code language="css" com-type="icon" com-show-type="iconfont-css" />

<show-code com-type="icon" com-show-type="iconfont-html" /> -->

## API

### Props

| 参数            | 说明                                    | 类型             | 默认值           |
|-----------------|-----------------------------------------|------------------|------------------|
| name            | 图标名称                                | String           | -                |
| color           | 图标颜色，支持 [颜色](/guide/palette) 和 [主题色](/guide/token#主题色)                               | String           | -                |
| color-level     | 图标颜色色阶，见[颜色色阶](/guide/palette#颜色色阶)                             | String\|Number    | 5
| size            | 图标大小，支持`px` `rpx` `rem` `em` `upx` `vw` `vh`，默认单位`px`                                | String\|Number            | 28                |
| weight          | 图标粗细                                | Number            | 100                |
| mode`通用属性`   | 页面模式                                | String            | `light`         |
| custom-class-name          | 自定义icon基础类名                                | String            | `kui-icons`           |
| custom-prefix         | 自定义icon类名前缀                 | String            | `kui-icon`                |
| unicode            | 自定义图标的unicode值，<a-link>nvue有效</a-link>                                | Number            | -                |
| icon-url            | 自定义图标的ttf字体文件路径                                | String            | -                |

### Mode 有效值
| 值 | 说明 |
|----|------|
| light | 明亮模式 |
| dark | 暗黑模式 |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击图标时触发 | event: Event |

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
