<script setup>
  import {RouterLink, RouterView} from "vue-router";
  import {rutas} from "../router/index.js"

  const elementos= rutas;


  function menu() {
    document.getElementById("menu").classList.toggle("mostrar");
    document.getElementById("contenidoPrincipal").classList.toggle("reducir")
  }

</script>
<style scoped>
*{
  box-sizing: border-box;
}
main{
  position: absolute;
  right: 0;
  width: 100vw;
  transition: width 0.5s;
}
.reducir{
  width: calc(100vw - 250px);
}
menu .barra{
  width: 100vw;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.barra span{
  height: min-content;
}
menu ul li{
  list-style: none;
}
menu ul{
  margin-top:0;
  margin-left: 0;
  position: absolute;
  top:3rem;
  transform: translateX(-250px);
  transition: transform 0.5s;
  background-color: whitesmoke;
  width: 250px;
  display: flex;
  flex-direction: column;
  color:black;
  column-gap: 1rem;
  padding: 0.5rem 1rem;
  height: calc(100vh - 3.1rem);
  overflow-y: visible;
}
.mostrar {
  transform: translateX(0);
}
menu a{
  cursor: pointer;
  text-decoration: none;
}
menu a:hover{
  font-weight: bold;
  color:lawngreen;
}
#iconoMenu{
  transform: scale(1.5);
  font-weight: bold;
}

</style>

<template>

  <menu>
    <div class="barra">
      <span id="iconoMenu" style="width: 2rem" @click="menu">&emsp;&#9776;</span>
      <span class="titulo" style="width: 100%; display: flex; justify-content: center">Curso de VUE.JS</span>
    </div>
    <ul id="menu">
      <li v-for="item in elementos">
       <RouterLink :to=item>{{item}}</RouterLink>
      </li>
    </ul>
  </menu>
  <main id="contenidoPrincipal">
    <RouterView></RouterView>
  </main>

</template>

