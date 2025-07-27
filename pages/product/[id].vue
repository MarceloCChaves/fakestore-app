<template>
  <main class="max-w-3xl mx-auto">
    <div v-if="product" class="my-10">
      <img :src="product.image" alt="product image" class="w-full md:w-96 object-contain" />
      <div class="mt-10">
        <h1 class="text-2xl font-bold mb-2">{{ product.title }}</h1>
        <p class="mb-4 text-gray-700">{{ product.description }}</p>
        <p class="text-xl font-semibold mb-4">R$ {{ product.price.toFixed(2) }}</p>

        <button
          v-if="!cartStore.products.includes(product.id)"
          class="flex items-center bg-blue-600 gap-1 text-white px-4 py-2 rounded hover:bg-blue-700"
          @click="addToCart(product.id)">
          <Icon name="uil:cart" style="color: white" />
            Adicionar ao carrinho
        </button>
      </div>
    </div>
    <div v-else>
      <p>Carregando produto...</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useCartStore } from '../../stores/cart'
import type { IProduct } from '../../interfaces/IProduct'


const route = useRoute();
const cartStore = useCartStore();

const product = ref<IProduct | null>(null);
const toast = useToast();

const fetchProduct = async (id: string) => {
  const data = await $fetch<IProduct>(`https://fakestoreapi.com/products/${id}`)
  product.value = data
}

const addToCart = (id: number) => {
  cartStore.addProduct(id)
  toast.success({
    title: 'Produto adicionado',
    message: `Produto ${product.value?.title} foi adicionado ao carrinho`
  })
}

watch(() => route.params.id, (id: string | string[] | undefined) => {
  if (typeof id === 'string') fetchProduct(id)
}, { immediate: true })
</script>
