<template>
 
  <VCalendario/>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VCalendario from './VCalendario/VCalendario.vue';

export default defineComponent({
  name: 'HelloWorld',
  components: { VCalendario },
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
