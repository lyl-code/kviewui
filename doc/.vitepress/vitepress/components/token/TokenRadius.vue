<script setup lang="ts">
// import { colors } from '~/composables/colors'
import { theme as presetTheme } from '@kviewui/theme';
// import { fontWeight, fonts, radiusSize } from '~/composables/size'
const { radiusSize } = presetTheme.size;

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

const radiusData = reactive([{
    key: 'none',
    useScene: '直角',
}, {
    key: 'xs',
    useScene: '常规-小',
}, {
    key: 'sm',
    useScene: '常规-中',
}, {
    key: 'base',
    useScene: '常规',
}, {
    key: 'lg',
    useScene: '较大',
}, {
    key: 'xl',
    useScene: '大',
}, {
    key: 'max',
    useScene: '全圆角',
}])

</script>

<template>
    <div class="w-full">
        <!-- 边框圆角 -->
        <a-table :columns="columns" :data="radiusData" column-resizable :bordered="false" :pagination="false">
            <template #cssValue="{ record }">
                <span>{{ record.key }}</span>
            </template>
            <template #dataValue="{ record }">
                <span>{{ radiusSize[record.key] }}px</span>
            </template>
            <template #dataName="{ record }">
                <span>{{ `rounded-${record.key}` }}</span>
            </template>
        </a-table>
    </div>
</template>
