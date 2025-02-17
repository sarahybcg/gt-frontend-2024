<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden">
    <!-- Encabezado con botón -->
    <div class="p-6 flex justify-between items-center border-b">
      <h2 class="text-2xl font-semibold">Libro diario</h2>
      <button
  @click="generateReport"
  class="px-6 py-2 bg-[#003B73] text-white rounded-2xl shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-lg hover:bg-[#002c56]"
>
  Generar Reporte
</button>

    </div>

    <!-- Tabla con scroll horizontal si es necesario -->
    <div class="overflow-x-auto mb-2">
      <table class="w-full bg-white rounded-lg shadow-lg border-collapse text-lg">
        <thead>
          <tr class="bg-gray-50">
            <th class="py-6 px-8 text-left text-gray-700 font-semibold bg-gray-200 rounded-tl-lg">
              Fecha
            </th>
            <th class="py-6 px-8 text-left text-gray-700 font-semibold bg-gray-200">
              Descripción
            </th>
            <th class="py-6 px-8 text-left text-gray-700 font-semibold bg-gray-200">
              Cuenta
            </th>
            <th class="py-6 px-8 text-left text-gray-700 font-semibold bg-gray-200">
              Ref
            </th>
            <th class="py-6 px-8 text-left text-gray-700 font-semibold bg-gray-200">
              Debe
            </th>
            <th class="py-6 px-8 text-left text-gray-700 font-semibold bg-gray-200 rounded-tr-lg">
              Haber
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(entry, index) in entries"
            :key="index"
            class="border-t border-gray-100 transition-colors duration-200 hover:bg-gray-50"
          >
            <!-- FECHA: Año en la primera línea, Mes/Día en la segunda -->
            <td class="py-6 px-8 text-left"> 
              <div>{{ currentDate.month }} {{ currentDate.day }}</div>
            </td>

            <!-- DESCRIPCIÓN -->
            <td class="py-6 px-8 text-left">
              {{ entry.descripcion }}
            </td>

            <!-- CUENTA -->
            <td class="py-6 px-8 text-left">
              {{ entry.cuenta }}
            </td>

            <!-- REF -->
            <td class="py-6 px-8 text-left">
              {{ accountRefs[entry.cuenta] }}
            </td>


            <!-- DEBE -->
            <td class="px-6 py-8 text-sm text-right">
              {{ formatCurrency(entry.debe) }}
            </td>

            <!-- HABER -->
            <td class="px-6 py-8 text-sm text-right">
              {{ formatCurrency(entry.haber) }}
            </td>
          </tr>
        </tbody>

        <!-- Pie de tabla con Totales -->
        <tfoot>
          <tr class="font-semibold bg-gray-100">
            <td colspan="4" class="px-6 py-4 text-left">
              Total
            </td>
            <td class="px-6 py-4 text-sm text-right">
              {{ formatCurrency(totalDebe) }}
            </td>
            <td class="px-6 py-4 text-sm text-right">
              {{ formatCurrency(totalHaber) }}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <!-- Indicador de equilibrio contable -->
    <div class="p-6">
      <div
        v-if="isBalanced"
        class="p-4 flex items-center space-x-3 bg-green-100 text-green-800 border-l-4 border-green-500 rounded-lg shadow-md transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12h-6l-3 3-4-4-6 6" />
        </svg>
        <span class="text-lg font-medium">Las cuentas están equilibradas</span>
      </div>

      <div
        v-else
        class="p-4 flex items-center space-x-3 bg-red-100 text-red-800 border-l-4 border-red-500 rounded-lg shadow-md transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-red-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M18 6L6 18" />
          <path d="M6 6l12 12" />
        </svg>
        <span class="text-lg font-medium">Las cuentas no están equilibradas</span>
      </div>

       <!-- Paginación -->
    <div class="flex justify-between items-center p-4">
      <button @click="prevPage" :disabled="currentPage === 1" class="px-4 py-2 bg-gray-200 rounded">Anterior</button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="px-4 py-2 bg-gray-200 rounded">Siguiente</button>
    </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  entries: {
    type: Array,
    required: true,
    default: () => []
  }
})

