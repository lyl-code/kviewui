<template>
  <view class="kui-w-full">
    <view class="kui-mb-3">
      <kui-tag size="large" half-round="right" type="primary" text="大号标签" />
    </view>
    <kui-space :gap="[30, 20]" align="center">
      <kui-tag size="normal" half-round="right" type="primary" text="普通标签" />
      <kui-tag size="small" half-round="right" type="primary" text="小型标签" />
      <kui-tag size="mini" half-round="right" type="primary" text="迷你标签" />
    </kui-space>
  </view>
  <view class="kui-w-full">
    <view class="kui-my-3">
      <kui-tag size="large" half-round="left" type="primary" text="大号标签" />
    </view>
    <kui-space :gap="[30, 20]" align="center">
      <kui-tag size="normal" half-round="left" type="primary" text="普通标签" />
      <kui-tag size="small" half-round="left" type="primary" text="小型标签" />
      <kui-tag size="mini" half-round="left" type="primary" text="迷你标签" />
    </kui-space>
  </view>
</template>
