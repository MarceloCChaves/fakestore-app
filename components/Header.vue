<template>
  <header class="bg-blue-900 text-white text-3xl p-6">
    <div class="flex justify-around">
      <NuxtLink to="/" class="hover:shadow-lg transition">
        <h2 class="font-semibold">FakeStore</h2>
      </NuxtLink>
      <div class="flex justify-center items-center">
        <NuxtLink class="flex items-center gap-2 text-white" to="/cart">
          <Icon name="uil:cart" size="25" />
          <span class="text-base">Carrinho</span>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
