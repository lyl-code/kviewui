<template>
  <view
    class="kui-cell kui-pt-2 kui-px-3"
    :class="[customClass]"
    :id="data.id"
    :style="{
      borderTopLeftRadius: `${data.topRadius}rpx`,
      borderTopRightRadius: `${data.topRadius}rpx`,
      borderBottomLeftRadius: `${data.isBorder ? 0 : data.bottomRadius}rpx`,
      borderBottomRightRadius: `${data.isBorder ? 0 : data.bottomRadius}rpx`,
      backgroundColor: data.backgroundColor,
      marginBottom: `${data.marginBottom}rpx`,
      ...customStyle
    }"
    @touchstart="tapstart"
    @touchend="tapend"
    @click="onClick"
  >
    <view
      class="kui-flex kui-justify-between kui-w-full1"
      :class="center ? 'kui-items-center' : ''"
    >
      <view class="kui-flex kui-items-center kui-w-full1">
        <!-- #ifndef MP-WEIXIN -->
        <slot name="left-icon">
          <view class="kui-mr-0" v-if="icon">
            <kui-icons :name="icon" :size="28" color="grey" :color-level="8"></kui-icons>
          </view>
        </slot>
        <!-- #endif -->
        <!-- #ifdef MP-WEIXIN -->
        <template v-if="$slots['left-icon']">
          <view class="kui-mr-1">
            <slot name="left-icon"></slot>
          </view>
        </template>
        <template v-else>
          <view class="kui-mr-1" v-if="icon">
            <kui-icons :name="icon" :size="50" color="#999"></kui-icons>
          </view>
        </template>
        <!-- #endif -->
        <slot name="content">
          <view class="kui-leading-none">
            <view>
              <!-- <text class="" :style="{
                                fontSize: `${data.titleSize}${theme.size.fontUnit}`,
                                color: data.color
                            }">{{ title }}</text> -->
              <kui-text
                :custom-style="{
                  fontWeight: data.titleWeight,
                  lineHeight: `${data.titleSize + theme.size.lineBase}${
                    theme.size.fontUnit
                  }`,
                }"
                :size="data.titleSize"
                :color="data.color"
                :value="title"
              />
            </view>
            <view>
              <!-- <text class=" kui-relative kui-mb-0" :style="{
                                fontSize: `${theme.size.fonts['base']}${theme.size.fontUnit}`,
                                // lineHeight: `${theme.size.fonts['base'] + theme.size.lineBase}${theme.size.fontUnit}`,
                                color: data.subTitleColor,
                                bottom: '0px'
                            }" v-if="subTitle">{{ subTitle }}</text> -->
              <kui-text
                :custom-style="{
                  bottom: '0px',
                }"
                :size="`${theme.size.fonts['base']}${theme.size.fontUnit}`"
                :color="data.subTitleColor"
                :value="subTitle"
              />
            </view>
          </view>
        </slot>
      </view>
      <view
        class="kui-h-auto kui-leading-none kui-flex kui-flex kui-justify-end"
        :class="center ? 'kui-items-center' : ''"
      >
        <text
          class="kui-mr-1"
          :style="{
            fontSize: `${theme.size.fonts['lg']}${theme.size.fontUnit}`,
            color: data.descColor,
          }"
          >{{ desc }}</text
        >
        <view class="kui-flex kui-flex-col kui-justify-center" v-if="showRightIcon">
          <!-- #ifndef MP-WEIXIN -->
          <slot name="right-icon">
            <kui-icons name="right" :size="16" color="#999" :weight="100" />
          </slot>
          <!-- #endif -->
          <!-- #ifdef MP-WEIXIN -->
          <template v-if="!$slots['right-icon']">
            <kui-icons name="right" :size="16" color="#999" :weight="100"></kui-icons>
          </template>
          <template v-else>
            <slot name="right-icon"> </slot>
          </template>
          <!-- #endif -->
        </view>
      </view>
    </view>
    <view class="kui-pt-2">
      <view class="kui-bg-grey-2 kui-h-min-px" v-if="data.isBorder"></view>
    </view>
  </view>
</template>

<script lang="ts">
import { reactive, onMounted, inject } from "vue";

import { cellProps } from "./types";

import { createComponent, showToast } from "@kviewui/utils";
const { create } = createComponent("cell");

import { colorBuilder } from "@kviewui/color-builder";
import { getThemeColor } from "../shared/tools";
import { theme as themeApp } from "@kviewui/theme";

