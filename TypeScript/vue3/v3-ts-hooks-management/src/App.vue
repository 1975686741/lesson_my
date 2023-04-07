<template>
    <!-- 切换系语言 -->
    <el-config-provider :locale="zhCn">
        <router-view />
        <!-- <el-calendar > </el-calendar> // 日历 -->
    </el-config-provider>
</template>

<script setup lang="ts">
// element-plus 是一个全球视野框架
// el-config-provider被用来提供全局的配置选项，让配置能够在全局都能够被访问到
import { ElConfigProvider } from 'element-plus';  
// 语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn';
// import en from 'element-plus/es/locale/lang/en';

</script>
<style>
@import './assets/css/main.css';
@import './assets/css/color-dark.css';
</style>