import { isDark } from "../composables/dark";

export const useUserStore = defineStore('user', () => {
    const darkMode = ref(isDark);

    const setMode = (mode: boolean) => {
        darkMode.value = mode;

        if (darkMode.value) {
            document.body.setAttribute('arco-theme', 'dark')
        } else {
            document.body.removeAttribute('arco-theme');
        }
    }

    // 监听localStorage的变化
    window.addEventListener('setItemEvent', (e) => {
        console.log(e);
        if (e.key === 'vitepress-theme-appearance') {
            darkMode.value = e.newValue === 'dark';
            
            if (darkMode.value) {
                document.body.setAttribute('arco-theme', 'dark')
            } else {
                document.body.removeAttribute('arco-theme');
            }
        }
    })

    return {
        darkMode,
        setMode
    }
})

if ((import.meta as any).hot)
    (import.meta as any).hot.accept(acceptHMRUpdate(useUserStore, (import.meta as any).hot))