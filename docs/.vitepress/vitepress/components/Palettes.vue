<script lang="ts" setup>
import * as lodash from "lodash";
import { colorPresetNames } from "../composables/colors";
import { theme } from "@kviewui/theme";

const colors = theme.colors;

const light = colors.light;
const dark = colors.dark;

const store = useUserStore();
const { darkMode } = storeToRefs(store);
// const timer = setInterval(() => {
//     // console.log(document.getElementsByTagName('html')[0].className);
//     if (document.getElementsByTagName('html')[0].className === 'dark') {
//         store.setMode(true);
//         document.body.setAttribute('arco-theme', 'dark');
//     }
//     else
//         document.body.removeAttribute('arco-theme');
// }, 1000);
</script>

<template>
    <div class="grid-cols-3 lt-sm:grid-cols-1 grid gap-5 mt-10">
        <div v-for="(item, index) in colorPresetNames" :key="index" class="flex flex-col justify-center items-center">
            <div class="text-lg font-black text-black mb-3 dark:text-white">
                {{ lodash.upperFirst(item.enName) }} / {{ item.name }}
            </div>
            <template v-if="darkMode">
                <div v-for="(childItem, childIndex) in light[item.enName]" :key="childIndex"
                    class="h-10 w-full flex items-center justify-between px-3 cursor-pointer hover:scale-105 hover:transition hover:duration-200"
                    :class="childIndex > 4 ? 'text-white' : 'text-black'" :style="{
                        'background-color': childItem,
                        'border-top-left-radius': childIndex === 0 ? '8px' : '0px',
                        'border-top-right-radius': childIndex === 0 ? '8px' : '0px',
                        'border-bottom-left-radius':
                            childIndex + 1 === light[item.enName].length ? '8px' : '0px',
                        'border-bottom-right-radius':
                            childIndex + 1 === light[item.enName].length ? '8px' : '0px',
                    }">
                    <div class="flex justify-between w-full">
                        <span>{{ item.enName }}-{{ childIndex }}</span>
                        <span>{{ childItem }}</span>
                    </div>
                </div>
            </template>
            <template v-else>
                <div v-for="(childItem, childIndex) in dark[item.enName]" :key="childIndex"
                    class="h-10 w-full flex items-center justify-between px-3 cursor-pointer hover:scale-105 hover:transition hover:duration-200"
                    :style="{
                        'background-color': childItem,
                        'border-top-left-radius': childIndex === 0 ? '8px' : '0px',
                        'border-top-right-radius': childIndex === 0 ? '8px' : '0px',
                        'border-bottom-left-radius':
                            childIndex + 1 === light[item.enName].length ? '8px' : '0px',
                        'border-bottom-right-radius':
                            childIndex + 1 === light[item.enName].length ? '8px' : '0px',
                    }">
                    <div class="flex justify-between w-full">
                        <span :class="childIndex > 4 ? 'dark:!text-black' : 'dark:!text-white'">{{ item.enName }}-{{
                            childIndex }}</span>
                        <span :class="childIndex > 4 ? 'dark:!text-black' : 'dark:!text-white'">{{
                            childItem
                        }}</span>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
