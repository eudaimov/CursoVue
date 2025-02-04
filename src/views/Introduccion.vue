<script setup>

</script>

<template>
  <h1>Introducción</h1>
    <h2>¿Qué es?</h2>
      <p>Es un framework progresivo.</p>
      <p>Comparativa entre Vue, Angular y React.</p>
    <h2>CompositionAPI vs OptionsAPI</h2>
      <section>
        <p>Es algo negativo porque permite tener componentes en dos tipos diferentes. CompositionAPI es mucho mas
        moderno, más facil de leer. </p>
      </section>
    <h2>Crear una aplicación desde el CDN</h2>
      <p>Código index.html</p>
      <pre class="code">
        &lt;!DOCTYPE html&gt;
        &lt;html lang="es"&gt;
        &lt;head&gt;
            &lt;meta charset="UTF-8"&gt;
            &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
            &lt;title&gt;Hola Mundo&lt;/title&gt;
            &lt;script defer src="https://unpkg.com/vue@3/dist/vue.global.js"&gt;&lt;/script&gt;
            &lt;script defer src="./app.js"&gt;&lt;/script&gt;
        &lt;/head&gt;
        &lt;body id="myApp"&gt;
            
        &lt;/body&gt;
        &lt;/html&gt;
      </pre>
      <p>Codigo app.js</p>
      <pre class="code">
        const{createApp,ref}=Vue;
        const app= createApp({
            template:`
                &lt;h2&gt;Nuestra Aplicacion&lt;/h2&gt;
                &lt;p&gt;Hola Mundo&lt;p&gt;

                `
        })
        app.mount('#myApp')
      </pre>

    <h2>Hola Mundo en Vue</h2>
    <h2>Vue mediante CDN</h2>
    <h2>Propiedades reactivas con Ref</h2>
    <h2>Propiedades de solo lectura con computed</h2>
    <h2>Función para crear una aplicación de Vue (createApp)</h2>
    <h2>Eventos y modificadores de evento</h2>
    <h2>Click</h2>
    <h2>Keypress</h2>
    <h2>enter</h2>
    <h2>Invocar funciones</h2>
    <h2>Directivas como</h2>
    <h2>v-for, v-if, v-show</h2>
      <section>
        <p>Para recorrer un array de elementos v-for="items in item".</p>
        <p>Para condicionar la existencia de un elemento v-if="".</p>
        <p>Para condicionar la aparición (display:none) de un elemento v-show=""</p>
        <p>Pongamos un ejemplo conjunto.</p>
        <p>En el template</p>
        <pre class="code">
              &lt;div id="myApp"&gt;
                &lt;h2&gt;Ejemplo v-if&lt;/h2&gt;
                
                &lt;button v-on:click="showAuthorAction"&gt;{{labelBoton}}&lt;/button&gt;
                &lt;ol&gt;
                    &lt;li v-for="({author, quote}) in quotes"&gt;
                        {{quote}} &lt;span v-show="showAuthor"&gt;by &lt;i&gt;{{author}}&lt;/i&gt;&lt;/span&gt;
                    &lt;/li&gt;
                &lt;/ol&gt;
            &lt;/div&gt;
        </pre>
        <p>En el script setup:</p>
        <pre class="code">
                  setup(){
                    let autor = ref("Bruce Wey");
                    let nombre = ref("Felix");
                    let showAuthor = ref(true);
                    let labelBoton = ref("Ocultar autores")
                    const showAuthorAction = ()=>{
                        showAuthor.value = !showAuthor.value;
                        labelBoton.value = showAuthor.value ? "Ocultar autores" : "Mostrar autores"
                    }
                    setTimeout(()=>{
                        autor.value = "Batman";
                        nombre.value = "Juan";
                    },2000)
                    return {nombre, autor, quotes, showAuthor, showAuthorAction, labelBoton};
        }
        </pre>
      </section>

      <pre class="code"></pre>
    <h2>v-for</h2>
    <h2>v-show</h2>
</template>

<style scoped>

</style>