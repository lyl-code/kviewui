<script setup lang="ts">
// import { colors } from '~/composables/colors'
import { theme as presetTheme } from '@kviewui/theme';
// import { fontWeight, fonts, radiusSize } from '~/composables/size'
const { fonts } = presetTheme.size;
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

const fontData = reactive([{
    key: 'base',
    useScene: '正文-常规',
}, {
    key: 'sm',
    useScene: '正文-中',
}, {
    key: 'sm',
    useScene: '辅助文案/次要文案',
}, {
    key: 'xs',
    useScene: '正文-小',
}, {
    key: 'lg',
    useScene: '标题-小',
}, {
    key: 'xl',
    useScene: '标题-中',
}, {
    key: '2xl',
    useScene: '标题-大',
}, {
    key: '4xl',
    useScene: '运营标题-小',
}, {
    key: '5xl',
    useScene: '运营标题-中',
}, {
    key: '6xl',
    useScene: '运营标题-大',
}])

</script>

<template>
    <div class="w-full">
        <!-- 字体大小设计变量 -->
        <a-table :columns="columns" :data="fontData" column-resizable :bordered="false" :pagination="false">
            <template #dataName="{ record }">
                <div class="flex items-center">
                    <span>{{ `fonts['${record.key}']` }}</span>
                </div>
            </template>
            <template #cssValue="{ record }">
                <span>{{ `text-${record.key}` }}</span>
            </template>
            <template #dataValue="{ record }">
                <span>{{ fonts[record.key] }}px</span>
            </template>
        </a-table>
    </div>
</template>
