<style scoped>
*{
  box-sizing: border-box;
}

.reducir{
  width: 0 !important;
  padding:0 !important;
  overflow: hidden;
}
.ampliar{
  width: 100% !important;
}

.barra{
  position: fixed;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: start;
  column-gap: 1rem;
  color:white;
  z-index: 10;
  background-color: #47595e;
  margin:0;
  text-decoration: none;
  text-indent: 0;
  list-style: none;
}
#menu{
  position:fixed;
  background-color: #403f3f;
  margin:0;
  min-height: calc(100vh - 3rem);
  top:3rem;
  left:0;
  z-index: 10;
  padding: 1.5rem;
  list-style: none;
  width: 200px;
}

.barra span{
  height: min-content;
}



#menu a{
  color:white;
  text-decoration: none;
}

.mostrar {
  transform: translateX(0);
}

#iconoMenu{
  transform: scale(1.5);
  font-weight: bold;
}
#informacion{
  position:relative;
  float:right;
  z-index: 1;
  width: calc(100% - 200px);
  padding: 2rem;
}
#contenidoPrincipal{

  position: relative;
  float: right;
  width: 100%;
  right: 0;
  top:3rem;
  z-index: 8;
}

</style>
<script setup>
  import {RouterLink, RouterView} from "vue-router";
  import {rutas} from '@/router/index.js'

  const items= rutas;
  const toogleMenu = ()=>{
    document.getElementById("menu").classList.toggle("reducir");
    document.getElementById("informacion").classList.toggle("ampliar")
  }



</script>

<template>

  <div class="barra">
    <span id="iconoMenu" style="width: 2rem" @click="toogleMenu">&emsp;&#9776;</span>
    <span class="titulo" style="display: flex; justify-content: center">Curso de VUE.JS</span>
  </div>


  <main id="contenidoPrincipal">
    <ul id="menu">
      <li v-for="item in items" :key="item" @click="toogleMenu">
        <RouterLink :to=item>{{item}} </RouterLink>
      </li>
    </ul>
    <div id="informacion">
      <RouterView></RouterView>
    </div>
  </main>

</template>

