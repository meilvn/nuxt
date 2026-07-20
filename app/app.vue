<template>
  <NuxtPage />
</template>
<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} %separator %siteName` : '%siteName'
  },
  templateParams: {
    separator: '_',
    siteName: 'My App'
  }
})
</script>
