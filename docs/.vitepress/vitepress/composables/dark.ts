export const isDark = localStorage.getItem('vitepress-theme-appearance') === 'dark';
export const toggleDark = useToggle(isDark);
export const preferredDark = usePreferredDark();