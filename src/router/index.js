import { createRouter, createWebHistory } from 'vue-router';

export const rutas = [
    'Home',
    'Plantilla',
    'VinculacionClass&Style',
    'InstalacionesNecesarias',
    'JavaScript',
    'Introduccion',
    'VueviteView',
    'CreacionTest',
];

const rutasDinamicas = {};
for (const ruta of rutas) {
    rutasDinamicas[`../views/${ruta}.vue`] = import(`../views/${ruta}.vue`);
}

const vistas = [
    { path: '/', component: () => import('../views/Home.vue') },
    ...Object.keys(rutasDinamicas).map(key => ({
        path: `/${key.replace('../views/', '').replace('.vue', '')}`,
        component: () => rutasDinamicas[key]
    }))
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: vistas
});

export default router;
