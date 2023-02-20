<template>
    <div>
        <child :msg1="msg1" :msg2="msg2"></child>
    </div>
</template>
<script>
import Child from "./Child.vue"

import { ref, reactive } from "vue" // vue3 

export default { // vue2  类式组件
    data(){  // 私有状态
        return {
            msg1:"这是传级子组件的信息1"
        }
    },
    setup() { // 启动vue3 的新功能
        // const msg2 = ref("这是传级子组件的信息2")
        const msg2 = reactive(["这是传级子组件的信息2"])
        return {
            msg2
        }
    },
    components:{
        Child
    }
}
</script>
