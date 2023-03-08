<template>
  <kui-space :gap="[30, 20]">
    <kui-tag
      closable
      :custom-style="{
        paddingRight: '5px',
      }"
      :text-out-view-style="{
        marginRight: '1px',
      }"
      text="可关闭标签"
    />
    <kui-tag
      closable
      :custom-style="{
        paddingRight: '5px',
      }"
      :text-out-view-style="{
        marginRight: '1px',
      }"
      close-icon="close"
      text="自定义关闭图标"
    />
  </kui-space>
</template>
