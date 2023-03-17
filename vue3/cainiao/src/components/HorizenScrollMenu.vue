<template>
  <div class="container">
    <!-- ref拿到宽度 -->
    <div class="scroll-wrapper" ref="scroll">
      <!-- 内容撑起来 -->
      <div class="scroll-content" ref="content">
        <div class="category-list" v-for="item in state.categoryList" :key="item.categoryId">
          <img :src="item.imgUrl" :style="{ background: item.bgc }" />
          <span>{{ item.name }}</span>
        </div>
      </div>
      <div class="pointer-wrapper">
        <div class="inner" :style="{ left: innerLeft }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import _ from "lodash";
import BScroll from "@better-scroll/core";
import ObserveDOM from "@better-scroll/observe-dom";
BScroll.use(ObserveDOM);
const nums = ref(20);
const innerLeft = ref("0px");
const scroll = ref(null); // ref标注这个dom节点
const content = ref(null);
let wrapperWidth = 0;
let contentWidth = 0;
let bs = null; // better-scroll 初始值为空

// 组件挂载成功之后
onMounted(() => {
  wrapperWidth = scroll.value.offsetWidth;
  contentWidth = content.value.offsetWidth;
  // console.log(wrapperWidth, contentWidth)
  bs = new BScroll(scroll.value, {
    // 传个dom节点
    probeType: 3,
    scrollX: true,
    scrollY: false,
    observeDOM: true,
  });
  const onScroll = (position) => {
    // console.log(position, '//////')
    // 拿到偏移量
    let percent = Math.abs(position.x) / (contentWidth - wrapperWidth);
    // console.log(percent)
    // 滚动的比例
    let moveLeft = percent * 30;
    innerLeft.value = `${moveLeft}px`;
  };
  bs.on("scroll", _.throttle(onScroll, 50)); // 节流
});
</script>

<style lang="stylus" scoped>
.container
    text-align center
    .scroll-wrapper
        width 90%
        margin 80px auto
        // 不换行
        white-space nowrap
        border 3px solid #42b983
        border-radius 5px
        overflow hidden
        position relative
        .scroll-content
            display inline-block
            .category-list
                background #FFF6F6
                display flex
                flex-shrink 0
                flex-wrap wrap
                margin .2rem
                border-radius 8%
                div
                    border-radius 30%
                    display flex
                    flex-direction column
                    width 20%
                    text-align center
                img
                    border-radius 30%
                    wh(.96rem, .96rem)
                    margin .346667rem auto .213333rem auto

        .pointer-wrapper
            position absolute
            bottom 2px
            width 40px
            height 5px
            background gray
            left 50%
            margin-left -20px
            .inner
                position absolute
                background white
                width 10px
                height 100%
</style>
