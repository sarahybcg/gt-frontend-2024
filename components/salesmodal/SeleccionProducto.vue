<template>
  <div>
    <template v-if="tipoVenta === 'Paquete Turístico'">
      <div>
        <label for="paquete" class="block text-sm font-medium text-gray-700">Paquete Turístico</label>
        <select
          id="paquete"
          v-model="selectedPaquete"
          @change="onPaqueteSelect"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Seleccione un paquete</option>
          <option v-for="paquete in paquetesMock" :key="paquete.id" :value="paquete.id">
            {{ paquete.nombre }} - bs. {{ paquete.precio }} (+ IVA)
          </option>
        </select>
      </div>
      <div class="mt-4">
        <label for="cantidadPaquetes" class="block text-sm font-medium text-gray-700">Cantidad de Paquetes</label>
        <input
          id="cantidadPaquetes"
          type="number"
          v-model="cantidadPaquetes"
          placeholder="Cantidad"
          min="1"
          @input="onCantidadPaquetesChange"
          class="mt-1 block w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
    </template>
    <template v-else>
      <div class="space-y-4">
        <div>
          <label for="servicio" class="block text-sm font-medium text-gray-700">Servicios</label>
          <select
            id="servicio"
            v-model="selectedServicios"
            multiple
            @change="onServicioSelect"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option v-for="servicio in serviciosMock" :key="servicio" :value="servicio">
              {{ servicio }} - bs. {{ preciosServicios[servicio] }} (+ IVA)
            </option>
          </select>
        </div>
        <div v-for="(servicio, index) in selectedServicios" :key="index">
          <label :for="'cantidad-' + servicio" class="block text-sm font-medium text-gray-700">
            Cantidad de Personas para {{ servicio }}
          </label>
          <input
            :id="'cantidad-' + servicio"
            type="number"
            v-model="cantidadesServicios[servicio]"
            placeholder="Cantidad"
            min="1"
            @input="onServicioSelect"
            class="mt-1 block w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
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
  (e: 'paquete-select', paquete: PaqueteTuristico | null, cantidadPaquetes: number): void;
  (e: 'servicios-select', servicios: ServicioIndividual[]): void;
  (e: 'clear-selection'): void;
}>();

const paquetesMock: PaqueteTuristico[] = [
  { id: '1', nombre: 'Paquete Básico Individual', cantidadPaquetes: 1, precio: 1000, precioConIVA: 1160 },
  { id: '2', nombre: 'Paquete Premium Individual', cantidadPaquetes: 1, precio: 2000, precioConIVA: 2320 },
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
const cantidadesServicios = ref<Record<Servicio, number>>({
  Hotel: 1,
  Atracciones: 1,
  Restaurante: 1,
  Transporte: 1,
});
const cantidadPaquetes = ref(1);

watch(() => props.tipoVenta, () => {
  selectedPaquete.value = '';
  selectedServicios.value = [];
  cantidadPaquetes.value = 1;
  cantidadesServicios.value = { Hotel: 1, Atracciones: 1, Restaurante: 1, Transporte: 1 };

  emit('clear-selection');
});

const calcularPrecioConIVA = (precio: number): number => {
  const precioConIVA = precio * 1.16;
  return Math.round(precioConIVA * 100) / 100;
};

const onPaqueteSelect = () => {
  const paquete = paquetesMock.find(p => p.id === selectedPaquete.value);
  if (paquete) {
    const paqueteConIVA: PaqueteTuristico = {
      ...paquete,
      precio: paquete.precio,
      precioConIVA: calcularPrecioConIVA(paquete.precio),
      cantidadPaquetes: cantidadPaquetes.value,
    };
    emit('paquete-select', paqueteConIVA, cantidadPaquetes.value);
  } else {
    emit('paquete-select', null, cantidadPaquetes.value);
  }
};

const onCantidadPaquetesChange = () => {
  if (selectedPaquete.value) {
    onPaqueteSelect();
  }
};

const onServicioSelect = () => {
  const serviciosSeleccionados: ServicioIndividual[] = selectedServicios.value.map(servicio => ({
    servicio,
    cantidad: cantidadesServicios.value[servicio],
    precioUnitario: preciosServicios[servicio],
    precioConIVA: calcularPrecioConIVA(preciosServicios[servicio]),
  }));

  emit('servicios-select', serviciosSeleccionados);
};
</script>
