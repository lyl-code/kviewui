<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme';

const { Layout } = DefaultTheme;
</script>

<template>
    <Layout>
        <template #nav-bar-title-after>
            <a-tag size="small" round>1.0.0</a-tag>
        </template>
    </Layout>
</template>