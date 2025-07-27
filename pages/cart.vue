<template>
  <main class="max-w-5xl mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">Seu carrinho</h1>

    <p v-if="isLoading">Carregando produtos...</p>

    <div v-else-if="cartProducts.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
      <ProductCard v-for="product in cartProducts" :key="product.id" :product="product" />
    </div>

    <p v-else>Seu carrinho está vazio</p>

    <div v-if="cartProducts.length" class="mt-8">
      <hr>
      <div v-if="cartProducts.length" class="mt-8">
        <h2 class="text-2xl font-semibold mb-4">Resumo do carrinho</h2>
        <ul>
          <li v-for="product in cartProducts" :key="product.id" class="py-2 flex justify-between items-center">
            <span>{{ product.title }}</span>
            <div class="flex items-center gap-5">
              <span class="text-green-700 font-semibold">R$ {{ product.price.toFixed(2) }}</span>
              <button class="flex items-center" @click="removeFromCart(product.id)">
                <Icon name="uil:trash" class="text-red-500" />
                <span class="text-red-500">Remover</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
      <p class="text-xl font-semibold mt-8 ">
        Total: <span class="text-green-700">R$ {{ totalPrice.toFixed(2) }}</span>
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useCartStore } from '../stores/cart';
import type { IProduct } from '../interfaces/IProduct';

const cartStore = useCartStore();
const cartProducts = ref<IProduct[]>([]);
const isLoading = ref(true);
const toast = useToast();

const fetchProducts = async () => {
  isLoading.value = true;

  if (cartStore.products.length === 0) {
    cartProducts.value = [];
    isLoading.value = false;
    return;
  }

  const promises = cartStore.products.map((id: number) =>
    $fetch<IProduct>(`https://fakestoreapi.com/products/${id}`)
  );

  cartProducts.value = await Promise.all(promises);
  isLoading.value = false;
}

const totalPrice = computed(() =>
  cartProducts.value.reduce((sum: number, product: IProduct) => sum + product.price, 0)
);

const removeFromCart = (id: number) => {
  cartStore.removeProduct(id)
  toast.success({
    title: 'Produto removido',
    message: `Produto foi removido do carrinho`
  })
}

onMounted(fetchProducts);
</script>
