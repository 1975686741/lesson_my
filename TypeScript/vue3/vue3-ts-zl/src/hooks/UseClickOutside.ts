// vue3 = composition api + hooks 编程  复用 = 组件复用 / utils 
// hooks 函数复用 = 响应式状态 + utils 复用
import { ref, onMounted, onUnmounted, Ref } from 'vue'
// 以use 开头的函数 hooks 函数 useStore  useRouter 
const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
    const isClickOutside = ref(false)
    const handler = (e: MouseEvent) => {
        if (elementRef.value) {
            if (elementRef.value.contains(e.target as HTMLElement)) { // 点的是menu内部
                isClickOutside.value = false
            } else {
                isClickOutside.value = true
            }
        }
    }
    onMounted(() => {
        document.addEventListener('click', handler)
    })
    onMounted(() => {
        document.removeEventListener('click', handler)
    })
    return { isClickOutside }
}
export default useClickOutside