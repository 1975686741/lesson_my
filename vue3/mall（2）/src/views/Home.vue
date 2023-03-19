<template>
  <div id="home-wrapper">
    <SubHeader />
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
        <img src="https://www.bing.com/th/id/OGC.4df88100aaa54686487a16d6875b4900?pid=1.7&rurl=https%3a%2f%2fwimg.588ku.com%2fgif%2f21%2f07%2f23%2f2013dade60710e6f719a008dc47138b7.gif&ehk=gjxmxHcjqQqoFTUSvjqIfyIjOUCktT0cYpOvomefZcg%3d" alt="" />
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
      <van-skeleton title :row="3" :loading="state.loading">
        <div class="good-box">
          <div 
          class="good-item" 
          v-for="item in state.hotGoodses" 
          :key="item.goodsId" 
          @click="goToDetail(item.goodsId)"
          :goods="item"
          >
            <img  v-lazy="item.goodsCoverImg" alt="">
            <div class="good-desc">
              <div class="title">{{ item.goodsName }}</div>
                <div class="price">¥ {{ item.sellingPrice }}</div>
                <div class="peo">{{ item.peo }}+人付款</div>
            </div>
          </div>
        </div>
      </van-skeleton>
    </section>
    <section class="goods">
      <van-skeleton title :row="3" :loading="state.loading">
        <!-- 插槽 -->
        <div class="good-box">
          <div 
          class="good-item" 
          v-for="item in state.newGoodses" 
          :key="item.goodsId" 
          @click="goToDetail(item.goodsId)"
          :goods="item"
          >
                    <!-- 过滤器 -->
                  <!-- <img :src="$filters.prefix(item.goodsCoverImg)" alt="" />   -->
            <img v-lazy="item.goodsCoverImg" alt="">
            <div class="good-desc">
              <div class="title">{{ item.goodsName }}</div>
                <div class="price">¥ {{ item.sellingPrice }}</div>
                <div class="peo">{{ item.peo }}+人付款</div>
            </div>
          </div>
        </div>
      </van-skeleton>
    </section>
    <section class="goods" :style="{ paddingBottom: '100px'}">
      <van-skeleton title :row="3" :loading="state.loading">
        <div class="good-box">
          <div 
            class="good-item" 
            v-for="item in state.recommendGoodses" 
            :key="item.goodsId"
             @click="goToDetail(item.goodsId)"
             :goods="item"
          >
            <img  v-lazy="item.goodsCoverImg" alt="">
            <div class="good-desc">
              <div class="title">{{ item.goodsName }}</div>

                <div class="price">¥ {{ item.sellingPrice }}</div>
                <div class="peo">{{ item.peo }}+人付款</div>
            </div>
          </div>
        </div>
      </van-skeleton>
      <router-link tag="span" class="good-footer" to="category"
          >更多</router-link
        >
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

import { ref, onMounted, reactive, onActivated } from "vue";
import { onBeforeRouteLeave, useRouter } from 'vue-router';
import { getHomeData } from "../service/home";
import { showLoadingToast, closeToast } from "vant";
import NavBar from "~/NavBar.vue";
import swiper from "~/Swiper.vue";
import BackTop from '~/BackTop.vue'
import SubHeader from '~/SubHeader.vue'

