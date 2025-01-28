<template src="./MInventario.html"></template>
<style src="./MInvetario.css"></style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    total: {
      type: Number,
      default: 573
    },
    movimientosyesterday: {
      type: Number,
      default: 201
    }
  }
});
</script>

