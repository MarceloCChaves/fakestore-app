<template>
  <main class="max-w-5xl mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">Meus Favoritos</h1>

    <div v-if="cartProducts.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <NuxtLink
        v-for="product in cartProducts"
        :key="product.id"
        :to="`/product/${product.id}`"
        class="border rounded p-4 flex flex-col hover:shadow-lg transition"
      >
        <img :src="product.image" alt="" class="h-48 object-contain mb-4" />
        <h2 class="font-semibold mb-2">{{ product.title }}</h2>
        <p class="text-green-700 font-bold">${{ product.price }}</p>
      </NuxtLink>
    </div>
    <p v-else>Seu carrinho está vazio</p>
  </main>
</template>

<script setup lang="ts">
import { useCartStore } from '../stores/cart';
import type { IProduct } from '../interfaces/IProduct';

const cartStore = useCartStore();
const cartProducts = ref<IProduct[]>([]);

const fetchProducts = async () => {
  if (cartStore.products.length === 0) {
    cartProducts.value = []
    return
  }

  const promises = cartStore.products.map((id: number) =>
    $fetch<IProduct>(`https://fakestoreapi.com/products/${id}`)
  )
  cartProducts.value = await Promise.all(promises);
}

onMounted(fetchProducts)
</script>
