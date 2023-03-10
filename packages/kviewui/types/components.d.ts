declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        kButton: typeof import('../index').KuiButton,
        kPage: typeof import('../index').KuiPage,
        kImage: typeof import('../index').KuiImage,
        kText: typeof import('../index').KuiText,
        kContainer: typeof import('../index').KuiContainer,
        kSwitch: typeof import('../index').KuiSwitch,
        kCellGroup: typeof import('../index').KuiCellGroup,
        kCell: typeof import('../index').KuiCell,
        kIcons: typeof import('../index').KuiIcons,
        kSpace: typeof import('../index').KuiSpace,
        kConfigProvider: typeof import('../index').KuiConfigProvider,
        kAnimate: typeof import('../index').KuiAnimate,
        kTag: typeof import('../index').KuiTag,
        kBadge: typeof import('../index').KuiBadge,
        kRow: typeof import('../index').KuiRow,
        kCol: typeof import('../index').KuiCol,
        kGrid: typeof import('../index').KuiGrid,
        kGridItem: typeof import('../index').KuiGridItem,
        kView: typeof import('../index').KuiView,
        kDivider: typeof import('../index').KuiDivider,
        kSticky: typeof import('../index').KuiSticky,
        kCollapse: typeof import('../index').KuiCollapse,
        kCollapseItem: typeof import('../index').KuiCollapseItem,
        kSection: typeof import('../index').KuiSection,
        kProgress: typeof import('../index').KuiProgress,
        kSpin: typeof import('../index').KuiSpin,
        kSkeleton: typeof import('../index').KuiSkeleton,
        kOverlay: typeof import('../index').KuiOverlay
    }
}

declare module "*.ttf"

export {}