<template>
  <kui-grid :columns="3" iconColor="#00BC79">
    <template v-for="i in 3" :key="i">
      <kui-grid-item custom-class="kui-flex-1 kui-justify-center">
        <kui-icons name="favor-filled" color="warning" :size="60" />
      </kui-grid-item>
    </template>
  </kui-grid>
</template>
