<script setup lang="ts">
const store = useUserStore()

const { darkMode } = storeToRefs(store)
const mode = ref(darkMode);

const menus = reactive([
  {
    isDark: false,
    name: '明亮模式',
  }, {
    isDark: true,
    name: '暗黑模式',
  },
])

const changeDark = (e) => {
    store.setMode(e);
//   darkMode.value = e
//   toggleDark()
//   store.setMode(e)
  //   console.log(darkMode.value, '切换模式')
//   if (darkMode.value)
//     document.body.setAttribute('arco-theme', 'dark')

//   else
//     document.body.removeAttribute('arco-theme')
}
</script>

<template>
  <a-radio-group v-model="mode" type="button" @change="changeDark">
    <a-radio v-for="(item, index) in menus" :key="index" :value="item.isDark">
      <div :class="mode === item.isDark ? 'dark:!color-blue5' : ''">
        {{ item.name }}
      </div>
    </a-radio>
  </a-radio-group>
</template>
