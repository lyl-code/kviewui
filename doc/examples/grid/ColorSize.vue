<template>
  <kui-grid :columns="3" iconColor="#00BC79">
    <template v-for="i in 3" :key="i">
      <kui-grid-item
        icon="like-filled"
        :iconColor="i == 2 ? '#3491FA' : ''"
        :iconSize="i == 2 ? 35 : 30"
        text="文本"
      />
    </template>
  </kui-grid>
</template>
