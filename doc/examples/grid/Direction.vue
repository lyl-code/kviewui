<template>
  <kui-grid 
    icon-color="danger" 
    :columns="4" 
    direction="horizontal">
    <template v-for="i in 4" :key="i">
      <kui-grid-item icon="like-filled" text="文本" />
    </template>
  </kui-grid>
</template>
