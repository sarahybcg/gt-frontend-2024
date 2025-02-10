<template src="./tarjetacurso.html"></template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TarjetaCurso',
  props: {
    courseNumber: {
      type: Number,
      default: 6
    },
    courseType: {
      type: String,
      default: 'Cocina'
    },
    documentType: {
      type: String,
      default: 'Documento'
    }
  },
  emits: ['show-details']
});
</script>

<style src="./tarjetacurso.css" scoped></style>