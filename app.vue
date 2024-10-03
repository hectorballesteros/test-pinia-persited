<template>
  <div class="container">
    <h1>Prueba Pinia Persited</h1>

    <!-- Si el usuario está logueado -->
    <div v-if="sessionStore.isLoggedIn">
      <p>Hola, {{ sessionStore.user?.name }}!</p>
      <button @click="logout">Logout</button>
    </div>

    <!-- Si el usuario no está logueado -->
    <div v-else>
      <input v-model="username" placeholder="Ingresa tu nombre" />
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSessionStore } from '~/stores/store'

// Referencia para el nombre de usuario
const username = ref('')

// Acceder a la tienda de sesión
const sessionStore = useSessionStore()

// Función para iniciar sesión
const login = () => {
  if (username.value) {
    sessionStore.login(username.value)
    username.value = ''  // Limpiar el campo después del login
  }
}

// Función para cerrar sesión
const logout = () => {
  sessionStore.logout()
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

input {
  padding: 10px;
  margin-right: 10px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
