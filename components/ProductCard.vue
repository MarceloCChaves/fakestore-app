<template>
  <NuxtLink
    :to="`/product/${product.id}`"
    class="border rounded p-4 flex flex-col hover:shadow-lg transition bg-white"
  >
    <img :src="product.image" alt="" class="h-48 object-contain mb-4" />
    <h2 class="font-semibold mb-2 line-clamp-2">{{ product.title }}</h2>
    <p class="text-green-700 font-bold">${{ product.price }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const { product } = defineProps<{
  product: {
    id: number
    title: string
    image: string
    price: number
  }
}>()
</script>
