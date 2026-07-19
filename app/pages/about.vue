<template>
    <div class="title">about</div>
    <NuxtLink to="/detail"> detail </NuxtLink><!-- This is a NuxtLink component that allows navigation to the homepage -->
</template>
<script lang="ts" setup>
useSeoMeta({
    title: 'About Page',
    description: 'This is the about page of our Nuxt 3 application.',
})
</script>

<style scoped>
.title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
}
</style>