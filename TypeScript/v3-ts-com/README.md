# vue3 + typescript + compositionAPI

- js 和 ts 的区别
    - js  弱类型的脚本语言 代码的编译在运行的一刹那
    - .ts文件  静态 强类型  有专门的编译阶段，需要提前编译（语法、类型检测）
    - .ts -> .js -> 运行

- 为什么要用ts
    1. ts比js更适合大型项目，js缺乏类型检测，很多莫名奇妙的bug会产生，ts可以解决百分之九十以上这些问题，ts在编译阶段就会发现这些问题
    2. 大型项目多人协作时，接口、type 等  可以约束代码如何被使用
          1. ts起到了文档的作用（代码即文档）代码建议提示，不容易出错
    3. js  弱类型，容易出现类似input 12  却是字符串

- props 
    - 泛型约束 defineProps<{}>() 或 defineProps<interface>() 
    - interface 缺点： 不支持提供默认值， 
        - 宏函数 withDefaults(defineProps<Props>(), {默认值})

- defineEmits 
    - 运行时，const emit = defineEmits(['xxx'.'xx'])
    - 基于类型 对触发事件有更好的控制

- ref 
    - vue 中 Ref 类型
         1. ：Ref<number> 静态约束
         2. ref<number> 泛型约束

- reactive
    - 把一个对象变成响应式，应该有哪些属性？const book: interface = reactive({...})

- computed 计算属性 是一个函数
    - const double = computed<number>(() => {
    - })

- template 事件
    - Event
    - ts 在编译阶段
        - event,target null  没有value
    - as HTMLInputElement vue 所有html标签都创建了类 
            - `
            - const handleChange = (event: Event) => {
            // 有可能为null
            // 挂载前 函数是先有的 event.target null
            // 挂载后 input
            - console.log((event.target as HTMLInputElement).value);
            }
            - `

- ref标注 dom节点时
    - 由于 el.value 节点对象可能为null
    - 可能是任何dom 对象
        - const el = ref<HTMLInputElement | null>(null)
        - el.value?.focus()   ?. value可能为null