// 定位到上次浏览位置
onActivated(() => {
    if (localStorage.getItem('scroll')) {
        window.scrollTo(0, parseInt(localStorage.getItem('scroll')))
    }
})
onBeforeRouteLeave(() => {
    // console.log(document.documentElement.scrollTop, '记录');
    localStorage.setItem('scroll', document.documentElement.scrollTop)
})

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
const time = ref(2 * 20 * 30 * 1000);
const state = reactive({
  swiperList: [],
  newGoodses: [],
  hotGoodses: [],
  recommendGoodses: [],
  loading: true,
  categoryList: [
    {
      name: "手机",
      imgUrl: "https://iconfont.alicdn.com/p/illus_3d/file/4YT18QCAgs2C/e09c9f4c-341f-4d90-b0bd-730067a597b9.png",
      categoryId: 100001,
      bgc: "#fff",
    },
    {
      name: "数码影音",
      imgUrl: "https://iconfont.alicdn.com/p/illus_3d/preview_image/JESQXrbFzHH2/ff36cb63-008e-4350-b75e-a188fff0860b.png",
      categoryId: 100003,
      bgc: "#fff",
    },
    {
      name: "美妆护肤",
      imgUrl: "https://iconfont.alicdn.com/p/illus/preview_image/79tXTOSBRmEO/73689aed-f39c-4de7-9b06-21a851ff1c2a.png",
      categoryId: 100002,
      bgc: "#fff",
    },
    {
      name: "珠宝首饰",
      imgUrl: "https://iconfont.alicdn.com/p/illus/preview_image/6c53lU2ZnsnZ/686609d9-db25-4ccd-b5e4-314988ac87a7.png",
      categoryId: 100004,
      bgc: "#fff",
    },
    {
      name: "服饰内衣",
      imgUrl: "https://iconfont.alicdn.com/p/illus/preview_image/T3gLNT1sdmxx/0962f313-38cb-4d8f-a5fb-febf313fc447.png",
      categoryId: 100005,
      bgc: "#fff",
    },
    {
      name: "小喵超市",
      imgUrl: "https://iconfont.alicdn.com/p/illus/preview_image/2z7Cpkqmflhg/1b56aaa5-61c4-4fc6-8fa6-af0f6afecdf4.png",
      categoryId: 100006,
      bgc: "#fff",
    },
    {
      name: "运动户外",
      imgUrl: "https://iconfont.alicdn.com/p/illus/preview_image/kNul1MYUIIj5/55aa81a9-4e2f-4089-bc6f-e241d35e6cdc.png",
      categoryId: 100007,
      bgc: "#fff",
    },
    {
      name: "赚金币",
      imgUrl: "https://iconfont.alicdn.com/p/illus/preview_image/MJMsRApZlquU/25f795e1-0028-4555-96d6-a57b62d81189.png",
      categoryId: 100008,
      bgc: "#fff",
    },
    {
      name: "流行鞋靴",
      imgUrl: "https://iconfont.alicdn.com/p/illus/preview_image/RASmcGN5ZBVS/54e38bb3-4648-4124-91bf-ec717afd5d89.png",
      categoryId: 100009,
      bgc: "#fff",
    },
    {
      name: "更多",
      imgUrl: "https://iconfont.alicdn.com/p/illus_3d/file/NlKK3XkjWiGH/8b8188c1-c862-4d75-9250-e1c403974f77.png",
      categoryId: 100010,
      bgc: "#fff",
    },
  ],
});
// 把全局的路由对象给我们
const router = useRouter()
const goToDetail = (id) => {
  router.push({
    path: `/detail/${id}`
  })
}

onMounted(async () => {
  // 使用了异步同步化的高级技巧
  // showLoadingToast({
  //   message: "加载中...",
  //   forbidClick: true,
  // });
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

.four
  padding-top: 0.2rem
  height 1.6rem
  display flex
  .left
    // background: linear-gradient(to left, transparent, mistyrose)
    flex 1
    height 1rem
    margin-right .8rem
    // border-radius 0 50% 50% 0
    // border-style: groove
    img
      wh(100%,auto)
      margin: -10px 0 0 12px;
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
    padding-bottom .24rem /* 8/16 */
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
    .good-footer {
      background: $primary
      text-align: center;
      color: white;
      font-size: 15px;
      font-weight: 500;
      border-radius 30%
    }
    .good-box {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .good-item {
        box-sizing: border-box;
        height: calc(100%/2 - 1rem)
        width: 46%;
        margin .2rem .2rem
        background: #fff6f6
        border-radius 7%
        border-bottom: 2PX solid #e9e9e9;
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
          .zi {
            position relative
            font-size 0rem /* 0/16 */
          }
          .price {
            color: $primary;
            float left
            height .6375rem 
          }
          .peo {
            height .6375rem 
            color: gray;
            font-size: 14px;
            transform : scale(0.8,0.8);
            *font-size: 10px;
            overflow: auto
            text-align:left
            justify-content:center
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
