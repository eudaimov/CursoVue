import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //base: '/CursoVue/', // Reemplaza con el nombre de tu repositorio
  base: '/',
  build: {
    outDir: 'public', // Cambia la carpeta de salida a 'public'
  }
})
