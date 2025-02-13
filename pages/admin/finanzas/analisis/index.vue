<template>
    <div class="p-6 bg-gray-50">
      <SubNav module-name="Libro diario" />
  
      <div class="bg-white p-4 rounded-2xl mb-6">
        <h3 class="text-lg font-semibold mb-4">Filtros</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-medium  mb-1">Cliente</label>
            <select
              v-model="filters.selectedClient"
              class="w-full p-3 border rounded-2xl shadow-md focus:outline-none focus:ring-0"
            >
              <option value="">Todos</option>
              <option v-for="client in clients" :key="client" :value="client">
                {{ client }}
              </option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Fecha inicial</label>
            <input
              type="date"
              v-model="filters.startDate"
              class="w-full p-2 border rounded-2xl shadow-md focus:outline-none focus:ring-0"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Fecha final</label>
            <input
              type="date"
              v-model="filters.endDate"
              class="w-full p-2 border rounded-2xl shadow-md focus:outline-none focus:ring-0"
            />
          </div>
        </div>
      </div>
  
      <AccountingTable
        :entries="filteredEntries"
        @generate-report="generateReport"
      />
    </div>
  </template>
  
  
  <script setup>
  import { ref, computed, watchEffect } from 'vue';
  import AccountingTable from '@/components/datatables/DatatableDiaryBook/DatatableDiaryBook.vue';
  
  const filters = ref({
    selectedClient: '',
    startDate: '',
    endDate: ''
  });
  
  const clients = ref(['XYZ', 'ABC']);
  
  const entries = ref([
    {
      fecha: '2023-05-01',
      descripcion: 'Venta al cliente XYZ',
      cuenta: 'Cuentas por cobrar',
      ref: '001',
      debe: 1000.00,
      haber: 0
    },
    {
      fecha: '2023-05-01',
      descripcion: 'Venta al cliente XYZ',
      cuenta: 'Ingresos por ventas',
      ref: '001',
      debe: 0,
      haber: 1000.00
    },
    {
      fecha: '2023-05-15',
      descripcion: 'Pago recibido del cliente XYZ',
      cuenta: 'Banco',
      ref: '002',
      debe: 1000.00,
      haber: 0
    },
    {
      fecha: '2023-05-15',
      descripcion: 'Pago recibido del cliente XYZ',
      cuenta: 'Cuentas por cobrar',
      ref: '002',
      debe: 0,
      haber: 1000.00
    }
  ]);
  
  const filteredEntries = computed(() => {
    return entries.value.filter(entry => {
      const matchesClient = filters.value.selectedClient 
        ? entry.descripcion.includes(filters.value.selectedClient) 
        : true;
      const matchesStartDate = filters.value.startDate 
        ? entry.fecha >= filters.value.startDate 
        : true;
      const matchesEndDate = filters.value.endDate 
        ? entry.fecha <= filters.value.endDate 
        : true;
  
      return matchesClient && matchesStartDate && matchesEndDate;
    });
  });
  
  watchEffect(() => {
    console.log('Filtered Entries:', filteredEntries.value);
  });
  
  const generateReport = () => {
    console.log('Generating report with filtered entries:', filteredEntries.value);
  };
  </script>
  