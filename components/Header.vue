<template>
  <header class="bg-blue-900 text-white text-3xl p-6">
    <div class="flex justify-around">
      <NuxtLink to="/" class="p-4hover:shadow-lg transition">
        <h2 class="font-semibold mb-2">FakeStore</h2>
      </NuxtLink>
      <div>
        <Nuxt-link to="/cart">
           <Icon name="uil:cart" style="color: white" />
        </Nuxt-link>
      </div>
    </div>
  </header>
</template>
