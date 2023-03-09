<template>
    <kui-progress :percent="state.perecnt" color="#00BC79"></kui-progress>
    <view class="kui-flex kui-justify-center kui-mt-3">
        <kui-button @click="decrease">减少</kui-button>
        <view class="kui-mx-1"></view>
        <kui-button type="primary" @click="add">增加</kui-button>
    </view>
</template>

<script lang="ts" setup>
import {
    reactive,
    nextTick
} from 'vue';

const state = reactive({
    perecnt: 0,
    circlePercent: 0
});

const add = (type = '') => {
    nextTick(() => {
        if (type === 'circle') {
            state.circlePercent = state.circlePercent + 20;
            state.circlePercent = state.circlePercent > 100 ? 100 : state.circlePercent;
        } else {
            state.perecnt = state.perecnt + 20;
            state.perecnt = state.perecnt > 100 ? 100 : state.perecnt;
        }
        console.log(state.circlePercent);
    })
}

const decrease = (type = '') => {
    nextTick(() => {
        if (type === 'circle') {
            state.circlePercent = state.circlePercent - 20;
            state.circlePercent = state.circlePercent < 0 ? 0 : state.circlePercent;
        } else {
            state.perecnt = state.perecnt - 20;
            state.perecnt = state.perecnt < 0 ? 0 : state.perecnt;
        }
    })
}
</script>