<template>
  <h1>Router</h1>
  <p>Pasos para utilizar Router</p>
  <ol>
    <li>Instalación de dependencias.
      <p class="code">npm install vue-router@4</p>
    </li>
    <li>Creación de la carpeta router y el archivo index.js o router.js o .ts</li>
    <li>Construir la lógica dentro del archivo.
      <p class="code">
        import { createRouter, createWebHistory } from 'vue-router';
        const router = createRouter({
          history: createWebHistory(import.meta.env.BASE_URL),
          routes: []
        });

        export default router;
      </p>
      <p>Las rutas deberan ir marcadas en un objeto con la siguiente estructura:</p>
      <p class="code">
        import HomePage from "@/modules/landing/HomePage.vue";
        {
          path:'/',
          name:'Home',
          component:HomePage
        }</p>
        <p>O de manera perezosa(Lazy):</p>
        <p class="code">
          {
          path:'/',
          name:'Home',
          component: ()=>import('@/modules/landing/HomePage.vue')
        }
        </p>
    </li>
    <li>Usar en el archivo de creación de la aplicación (main.js)
      <p class="code">
        import { createApp } from 'vue'
        import App from './App.vue'
        import router from './router'

        const app = createApp(App)
        app.use(router)
        app.mount('#app')
      </p>

    </li>
  </ol>
  <h2>Diferencias entre createWebHistory y </h2>
</template>
