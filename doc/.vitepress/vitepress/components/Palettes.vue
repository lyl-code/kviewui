<script lang="ts" setup>
import * as lodash from "lodash";
import { colorPresetNames } from "../composables/colors";
import { theme } from "@kviewui/theme";

const colors = theme.colors;

const light = colors.light;

const store = useUserStore();
const { darkMode } = storeToRefs(store);

</script>

<template>
    <!-- <div class="flex justify-end">
        <ChangeMode />
    </div> -->
    <div class="grid-cols-3 lt-sm:grid-cols-1 grid gap-5 mt-10">
        <div v-for="(item, index) in colorPresetNames" :key="index" class="flex flex-col justify-center items-center">
            <div class="text-base rounded-t cursor-pointer hover:scale-105 hover:rounded hover:transition hover:duration-200 text-white mb-0 h-20 px-3 py-2 flex flex-col justify-between dark:text-black w-full" :style="{
                backgroundColor: colors[darkMode ? 'dark' : 'light'][item.enName][5]
            }" @click="copy(colors[darkMode ? 'dark' : 'light'][item.enName][5])">
                {{ lodash.upperFirst(item.enName) }} / {{ item.name }}
                <div class="flex justify-between text-sm">
                    <div>{{ `${item.enName}-5` }}</div>
                    <div>{{ colors[darkMode ? 'dark' : 'light'][item.enName][5] }}</div>
                </div>
            </div>
            <div v-for="(childItem, childIndex) in colors[darkMode ? 'dark' : 'light'][item.enName]" :key="childIndex"
                class="h-10 w-full flex items-center justify-between px-3 cursor-pointer hover:!rounded hover:scale-105 hover:transition hover:duration-200"
                :style="{
                    'background-color': childItem,
                    'border-top-left-radius': childIndex === 0 ? '8px' : '0px',
                    'border-top-right-radius': childIndex === 0 ? '8px' : '0px',
                    'border-bottom-left-radius':
                        childIndex + 1 === light[item.enName].length ? '8px' : '0px',
                    'border-bottom-right-radius':
                        childIndex + 1 === light[item.enName].length ? '8px' : '0px',
                }" @click="copy(childItem)">
                <div class="flex justify-between w-full !text-sm">
                    <template v-if="!darkMode">
                        <span :class="childIndex > 4 ? 'text-white' : 'text-black'">{{ item.enName }}-{{
                            childIndex }}</span>
                        <span :class="childIndex > 4 ? 'text-white' : 'text-black'">{{
                            childItem
                        }}</span>
                    </template>
                    <template v-else>
                        <span :class="childIndex > 4 ? 'text-black' : 'text-white'">{{ item.enName }}-{{
                            childIndex }}</span>
                        <span :class="childIndex > 4 ? 'text-black' : 'text-white'">{{
                            childItem
                        }}</span>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
