<script setup lang="ts">
// import { colors } from '~/composables/colors'
import { theme as presetTheme } from '@kviewui/theme';
// import { fontWeight, fonts, radiusSize } from '~/composables/size'

const colors = presetTheme.colors;
const props = defineProps({
    theme: {
        type: String,
        default: 'primary',
    },
})

const store = useUserStore()
const { darkMode } = storeToRefs(store)
const theme = ref(props.theme ? props.theme : 'primary')

const modeType = ref(!isDark ? 'dark' : 'light')

watchEffect(() => {
    console.log(darkMode.value, 'hhhaha')
    modeType.value = darkMode.value ? 'dark' : 'light'
})

const columns = [
    {
        title: '变量名',
        dataIndex: 'dataName',
        slotName: 'dataName',
        width: 260,
    },
    {
        title: '变量值',
        dataIndex: 'dataValue',
        slotName: 'dataValue',
        width: 200,
    },
    {
        title: 'CSS变量',
        dataIndex: 'cssValue',
        width: 200,
        slotName: 'cssValue',
    },
    {
        title: '使用场景',
        dataIndex: 'useScene',
        width: 550,
    },
]

const data = reactive([{
    key: 5,
    useScene: '常规使用',
    colorName: theme.value,
}, {
    key: 6,
    useScene: '点击状态',
    colorName: theme.value,
}, {
    key: 2,
    useScene: '一般禁用',
    colorName: theme.value,
}, {
    key: 1,
    useScene: '文字禁用',
    colorName: theme.value,
}, {
    key: 0,
    useScene: '白底悬浮',
    colorName: theme.value,
}, {
    key: 3,
    useScene: '特殊场景',
    colorName: theme.value,
}])

</script>

<template>
    <div class="w-full my-3">
        <!-- 功能色设计变量 -->
        <a-table class="w-full !scrollbar !scrollbar-rounded !scrollbar-w-0px !scrollbar-thumb-color-transparent" :columns="columns" :data="(data as any)" :bordered="false" :pagination="false">
            <template #dataName="{ record }">
                <div class="flex items-center">
                    <div class="w-4.5 h-4.5 rounded-sm mr-2" :style="{
                        'background-color': colors[modeType][props.theme][record.key],
                    }" />
                    <span>{{ `${props.theme}[${record.key}]` }}</span>
                </div>
            </template>
            <template #cssValue="{ record }">
                <span>{{ `${props.theme}-${record.key}` }}</span>
            </template>
            <template #dataValue="{ record }">
                <span>{{ colors[modeType][props.theme][record.key] }}</span>
            </template>
        </a-table>
    </div>
</template>
