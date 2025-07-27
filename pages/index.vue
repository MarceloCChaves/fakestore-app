<template>
  <section class="p-6">
    <h1 class="text-3xl font-bold mb-6">Produtos FakeStore</h1>

    <div v-if="loading" class="mt-4">
      Carregando...
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IProduct } from '../interfaces/IProduct';

const products = ref<IProduct[]>([]);
const loading = ref(true);

onMounted(async () => {
  const data = await $fetch<IProduct[]>("https://fakestoreapi.com/products");
  products.value = data;
  loading.value = false;
})
</script>
