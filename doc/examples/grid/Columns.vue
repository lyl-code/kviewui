<template>
  <kui-grid 
    icon-color="danger" 
    :columns="3">
    <template v-for="i in 3" :key="i">
      <kui-grid-item custom-class="kui-bg-white" icon="like-filled" text="文本信息" />
    </template>
  </kui-grid>
</template>
