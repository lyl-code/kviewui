<script setup lang="ts">
// import { colors } from '~/composables/colors'
import { theme as presetTheme } from '@kviewui/theme';
// import { fontWeight, fonts, radiusSize } from '~/composables/size'
const { fontWeight } = presetTheme.size;

// console.log(colors)
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

const fontWeightData = reactive([{
    key: 'thin',
    useScene: '极细',
}, {
    key: 'extralight',
    useScene: '纤细',
}, {
    key: 'light',
    useScene: '细体',
}, {
    key: 'normal',
    useScene: '常规',
}, {
    key: 'medium',
    useScene: '中等加粗',
}, {
    key: 'semibold',
    useScene: '半粗',
}, {
    key: 'bold',
    useScene: '粗体',
}, {
    key: 'extrabold',
    useScene: '中黑',
}, {
    key: 'black',
    useScene: '黑体',
}])

</script>

<template>
    <div class="w-full">
        <!-- 字重 -->
        <a-table :columns="columns" :data="fontWeightData" column-resizable :bordered="false" :pagination="false">
            <template #dataName="{ record }">
                <div class="flex items-center">
                    <span>{{ `fontWeight['${record.key}']` }}</span>
                </div>
            </template>
            <template #cssValue="{ record }">
                <span>{{ `font-${record.key}` }}</span>
            </template>
            <template #dataValue="{ record }">
                <span>{{ fontWeight[record.key] }}</span>
            </template>
        </a-table>
    </div>
</template>
