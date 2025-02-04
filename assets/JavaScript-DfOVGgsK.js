import{_ as o,b as a}from"./index-D1-KbWsm.js";const n={};function r(s,e){return e[0]||(e[0]=a(`<h1>JavaScript</h1><h2>Inicio de un Proyecto</h2><ol><li>npm create vite</li><li>Nombre del proyecto</li><li>Vanila</li><li>TypeScript</li><li>code . (Para abrir el proyecto) Command Palette&gt; Code y elige Shell Command Install &#39;code&#39; command in the PATH</li></ol><h2>Levantar el proyecto</h2><p class="code">npm install (Para descargar todos los paquetes</p><p class="code">npm run dev</p><h2>Let vs Var vs Const</h2><section><p>Siempre trabaje con constantes si la variable no va a cambiar, si sabe que la variable va a cambiar utilice let.</p><p>Si utilizas var su alcance es global y puede crear confunsión o error si coincide con el nombre de </p><p>Uso de \`\` para crear String Literales \${3+3} \${nombre variable}</p><p>Uso de {} para introducir Objetos literales</p><p>Exportaciones básicas: export {nombreVariable}</p></section><h2>Objetos Literales</h2><section><p>Las constantes que definen como objetos el valor de sus propiedades se puede cambiar para evitar esto se tiene que definir as const.</p><p>Por ejemplo:</p><p class="code"> const persona = { nombre=&quot;Juan&quot;, apellidos=&quot;García Sánchez&quot; }as const; </p><p>Sino haces estos los valores se pueden cambiar aunque no sus propiedades.</p><p>En JavaScript todos los objetos se pasan por referencia cuidado con esto. Para evitar esto utilizados el operado spread. Por ejemplo:</p><p class="code"> const persona = { nombre=&quot;Juan&quot;, apellidos=&quot;García Sánchez&quot; }; const segundaPersona = {... persona} </p><p>Pero también cuidado con esto porque no funciona con las propiedades anidadas. Desde 2022 existe la función structureClone()</p></section><h2>Array</h2><p>Recuerda que un array tambien se puede desectrurar con el operado spread para solventar el problema de referencia objetos. También tienes que recoradar que sino quiero que se pueda utilizar push o cualquier otro método tengo que utilizar as const. </p><h2>Funciones</h2><p>Esta seccion vamos a ver que una función se puede declarar como una variable, en especifo con la función ()=&gt;{}</p><p>Para llamar a la variable recuerda que tienes que terminar con los ().</p><p class="code"> const persona = ()=&gt;{ nombre: &quot;Felix&quot;, apellidos: &quot;García Sánchez&quot;, } console.info(persona()); </p><p>Vemos también el nullcheck con persona.?name para valores undefined</p><h2>Desestructuración de Objetos</h2><h3>¿Cómo se desestructura un objeto?</h3><p> Fácil:</p><pre class="code">        const persona = {
          nombre: &quot;Felix&quot;,
          apellidos: &quot;Garcia&quot;,
        }
        const {nombre, apellidos} = persona;
        console.log(nombre);
      </pre><h3>Interfaces de TypeScript: Como defino de que tipo es un objeto.</h3><pre class="code">        interface Persona{
          name:string,
          apellidos:string,
        }
        const persona:Persona{
          nombre:&quot;Juan&quot;,
          apellidos:&quot;Garcia&quot;,
        }
      </pre><h2>Desesctruaccion de Array.</h2><ul><li>Son posicionales</li></ul><h2>Promesas</h2><pre class="code">    new Promise((resolve, reject)=&gt;{
      resolve(&#39;Mensaje devuelto&#39;)

    }).then( (mensaje)=&gt;{
      console.log(mensaje);
      }
    ).catch( (mensaje)=&gt;{
      console.error(mensaje)
      }
    ).finally()
  </pre><p>Otro ejemplo:</p><pre class="code">    import heroes from &quot;../data/heroes&quot;;
    const getHeroeByIdAsyn = (id:number)=&gt;{
        return new Promise((resolve, reject)=&gt;{
            setTimeout(()=&gt;{
                const heroe = heroes.find(heroes=&gt; heroes.id === id);
                heroe ? resolve(heroe) : reject(undefined)
            },1500)
        })
    }
  </pre><h2>Axios</h2><section><p>Es una librería Javascript para hacer peticiones http:</p><pre class="code">      npm install axios
    </pre><p>Ejemplo de uso</p><pre class="code">      import Axios from &#39;axios&#39;;
      import { RandomGiphy } from &#39;../interfaces/giphyGif&#39;;

      const apiKey= &#39;e0jKi3vn98TY4p6nLiPrVfMkuV0QXDUr&#39;
      export const consulta1 = Axios.create({
          baseURL:&quot;https://api.giphy.com/v1/gifs&quot;,
          params: {
              api_key: apiKey
          }
      })
      consulta1.get&lt;RandomGiphy&gt;(&#39;/random&#39;).then(
         console.log
      )
      .catch(()=&gt;console.error(&quot;Error en Axios&quot;))
    </pre></section>`,31))}const i=o(n,[["render",r]]);export{i as default};
