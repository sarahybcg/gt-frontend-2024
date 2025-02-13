<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden">
    <div class="p-6 flex justify-between items-center border-b">
      <h2 class="text-2xl font-semibold">Libro diario</h2>
      <button @click="generateReport" class="px-6 py-2 bg-[#003B73] text-white rounded-2xl shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-lg hover:bg-[#002c56]">
        Generar Reporte
      </button>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full border-separate rounded-lg">
        <thead>
          <tr class="bg-gray-50">
            <th class="px-6 py-4 text-left text-sm font-semibold rounded-tl-lg">Fecha</th>
            <th class="px-6 py-4 text-left text-sm font-semibold">Descripción</th>
            <th class="px-6 py-4 text-left text-sm font-semibold">Cuenta</th>
            <th class="px-6 py-4 text-left text-sm font-semibold">Ref</th>
            <th class="px-6 py-4 text-right text-sm font-semibold">Debe</th>
            <th class="px-6 py-4 text-right text-sm font-semibold rounded-tr-lg">Haber</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entry, index) in entries" :key="index" class="border-t border-gray-100 transition-colors duration-200 hover:bg-gray-50">
            <td class="px-6 py-4 text-sm">{{ entry.fecha }}</td>
            <td class="px-6 py-4 text-sm">{{ entry.descripcion }}</td>
            <td class="px-6 py-4 text-sm">{{ entry.cuenta }}</td>
            <td class="px-6 py-4 text-sm">{{ entry.ref }}</td>
            <td class="px-6 py-4 text-sm text-right">{{ formatCurrency(entry.debe) }}</td>
            <td class="px-6 py-4 text-sm text-right">{{ formatCurrency(entry.haber) }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="border-t border-gray-200 font-semibold">
            <td colspan="4" class="px-6 py-4 text-left">Total</td>
            <td class="px-6 py-4 text-sm text-right">{{ formatCurrency(totalDebe) }}</td>
            <td class="px-6 py-4 text-sm text-right">{{ formatCurrency(totalHaber) }}</td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div v-if="isBalanced" class="p-6 text-center text-green-600 text-lg font-medium border-t bg-green-50">
      Las cuentas están equilibradas
    </div>
    <div v-else class="p-6 text-center text-red-600 text-lg font-medium border-t bg-red-50">
      Las cuentas no están equilibradas
    </div>
  </div>
</template>


<script setup>
import { computed } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  entries: {
    type: Array,
    required: true,
    default: () => []
  }
});

const emit = defineEmits(['generate-report']);

const totalDebe = computed(() => {
  return props.entries.reduce((sum, entry) => sum + entry.debe, 0);
});

const totalHaber = computed(() => {
  return props.entries.reduce((sum, entry) => sum + entry.haber, 0);
});

const isBalanced = computed(() => {
  return totalDebe.value === totalHaber.value;
});

const formatCurrency = (value) => {
  if (value === 0) {
    return '';
  }
  return value.toLocaleString('es-ES', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });
};

const generateReport = () => {
  emit('generate-report');
};
</script>

<style scoped>
</style>
