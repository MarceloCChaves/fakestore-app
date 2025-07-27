<template>
  <section class="p-6">
    <div v-if="loading" class="mt-4">
      Carregando...
    </div>

    <div v-else>
      <h1 class="text-3xl font-bold mb-6">Olá {{ username }}</h1>
      <p class="mb-6">Conheça nossos produtos da loja Fakestore</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import type { IProduct } from '~/interfaces/IProduct';
import { useAuth } from '~/composables/useAuth';

const products = ref<IProduct[]>([]);
const loading = ref(true);

const { username } = useAuth();

definePageMeta({
  middleware: ['auth']
})

onMounted(async () => {
  const data = await $fetch<IProduct[]>('https://fakestoreapi.com/products');
  products.value = data;
  loading.value = false;
})
</script>
