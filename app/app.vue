<template>
  <NuxtPage />
</template>
<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} %separator %siteName` : '%siteName'
  },
  templateParams: {
    siteName: 'Site Title',
    separator: '-',
  },
})
</script>
