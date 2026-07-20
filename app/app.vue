<template>
  <NuxtPage />
</template>
<script lang="ts" setup>
useHead({
  titleTemplate:'%s %separator %siteName',
  templateParams: {
    siteName: 'Site Title',
    separator: '-',
  },
})
</script>
