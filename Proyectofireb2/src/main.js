import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { app as firebaseApp } from './firebaseConfig';

createApp(App)
  .use(router)
  .mount('#app');
