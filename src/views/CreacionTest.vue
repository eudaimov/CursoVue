<template>
<h1>Test</h1>
  <p>1. Instalar vitest el cual es muy parecido a jest</p>
  <p class="code">
    npm install -D vitest
  </p>
  <p>2. Crear una carpeta independiente llamada test.</p>
  <p>3. Crear un script:</p>
  <p class="code">test="vitest"</p>
  <p class="code">test:unit="vitest"</p>
  <p class="code">test="vitest --watch=false"</p>
  <p>4. Crear un archivo de test con la siguiente terminacion nombreDescriptivo.test.ts o nombreDescriptivo.expect.ts</p>
  <p>5. Crear el código. Por ejemplo:</p>
  <p class="code">
    import {test,expect} from 'vitest'
    import {funcion} from '../../src/carpeta'

    test('descripcion', ()=>{
      //Preparacion
      //Estimulo
      //Comportamiento esperaba.
      expect(result).toBe(5);

    }
  </p>
  <p>6. Ejecutar el test con:</p>
  <p class="code">npm run test</p>
</template>

<style scoped>

</style>
<script setup lang="ts">
</script>
