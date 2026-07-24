<template>
    <div class="title">about</div>
    <NuxtLink to="/detail"> detail </NuxtLink><!-- This is a NuxtLink component that allows navigation to the homepage -->
    {{ foo }} <!-- This is a template expression that displays the value of the foo variable -->
    {{ bar }} <!-- This is a template expression that displays the value of the bar variable -->
</template>
<script lang="ts" setup>
useSeoMeta({
    title: 'About Page',
    description: 'This is the about page of our Nuxt 3 application.',
})

const { foo, bar } = useFoo();
</script>

<style scoped>
.title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
}
</style>