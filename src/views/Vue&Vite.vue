<script setup>

</script>

<template>
  <h2>Inicio del Proyecto</h2>
<!--  <pre class="code">-->
<!--    npm create vue@latest</pre>-->
  <h2>Composition API</h2>
  <h2>Script Setup</h2>
  <h2>DefineComponent</h2>
  <h2>Single File Components</h2>
  <h2>Separación de Lógica</h2>
  <h2>Composables</h2>
  <h2>Build de producción</h2>
  <h2>Despliegue a producción</h2>
    <section>
      <p>Tiene que tener instalado un servidor local estático. Puedes utilizar serve. Puedes instalarlo con el comando
      npm install -g serve. Y después de construir el proyecto tienes que emplear desde la carpeta de salida el siguiente
      comando serve -s . </p>
      <p>Puedes utilizar cualquier otro servidor estático como ngix o Apache</p>
    </section>
  <h2>Manejo de estilos</h2>
    <section>
      <p>En el main.js/ o main.ts debería tener la siguiente importación:</p>
      <p class="code">
        import './style.css'</p>
      <p>Para bootstrap buscamos el cdn y la colocamos en el index.html</p>
  <h2>Para TailwindCSS (v.4)</h2>
      <ol>
        <li>
        Utilizamos el siguiente comando
        <p class="code">npm install tailwindcss @tailwindcss/vite</p>
        </li>
        <li>Añadimos al archivo de configuraci2n vite.config.js lo siguiente:
          <p class="code">import { defineConfig } from 'vite'<br>
          import tailwindcss from '@tailwindcss/vite'<br>
          export default defineConfig({<br>
          &emsp;plugins: [<br>
          &emsp;&emsp;tailwindcss(),<br>
          &emsp;],<br>
          })</p>
        </li>
        <li> Y en nuestro archivo style.css o main.css añadimos:
        <p class="code">@import "tailwindcss";</p>
        </li>
      </ol>

      <p>Y en nuestro archivo style.css:</p>

    </section>
  <h2>Publicar en Git Pages</h2>
    <section>
      <ol>
        <li>Instala las siguientes dependencias, para poder integrar con gitPages.</li>
        <p class="code">npm install gh-pages -D</p>
        <li>Añade el siguiente script a package.json</li>
        <p class="code">"deploy": "npm run build && gh-pages -d dist"</p>
        <li>Configura el archivo vite.config.js</li>
        <p class="code">
          import { defineConfig } from 'vite';<br>
          import vue from '@vitejs/plugin-vue';<br>
          <br>
          export default defineConfig({<br>
          plugins: [vue()],<br>
          base: '/CursoVue/',//nombre del repositorio<br>
          });</p>
        <li>Construcción y publicación mediante el comando:</li>
        <p class="code">npm run deploy</p>
        <li>Sube el proyecto a GitHub y configura GitPages.</li>
        <p>Ve a la página de tu repositorio en GitHub, haz clic en "Settings", luego en "Pages" en
          la barra lateral izquierda. En la sección "Build and deployment", selecciona "Deploy from
          a branch" y elige la rama gh-pages como la fuente de publicación.</p>
        <li>Acceder a tu sitio web. Una vez que GitHub Pages haya publicado tu sitio web, podrás
          acceder a él a través de la URL https://nombre-de-usuario.github.io/nombre-de-tu-repositorio.
          Reemplaza _nombre-de-usuario con tu nombre de usuario en GitHub y
          _nombre-de-tu-repositorio con el nombre de tu repositorio.</li>
      </ol>
    </section>
</template>

<style scoped>

</style>
