<template>
    <div class="w-full">
        <!-- 行高基数 -->
        <div class="tracking-widest leading-loose">
            按照国际无障碍网页使用标准中的行高公式<a-tag>lineHeight = fontSize * 1.5</a-tag>，既为<a-tag>字体大小 * 1.5倍</a-tag>
            实际测试发现按照上面公式随着字号越大，<p>行高则出现阶梯式增大，对移动端视觉效果不是很好，于是对行高计算做出一些调整，使行高由原来的字体大小成倍变化改为基数增加，</p>
            <p>得出如下公式：</p>
            <p><a-tag>lineHeight = fontSize + 8</a-tag>，行高基数为<a-tag>8</a-tag></p>
            <p>注意：如果字体单位是rpx的话，行高基数也需要相应转化</p>
        </div>
    </div>
</template>
