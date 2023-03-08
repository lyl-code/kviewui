<template>
  <kui-image
    width="440rpx"
    height="440rpx"
    :radius="30"
    src="https://www.kviewui.com/images/squirrel.png"
    @click="onClick"
  />
</template>

<script lang="ts" setup>
const onClick = () => {
  uni.showToast({
    title: "图片被点击",
  });
};
</script>
