<template>
  <div class="w-full bg-white min-h-screen pt-20">
    <div class="w-full max-w-6xl mx-auto">
    <SubNav module-name="Gestión de Ventas" />
    <br></br>
    <div class="w-full max-w-4xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h1 class="text-2xl font-bold mb-6">Registro</h1>
    <NuevaVentaForm @submit="handleVentaSubmit" />
  </div>
</div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NuevaVentaForm from '../../../../components/salesmodal/NuevaVentaForm.vue';
import type { Venta } from '../../../../components/salesmodal/salestypes';

const venta = ref<Venta | null>(null);

const handleVentaSubmit = (nuevaVenta: Venta) => {
  venta.value = nuevaVenta;
  console.log('Venta guardada:', nuevaVenta);
};
</script>