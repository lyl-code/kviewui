<template>
  <kui-cell-group custom-class="kui-mt-3" title="滑动视图" desc="建议关闭边框显示">
    <swiper
      class="kui-h-64"
      :indicator-active-color="getThemeColor('primary')"
      indicator-dots
    >
      <swiper-item>
        <kui-grid icon-color="danger" :columns="4" :border="false">
          <template v-for="i in 12" :key="i">
            <kui-grid-item
              background-color="grey"
              :background-color-level="1"
              square
              icon="like-filled"
              text="文本信息"
            />
          </template>
        </kui-grid>
      </swiper-item>
      <swiper-item>
        <kui-grid icon-color="warning" :columns="4" :border="false">
          <template v-for="i in 12" :key="i">
            <kui-grid-item
              background-color="grey"
              :background-color-level="1"
              square
              icon="favor-filled"
              text="文本信息"
            />
          </template>
        </kui-grid>
      </swiper-item>
      <swiper-item>
        <kui-grid icon-color="primary" :columns="4" :border="false">
          <template v-for="i in 12" :key="i">
            <kui-grid-item
              background-color="grey"
              :background-color-level="1"
              square
              icon="appreciate-filled"
              text="文本信息"
            />
          </template>
        </kui-grid>
      </swiper-item>
    </swiper>
  </kui-cell-group>
</template>

<script lang="ts" setup>
import { getThemeColor } from "kviewui/src/shared/tools";
</script>
