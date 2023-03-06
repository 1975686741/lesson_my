<template>
  <div id="home-wrapper">
    <div class="home-header wrap">
      <div class="header-search">
        <!-- 搜索 -->
        <van-icon class="search" name="search" />
        <router-link class="search-title" to="/product-list?from=home">
          输入你想搜索的商品
        </router-link>
        <div class="tsearch"><p color="#fff">搜索</p></div>
      </div>
      <router-link to="/category">
        <!-- 分类 -->
        <van-icon class="nbmenu2" name="wap-nav" />
      </router-link>
      <router-link class="login" to="/login">
        <van-icon name="cart-o" />
      </router-link>
    </div>
    <nav-bar />
    <div class="banners">
      <swiper class="banner1" :list="state.swiperList"> </swiper>
      <div class="banner2">
          <div class="top">
            <div class="text">排行榜</div>
            <div class="pic">
              <img src="https://g-search2.alicdn.com/img/bao/uploaded/i4/i2/2024314280/O1CN01JtfyD91hUHwUTYmsb_!!0-item_pic.jpg_580x580Q90.jpg" alt="">
              <img src="https://img.alicdn.com/imgextrahttps://img.alicdn.com/imgextra/i1/2214389169743/O1CN016KQF0M2LqLfzNHhq4_!!2214389169743-0-alimamacc.jpg_270x270.jpg" alt="">
            </div>
          </div>
          <div class="bottom">
          <div class="text1">
            <span>新品首发</span>
            <span>分期免息</span>
          </div>
          <div class="bottom1">
            <img src="https://gw.alicdn.com/imgextra/i2/2549841410/O1CN01IZnj4m1MHpG3449AP_!!2549841410.jpg_Q75.jpg_.webp" alt="">
            <img src="https://gw.alicdn.com/imgextra/i3/2212369671514/O1CN01AM0afA1N3SNkr0TZe_!!2212369671514.jpg_Q75.jpg_.webp" alt="">
          </div>
          </div>
      </div>
    </div>

    <div class="category-list">
      <div v-for="item in state.categoryList" :key="item.categoryId">
            <img :src="item.imgUrl" :style="{background:item.bgc}" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { getHomeData } from "../service/home";
import { showLoadingToast, closeToast } from "vant";
import NavBar from "~/NavBar.vue";
import swiper from "~/Swiper.vue";

// import SubHeader from '../components/SubHeader.vue'
// es8  异步的高级能力 async await
// 挂载后再发送api 请求， 提升性能， 不会去争抢挂载显示
// data  响应式的数据
// 数据的值 对应当前的组件状态
// 值会改变 对应新的状态
// 数据和组件的状态是一一对应关系的
const state = reactive({
  swiperList: [],
  loading: true,
  categoryList: [
    {
      name: "手机",
      imgUrl: "https://i.postimg.cc/Cx8qn8r1/image.png",
      categoryId: 100001,
      bgc: "#fff"
    },
    {
      name: "数码影音",
      imgUrl: "https://i.postimg.cc/MZjMFVxY/image.png",
      categoryId: 100003,
      bgc: "#fff"
    },
    {
      name: "美妆护肤",
      imgUrl: "https://i.postimg.cc/kX4ZCJ1w/image.png",
      categoryId: 100002,
      bgc: "#fff"
    },
    {
      name: "珠宝首饰",
      imgUrl: "https://i.postimg.cc/YSf8gZDh/image.png",
      categoryId: 100004,
      bgc: "#fff"
    },
    {
      name: "服饰内衣",
      imgUrl: "https://i.postimg.cc/7L8wbGjq/image.png",
      categoryId: 100005,
      bgc: "#fff"
    },
    {
      name: "小喵超市",
      imgUrl: "https://i.postimg.cc/wMPnPnp9/46trolley.png",
      categoryId: 100006,
      bgc: "#fff"
    },
    {
      name: "9.9元秒杀",
      imgUrl: "https://i.postimg.cc/MK7htPLJ/9-9.png",
      categoryId: 100007,
      bgc: "#fff"
    },
    {
      name: "赚金币",
      imgUrl: "https://i.postimg.cc/d3m4RXVW/image.png",
      categoryId: 100008,
      bgc: "#fff"
    },
    {
      name: "手机回收",
      imgUrl: "https://i.postimg.cc/DypqVFHr/01.png",
      categoryId: 100009,
      bgc: "#fff"
    },
    {
      name: "分类",
      imgUrl: "https://i.postimg.cc/Gt2HzTcZ/or-or.png",
      categoryId: 100010,
      bgc: "#fff"
    },
  ],
});

onMounted(async () => {
  // 使用了异步同步化的高级技巧
  showLoadingToast({
    message: "加载中...",
    forbidClick: true,
  });
  const { data } = await getHomeData(); //  await  promise  api serverice
  console.log(data);
  state.swiperList = data.data.carousels;
  state.loading = false;
  closeToast();
  // console.log(state.swiperList)
});
</script>

<style lang="stylus" scoped>
@import '../common/style/mixin'
// 可以一次性设置widht height 的mixin 混合
// stylus 提供的tab 缩进 css 提供了模块化的能力？
.home-header
    top 0
    left 0
    line-height 1.33333rem
    padding 0 .4rem
    font-size 0.4rem
    z-index 9999
    wh(100%, 1.33333rem)
    fj()
    .nbmenu2
        color $primary
    .header-search
        display flex
        width 79%
        box-sizing content-box
        height 0.53333rem
        line-height 0.53333rem
        margin 0.26667rem 0
        padding 0.1333rem 0
        color #232326
        border-radius .53333rem
        background  #EBF6FA
        .search
           margin-left 0.23rem
           margin-top 0.1rem
        .tsearch
          font-size .35rem
          text-align center
          width 1.1rem
          border-radius 25%   
          background $primary
          margin-left: auto
          p
            color #fff
            font-weight 0.001
        .app-name
            padding 0 0.26667rem
            color $primary
            font-size 0.53333rem
            font-weight bold
            border-right .026667rem solid #666
        .icon-search
            // padding 0 .26667rem
            font-size .45333rem
            // padding-left  0.4rem
        .search-title
            color #fff
            font-size .32rem
            color #666
            line-height 0.56rem
            padding-left  0.2rem
    .login
        color $primary
        line-height 1.38667rem

.banners
    height 5rem
    display flex
    .banner2
      margin 0 .15rem 0 .2rem 
      flex 1
      .top
        height 50%
        .text
          font-weight bold
          padding-left 0.2rem 
          background: linear-gradient(to top, transparent, mistyrose)
          border-radius 15%
        .pic
          img
            width 50%
            height 1.8rem
      .bottom
        height 50%
        .text1
          background: linear-gradient(to top, transparent, mistyrose)
          border-radius 15%
          display: flex;
          justify-content: space-around;
        .bottom1
          img
            width 50%
            height 2rem
    .banner1
      width 50%
      margin-left .15rem


.category-list
    background #FFF6F6
    display flex
    flex-shrink 0
    flex-wrap wrap
    width 100%
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
</style>
