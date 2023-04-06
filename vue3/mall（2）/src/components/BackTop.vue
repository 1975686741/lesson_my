<template>
    <div 
     class="backtop" 
     v-show="backtop" 
     :style="{right: `${right}px`, bottom: `${bottom}px` }  " 
     @click="toTop"
    >
     <slot></slot>        
    </div>
</template>
   
<script setup>
import _ from 'lodash'
import { ref, onMounted, onBeforeUnmount } from 'vue'
const backtop = ref(false)
const right = ref(8)
const bottom = ref(60)
const props = defineProps({
    showHeight: {
        type: Number,
        value: 0
    },
    duration: {
        type: Number,
        value: 1500
    }
})

const handleScroll = () => {
    backtop.value = window.pageYOffset >= props.showHeight
}
const throttleHandleScroll = _.throttle(handleScroll,100)
const debounceHandleScroll = _.debounce(handleScroll,100)
onMounted(() => {
    window.addEventListener('scroll', throttleHandleScroll)
    window.addEventListener('resize', debounceHandleScroll)
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll',throttleHandleScroll)  
    window.removeEventListener('resize',debounceHandleScroll)  
})

const toTop = () => {
    // window.scrollTo(0, 0)
    const sTop = document.documentElement.scrollTop || document.body.scrollTop;
    scrollTop(window, sTop, 0, props.duration)
}
const scrollTop = (el, from = 0, to, duration = 1500) => {
    const difference = Math.abs(from - to);
    const step = difference / duration * 50
    function scroll(start,end,step) {
        if (start <= end) {
            return
        }
        let d = (start + step > end) ? end : start + step
        if (start > end) {
            d = (start - step < end) ? end : start - step
        }
        window.scrollTo(d, d)

        window.requestAnimationFrame(() => scroll(d,end,step))
    }
    scroll(from, to, step)
}
</script>

<style lang="stylus" scoped>
.backtop
    position fixed
</style>