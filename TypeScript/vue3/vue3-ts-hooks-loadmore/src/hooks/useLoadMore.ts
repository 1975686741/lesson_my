/**
 * 加载更多按钮
 * page 加载第几页
 * MVVM  proxy list
 * 函数式编程 更加的淋漓尽致
 */
import { computed, ref } from "vue";
const useLoadMore = () => {
    const currentPage = ref(0)
    const loadMorePage = () => {
        
    }
    const isLastPage = computed(() => {
         
    })
    return {
        loadMorePage, // 函数
        isLastPage,   // 是否是最后一个   
        currentPage   // 当前页码  
    }
}

export default useLoadMore 