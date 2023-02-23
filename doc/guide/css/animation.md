#### <span class="text-lg text-gray-500 font-normal">指南</span>

<div class="w-screen"></div>

# 动画
<a-typography-text>
    使元素产生动画的CSS动画功能类。
</a-typography-text>

<CssPrefix />

## 语法
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <a-link status="success">animate-none</a-link> | <a-link>animate: none</a-link> | H5、小程序、app-vue
| <a-link status="success">animate-spin</a-link> | <a-link>animation: spin 1s linear infinite</a-link> | H5、小程序、app-vue
| <a-link status="success">animate-ping</a-link> | <a-link>animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite</a-link> | H5、小程序、app-vue
| <a-link status="success">animate-pluse</a-link> | <a-link>animation: pluse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite</a-link> | H5、小程序、app-vue
| <a-link status="success">animate-bounce</a-link> | <a-link>animation: bounce 1s infinite</a-link> | H5、小程序、app-vue
| <a-link status="success">animate-flicker</a-link> | <a-link>animation: flicker 1s  infinite</a-link> | H5、小程序、app-vue

### @keyframes spin
```css
@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
```

### @keyframes ping
```css
@keyframes ping {

    75%,
    100% {
        transform: scale(2);
        opacity: 0;
    }
}
```

### @keyframes pluse
```css
@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: .5;
    }
}
```

### @keyframes bounce
```css
@keyframes bounce {

    0%,
    100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }

    50% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
}
```

### @keyframes flicker
```css
@keyframes flicker {
    from {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
```