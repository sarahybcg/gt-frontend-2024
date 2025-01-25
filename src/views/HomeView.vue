<template>
  <TarjetaCurso />
  <VCalendario />
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TarjetaCurso from '../components/tarjetacurso/tarjetacurso.vue'; 
import VCalendario from '../components/VCalendario/VCalendario.vue'; 

export default defineComponent({
  components: {
    VCalendario,
    TarjetaCurso,
  },
});
</script>