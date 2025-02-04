<script setup>

</script>

<template>
  <h1>JavaScript</h1>
  <h2>Inicio de un Proyecto</h2>
  <ol>
    <li>npm create vite</li>
    <li>Nombre del proyecto</li>
    <li>Vanila</li>
    <li>TypeScript</li>
    <li>code . (Para abrir el proyecto) Command Palette> Code y elige Shell Command Install 'code' command in the PATH</li>
  </ol>
  <h2>Levantar el proyecto</h2>
  <p class="code">npm install (Para descargar todos los paquetes</p>
  <p class="code">npm run dev</p>

  <h2>Let vs Var vs Const</h2>
  <section>
    <p>Siempre trabaje con constantes si la variable no va a cambiar, si sabe que la variable va a cambiar utilice let.</p>
    <p>Si utilizas var su alcance es global y puede crear confunsión o error si coincide con el
    nombre de </p>
    <p>Uso de `` para crear String Literales ${3+3} ${nombre variable}</p>
    <p>Uso de {} para introducir Objetos literales</p>
    <p>Exportaciones básicas: export {nombreVariable}</p>
  </section>
  <h2>Objetos Literales</h2>
    <section>
      <p>Las constantes que definen como objetos el valor de sus propiedades se puede cambiar para evitar esto se tiene que definir as const.</p>
      <p>Por ejemplo:</p>
      <p class="code">
        const persona = {
          nombre="Juan",
          apellidos="García Sánchez"
        }as const;
      </p>
      <p>Sino haces estos los valores se pueden cambiar aunque no sus propiedades.</p>
      <p>En JavaScript todos los objetos se pasan por referencia cuidado con esto. Para evitar esto utilizados el operado
      spread. Por ejemplo:</p>
      <p class="code">
        const persona = {
          nombre="Juan",
          apellidos="García Sánchez"
        };
        const segundaPersona = {... persona}
      </p>
      <p>Pero también cuidado con esto porque no funciona con las propiedades anidadas. Desde 2022 existe la función structureClone()</p>
    </section>
  <h2>Array</h2>
    <p>Recuerda que un array tambien se puede desectrurar con el operado spread para solventar el problema de referencia objetos. También
    tienes que recoradar que sino quiero que se pueda utilizar push o cualquier otro método tengo que utilizar as const.
    </p>
  <h2>Funciones</h2>
    <p>Esta seccion vamos a ver que una función se puede declarar como una variable, en especifo con la función ()=>{}</p>
    <p>Para llamar a la variable recuerda que tienes que terminar con los ().</p>
    <p class="code">
      const persona = ()=>{
        nombre: "Felix",
        apellidos: "García Sánchez",
      }
      console.info(persona());
    </p>
    <p>Vemos también el nullcheck con persona.?name para valores undefined</p>
  <h2>Desestructuración de Objetos</h2>
    <h3>¿Cómo se desestructura un objeto?</h3>
      <p> Fácil:</p>
      <pre class="code">
        const persona = {
          nombre: "Felix",
          apellidos: "Garcia",
        }
        const {nombre, apellidos} = persona;
        console.log(nombre);
      </pre>
    <h3>Interfaces de TypeScript: Como defino de que tipo es un objeto.</h3>
      <pre class="code">
        interface Persona{
          name:string,
          apellidos:string,
        }
        const persona:Persona{
          nombre:"Juan",
          apellidos:"Garcia",
        }
      </pre>
  <h2>Desesctruaccion de Array.</h2>
  <ul>
    <li>Son posicionales</li>
  </ul>
  <h2>Promesas</h2>
  <pre class="code">
    new Promise((resolve, reject)=>{
      resolve('Mensaje devuelto')

    }).then( (mensaje)=>{
      console.log(mensaje);
      }
    ).catch( (mensaje)=>{
      console.error(mensaje)
      }
    ).finally()
  </pre>
  <p>Otro ejemplo:</p>
  <pre class="code">
    import heroes from "../data/heroes";
    const getHeroeByIdAsyn = (id:number)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                const heroe = heroes.find(heroes=> heroes.id === id);
                heroe ? resolve(heroe) : reject(undefined)
            },1500)
        })
    }
  </pre>
  <h2>Axios</h2>
  <section>
    <p>Es una librería Javascript para hacer peticiones http:</p>
    <pre class="code">
      npm install axios
    </pre>
    <p>Ejemplo de uso</p>
    <pre class="code">
      import Axios from 'axios';
      import { RandomGiphy } from '../interfaces/giphyGif';

      const apiKey= 'e0jKi3vn98TY4p6nLiPrVfMkuV0QXDUr'
      export const consulta1 = Axios.create({
          baseURL:"https://api.giphy.com/v1/gifs",
          params: {
              api_key: apiKey
          }
      })
      consulta1.get&lt;RandomGiphy>('/random').then(
         console.log
      )
      .catch(()=>console.error("Error en Axios"))
    </pre>
  </section>
</template>

<style scoped>

</style>