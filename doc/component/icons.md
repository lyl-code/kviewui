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

<<< @/examples/icons/Base.vue{3,6}

:::

## 图标颜色

`Icons` 的 `color` 属性用来设置图标的颜色，支持 [`颜色`](/guide/palette) 和 [`主题色`](/guide/token#主题色)

<!-- <show-code com-type="icon" com-show-type="color" /> -->
::: code-group

<<< @/examples/icons/Color.vue{4,8,12}

:::

## 图标大小

`Icons` 的 `size` 属性用来设置图标的尺寸大小，默认单位为 `rpx`。

<!-- <show-code com-type="icon" com-show-type="size" /> -->
::: code-group

<<< @/examples/icons/Size.vue{4,8,12}

:::

## 图标粗细

`Icons` 的 `weight` 属性用来设置图标的尺寸大小。

<!-- <show-code com-type="icon" com-show-type="weight" /> -->
::: code-group

<<< @/examples/icons/Weight.vue{4,8}

:::

## 动态图标 | 动效组件方式 <Badge color="primary" text="推荐使用" :text-color-level="0" />

可以通过 <a href="animate">Animate 动效组件</a> 实现图标的动画效果

<!-- <show-code com-type="icon" com-show-type="animation" /> -->
::: code-group

<<< @/examples/icons/Animate.vue

:::

## 动态图标 | class动画方式 <Badge color="danger" :text-color-level="0" text="不支持app-nvue" />

可以通过 class 设置组件库内置动画效果， 可在组件的公共属性 `custom-class` 加 class 动画效果

<!-- <show-code com-type="icon" com-show-type="class-animation" /> -->
::: code-group

<<< @/examples/icons/Class.vue{5,9,14,19,25}

:::

## 自定义图标

组件图标库已经整理了日常开发中常用的图标，但是因为包体积问题无法无限制添加新的图标进去，所以组件图标库提供了扩展的方法；如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 字体图标平台 对应的ttf字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用。

### 1. 引入 [iconfont](https://www.iconfont.cn/)   【推荐此方案】
::: tip 提示
+ 其他图标平台使用方法和 `iconfont` 类似，都是需要引入该图标平台的 对应的ttf字体文件和 CSS 文件
+ `svg` 图标使用需要借助第三方工具，如 [svgtofont](https://github.com/jaywcjlove/svgtofont) 或 [icommoon](https://icomoon.io/app/#/select) 将svg图标转换为ttf字体图标
:::

+ ##### 首先在 [iconfont](https://www.iconfont.cn/) 生成你自定义的Icon文件下载存放至本地项目  [详细使用说明](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code)

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
/assets/font/iconfont.json
```

+ #### 引入图标
  - 项目入口文件 `main.ts` 或 `App.vue` 引用 `iconfont.css`
  ::: danger 警告
  该方案不支持 `app-nvue`，`app-nvue`的支持方案参考 [app-nvue 图标引入](/component/icons#app-nvue-图标引入)
  :::
  ```ts
  import './assets/font/iconfont.css';
  ```
  - ##### app-nvue 图标引入
  ::: tip 提示
  + `app-nvue` 引入图标比较简单，仅仅需要通过 `icon-url` 属性传入图标字体的文件的 `ttf路径` 即可
  :::

+ #### 设置自定义图标的基础样式
::: tip 提示
这一步也可以省略，图标库提供了`custom-font-family`，可以自动适应图标库默认的基础样式
:::
```css
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
}
```

+ #### 使用自定义图标
::: tip 提示
+ custom-class-name: 为[第三步](/component/icons#第三步-设置自定义图标的基础样式)中的 `class` 名称
+ custom-font-family: 设置为自定义图标的 `font-family`
+ custom-prefix: 设置为自定义图标css中的图标 `class前缀`
+ name: 图标名称
:::
`vue` 使用
```vue
<kui-icons 
  custom-class-name="iconfont" 
  custom-font-family="iconfont" 
  custom-prefix="icon" 
  name="close" />
```
`nvue` 使用
::: warning 注意
由于`nvue`下没有高亮提示，为了演示需要示例中改成了`vue`，实际需要在 `nvue` 下使用
:::
```vue
<kui-icons 
  custom-class-name="iconfont" 
  custom-font-family="iconfont"
  unicode="e646" />
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
| custom-class-name          | 自定义icon基础类名                                | String            | `kui-icons`           |
| custom-prefix         | 自定义icon类名前缀                 | String            | `kui-icon`                |
| unicode            | 自定义图标的unicode值，<a-link>nvue有效</a-link>                                | Number            | -                |
| icon-url            | 自定义图标的ttf字体文件路径                                | String            | -                |
| mode [`公共属性`](#) | 页面模式，见 [组件公共属性](/guide/component#组件公共属性) | String | `light` 
| custom-class [`公共属性`](#) | 自定义class，见 [组件公共属性](/guide/component#组件公共属性) | String | -
| custom-style [`公共属性`](#) | 自定义style，见 [组件公共属性](/guide/component#组件公共属性) | CSSProperties | {}

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
