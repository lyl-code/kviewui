<template>
  <view id="page-app">
    <kui-page :custom-header="false" :padding-y="0">
      <view
        class="body kui-w-full kui-h-full kui-box-border kui-absolute kui-inset-t-0 kui-inset-l-0 kui-p-3"
      >
        <view class="kui-h-full">
          <view
            class="kui-bg-white kui-h-96 kui-p-3 kui-rounded-md"
            ref="container"
            id="container"
          >
            <kui-sticky
              :top="100"
              :container="container"
              :proxy="proxy"
              container-id="container"
              ref="sticky"
            >
              <kui-button type="warning" value="指定容器" />
            </kui-sticky>
          </view>
        </view>
      </view>
    </kui-page>
  </view>
</template>

<script lang="ts" setup>
import { onPageScroll, onReady, onUnload } from "@dcloudio/uni-app";

import { ref, getCurrentInstance } from "vue";
import { useKviewuiRect } from "@kviewui/utils";

const container = ref(null);
const { proxy }: any = getCurrentInstance();

const observerStart = uni.createIntersectionObserver(proxy);
const observerEnd = uni.createIntersectionObserver(proxy);

onReady(() => {
  // 获取节点信息
  useKviewuiRect(container, "container").then((res) => {
    observerStart
      .relativeToViewport({ top: -res.height })
      .observe(`#container`, (res) => {
        proxy.$refs["sticky"].observerStart(res);
      });
    observerEnd.relativeToViewport({ top: -120 }).observe("#container", (res) => {
      proxy.$refs["sticky"].observerEnd(res);
    });
  });
  // observer.disconnect();
});

onUnload(() => {
  // 停止节点监听
  observerStart.disconnect();
  observerEnd.disconnect();
});
</script>

<style>
page {
  background-color: #f8f8f8;
}
.body {
  min-height: 200vh;
}
</style>
