<script setup>

const codigo1= "<span> Mensaje {{msg}}</span>";
const codigo2 = "<span v-html=\"variable\"></span>";
const codigo3 = "<span v-text=\"variable\"></span>";
const codigo4 = "span v-bind:id=\"nameid\">"
const codigo5 = "span :id=\"nameid\">"

</script>

<template>
  <h1>Introducción:</h1>
  <p>Vue utiliza una sintaxis de plantilla basada en HTML que te permite vincular declarativamente el renderizado del
    DOM con los datos de la instancia del componente subyacente. Todas las plantillas de Vue son HTML sintácticamente
    válido que puede ser analizado por navegadores y por analizadores de HTML que cumplan las especificaciones.</p>
  <h2>Interpolación de texto:</h2>
  <p>La forma más básica de vinculación de datos es la interpolación de texto utilizando la sintaxis de "Mostacho" o
    bigotes (dobles llaves):</p>
  <p class="codigo" v-text="codigo1">

  </p>
  <p>También puede usar la directiva v-html</p>
  <p class="codigo" v-text="codigo2"></p>
  O:
  <p class="codigo" v-text="codigo3"></p>

  <h2>Vinculación de atributos:</h2>
  <p>Los mostachos no se pueden usar dentro de los atributos HTML. En su lugar, utiliza una directiva v-bind:</p>
  <p class="codigo" v-text="codigo4"></p>
  <p>La abreviatura de esto, sería</p>
  <p class="codigo" v-text="codigo5"></p>

  <h2>Vinculación múltiple:</h2>

  <h2>Usando Expresiones Javascript</h2>
  <section>
    <p>Dentro del doble mostacho admite todo tipo de expresiones Javascript es como si estuvieramos dentro de un script
    </p>
  </section>
</template>

<style scoped>

</style>