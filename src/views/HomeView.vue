<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <WidgetsComponent />
    <GraphicsComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import WidgetsComponent from '@/components/widgets/widgets.vue'; // Importa el componente con el nuevo nombre
import GraphicsComponent from '@/components/graphics/graphics.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    WidgetsComponent,
    GraphicsComponent,
  },
});
</script>