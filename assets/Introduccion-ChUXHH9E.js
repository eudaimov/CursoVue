import{_ as r,c as l,b as s,a as o,t as n,F as a,o as u}from"./index-D1-KbWsm.js";const i={},p={class:"code"};function d(e,t){return u(),l(a,null,[t[7]||(t[7]=s(`<h1>Introducción</h1><h2>¿Qué es?</h2><p>Es un framework progresivo.</p><p>Comparativa entre Vue, Angular y React.</p><h2>CompositionAPI vs OptionsAPI</h2><section><p>Es algo negativo porque permite tener componentes en dos tipos diferentes. CompositionAPI es mucho mas moderno, más facil de leer. </p></section><h2>Crear una aplicación desde el CDN</h2><p>Código index.html</p><pre class="code">        &lt;!DOCTYPE html&gt;
        &lt;html lang=&quot;es&quot;&gt;
        &lt;head&gt;
            &lt;meta charset=&quot;UTF-8&quot;&gt;
            &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
            &lt;title&gt;Hola Mundo&lt;/title&gt;
            &lt;script defer src=&quot;https://unpkg.com/vue@3/dist/vue.global.js&quot;&gt;&lt;/script&gt;
            &lt;script defer src=&quot;./app.js&quot;&gt;&lt;/script&gt;
        &lt;/head&gt;
        &lt;body id=&quot;myApp&quot;&gt;
            
        &lt;/body&gt;
        &lt;/html&gt;
      </pre><p>Codigo app.js</p><pre class="code">        const{createApp,ref}=Vue;
        const app= createApp({
            template:\`
                &lt;h2&gt;Nuestra Aplicacion&lt;/h2&gt;
                &lt;p&gt;Hola Mundo&lt;p&gt;

                \`
        })
        app.mount(&#39;#myApp&#39;)
      </pre><h2>Hola Mundo en Vue</h2><h2>Vue mediante CDN</h2><h2>Propiedades reactivas con Ref</h2><h2>Propiedades de solo lectura con computed</h2><h2>Función para crear una aplicación de Vue (createApp)</h2><h2>Eventos y modificadores de evento</h2><h2>Click</h2><h2>Keypress</h2><h2>enter</h2><h2>Invocar funciones</h2><h2>Directivas como</h2><h2>v-for, v-if, v-show</h2>`,23)),o("section",null,[t[0]||(t[0]=o("p",null,'Para recorrer un array de elementos v-for="items in item".',-1)),t[1]||(t[1]=o("p",null,'Para condicionar la existencia de un elemento v-if="".',-1)),t[2]||(t[2]=o("p",null,'Para condicionar la aparición (display:none) de un elemento v-show=""',-1)),t[3]||(t[3]=o("p",null,"Pongamos un ejemplo conjunto.",-1)),t[4]||(t[4]=o("p",null,"En el template",-1)),o("pre",p,`              <div id="myApp">
                <h2>Ejemplo v-if</h2>
                
                <button v-on:click="showAuthorAction">`+n(e.labelBoton)+`</button>
                <ol>
                    <li v-for="({author, quote}) in quotes">
                        `+n(e.quote)+' <span v-show="showAuthor">by <i>'+n(e.author)+`</i></span>
                    </li>
                </ol>
            </div>
        `,1),t[5]||(t[5]=o("p",null,"En el script setup:",-1)),t[6]||(t[6]=o("pre",{class:"code"},`                  setup(){
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
        `,-1))]),t[8]||(t[8]=o("pre",{class:"code"},null,-1)),t[9]||(t[9]=o("h2",null,"v-for",-1)),t[10]||(t[10]=o("h2",null,"v-show",-1))],64)}const m=r(i,[["render",d]]);export{m as default};
