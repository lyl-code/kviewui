import { isDark } from "../composables/dark";

export const useUserStore = defineStore('user', () => {
    const darkMode = ref(isDark);

    const setMode = (mode: boolean) => {
        darkMode.value = mode;
    }

    // 监听localStorage的变化
    window.addEventListener('setItemEvent', (e) => {
        // console.log(e);
        if (e.key === 'vitepress-theme-appearance') {
            // setMode(e.newValue);
        }
    })

    return {
        darkMode,
        setMode
    }
})

if ((import.meta as any).hot)
    (import.meta as any).hot.accept(acceptHMRUpdate(useUserStore, (import.meta as any).hot))