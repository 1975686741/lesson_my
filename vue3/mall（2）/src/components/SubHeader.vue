<template>
  <div style="height: 50px"></div>
  <header class="home-header wrap" :class="{ active: state.headerScroll }">
    <div class="item item_logo">
      <img
        src="https://iconfont.alicdn.com/p/illus/preview_image/B4bRC8pGF0SE/b70fc572-5880-4ca2-af5e-7ebaab441a6f.png"
        alt=""
      />
    </div>
    <div class="item item_main">
      <van-icon class="search" size=".4rem" name="search" />
      <router-link to="/category">
        <van-swipe
          class="search-swipe"
          vertical
          :autoplay="3000"
          :show-indicators="false"
          v-if="state.hotwords.length"
        >
          <van-swipe-item v-for="word in state.hotwords" :key="word.id">{{
            word.text
          }}</van-swipe-item>
        </van-swipe>
      </router-link>
      <div class="tsearch"><p color="#fff">搜索</p></div>
    </div>
    <div class="item">
      <router-link to="/category">
        <van-icon class="rvan" size=".56rem" name="wap-nav" />
      </router-link>
    </div>
    <div class="item">
      <router-link to="/cart">
        <van-icon class="rvan" size=".56rem" name="cart-o" />
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { reactive, nextTick } from "vue";
import _ from "lodash";

const state = reactive({
  headerScroll: false,
  hotwords: [],
});
state.hotwords = [
  {
    id: 1,
    text: "iphone",
  },
  {
    id: 4,
    text: "最新潮服",
  },
  {
    id: 2,
    text: "ipad",
  },
  {
    id: 3,
    text: "华为P50",
  },

  {
    id: 5,
    text: "零食",
  },
  {
    id: 6,
    text: "化妆品",
  },
  {
    id: 7,
    text: "今日折扣",
  },
];
nextTick(() => {
  const handleScroll = () => {
    let scrollTop =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > 100) {
      if (!state.headerScroll) {
        state.headerScroll = true;
      }
    } else {
      if (state.headerScroll) {
        state.headerScroll = false;
      }
    }
  };
  window.addEventListener("scroll", _.throttle(handleScroll, 100));
});
</script>

<style lang="stylus">
@import '../common/style/mixin'
*
    margin 0
    padding 0

.home-header
    position fixed
    left 0
    top 0
    width 100%
    display flex
    justify-content space-around
    align-items center
    line-height 3.125rem /* 50/16 */
    text-align center
    padding 0 .25rem /* 4/16 */
    box-sizing border-box
    font-size .9375rem /* 15/16 */
    color #fff
    z-index 9999
    transition background-color .8s

    .search
        margin-left 0.23rem
        margin-top 0.1rem

    .search-title
        color #fff
        font-size .32rem
        color #666
        line-height 0.56rem
        padding-left  0.2rem

    .search-swipe
        height: 30px;
        color: gray;
        font-size:12px;
        padding-left  0.3rem
    .tsearch
        font-size .35rem
        text-align center
        width 1.1rem
        border-radius 40%
        background $primary
        margin-left: auto
        p
            color #fff
            font-weight 0.001
    &.active
        background: linear-gradient(to top, transparent, #f1e8e8)
        .item_logo
            width 0
    .item
        width 1rem
        height 100%
        position relative
        .rvan
            color $primary
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)

        &.item_main
            flex 1
            display flex
            box-sizing content-box
            height 0.53333rem
            line-height 0.53333rem
            margin 0.26667rem 0
            padding 0.1333rem 0
            color #232326
            border-radius .53333rem
            background 	RGB(230,230,250,0.8)

        &.item_logo
            transition width .4s
            position relative
            img
                width 1.12rem  // 等比
                height .8rem
                margin auto
                position absolute
                top 0
                right 0
                bottom 0
                left 0
</style>
