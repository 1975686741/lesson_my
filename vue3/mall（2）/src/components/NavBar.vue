<template>
    <div class="navbar">
        <ul class="nav-list">
            <router-link class="nav-list-item" to="home">
                <van-icon name="wap-home-o" />
                <div>首页</div>
            </router-link>
            <router-link class="nav-list-item" to="category">
                <van-icon name="wap-nav" />
                <div>分类</div>
            </router-link>
            <router-link class="nav-list-item" to="cart">
                <van-icon name="cart-o" />
                <div>购物车</div>
            </router-link>
            <router-link class="nav-list-item" to="user">
                <van-icon name="manager-o" />
                <div>我的</div>
            </router-link>
        </ul>
    </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
@import '../common/style/mixin.styl'
.navbar
    position fixed
    left 0
    bottom 0
    width 100%
    padding .13333rem 0
    z-index 1000
    background-color #fff
    transform translateZ(0)
    -webkit-transform translateZ(0)
    .nav-list
        width 100%
        fj()
        padding 0
        .nav-list-item
            flex 1
            flex-direction column
            text-align center
            color #666
            i
                text-align center
                font-size .58667rem
            span
                font-size .32rem
            &.active
                color $primary
            &.router-link-active
                color $primary
    

</style>