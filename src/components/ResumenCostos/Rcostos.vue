<template src="./RCostos.html"></template>
<style src="./RCostos.css"></style>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: 'ResumenCostos',
  data() {
    return {
      subtotal: 100.00 as number, 
    };
  },
  computed: {
    impuestos(): number {
      return this.subtotal * 0.16; 
    },
    total(): number {
      return this.subtotal + this.impuestos; 
    },
  },
  filters: {
    currency(value: number): string {
      return `$${value.toFixed(2)}`;
    },
  },
});
</script>
