<template>
  <view id="page-app">
    <kui-page :custom-header="false" :padding-y="0">
      <view
        class="body kui-w-full kui-h-full kui-box-border kui-absolute kui-inset-t-0 kui-inset-l-0 kui-p-3"
      >
        <view class="kui-h-full">
          <view class="kui-bg-white kui-h-8 kui-p-3 kui-rounded-md">
            <kui-sticky>
              <kui-button type="primary" value="基本用法" />
            </kui-sticky>
          </view>
        </view>
      </view>
    </kui-page>
  </view>
</template>

<style>
page {
  background-color: #f8f8f8;
}
.body {
  min-height: 200vh;
}
</style>