const emit = defineEmits(['generate-report'])

// Paginación
const itemsPerPage = 5
const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(props.entries.length / itemsPerPage))
const paginatedEntries = computed(() => props.entries.slice((currentPage.value - 1) * itemsPerPage, currentPage.value * itemsPerPage))
const prevPage = () => { if (currentPage.value > 1) currentPage.value-- }
const nextPage = () => { if (currentPage.value < totalPages.value) currentPage.value++ }

// Cálculo de totales
const totalDebe = computed(() => {
  return props.entries.reduce((sum, entry) => sum + (entry.debe || 0), 0)
})

const totalHaber = computed(() => {
  return props.entries.reduce((sum, entry) => sum + (entry.haber || 0), 0)
})

// Verifica si está cuadrado (Debe === Haber)
const isBalanced = computed(() => {
  return totalDebe.value === totalHaber.value
})

// Formateo de moneda en Bolívares
const formatCurrency = (value) => {
  if (!value) return ''
  return value.toLocaleString('es-VE', {  // Cambié de 'es-ES' a 'es-VE' para reflejar la localización de Venezuela
    style: 'currency',
    currency: 'VES',  // Usando la moneda Bolívares (VES)
    minimumFractionDigits: 2
  })
}

// Fecha que se mostrará en todas las filas
const currentDate = computed(() => {
  const date = new Date()
  const month = date.toLocaleString('es-VE', { month: 'long' }) // Cambié 'es-ES' a 'es-VE'
  const day = date.getDate()
  const year = date.getFullYear()
  
  return { year, month, day }
})

// Crear un mapa para asignar las referencias a las cuentas
const accountRefs = computed(() => {
  const refs = {}
  let counter = 1

  props.entries.forEach(entry => {
    if (!refs[entry.cuenta]) {
      refs[entry.cuenta] = `m-${counter++}`
    }
  })

  return refs
})

const generateReport = () => { generateCSV(); };

// Emite el evento para generar reporte
const generateCSV = () => {
  const headers = ['Fecha', 'Descripcion', 'Cuenta', 'Ref', 'Debe', 'Haber'];
  const rows = props.entries.map(entry => [
    `${currentDate.value.month} ${currentDate.value.day}`, // Fecha
    `     ${entry.descripcion}     `, // Descripción con espacios extra
    entry.cuenta, // Cuenta
    accountRefs.value[entry.cuenta], // Ref
    formatCurrency(entry.debe), // Debe
    formatCurrency(entry.haber), // Haber
  ]);

  // Agregar fila de totales
  const totalDebeFormatted = formatCurrency(totalDebe.value);
  const totalHaberFormatted = formatCurrency(totalHaber.value);
  rows.push([
    '', // Fecha
    '     Totales     ', // Descripción con más espacio
    '', // Cuenta
    '', // Ref
    totalDebeFormatted, // Total Debe
    totalHaberFormatted, // Total Haber
  ]);

  // Crear contenido CSV con codificación UTF-8
  let csvContent = "data:text/csv;charset=utf-8,";

  // Añadir encabezados con formato adecuado
  csvContent += headers.map(header => `" ${header} "`).join(',') + '\n';

  // Añadir los datos de cada fila con un poco más de espacio
  rows.forEach(row => {
    row = row.map(item => `" ${item?.toString().replace(/"/g, '""').trim()} "`); // Añadir espacios extra y escapar comillas
    csvContent += row.join(',') + '\n';
  });

  // Agregar una línea en blanco antes de la fila de totales para separar visualmente
  csvContent += '\n';

  // Crear un enlace para descargar el archivo
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'libro_diario.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

</script>


<style scoped>
table {
  border-spacing: 0;
}
th, td {
  padding: 12px 16px;
  border: 1px solid #d1d1d1;
  text-align: left;
}
th {
  background-color: #f9f9f9;
}
</style>

