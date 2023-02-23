import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import HomeLayout from './layout/HomeLayout.vue';
import Storage from '../vitepress/composables/storage';
import vitepressNprogress from 'vitepress-plugin-nprogress';
import 'vitepress-plugin-nprogress/lib/css/index.css';

import 'uno.css';
import './styles/global.less';
import './styles/vars.css';

const theme: Theme = {
    ...DefaultTheme,
    // Layout: HomeLayout,
    enhanceApp(ctx) {
        vitepressNprogress(ctx);
        ctx.app.use(createPinia()).use(Storage);
    },
};

export default theme;