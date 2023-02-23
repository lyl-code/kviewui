if (isDark.value) {
    document.body.setAttribute('arco-theme', 'dark')
} else {
    document.body.removeAttribute('arco-theme');
}

// 监听localStorage的变化
window.addEventListener('setItemEvent', (e) => {
    if (e.key === 'vitepress-theme-appearance') {        
        if (e.newValue === 'dark') {
            document.body.setAttribute('arco-theme', 'dark')
        } else {
            document.body.removeAttribute('arco-theme');
        }
    }
})
/**
 * 重写localStorage的setItem，并添加自定义事件方便程序监听使用
 */
const dispatchEventStorage = () => {
    const signSetItem = localStorage.setItem;

    localStorage.setItem = function(key, val) {
        let setEvent = new Event('setItemEvent');
        setEvent['key'] = key;
        setEvent['newValue'] = val;

        // 重写后通过window再次派发事件
        window.dispatchEvent(setEvent);
        signSetItem.apply(this, arguments as any);
    }
}

export default dispatchEventStorage;