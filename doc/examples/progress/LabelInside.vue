<template>
    <view class="kui-mb-3">
        <kui-progress 
            :percent="30" 
            :line-width="10" 
            color="primary" 
            label-inside 
            label-inside-text-bottom="1px" />
    </view>
    <view class="kui-mt-5">
        <kui-progress 
            :percent="50" 
            :line-width="20" 
            color="primary" 
            label-inside-text-bottom="1px" 
            label-inside />
    </view>
    <view class="kui-mt-5">
        <kui-progress 
            :percent="70" 
            :line-width="30" 
            color="primary" 
            label-inside 
            label-inside-text-bottom="2px" />
    </view>
</template>