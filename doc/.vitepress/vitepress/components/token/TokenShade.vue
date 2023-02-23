<script setup lang="ts">

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

const shadeOpenNessData = reactive([{
    key: '0',
    dataName: 'shadeOpenness',
    dataValue: 0.6,
    cssValue: '-',
    useScene: '黑色遮罩透明度',
}])
</script>

<template>
    <div class="w-full">
        <!-- 遮罩透明度 -->
        <div class="mb-10">
            <a-table :columns="columns" :data="shadeOpenNessData" :bordered="false" :pagination="false" />
        </div>
    </div>
</template>
