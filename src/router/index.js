import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";

export const rutas= [
    'Home',
    'Plantilla'
];

const vistas = [];
vistas.push({path:`/`, component: import(`../views/Home.vue`)})
for (const ruta of rutas) {
    vistas.push(
        {path:`/${ruta}`, component: import(`../views/${ruta}.vue`)}
    );
}
console.info(vistas)
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
    ...vistas,
]}
)

export default router;