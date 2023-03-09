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
          <div class="text">
            <div class="da">排行榜</div>
            <div class="xiao">心动不如行动</div>
          </div>
          <div class="pic">
            <img
              src="https://g-search2.alicdn.com/img/bao/uploaded/i4/i2/2024314280/O1CN01JtfyD91hUHwUTYmsb_!!0-item_pic.jpg_580x580Q90.jpg"
              alt=""
            />
            <img
              src="https://img.alicdn.com/imgextrahttps://img.alicdn.com/imgextra/i1/2214389169743/O1CN016KQF0M2LqLfzNHhq4_!!2214389169743-0-alimamacc.jpg_270x270.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="bottom">
          <div class="text1">
            <div class="text2">半价秒杀</div>
            <van-count-down class="text3"  millisecond :time="time" format="HH:mm:ss:SS" />
          </div>
          <div class="bottom1">
              <img
              src="https://gw.alicdn.com/imgextra/i2/2549841410/O1CN01IZnj4m1MHpG3449AP_!!2549841410.jpg_Q75.jpg_.webp"
              alt=""
            />
            <img
              src="https://gw.alicdn.com/imgextra/i3/2212369671514/O1CN01AM0afA1N3SNkr0TZe_!!2212369671514.jpg_Q75.jpg_.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <section class="category-list">
      <div v-for="item in state.categoryList" :key="item.categoryId">
        <img :src="item.imgUrl" :style="{ background: item.bgc }" />
        <span>{{ item.name }}</span>
      </div>
    </section>
    <div class="four">
      <div class="left">
        <img src="https://i.postimg.cc/yxQfWp1Q/image.png" alt="" />
      </div>
      <div class="big">
        <div class="zuo">
          <div class="zuo1">
            美酒甄选
            <div class="min1">严选正品</div>
          </div>
          <img
            src="https://img12.360buyimg.com/n1/jfs/t1/179997/24/7408/120640/60b9cec9Eb9b67250/f36b57fc066772dc.jpg"
            alt=""
          />
        </div>
        <div class="middle">
          <div class="zuo2">
            爆款直降
            <div class="min2">6期免息</div>
          </div>
          <img
            src="https://img13.360buyimg.com/n1/s450x450_jfs/t1/107692/5/26486/138671/6233e789Ee3751f0a/fc69f8e32a1dc54c.jpg"
            alt=""
          />
        </div>
        <div class="right">
          <div class="zuo3">
            分期免息
            <div class="min3">必买爆品</div>
          </div>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
      </div>
    </div>
    <section class="goods">
      <header class="good-header">新品上线</header>
      <van-skeleton title :row="3" :loading="state.loading">
        <!-- 插槽 -->
        <div class="good-box">
          <div class="good-item" v-for="item in state.newGoodses" :key="item.goodsId" @click="goToDetail(item)">
                    <!-- 过滤器 -->
                  <!-- <img :src="$filters.prefix(item.goodsCoverImg)" alt="" />   -->
            <img v-lazy="item.goodsCoverImg" alt="">
            <div class="good-desc">
              <div class="title">{{ item.goodsName }}</div>
              <div class="price">¥ {{ item.sellingPrice }}</div>
            </div>
          </div>
        </div>
      </van-skeleton>
    </section>
    <section class="goods">
      <header class="good-header">热门商品</header>
      <van-skeleton title :row="3" :loading="state.loading">
        <div class="good-box">
          <div class="good-item" v-for="item in state.hotGoodses" :key="item.goodsId" @click="goToDetail(item)">
            <img  v-lazy="item.goodsCoverImg" alt="">
            <div class="good-desc">
              <div class="title">{{ item.goodsName }}</div>
              <div class="price">¥ {{ item.sellingPrice }}</div>
            </div>
          </div>
        </div>
      </van-skeleton>
    </section>
    <section class="goods" :style="{ paddingBottom: '100px'}">
      <header class="good-header">最新推荐</header>
      <van-skeleton title :row="3" :loading="state.loading">
        <div class="good-box">
          <div class="good-item" v-for="item in state.recommendGoodses" :key="item.goodsId" @click="goToDetail(item)">
            <img  v-lazy="item.goodsCoverImg" alt="">
            <div class="good-desc">
              <div class="title">{{ item.goodsName }}</div>
              <div class="price">¥ {{ item.sellingPrice }}</div>
            </div>
          </div>
        </div>
      </van-skeleton>
    </section>
  <back-top :showHeight="showHeight">
    <div class="toTop">
      <van-icon  name="arrow-up" ></van-icon>
      <div class="textn">顶部</div>
    </div>
  </back-top>
  </div>

</template>

<script setup>

import { ref, onMounted, reactive } from "vue";
import { getHomeData } from "../service/home";
import { showLoadingToast, closeToast } from "vant";
import NavBar from "~/NavBar.vue";
import swiper from "~/Swiper.vue";
import BackTop from '~/BackTop.vue'


