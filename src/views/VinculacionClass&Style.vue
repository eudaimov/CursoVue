<script setup>
const texto0= `<script setup> let isRed = true<\/script>"`;
const texto1= `<div class="d-flex" :class="text-red:isRed"></div>`
</script>

<template>
  <h1>Vinculación de clases y Estilos</h1>
  <p>Una necesidad común de la vinculación de datos es el manejo de la lista de clases de un elemento y sus estilos en
    línea. Puesto que class y style son atributos, podemos utilizar v-bind para asignarles un valor de cadena de forma
    dinámica, al igual que con otros atributos. Sin embargo, tratar de generar esos valores utilizando la concatenación
    de cadenas puede ser molesto y propenso a errores. Por esta razón, Vue proporciona mejoras especiales cuando se
    utiliza v-bind con class y style. Además de cadenas, las expresiones también pueden evaluarse a objetos o arrays.</p>
  <h2>Vinculación a clases html</h2>
  <h3>Vinculación a objetos</h3>
  <section>
    <p>
      Podemos usar v-bind:class o :class para alternar dinamicamente las clases que se aplican a un elemento.
    </p>
    <p class="codigo" v-text="texto0"></p>
    <p class="codigo" v-text="texto1"></p>
  </section>
  <h2>Vinculación de estilos en linea</h2>
</template>

<style scoped>

</style>