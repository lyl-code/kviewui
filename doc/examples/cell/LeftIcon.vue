<template>
    <kui-cell title="自定义图标" :show-right-icon="false">
        <template #left-icon>
            <kui-icons 
                custom-class="kui-mr-1" 
                name="circle-like-filled" 
                color="warning" 
                :size="30" />
        </template>
    </kui-cell>
</template>
  