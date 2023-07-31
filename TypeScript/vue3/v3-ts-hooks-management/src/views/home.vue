<template>
    <div>
        <vHeader />
        <vsidebar />
        <div class="content-box">
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import vHeader from '../components/header.vue';
import vsidebar from '../components/sidebar.vue'
</script>

<style scoped>

</style>