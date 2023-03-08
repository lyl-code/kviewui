<template>
  <kui-image
    src="https://www.kviewui.com/images/squirrel.png"
    width="440rpx"
    height="440rpx"
    :radius="30"
    preview
    @click="onPreview"
  />
</template>

<script lang="ts" setup>
const onPreview = () => {
  uni.previewImage({
    urls: ["https://www.kviewui.com/images/squirrel.png"],
    success: (result) => {},
    fail: (error) => {},
  });
};
</script>
