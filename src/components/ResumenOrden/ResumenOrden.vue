<template src="./ResumenOrden.html"></template>
<style src="./ResumenOrden.css"></style>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ResumenOrden',
  data() {
    return {
      proveedor: 'Proveedor',
      ubicacion: 'Ubicación',
      tipo: 'Tipo',
      productos: [
        { nombre: 'Producto 1', cantidad: 10, precio: 100.0 },
        { nombre: 'Producto 2', cantidad: 5, precio: 75.0 },
      ],
      subtotal: 175.0,
      impuestos: 28.0,
      total: 205.0,
    };
  },
});
</script>
