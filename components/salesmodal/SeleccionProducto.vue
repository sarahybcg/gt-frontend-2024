<template>
    <div>
      <template v-if="tipoVenta === 'Paquete Turístico'">
        <div>
          <label for="paquete" class="block text-sm font-medium text-gray-700">Paquete Turístico</label>
          <select id="paquete" v-model="selectedPaquete" @change="onPaqueteSelect" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option value="">Seleccione un paquete</option>
            <option v-for="paquete in paquetesMock" :key="paquete.id" :value="paquete.id">
              {{ paquete.nombre }} - ${{ paquete.precio }}
            </option>
          </select>
        </div>
      </template>
      <template v-else>
        <div class="space-y-4">
          <div v-for="servicio in serviciosMock" :key="servicio" class="flex items-center space-x-2">
            <input
              type="checkbox"
              :id="servicio"
              :value="servicio"
              v-model="selectedServicios"
              @change="onServiciosSelect"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
            <label :for="servicio" class="text-sm font-medium text-gray-700">{{ servicio }}</label>
            <input
              type="number"
              v-model="cantidades[servicio]"
              placeholder="Cantidad"
              min="1"
              @input="onCantidadChange(servicio, $event)"
              class="mt-1 block w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
          </div>
        </div>
      </template>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from 'vue';
  import { TipoVenta, PaqueteTuristico, ServicioIndividual, Servicio } from './salestypes';
  
  const props = defineProps<{
    tipoVenta: TipoVenta;
  }>();
  
  const emit = defineEmits<{
    (e: 'paquete-select', paquete: PaqueteTuristico | null): void;
    (e: 'servicios-select', servicios: ServicioIndividual[]): void;
  }>();
  
  const paquetesMock: PaqueteTuristico[] = [
    { id: '1', nombre: 'Paquete Básico', precio: 1000 },
    { id: '2', nombre: 'Paquete Premium', precio: 2000 },
  ];
  
  const serviciosMock: Servicio[] = ['Hotel', 'Atracciones', 'Restaurante', 'Transporte'];
  const preciosServicios: Record<Servicio, number> = {
    Hotel: 200,
    Atracciones: 50,
    Restaurante: 30,
    Transporte: 80,
  };
  
  const selectedPaquete = ref('');
  const selectedServicios = ref<Servicio[]>([]);
  const cantidades = ref<Record<Servicio, number>>({
    Hotel: 1,
    Atracciones: 1,
    Restaurante: 1,
    Transporte: 1,
  });
  
  watch(() => props.tipoVenta, () => {
    selectedPaquete.value = '';
    selectedServicios.value = [];
    cantidades.value = {
      Hotel: 1,
      Atracciones: 1,
      Restaurante: 1,
      Transporte: 1,
    };
  });
  
  const onPaqueteSelect = () => {
    const paquete = paquetesMock.find(p => p.id === selectedPaquete.value) || null;
    emit('paquete-select', paquete);
  };
  
  const onServiciosSelect = () => {
    const servicios: ServicioIndividual[] = selectedServicios.value.map(servicio => ({
      servicio,
      cantidad: cantidades.value[servicio] || 1,
      precioUnitario: preciosServicios[servicio],
    }));
    emit('servicios-select', servicios);
  };
  
  const onCantidadChange = (servicio: Servicio, event: Event) => {
    const target = event.target as HTMLInputElement;
    const cantidad = Math.max(1, Number(target.value));
    cantidades.value[servicio] = cantidad;
    onServiciosSelect();
  };
  </script>