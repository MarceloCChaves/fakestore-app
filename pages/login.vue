<template>
  <div class="flex flex-col items-center justify-center mt-20">
    <h1 class="text-2xl font-bold mb-4">Fazer Login</h1>
    
    <input
      v-model="username"
      type="text"
      placeholder="Digite seu nome"
      class="mb-4 px-4 py-2 border rounded w-64"
      required
    />

    <button
      class="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      @click="login"
    >
      Entrar
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '../composables/useAuth';
const toast = useToast();

const usernameInput = ref('');
const { setLoggedIn, setUsername } = useAuth();

const login = () => {
  if (!usernameInput.value.trim()) {
    toast.error({
    title: 'Erro',
    message: `O campo de nome de usuário não pode ser vazio`
  })
    return;
  }
  setUsername(usernameInput.value);
  setLoggedIn(true);
  navigateTo('/');
}
</script>
