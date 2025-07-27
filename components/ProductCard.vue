<template>
  <NuxtLink
    :to="`/product/${product.id}`"
    class="border rounded p-4 flex flex-col items-center justify-center hover:shadow-lg transition bg-white"
  >
    <NuxtImg
      :src="product.image"
      width="200"
      height="200"
      format="webp"
      alt="Imagem do produto"
      loading="lazy"
      class="object-contain mb-4"
    />
    <h2 class="font-semibold mb-2 line-clamp-2 text-center">{{ product.title }}</h2>
    <p class="text-green-700 font-bold">R$ {{ product.price.toFixed(2) }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
const { product } = defineProps<{
  product: {
    id: number
    title: string
    image: string
    price: number
  }
}>()
</script>
