<template>
  <header class="bg-blue-900 text-white text-3xl p-6">
    <div class="flex justify-around">
      <NuxtLink to="/" class="hover:shadow-lg transition">
        <h2 class="font-semibold">FakeStore</h2>
      </NuxtLink>
      <div v-if="loggedIn">
        <NuxtLink class="flex items-center gap-2 text-white" to="/cart">
          <Icon name="uil:cart" size="25" />
          <span class="text-base">Carrinho</span>
        </NuxtLink>
        <button @click="logout" class="flex items-center gap-2 text-red-500 text-base mt-2">
          <Icon name="uil:sign-out-alt" size="25" />
          Fazer Logout
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAuth } from '../composables/useAuth';

const { loggedIn, setLoggedIn } = useAuth()

const logout = () => {
  setLoggedIn(false)
  navigateTo('/login')
}
</script>

