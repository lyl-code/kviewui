const getGuideSidebar = () => {
    return [
        {
            text: "开发指南",
            items: [
                { text: '介绍', link: '/guide/intro' },
                { text: '快速上手', link: '/guide/start' },
                { text: '颜色', link: '/guide/palette' },
                { text: '设计变量', link: '/guide/token' }
            ]
        },
        {
            text: "CSS全局样式库",
            items: [
                { text: '介绍', link: '/guide/css/intro' },
                { text: 'Box Sizing', link: '/guide/css/box-sizing' }
            ]
        }
    ];
}

const getSidebars = () => {
    return {
        '/guide/': getGuideSidebar(),
    }
}

type SidebarItem = {
    text: string
    items: SidebarItem[]
    link?: string
}

export const sidebars = getSidebars();