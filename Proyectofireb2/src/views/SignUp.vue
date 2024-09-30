<template>
    <div>
      <h2>Registro</h2>
      <form @submit.prevent="registrarse">
        <input v-model="correo" type="email" placeholder="Correo electrónico" required />
        <input v-model="contraseña" type="password" placeholder="Contraseña" required />
        <button type="submit">Registrar</button>
      </form>
      <router-link to="/login">Inicia sesión</router-link>
    </div>
  </template>
  
  <script>
import { registrarUsuario } from '../auth';

export default {
  data() {
    return {
      correo: '',
      contraseña: ''
    };
  },
  methods: {
    async registrarse() {
      try {
        await registrarUsuario(this.correo, this.contraseña);
        this.$router.push('/home');
      } catch (error) {
        console.error("Error al registrar: ", error);
      }
    }
  }
};

  </script>