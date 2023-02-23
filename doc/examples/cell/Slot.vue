<template>
    <kui-cell title="测试标题" :show-right-icon="false">
        <template #content>
            <kui-text content="内容插槽示例" />
        </template>
    </kui-cell>
    <kui-cell title="右边图标插槽示例">
        <template #right-icon>
            <kui-icons name="like-filled" color="red" />
        </template>
    </kui-cell>
</template>
  