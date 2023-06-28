<template>
    <div>
        <h1>用户登录</h1>
        <form  @submit.prevent>
            <div>
                <input 
                    type="text" 
                    autocomplete="username"
                    placeholder="名字"
                    v-model="name"
                />
            </div>
            <div>
                <input 
                    type="password" 
                    autocomplete="current-password"
                    placeholder="密码"
                    v-model="password"
                />
            </div>
            <div>
                <button class="paramr" @click="login">登录</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { CurrentUser } from '~~/types/user.type'

// 代理跨域 后端向其他的后端发送请求
useHead({
    title: '登录'
})

const router = useRouter()
const name = ref('')
const password = ref('')
const currentUser = useState('currentUser')
const login = async() => {
    // useApiFetch  hooks       CurrentUser类型传参
    const { data } = await useApiFetch<CurrentUser>('login', {
        method: 'POST',
        body: {
            name: name.value,
            password: password.value
        }
    })
    console.log(data);
    
    if (data.value) {
       currentUser.value = data.value
       useLocalStorage('currentUser', currentUser.value)
       router.push('/')
    }
}

</script>

<style scoped>

</style>