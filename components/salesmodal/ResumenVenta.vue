<template>
    <div class="mt-6 p-4 border rounded-md">
      <h3 class="text-lg font-semibold mb-2">Resumen de la Venta</h3>
      <template v-if="paqueteTuristico">
        <div>
          <p>Paquete Turístico: {{ paqueteTuristico.nombre }}</p>
          <p>Precio: ${{ paqueteTuristico.precio }}</p>
        </div>
      </template>
      <template v-if="serviciosIndividuales.length > 0">
        <div>
          <p class="font-semibold mt-2">Servicios Individuales:</p>
          <p v-for="(servicio, index) in serviciosIndividuales" :key="index">
            {{ servicio.servicio }}: {{ servicio.cantidad }} x ${{ servicio.precioUnitario }} = ${{ servicio.cantidad * servicio.precioUnitario }}
          </p>
        </div>
      </template>
      <template v-if="ajustes.length > 0">
        <div>
          <p class="font-semibold mt-2">Ajustes:</p>
          <p v-for="(ajuste, index) in ajustes" :key="index">
            {{ ajuste.tipo }}: ${{ ajuste.valor }} ({{ ajuste.aplicarA }})
            <span v-if="ajuste.descripcion"> - {{ ajuste.descripcion }}</span>
          </p>
        </div>
      </template>
      <p class="font-bold mt-4">Total: ${{ total }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { PaqueteTuristico, ServicioIndividual, Ajuste } from './salestypes';
  
  defineProps<{
    paqueteTuristico: PaqueteTuristico | null;
    serviciosIndividuales: ServicioIndividual[];
    ajustes: Ajuste[];
    total: number;
  }>();
  </script>