const showHeight = ref(0)
onMounted(() => {
  showHeight.value = window.innerHeight
})
// import SubHeader from '../components/SubHeader.vue'
// es8  异步的高级能力 async await
// 挂载后再发送api 请求， 提升性能， 不会去争抢挂载显示
// data  响应式的数据
// 数据的值 对应当前的组件状态
// 值会改变 对应新的状态
// 数据和组件的状态是一一对应关系的
const time = ref(2 * 30 * 30 * 1000);
const state = reactive({
  swiperList: [],
  newGoodses: [],
  hotGoodses: [],
  recommendGoodses: [],
  loading: true,
  categoryList: [
    {
      name: "手机",
      imgUrl: "https://i.postimg.cc/Cx8qn8r1/image.png",
      categoryId: 100001,
      bgc: "#fff",
    },
    {
      name: "数码影音",
      imgUrl: "https://i.postimg.cc/Bn772PPM/image.png",
      categoryId: 100003,
      bgc: "#fff",
    },
    {
      name: "美妆护肤",
      imgUrl: "https://i.postimg.cc/kX4ZCJ1w/image.png",
      categoryId: 100002,
      bgc: "#fff",
    },
    {
      name: "珠宝首饰",
      imgUrl: "https://i.postimg.cc/YSf8gZDh/image.png",
      categoryId: 100004,
      bgc: "#fff",
    },
    {
      name: "服饰内衣",
      imgUrl: "https://i.postimg.cc/7L8wbGjq/image.png",
      categoryId: 100005,
      bgc: "#fff",
    },
    {
      name: "小喵超市",
      imgUrl: "https://i.postimg.cc/wMPnPnp9/46trolley.png",
      categoryId: 100006,
      bgc: "#fff",
    },
    {
      name: "9.9元秒杀",
      imgUrl: "https://i.postimg.cc/MK7htPLJ/9-9.png",
      categoryId: 100007,
      bgc: "#fff",
    },
    {
      name: "赚金币",
      imgUrl: "https://i.postimg.cc/MHDJwZPN/1.png",
      categoryId: 100008,
      bgc: "#fff",
    },
    {
      name: "手机回收",
      imgUrl: "https://i.postimg.cc/DypqVFHr/01.png",
      categoryId: 100009,
      bgc: "#fff",
    },
    {
      name: "更多",
      imgUrl: "https://i.postimg.cc/j2G2hKvG/1.png",
      categoryId: 100010,
      bgc: "#fff",
    },
  ],
});

onMounted(async () => {
  // 使用了异步同步化的高级技巧
  showLoadingToast({
    message: "加载中...",
    forbidClick: true,
  });
  // 后台接口数据
  const { data } = await getHomeData(); //  await  promise  api serverice
  state.swiperList = data.carousels;
  state.newGoodses = data.newGoodses;
  state.hotGoodses = data.hotGoodses;
  state.recommendGoodses = data.recommendGoodses
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
          border-radius 40%
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
.four
  padding-top: 0.2rem
  height 2rem
  display flex
  .left
    background: linear-gradient(to left, transparent, mistyrose)
    flex 1
    height 1rem
    margin-right .8rem
    border-radius 0 50% 50% 0
    border-style: groove
    img
      wh(100%,auto)
  .big
    width 78%
    height 1rem
    display grid
    grid-template-columns: 2.48rem auto 2.48rem;
    .zuo
      background #ffe4e13d
      margin-right .3rem
      border-radius 18%
      position: relative;
      .zuo1
        font-weight bolder
        .min1
          float left
          font-size: 12px;
          transform : scale(0.75,0.75);
          *font-size: 9px;
          color gray
      img
        wh(40%, 1rem)
        position: absolute;
        right: 0;
        margin-top -.5rem

    .middle
      background #ffe4e13d
      margin 0 .35rem
      border-radius 18%
      .zuo2
        font-weight bolder
        .min2
          float left
          font-size: 12px;
          transform : scale(0.75,0.75);
          *font-size: 9px;
          color gray
      img
        wh(40%, 1rem)
        position: absolute;
        right: 0;
        margin-top -.5rem
    .right
      background #ffe4e13d
      margin-right .3rem
      border-radius 18%
      .zuo3
        font-weight bolder
        .min3
          float left
          font-size: 12px;
          transform : scale(0.75,0.75);
          *font-size: 9px;
          color gray
      img
        wh(42%, 1rem)
        position: absolute;
        right: 0;
        margin-top -.5rem
.banners
    height 5rem
    display flex
    .banner2
      margin 0 .15rem 0 .2rem
      flex 1
      .top
        height 50%
        background: linear-gradient(to top, transparent, mistyrose)
        border-radius 12%
        .text
          padding-left 0.2rem
          display flex
          .da
            font-weight bold
            width 30%
          .xiao
            border-radius 30%
            text-align center
            margin-right .8rem
            flex 1
            background #f3f3e4
            color #5C3317         
            font-size: 12px;
            transform : scale(0.78,0.78);
            *font-size: 10px; 
        .pic
          margin 0 .1rem 0 .1rem
          img
            width 50%
            height 1.8rem
      .bottom
        height 50%
        background: linear-gradient(to top, transparent, mistyrose)
        border-radius 12%
        .text1
          display: flex;
          justify-content: space-around;

          .text2
            font-weight bold
          .text3
            font-weight bold
            color red
        .bottom1
          margin 0 .1rem 0 .1rem
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
.goods {
    .good-header {
      background: #f9f9f9;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: $primary;
      font-size: 16px;
      font-weight: 500;
    }
    .good-box {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .good-item {
        box-sizing: border-box;
        width: 50%;
        border-bottom: 1PX solid #e9e9e9;
        padding: 10px 10px;
        img {
          display: block;
          width: 120px;
          margin: 0 auto;
        }
        .good-desc {
          text-align: center;
          font-size: 14px;
          padding: 10px 0;
          .title {
            color: #222333;
          }
          .price {
            color: $primary;
          }
        }
          // 奇数个
        &:nth-child(2n + 1) {
          border-right: 1PX solid #e9e9e9;
        }
      }
    }
  }


  .toTop
    width 1rem
    height 1rem
    text-align center
    border-radius 50%
    box-shadow:black 0px 0px .03rem
    .textn
      margin-top -.12rem
</style>
