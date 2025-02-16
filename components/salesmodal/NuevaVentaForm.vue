<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label for="cliente" class="block text-sm font-medium text-gray-700">Cliente</label>
        <select id="cliente" v-model="cliente" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          <option value="">Seleccione un cliente</option>
          <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.nombre">
            {{ cliente.nombre }}
          </option>
        </select>
      </div>
      <div>
        <label for="fecha" class="block text-sm font-medium text-gray-700">Fecha de Venta</label>
        <input id="fecha" type="date" v-model="fecha" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
      </div>
    </div>
    <div>
      <label for="tipoVenta" class="block text-sm font-medium text-gray-700">Tipo de Venta</label>
      <select id="tipoVenta" v-model="tipoVenta" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        <option value="Paquete Turístico">Paquete Turístico</option>
        <option value="Servicio Individual">Servicio Individual</option>
      </select>
    </div>
    <SeleccionProducto
      :tipo-venta="tipoVenta"
      @paquete-select="setPaqueteTuristico"
      @servicios-select="setServiciosIndividuales"
      @clear-selection="clearSelection"
    />
    <div>
      <label for="metodoPago" class="block text-sm font-medium text-gray-700">Método de Pago</label>
      <select id="metodoPago" v-model="metodoPago" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        <option value="Efectivo">Efectivo</option>
        <option value="Tarjeta">Tarjeta</option>
        <option value="Transferencia">Transferencia</option>
      </select>
    </div>
    <button type="button" @click="showAjustesModal = true" class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Aplicar Ajustes
    </button>
    <FormularioAjustes v-if="showAjustesModal" @ajuste-add="addAjuste" @close="showAjustesModal = false" />
    <ResumenVenta
    :paquete-turistico="paqueteTuristico"
    :servicios-individuales="serviciosIndividuales"
    :ajustes="ajustes"
    :total="calcularTotal"
    @eliminar-ajuste="eliminarAjuste"
    />
    <div class="flex justify-end space-x-4">
      <button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Guardar Provisional
      </button>
      <button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Cancelar
      </button>
      <button type="submit" class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Confirmar Venta
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import SeleccionProducto from './SeleccionProducto.vue';
import FormularioAjustes from '../salesmodal/FormularioAjustes.vue';
import ResumenVenta from './ResumenVenta.vue';
import { Venta, TipoVenta, PaqueteTuristico, ServicioIndividual, Ajuste } from './salestypes';

const emit = defineEmits<{
  (e: 'submit', venta: Venta): void
}>();

const cliente = ref('');
const fecha = ref('');
const tipoVenta = ref<TipoVenta>('Paquete Turístico');
const metodoPago = ref('Efectivo');
const paqueteTuristico = ref<PaqueteTuristico | null>(null);
const serviciosIndividuales = ref<ServicioIndividual[]>([]);
const ajustes = ref<Ajuste[]>([]);
const showAjustesModal = ref(false);

const clientes = ref([
  { id: '1', nombre: 'Cliente 1' },
  { id: '2', nombre: 'Cliente 2' },
]);

const eliminarAjuste = (index: number) => {
  ajustes.value.splice(index, 1);
};

watch(tipoVenta, (newTipoVenta) => {
  paqueteTuristico.value = null;
  serviciosIndividuales.value = [];
});

const setPaqueteTuristico = (paquete: PaqueteTuristico | null) => {
  paqueteTuristico.value = paquete;
};

const setServiciosIndividuales = (servicios: ServicioIndividual[]) => {
  serviciosIndividuales.value = servicios;
};

const clearSelection = () => {
  paqueteTuristico.value = null;
  serviciosIndividuales.value = [];
  ajustes.value = [];
};

const addAjuste = (ajuste: Ajuste) => {
  ajustes.value.push(ajuste);
};

const calcularTotal = computed(() => {
  let total = 0;

  if (paqueteTuristico.value) {
    total += paqueteTuristico.value.cantidadPaquetes * paqueteTuristico.value.precioConIVA;
  }

  serviciosIndividuales.value.forEach(servicio => {
    total += servicio.cantidad * servicio.precioConIVA;
  });

  ajustes.value.forEach(ajuste => {
    if (ajuste.tipoValor === 'porcentaje') {
      const valorAjuste = total * ajuste.valor;
      if (ajuste.tipo === 'Descuento') {
        total -= valorAjuste;
      } else {
        total += valorAjuste;
      }
    } else {
      if (ajuste.tipo === 'Descuento') {
        total -= ajuste.valor;
      } else {
        total += ajuste.valor;
      }
    }
  });

  return total;
});

const handleSubmit = () => {
  const venta: Venta = {
    cliente: cliente.value,
    fecha: new Date(fecha.value),
    tipoVenta: tipoVenta.value,
    metodoPago: metodoPago.value,
    paqueteTuristico: paqueteTuristico.value || undefined,
    serviciosIndividuales: serviciosIndividuales.value.length > 0 ? serviciosIndividuales.value : undefined,
    ajustes: ajustes.value,
    total: calcularTotal.value,
  };
  emit('submit', venta);
};
</script>

