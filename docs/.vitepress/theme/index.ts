import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import Storage from '../vitepress/composables/storage';
import HomeLayout from './layout/HomeLayout.vue';

import 'uno.css';

const theme: Theme = {
    ...DefaultTheme,
    // Layout: HomeLayout,
    enhanceApp({ app }) {
        app.use(createPinia());
    },
};

export default theme;