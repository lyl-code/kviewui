<template>
  <kui-grid icon-color="danger" :columns="4">
    <template v-for="i in 4" :key="i">
      <kui-grid-item 
        square 
        icon="like-filled" 
        text="文本信息" />
    </template>
  </kui-grid>
</template>
