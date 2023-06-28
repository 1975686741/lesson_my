<template>
    <div class="app">
        <header>
            <div>
                <span></span>
                <Nuxt-link to="/">{{ name }}</Nuxt-link>
            </div>
            <nav>
                <div>
                    <nuxt-link to="/about">关于</nuxt-link>
                </div>
                <div>
                    <nuxt-link to="/posts">内容</nuxt-link>
                </div>
            </nav>
            <div>
                <div v-if="!currentUser">
                    <nuxt-link to="/login">
                        <img src="/icons/account.svg" alt="登录">
                    </nuxt-link>
                </div>
                <div v-else>
                    <img src="/icons/logout.svg" alt="退出登录" @click="useLogout">
                </div>
                <div v-if="currentUser">{{ currentUser.name }}</div>
            </div>
        </header>
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script setup lang="ts">
import type { CurrentUser } from '~/types/user.type';
const {name} = useAppConfig()
const currentUser = useState<CurrentUser>('currentUser');

</script>

<style scoped>
@import '~/assets/styles/default.css';
</style>