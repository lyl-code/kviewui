<template>
  <kui-space :gap="[30, 20]">
    <kui-tag
      :custom-style="{
        paddingLeft: '5px',
      }"
      :text-out-view-style="{
        marginLeft: '0px',
      }"
      text="左侧插槽"
    >
      <template v-slot:left-icon>
        <kui-icons :size="20" name="favor-filled" />
      </template>
    </kui-tag>
    <kui-tag
      :custom-style="{
        paddingRight: '5px',
      }"
      :text-out-view-style="{
        marginRight: '0px',
      }"
      text="右侧插槽"
    >
      <template v-slot:right-icon>
        <kui-icons :size="20" name="like-filled" />
      </template>
    </kui-tag>
    <kui-tag
      :custom-style="{
        paddingLeft: '5px',
        paddingRight: '5px',
      }"
      :text-out-view-style="{
        margin: '0 3px',
      }"
      text="左右两侧插槽"
    >
      <template v-slot:left-icon>
        <kui-icons :size="20" name="favor-filled" />
      </template>
      <template v-slot:right-icon>
        <kui-icons :size="20" name="like-filled" />
      </template>
    </kui-tag>
  </kui-space>
</template>
