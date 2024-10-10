import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  ase: '/NOMBRE_DEL_REPOSITORIO/', // Reemplaza con el nombre de tu repositorio
})
