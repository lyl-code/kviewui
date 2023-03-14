const getGuideSidebar = () => {
    return [
        {
            text: "开发指南",
            items: [
                { text: '介绍', link: '/guide/intro' },
                { text: '快速上手', link: '/guide/start' },
                { text: '颜色', link: '/guide/palette' },
                { text: '设计变量', link: '/guide/token' },
                { text: '组件指南', link: '/guide/component' }
            ]
        },
        {
            text: "CSS全局样式库",
            items: [
                { text: '介绍', link: '/guide/css/intro' },
                { text: 'Box Sizing', link: '/guide/css/box-sizing' },
                { text: 'Display', link: '/guide/css/display' },
                { text: '溢出', link: '/guide/css/overflow' },
                { text: '定位', link: '/guide/css/position' },
                { text: '定位位置', link: '/guide/css/top-right-bottom-left' },
                { text: '层级', link: '/guide/css/z-index_' },
                { text: 'Flex方向', link: '/guide/css/flex-direction' },
                { text: 'Flex Wrap', link: '/guide/css/flex-wrap' },
                { text: 'Flex', link: '/guide/css/flex' },
                { text: 'Flex Grow', link: '/guide/css/flex-grow' },
                { text: 'Flex Shrink', link: '/guide/css/flex-shrink' },
                { text: 'Grid Template Columns', link: '/guide/css/grid-template-columns' },
                { text: 'Grid Column Start / End', link: '/guide/css/grid-column' },
                { text: 'Grid Template Rows', link: '/guide/css/grid-template-rows' },
                { text: 'Grid Row Start / End', link: '/guide/css/grid-row' },
                { text: 'Grid Auto Flow', link: '/guide/css/grid-auto-flow' },
                { text: 'Grid Auto Columns', link: '/guide/css/grid-auto-columns' },
                { text: 'Grid Auto Rows', link: '/guide/css/grid-auto-rows' },
                { text: 'Gap', link: '/guide/css/gap' },
                { text: 'Justify Content', link: '/guide/css/justify-content' },
                { text: 'Justify Items', link: '/guide/css/justify-items' },
                { text: 'Justify Self', link: '/guide/css/justify-self' },
                { text: 'Align Content', link: '/guide/css/align-content' },
                { text: 'Align Items', link: '/guide/css/align-items' },
                { text: 'Align Self', link: '/guide/css/align-self' },
                { text: 'Place Content', link: '/guide/css/place-content' },
                { text: 'Place Items', link: '/guide/css/place-items' },
                { text: 'Place Self', link: '/guide/css/place-self' },
                { text: '内边距', link: '/guide/css/padding' },
                { text: '外边距', link: '/guide/css/margin' },
                { text: '宽度', link: '/guide/css/width' },
                { text: '最小宽度', link: '/guide/css/min-width' },
                { text: '最大宽度', link: '/guide/css/max-width' },
                { text: '高度', link: '/guide/css/height' },
                { text: '最小高度', link: '/guide/css/min-height' },
                { text: '最大高度', link: '/guide/css/max-height' },
                { text: '字体序列', link: '/guide/css/font-family' },
                { text: '字体大小', link: '/guide/css/font-size' },
                { text: '字体平滑度', link: '/guide/css/font-smoothing' },
                { text: '字体样式', link: '/guide/css/font-style' },
                { text: '字体粗细', link: '/guide/css/font-weight' },
                { text: 'Font Variant Numeric', link: '/guide/css/font-variant-numeric' },
                { text: '字母间距', link: '/guide/css/letter-spacing' },
                { text: '行高', link: '/guide/css/line-height' },
                { text: '占位文本色', link: '/guide/css/placeholder-color' },
                { text: '文本对齐', link: '/guide/css/text-align' },
                { text: '文本颜色', link: '/guide/css/text-color' },
                { text: '文本装饰', link: '/guide/css/text-decoration' },
                { text: '文本转换', link: '/guide/css/text-transform' },
                { text: '文本溢出', link: '/guide/css/text-overflow' },
                { text: '垂直对齐', link: '/guide/css/vertical-align' },
                { text: '空格', link: '/guide/css/whitespace' },
                { text: '文本换行', link: '/guide/css/word-break' },
                { text: '背景图像固定', link: '/guide/css/background-attachment' },
                { text: '背景图像裁剪', link: '/guide/css/background-clip' },
                { text: '背景颜色', link: '/guide/css/background-color' },
                { text: 'Background Origin', link: '/guide/css/background-origin' },
                { text: '背景图像位置', link: '/guide/css/background-position' },
                { text: '背景图像重复', link: '/guide/css/background-repeat' },
                { text: '背景图像大小', link: '/guide/css/background-size' },
                { text: '背景渐变', link: '/guide/css/background-gradient' },
                { text: '边框圆角', link: '/guide/css/border-radius' },
                { text: '边框厚度', link: '/guide/css/border-width' },
                { text: '边框样式', link: '/guide/css/border-style' },
                { text: '边框颜色', link: '/guide/css/border-color' },
                { text: '不透明度', link: '/guide/css/opacity' },
                { text: '模糊滤镜', link: '/guide/css/blur' },
                { text: '动画', link: '/guide/css/animation' },
                { text: '2D / 3D转换', link: '/guide/css/transform' },
                { text: '变换原点', link: '/guide/css/transform-origin' },
                { text: '旋转', link: '/guide/css/rotate' },
                { text: '大小调整', link: '/guide/css/resize' },
                { text: '用户选择', link: '/guide/css/user-select' },
                { text: '填充', link: '/guide/css/fill' },
                { text: '线条', link: '/guide/css/stroke' },
                { text: '线条厚度', link: '/guide/css/stroke-width' },
                { text: '屏幕阅读器', link: '/guide/css/screen-readers' }
            ]
        }
    ];
}

const getComponentSidebar = () => {
    return [
        {
            text: '基础组件',
            items: [
                { text: 'Button 按钮', link: '/component/button' },
                { text: 'Cell 单元格', link: '/component/cell' },
                { text: 'Image 图片', link: '/component/image' },
                { text: 'Icons 图标', link: '/component/icons' },
                { text: 'Overlay 遮罩', link: '/component/overlay' }
            ]
        },
        {
            text: '布局组件',
            items: [
                { text: 'Divider 分割线', link: '/component/divider' },
                { text: 'Grid 宫格', link: '/component/grid' },
                { text: 'Layout 布局', link: '/component/layout' },
                { text: 'Space 间隔', link: '/component/space' },
                { text: 'Sticky 粘性布局', link: '/component/sticky' }
            ]
        },
        {
            text: '展示组件',
            items: [
                { text: 'Animate 动画', link: '/component/animate' },
                { text: 'Badge 徽标', link: '/component/badge' },
                { text: 'Collapse 折叠面板', link: '/component/collapse' },
                { text: 'Progress 进度条', link: '/component/progress' },
                { text: 'Spin 加载动画', link: '/component/spin' },
                { text: 'Skeleton 骨架屏', link: '/component/skeleton' },
                { text: 'Tag 标签', link: '/component/tag' }
            ]
        },
        {
            text: '反馈组件',
            items: [
            ]
        }
    ];
}

const getSidebars = () => {
    return {
        '/guide/': getGuideSidebar(),
        '/component/': getComponentSidebar()
    }
}

type SidebarItem = {
    text: string
    items: SidebarItem[]
    link?: string
}

export const sidebars = getSidebars();