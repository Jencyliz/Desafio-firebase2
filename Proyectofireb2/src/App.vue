<template>
  <div id="app">
    <header>
      <nav>
        <router-link v-if="!usuario" to="/signup">Registrarse</router-link>
        <router-link v-if="!usuario" to="/login">Iniciar Sesión</router-link>
        <button v-if="usuario" @click="cerrarSesion">Cerrar Sesión</button>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { cerrarSesion } from './auth';

export default {
  data() {
    return {
      usuario: null
    };
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.usuario = user;
    });
  },
  methods: {
    async cerrarSesion() {
      try {
        await cerrarSesion();
        this.$router.push('/login');
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
      }
    }
  }
};
</script>

<style scoped>
#app {
  background-color: #121212;
  color: #ffffff; 
  font-family: Arial, sans-serif; 
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background-color: #2a004d;
  padding: 10px 20px;
}

nav {
  display: flex;
  justify-content: space-between;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #6f007f;
}

.logout-button {
  background-color: #6f007f;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-button:hover {
  background-color: #9b00b3;
}

main {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
