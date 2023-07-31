<template>
    <slot></slot>
    <div class="body">
        <NavBar />
        <main class="container">
            <slot></slot>
        </main>
    </div>
</template>

<script setup>

</script>

<style scoped>
.body {
    min-width: 1000px;
    @apply bg-gray-100 flex flex-col min-h-screen
}
</style>