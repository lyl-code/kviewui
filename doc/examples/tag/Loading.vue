<template>
  <kui-space :gap="[30, 20]">
    <kui-tag
      loading
      :custom-style="{
        paddingRight: '5px',
      }"
      :text-out-view-style="{
        marginRight: '1px',
      }"
      text="加载中标签"
    />
    <kui-tag
      loading
      :custom-style="{
        paddingRight: '5px',
      }"
      :text-out-view-style="{
        marginRight: '1px',
      }"
      loading-icon="spinner9"
      text="自定义图标"
    />
  </kui-space>
</template>
