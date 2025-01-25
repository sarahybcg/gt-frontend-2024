<template>
  <ratingcard/>
  <TarjetaCurso />
  <VCalendario />
  <div class="home">
    
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ratingcard from '../components/ratingcard/ratingcard.vue';
import TarjetaCurso from '../components/tarjetacurso/tarjetacurso.vue'; 
import VCalendario from '../components/VCalendario/VCalendario.vue'; 

export default defineComponent({
  components: {
    VCalendario,
    TarjetaCurso,
    ratingcard
  },
});
</script>