<template>
  <kui-cell-group custom-class="kui-mt-3" title="角标示例" desc="建议关闭边框显示">
    <kui-grid icon-color="danger" :columns="3">
      <template v-for="item in list" :key="item">
        <kui-grid-item square>
          <view
            class="kui-flex kui-flex-1 kui-flex-col kui-items-center kui-justify-center"
          >
            <kui-icons :name="item.icon" :color="item.iconColor" />
            <!-- #ifndef APP-NVUE -->
            <view class="kui-mt-2" />
            <!-- #endif -->
            <kui-text :value="item.text" />
            <view class="kui-absolute" style="top: 15px; right: 20px" v-if="item.badge">
              <kui-badge :type="item.badgeType" :value="`${item.badge}`" />
            </view>
          </view>
        </kui-grid-item>
      </template>
    </kui-grid>
  </kui-cell-group>
</template>

<script lang="ts" setup>
import type { Ref } from "vue";

const list: Ref = ref([
  {
    icon: "like-filled",
    iconColor: "danger",
    text: "文本信息",
    badge: 1,
    badgeType: "primary",
  },
  {
    icon: "favor-filled",
    iconColor: "warning",
    text: "文本信息",
    badge: 3,
    badgeType: "warning",
  },
  {
    icon: "appreciate-filled",
    iconColor: "primary",
    text: "文本信息",
    badge: 99,
    badgeType: "danger",
  },
  {
    icon: "like-filled",
    iconColor: "danger",
    text: "文本信息",
    badge: 8,
    badgeType: "danger",
  },
  {
    icon: "appreciate-filled",
    iconColor: "primary",
    text: "文本信息",
  },
  {
    icon: "appreciate-filled",
    iconColor: "primary",
    text: "文本信息",
  },
  {
    icon: "appreciate-filled",
    iconColor: "primary",
    text: "文本信息",
  },
  {
    icon: "appreciate-filled",
    iconColor: "primary",
    text: "文本信息",
  },
  {
    icon: "appreciate-filled",
    iconColor: "primary",
    text: "文本信息",
  },
]);
</script>
