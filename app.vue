<template>
  <Header></Header>
  <main class="max-w-6xl mx-auto px-4">
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';

useHead({
  title: 'FakeStore',
})

</script>