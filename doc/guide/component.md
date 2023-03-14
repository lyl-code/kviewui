---
title: 组件指南
# aside: false
---

#### <span class="text-lg text-gray-500 font-normal">指南</span>

<!-- [[toc]] -->


# 组件指南
组件的使用指南将在这里说明。

## 安装方法
组件库支持 [`全局安装`](/guide/component#全局安装) 和 [`按需引入`](/guide/component#按需引入) 两种方式安装使用。
### 全局安装
::: code-group

```ts [main.ts] {2,7}
import { createSSRApp } from "vue";
import KviewUI from 'kviewui';
import App from "./App.vue";

export function createApp() {
  const app = createSSRApp(App);
  app.use(KviewUI);
  return {
    app,
  };
}
```

:::

### 按需引入
::: tip 提示
示例以[`Button 按钮组件`](/component/button)为例
:::

```ts
// 仅仅H5环境支持
import { KuiButton } from 'kviewui';
// 或 跨端推荐
import KuiButton from 'kviewui/src/button/index.vue';
```

## 引入组件库样式和动画库样式
::: tip 提示
如果不需要动画组件时可不用引入动画库样式
:::

::: code-group

```vue [App.vue]
<style>
    /* 引入组件库样式 */
	@import url('kviewui/styles/kviewui/index.css');
	/* 引入动画包样式 */
	@import url('@kviewui/animate/styles/index.css');
</style>
```

:::

## 组件自动引入
### uni-app 【easycom】
可参考[uniapp easycom](https://uniapp.dcloud.net.cn/collocation/pages.html#easycom)指南，完成组件库的自动引入。

::: code-group

```json [pages.json]{4,5,6,7,8}
{
    // pages配置项省略
    ...,
    "easycom": {
		"custom": {
			"kui-(.*)": "kviewui/src/$1/index.vue"
		}
	}
}
```

:::

### vite 【unplugin-vue-components】
::: tip 提示
目前测试仅支持vue
:::
可借助vite的`unplugin-vue-components`插件实现组件自动注册。

::: code-group

```ts [vite.config.ts] {10-15}
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
// 组件动态注册【仅支持vue页面】
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        uni(),
        Components({
            extension: ["vue"],
            include: [/\.vue$/, /\.vue\?vue/],
            // 自动生成注册组件的类型定义存储路径，可以自定义路径
            dts: "src/components.d.ts",
            dirs: ["node_modules/kviewui/src"],
        })
    ]
});
```

:::

## 组件样式生产优化 【postcss-purgecss】
组件库样式是全局的`原子化css库`，通过样式库简单语法即可大大提升开发者css布局排版效率，因为组件库样式是全局引入，所以也因此带来了很多没用到的css代码负担。还好`vite`提供了`css处理能力`，借助vite css的`postcss`处理能力，可通过`postcss-purgecss`插件对页面没用到的组件样式进行剔除。

::: code-group

```ts [vite.config.ts] {14-21}
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
// 打包剔除页面没用到的全局css，可参考[purgecss](https://www.purgecss.cn)
import purgecss from "@fullhuman/postcss-purgecss";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        uni()
    ],
    css: {
        postcss: {
            plugins: [
                purgecss({
                    content: [
                        "./src/**/*.vue", 
                        "./src/**/*.nvue", 
                        "node_modules/kviewui/src/**/*.vue"
                    ],
                    safelist: [/^uni-(.*)/],
                })
            ]
        }
    }
});
```

:::

## 组件公共属性

### Props
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | ---
| mode | 页面模式，有效值见下方说明 | String | light
| custom-class | 自定义class，如果要覆盖组件样式需要`! important`提权 | String | -
| custom-style | 自定义style，参考[csstype](https://github.com/frenic/csstype)，会覆盖组件同类型样式属性 | CSSProperties | {}
| group | 是否启用组模式，单独使用 [`Cell Group`](/component/cell#链接-分组用法-常规布局) 时有效 | Boolean | `true`
| space-provider | 是否接收space的provide参数，用于不需要接收space的provide参数组件场景 | Boolean | `true`

### Mode 有效值
| 值 | 说明 
|---|--- 
| light | 明亮模式 
| dark | 暗黑模式 