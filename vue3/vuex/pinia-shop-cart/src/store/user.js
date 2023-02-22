import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        name: '小胡努力米哈游',
        isAdmin: true
    })
})