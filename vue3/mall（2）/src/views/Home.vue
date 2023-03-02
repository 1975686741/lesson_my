<template>
    <div id="home-wrapper">
        <header class="home-header wrap">
            <div class="header-search">
                <i class="nbicon nbSearch"></i>
                <router-link 
                    class="search-title"
                    to="/product-list?from=home"
                >
                输入你想搜索的商品
                </router-link>
            </div>
            <router-link to="/category">
                <i class="nbicon nbmenu2"></i>
            </router-link>
            <router-link class="login" to="/login">登录</router-link>
        </header>
        <nav-bar />
        <swiper :list="state.swiperList"/>  
        <div class="category-list">
            <div v-for="item in state.categoryList" :key="item.categoryId">
                <img :src="item.imgUrl">
                <span>{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { getHomeData } from '../service/home' 
import { showLoadingToast, closeToast } from 'vant'
import NavBar from '~/NavBar.vue'
import swiper from '~/Swiper.vue'

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
      name: '手机',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png',
      categoryId: 100001
    }, {
      name: '数码影音',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png',
      categoryId: 100003
    }, {
      name: '美妆护肤',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png',
      categoryId: 100002
    }, {
      name: '珠宝首饰',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png',
      categoryId: 100004
    }, {
      name: '服饰内衣',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png',
      categoryId: 100005
    }, {
      name: '生鲜超市',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png',
      categoryId: 100006
    }, {
      name: '9.9元秒杀',
      imgUrl: 'https://s.yezgea02.com/1604041127880/9.9%402x.png',
      categoryId: 100007
    }, {
      name: '赚金币',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png',
      categoryId: 100008
    }, {
      name: '手机回收',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
      categoryId: 100009
    }, {
      name: '分类',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
      categoryId: 100010
    }
  ],
})

onMounted(async () => { // 使用了异步同步化的高级技巧
    showLoadingToast({
        message: '加载中...',
        forbidClick: true
    })
    const { data } = await getHomeData() //  await  promise  api serverice
    console.log(data)
    state.swiperList = data.data.carousels
    state.loading = false
    closeToast()
    // console.log(state.swiperList)
})
</script>

<style lang="stylus" scoped>
@import '../common/style/mixin'
// 可以一次性设置widht height 的mixin 混合
// stylus 提供的tab 缩进 css 提供了模块化的能力？  
.home-header
    position absolute
    top 0
    left 0    
    line-height 1.33333rem
    padding 0 .4rem
    font-size 0.4rem
    background: linear-gradient(to right, transparent, mistyrose)
    z-index 10000
    wh(100%, 1.33333rem)
    fj()
    .nbmenu2
        color $primary
    .header-search 
        display flex
        width 74%
        box-sizing content-box
        height 0.53333rem
        line-height 0.53333rem
        margin 0.26667rem 0
        padding 0.1333rem 0
        color #232326
        border-radius .53333rem
        background rgba(255, 255, 255, .7)
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
            font-size .32rem
            color #666
            line-height 0.56rem
            padding-left  0.2rem
    .login
        color $primary
        line-height 1.38667rem

.category-list
    display flex
    flex-shrink 0
    flex-wrap wrap
    width 100%
    padding-bottom .34667rem
    div
        display flex
        flex-direction column
        width 20%
        text-align center
        img
            wh(.96rem, .96rem)
            margin .346667rem auto .213333rem auto
</style>