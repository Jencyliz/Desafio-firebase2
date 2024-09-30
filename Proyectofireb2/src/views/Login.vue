<template>
    <div>
      <h2>Iniciar sesión</h2>
      <form @submit.prevent="iniciarSesion">
        <input v-model="correo" type="email" placeholder="Correo electrónico" required />
        <input v-model="contraseña" type="password" placeholder="Contraseña" required />
        <button type="submit">Iniciar sesión</button>
      </form>
      <router-link to="/signup">Regístrate</router-link>
    </div>
  </template>
  
  <script>
import { iniciarSesion } from '../auth';

export default {
  data() {
    return {
      correo: '',
      contraseña: ''
    };
  },
  methods: {
    async iniciarSesion() {
      try {
        await iniciarSesion(this.correo, this.contraseña);
        this.$router.push('/home');
      } catch (error) {
        console.error("Error al iniciar sesión: ", error);
      }
    }
  }
};
</script>
