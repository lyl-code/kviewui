import { createSSRApp } from "vue";
import Button from './src/button/index.vue';
import Page from './src/page/index.vue';
import Image from './src/image/index.vue';
import Text from './src/text/index.vue';
import Container from './src/container/index.vue';
import Switch from './src/switch/index.vue';
import CellGroup from './src/cell-group/index.vue';
import Cell from './src/cell/index.vue';
import Icons from './src/icons/index.vue';
import Space from './src/space/index.vue';
import ConfigProvider from './src/config-provider/index.vue';
import Animate from './src/animate/index.vue';
import Tag from './src/tag/index.vue';
import Badge from './src/badge/index.vue';
import Row from './src/row/index.vue';
import Col from './src/col/index.vue';
import Grid from './src/grid/index.vue';
import GridItem from './src/grid-item/index.vue';
import View from './src/view/index.vue';
import Divider from './src/divider/index.vue';
import Sticky from './src/sticky/index.vue';

import { theme } from "@kviewui/theme";
// import { theme } from "./common/theme";

function install(app) {
    const packages = [
        Button, Page, Image, Text, Container, Switch, CellGroup, 
        Cell, Icons, Space, ConfigProvider, Animate, Tag, Badge,
        Row, Col, Grid, GridItem, View, Divider, Sticky
    ];

    packages.forEach((item) => {
        if (item.install) {
            app.use(item);
        } else if (item.name) {
            app.component(item.name, item);
        }
    });
}

const app = createSSRApp(import('vue'));

uni['$kView'] = {
    install,
    theme: theme,
    app
}

const version = '1.0.0';

// 为了解决setup语法糖引入组件无法识别组件名称的问题，所以这里导出组件的时候加了别名
export {
    Button as KuiButton,
    Page as KuiPage,
    Image as KuiImage,
    Text as KuiText,
    Container as KuiContainer,
    Switch as KuiSwitch,
    CellGroup as KuiCellGroup,
    Cell as KuiCell,
    Space as KuiSpace,
    ConfigProvider as KuiConfigProvider,
    Icons as KuiIcons,
    Animate as KuiAnimate,
    Tag as KuiTag,
    Badge as KuiBadge,
    Row as KuiRow,
    Col as KuiCol,
    Grid as KuiGrid,
    GridItem as KuiGridItem,
    View as KuiView,
    Divider as KuiDivider,
    Sticky as KuiSticky,
    theme,
    app,
    version
}

export default {
    install,
    theme,
    app,
    version
}