<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <ComponenteWidget/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import ComponenteWidget from '@/components/widget/widget.vue'; // Importa el componente con el nuevo nombre

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    ComponenteWidget,
  },
});
</script>
