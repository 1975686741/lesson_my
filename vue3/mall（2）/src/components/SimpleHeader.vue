<template>
    <header class="simple-header">
        <van-icon v-if="!noback" class="v fanhui" name="arrow-left" @click="goBack" size=".48rem" />
        <!-- v-if="!noback" 登录页面:noback="true" 无返回按钮 -->
        <i v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
        <div class="simple-header-name">{{ props.name }}</div>
        <van-icon class="v gengduo" name="ellipsis" size=".48rem" />
    </header>
    <!-- 注意文档流 -->
    <div class="block"></div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => {
    router.go(-1)  // 返回上一个页面
}
const props = defineProps({
    name: {
        type: String,
        value: ''
    },
    noback: {
        type: Boolean,
        default: false
    }
})

</script>

<style lang="stylus" scoped>
@import '../common/style/mixin'

.simple-header
    position fixed
    top 0
    left 0
    z-index 9999
    fj()
    wh(100%, 1.17333rem)
    padding 0 .2667rem
    color #252525
    background #fff

    .simple-header-name
        font-size .4rem

.v
    padding-top .1rem
.block
    height 1.17333rem
</style>