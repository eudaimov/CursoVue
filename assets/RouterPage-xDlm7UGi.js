import{_ as r,c as o}from"./index-8ZEFF9Va.js";const a={};function t(p,e){return e[0]||(e[0]=o('<h1>Router</h1><p>Pasos para utilizar Router</p><ol><li>Instalación de dependencias. <p class="code">npm install vue-router@4</p></li><li>Creación de la carpeta router y el archivo index.js o router.js o .ts</li><li>Construir la lógica dentro del archivo. <p class="code"> import { createRouter, createWebHistory } from &#39;vue-router&#39;; const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes: [] }); export default router; </p><p>Las rutas deberan ir marcadas en un objeto con la siguiente estructura:</p><p class="code"> import HomePage from &quot;@/modules/landing/HomePage.vue&quot;; { path:&#39;/&#39;, name:&#39;Home&#39;, component:HomePage }</p><p>O de manera perezosa(Lazy):</p><p class="code"> { path:&#39;/&#39;, name:&#39;Home&#39;, component: ()=&gt;import(&#39;@/modules/landing/HomePage.vue&#39;) } </p></li><li>Usar en el archivo de creación de la aplicación (main.js) <p class="code"> import { createApp } from &#39;vue&#39; import App from &#39;./App.vue&#39; import router from &#39;./router&#39; const app = createApp(App) app.use(router) app.mount(&#39;#app&#39;) </p></li></ol><h2>Diferencias entre createWebHistory y </h2>',4))}const s=r(a,[["render",t]]);export{s as default};