import KuiIcons from "../icons/index.vue";
import KuiText from "../text/index.vue";

export default create({
  props: cellProps,
  components: {
    KuiIcons,
    KuiText,
  },
  emits: ["click"],
  setup(props, { emit }) {
    // 随机生成元素ID
    const elId = `kUI_${Math.ceil(new Date().getTime() * 10e5).toString(36)}`;

    // const {
    // 	proxy
    // }: any = getCurrentInstance();
    // const theme = proxy.$theme;
    // const theme: KuiNamespace.Theme = (uni as any)['$kView'].theme;
    const theme = themeApp;

    const colorGreys = (dark: boolean = false) =>
      colorBuilder.generate("grey", {
        dark: dark,
        list: true,
      });

    const data = reactive({
      id: elId,
      topRadius: props.radius,
      bottomRadius: props.radius,
      isBorder: false,
      marginBottom: 0,
      titleSize: props.titleSize ? props.titleSize : 18,
      titleWeight: props.titleWeight,
      color: props.color || "black",
      // subTitleColor: props.subTitleColor ? props.subTitleColor : colorGreys(props.mode === 'dark')[5],
      subTitleColor: props.subTitleColor
        ? getThemeColor(props.subTitleColor, props.mode)
        : colorGreys(props.mode === "dark")[5],
      descColor: props.descColor ? props.descColor : colorGreys(props.mode === "dark")[3],
      mode: props.mode,
      backgroundColor: "#FFFFFF",
    });

    /**
     * 获取cell group实例
     */
    const getCellGroup = () => {
      return inject("cell-group") as any;
    };

    let cellGroup: { childrens?: any };
    if (props.group) {
      cellGroup = getCellGroup();
    }

    const changeMode = (steep = 0) => {
      data.color =
        data.mode === "light"
          ? props.color
            ? props.color
            : getThemeColor("grey", "light", 8)
          : props.color
          ? getThemeColor(props.color, "dark", 6)
          : getThemeColor("grey", "dark", 9);
      data.backgroundColor = data.mode === "light" ? "#FFFFFF" : colorGreys(true)[2];
      //   data.subTitleColor =
      //     data.mode === "light"
      //       ? props.subTitleColor
      //         ? props.subTitleColor
      //         : getThemeColor("grey", "light", 9)
      //       : props.subTitleColor
      //       ? colorBuilder.generate(props.subTitleColor, {
      //           dark: true,
      //           list: false,
      //           index: 7,
      //         })
      //       : colorGreys(true)[7];
      data.subTitleColor =
        data.mode === "light"
          ? getThemeColor(props.subTitleColor || "grey", "light", 9)
          : getThemeColor(props.subTitleColor || "grey", "dark", 7);
      //   data.descColor =
      //     data.mode === "light" ? props.descColor ? props.descColor : getThemeColor("grey", "light", 4) : props.descColor
      //       ? `hsl(${theme.colors.darken(props.descColor).color[0]},${
      //           theme.colors.darken(props.descColor).color[1]
      //         }%,${theme.colors.darken(props.descColor).color[2]}%)`
      //       : colorGreys(true)[4];
      data.descColor = getThemeColor(props.descColor || "grey", props.mode, 4);
    };

    onMounted(() => {
      if (props.group) {
        // 判断父元素实例没有包含子元素实例，则初始化子元素实例操作
        if (cellGroup && cellGroup.childrens.indexOf(data) === -1) {
          cellGroup.childrens.push(data);
        }
      }
      changeMode();
      // 监听暗黑模式
      uni.$on("changeMode", (e) => {
        data.mode = e;
        changeMode();
      });
    });

    const tapstart = () => {
      if (props.clickStatus) {
        data.backgroundColor =
          data.mode == "light" ? colorGreys(false)[2] : colorGreys(true)[3];
      }
    };

    const tapend = () => {
      changeMode();
    };

    const onClick = () => {
      if (props.url) {
        if (props.url.indexOf("http") > -1) {
          // #ifdef H5
          location.href = props.url;
          // #endif
          // #ifndef H5
          uni.setClipboardData({
            data: props.url,
            showToast: true,
            success() {
              showToast("链接已复制");
            },
          });
          // #endif
        } else {
          uni.navigateTo({
            url: props.url,
            fail: (fil) => {
              console.warn(`【Kui Cell Debug】: ${fil.errMsg}`);
            },
          });
        }
      } else {
        emit("click");
      }
    };

    return {
      theme,
      data,
      tapstart,
      tapend,
      onClick,
    };
  },
});
</script>
