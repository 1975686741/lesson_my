import { defineStore } from "pinia";// 直接将某个模块的状态函数化
import { ref, Ref, computed } from 'vue'
import { nanoid } from 'nanoid'    // 生成绝对唯一id库

// 持久化， localStorage
// 告别类式编程，来到函数式编程
type Todo = { id: string; text: string; isComplete: boolean }    // 自定义类型
const lsKey = "_v_todos"
export const useTodoStore = defineStore('todos', () => {
    // 泛型约束   
    const todos: Ref<Todo[]> = ref([])  // 响应式状态 每一项的类型  
    const addTodo = (text: string) => {
        todos.value = [
            ...todos.value,
            {
                id: nanoid(),  // 如何生成一个唯一的id？
                isComplete: false,  // 未完成
                text                // 文本的内容
            }
        ]
        updateLocalStorage()
    }
    const updateLocalStorage = () => {
        localStorage.setItem(lsKey, JSON.stringify(todos.value))
    }
    const initFromLocalStorage = () => {
        const lstodos = localStorage.getItem(lsKey)
        if (lstodos === null) {
            todos.value = []
        } else {
            todos.value = JSON.parse(lstodos)
        }
    }
    const completedTodos = computed(() =>
        todos.value.filter(todos => todos.isComplete === true))
    const incompletedTodos = computed(() =>
        todos.value.filter(todos => todos.isComplete !== true))
    const toggleTodo = (id : string) => {
        // todos 更新
        todos.value.forEach( todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
        })    // 引用式的
        updateLocalStorage();  //再引用一下就可以了
    }
    const clearCompletedTodos = () => {
        todos.value = todos.value.filter(todo => todo.isComplete === false)
        updateLocalStorage(); 
    }
    const deleteTodo = (id : string) => {
        todos.value = todos.value.filter(todo => todo.id !== id)
        updateLocalStorage(); 
    }
    return {
        todos,
        addTodo,
        initFromLocalStorage,
        completedTodos,
        incompletedTodos,
        toggleTodo,
        clearCompletedTodos,
        deleteTodo
    }
})