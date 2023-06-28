<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
//Nuxt 内置的hooks 函数
const { name } = useAppConfig()
// console.log(name);
//统一设置title 的地方
useHead({
  titleTemplate(title) {
      return title ? `${title} - ${name}` :name
  }
})
//onMounted 不用引入
//useState nuxt 内置的hooks react
onMounted(()=> {
  const currentUserFromStorage = useLocalStorage('currentUser')
  if(currentUserFromStorage) {
    const currentUser = useState('currentUser')
    currentUser.value = currentUserFromStorage
  }
})
</script>