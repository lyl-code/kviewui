<template>
    <view :id="elId" :class="[customClass]" :style="{
        ...spaceStyle,
        ...customStyle
    }" 
    :hover-class="hoverClass"
    :hover-stop-propagation="hoverStopPropagation"
    :hover-start-time="hoverStartTime"
    :hover-stay-time="hoverStayTime"
    @click="onClick" 
    @dblclick="onDbClick" 
    @touchstart="onTouchStart" 
    @touchmove="onTouchMove">
        <slot />
    </view>
</template>
<script lang="ts">
import { computed, CSSProperties, reactive, ref } from 'vue';

import { getSpaceProvideOptions } from '../shared/tools';
import { createComponent, getElId } from '@kviewui/utils';
import { viewProps } from './types';

const { create } = createComponent('view');

type Emits = 'click' | 'dbclick' | 'touchstart' | 'touchmove' | 'touchend' | 'longpress';

export default create({
    props: viewProps,
    emits: ['click', 'dbclick', 'touchstart', 'touchmove', 'touchend', 'longpress'],
    setup(props, { emit }) {
        const elId = ref(getElId());
        // 引入space组件provide
        const { spaceOptions } = getSpaceProvideOptions();

        const spaceStyle = computed(() => {
            const style: CSSProperties = reactive({});

            if (props.spaceProvide) {
                style.marginRight = spaceOptions.marginRight;
                style.marginBottom = spaceOptions.marginBottom;
            }

            return style;
        })

        const subEmit = (eventName: Emits, event: any) => {
            event['detail']['id'] = elId.value;
            event['detail']['options'] = props.options;
            emit(eventName, event);
        }

        const onClick = (event: Event) => {
            subEmit('click', event);
        }

        const onDbClick = (event: Event) => {
            subEmit('dbclick', event);
        }

        const onTouchStart = (event: Event) => {
            subEmit('touchstart', event);
        }

        const onTouchMove = (event: Event) => {
            subEmit('touchmove', event);
        }

        const onTouchEnd = (event: Event) => {
            subEmit('touchend', event);
        }

        const onLongPress = (event: Event) => {
            subEmit('longpress', event);
        }

        return {
            elId,
            spaceStyle,
            onClick,
            onDbClick,
            onTouchStart,
            onTouchMove,
            onTouchEnd,
            onLongPress
        }
    }
})
</script>