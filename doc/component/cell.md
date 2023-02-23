# Cell 单元格

列表项，可组成列表。

<!--@include: ./tips/introduce.md-->

<TipsIntroduce />

## 基本用法

可以通过 `title` 属性设置单元格标题，`sub-title` 属性设置副标题，`desc` 属性设置描述内容，`show-right-icon` 设置是否显示单元格右边箭头，`radius` 属性设置圆角大小

<!-- <show-code com-type="cell" com-show-type="base" /> -->
::: code-group

<<< @/examples/cell/Base.vue

:::

## 使用插槽

通过 `content` 插槽可以设置自定义单元格内容，`right-icon` 插槽可以设置自定义右边图标内容，也可以自定义右边显示非图标内容

<!-- <show-code com-type="cell" com-show-type="slot" /> -->
::: code-group

<<< @/examples/cell/Slot.vue

:::

## 链接 | 分组用法 | 常规布局

可以通过 `title` 属性设置分组标题，`desc` 属性设置分组描述内容

<!-- <show-code com-type="cell" com-show-type="link-group-base" /> -->
::: code-group

<<< @/examples/cell/LinkGroupBase.vue

:::

## 链接 | 分组用法 | 间隔布局

可以通过 `type` 属性设置分组间隔

<!-- <show-code com-type="cell" com-show-type="link-group-space" /> -->
::: code-group

<<< @/examples/cell/LinkGroupSpace.vue

:::

## 自定义左侧图标区域

可以通过 `left-icon` 插槽设置左侧自定义图标

<!-- <show-code com-type="cell" com-show-type="left-icon" /> -->
::: code-group

<<< @/examples/cell/LeftIcon.vue

:::

## 展示图标

可以通过 `icon` 属性设置单元格图标

<!-- <show-code com-type="cell" com-show-type="icon" /> -->
::: code-group

<<< @/examples/cell/Icon.vue

:::

## 垂直居中

通过 `center` 属性可以让 Cell 的左右内容都垂直居中。

<!-- <show-code com-type="cell" com-show-type="center" /> -->
::: code-group

<<< @/examples/cell/Center.vue

:::

## API

### CellGroup Props

| 字段 | 说明 | 类型 | 默认值 
| --- | --- | --- | --- 
| title | 分组标题 | String | - 
| cell-title-weight | 单元格标题粗细 | Number | - 
| cell-radius | 单元格圆角大小 | Number | - 
| desc | 分组描述 | String | - 
| type | 单元格类型，有效值见下方说明 | String | `normal` 

### Type 有效值
| 值 | 说明 
| --- | --- 
| normal | 常规布局 
| space | 间隔布局 

### Cell Props

| 字段 | 说明 | 类型 | 默认值 
| --- | --- | --- | --- 
| title | 标题名称 | String | - 
| title-size | 标题大小 | Number | - 
| title-weight | 标题粗细 | Number | 400 
| color | 标题颜色 | String | - 
| sub-title | 左侧副标题 | String | - 
| sub-title-color | 副标题颜色 | String | - 
| desc | 右侧描述 | String | - 
| desc-color | 描述内容颜色 | String | - 
| radius | 圆角大小 | Number | 10 
| click-status | 点击态 | Boolean | true 
| show-right-icon | 是否展示右侧箭头 | Boolean | true 
| mode `通用属性` | 页面模式，有效值见下方说明 | String | light 
| url `非H5环境为复制链接` | 点击后跳转的链接地址 | String | - 
| icon | 左边图标 | String | - 
| center | 是否使内容垂直居中 | Boolean | false 

### Mode 有效值
| 值 | 说明 |
| --- | --- 
| light | 明亮模式 
| dark | 暗黑模式 

### Cell Slots

| 名称 | 说明 
| --- | --- 
| left-icon | 自定义左侧`icon`区域 
| content | 自定义内容 
| right-icon | 自定义右侧`icon`区域 

### Cell Events

| 名称 | 说明 | 回调参数 
| --- | --- | --- 
| click | 点击事件 | event:Event 

### CellGroup Slots

| 名称 | 说明 
| --- | --- 
| title | 自定义`title`标题区域 
| desc | 自定义`desc`描述区域 