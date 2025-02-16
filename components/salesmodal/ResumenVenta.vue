<template>
  <div class="mt-6 p-4 border rounded-md">
    <h3 class="text-lg font-semibold mb-2">Resumen de la Venta</h3>
    <template v-if="paqueteTuristico">
      <div>
        <p class="font-semibold mt-2">Paquete Turístico:</p>
        <p>{{ paqueteTuristico.nombre }}: {{ paqueteTuristico.cantidadPaquetes }} x bs. {{ paqueteTuristico.precio }} (+ IVA 16%) = bs. {{ paqueteTuristico.cantidadPaquetes * paqueteTuristico.precioConIVA }}</p>
      </div>
    </template>
    <template v-if="serviciosIndividuales.length > 0">
      <div>
        <p class="font-semibold mt-2">Servicios Individuales:</p>
        <p v-for="(servicio, index) in serviciosIndividuales" :key="index">
          {{ servicio.servicio }}: {{ servicio.cantidad }} x bs. {{ servicio.precioUnitario }} (+ IVA 16%)  = bs. {{ servicio.cantidad * servicio.precioConIVA }}
        </p>
      </div>
    </template>
    <template v-if="ajustes.length > 0">
      <div>
        <p class="font-semibold mt-2">Ajustes:</p>
        <p v-for="(ajuste, index) in ajustes" :key="index">
          {{ ajuste.tipo }}: 
          <span v-if="ajuste.tipoValor === 'porcentaje'">{{ ajuste.valor * 100 }}%</span>
          <span v-else>bs. {{ ajuste.valor }}</span>
          <span v-if="ajuste.descripcion"> - {{ ajuste.descripcion }}</span>
          <button
            @click="eliminarAjuste(index)"
            class="ml-2 text-sm text-red-600 hover:text-red-800"
          >
            Eliminar
          </button>
        </p>
      </div>
    </template>
    <p class="font-bold mt-4">Total: bs. {{ total }}</p>
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

const emit = defineEmits<{
  (e: 'eliminar-ajuste', index: number): void;
}>();

const eliminarAjuste = (index: number) => {
  emit('eliminar-ajuste', index);
};
</script>