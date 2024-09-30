<template>
    <div>
      <h2>Bienvenido a la página principal</h2>
      <button @click="cerrarSesion">Cerrar sesión</button>
    </div>
  </template>
  
  <script>
import { cerrarSesion } from '../auth';

export default {
  methods: {
    async cerrarSesion() {
      try {
        await cerrarSesion();
        this.$router.push('/login');
      } catch (error) {
        console.error("Error al cerrar sesión: ", error);
      }
    }
  }
};
</script>
