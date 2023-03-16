<template>
    <a-badge :text="text" :count="count" :dot-style="{
        background: getColor(color, mode, colorLevel),
        color: getColor(textColor, mode, textColorLevel)
    }" />
</template>

<script lang="ts" setup>
import { theme } from '@kviewui/theme';
// import { getThemeColor as themeColor } from '../composables/colors';

console.log(theme);

// console.log(themeColor('primary', 'light', 5));

const props = defineProps({
    color: {
        type: String,
        default: 'primary'
    },
    colorLevel: {
        type: Number as PropType<KuiNamespace.ColorLevel>,
        default: 5
    },
    text: {
        type: String,
        default: '测试'
    },
    mode: {
        type: String as PropType<KuiNamespace.ModeEnum>,
        default: 'light'
    },
    textColor: {
        type: String,
        default: 'grey'
    },
    textColorLevel: {
        type: Number as PropType<KuiNamespace.ColorLevel>,
        default: 5
    },
    count: {
        type: Number,
        default: 0
    }
});

const getColor = (color: string, mode: KuiNamespace.ModeEnum, colorLevel: KuiNamespace.ColorLevel) => {
    return theme.colors[mode][color][colorLevel];
}

</script>