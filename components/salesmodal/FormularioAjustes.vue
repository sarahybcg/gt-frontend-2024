<template>
    <div>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label for="tipoAjuste" class="block text-sm font-medium text-gray-700">Tipo de Ajuste</label>
          <select id="tipoAjuste" v-model="tipo" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option value="Descuento">Descuento</option>
            <option value="Impuesto">Impuesto</option>
            <option value="Recargo">Recargo</option>
          </select>
        </div>
        <div>
          <label for="tipoValor" class="block text-sm font-medium text-gray-700">Tipo de Valor</label>
          <select id="tipoValor" v-model="tipoValor" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option value="porcentaje">Porcentaje (%)</option>
            <option value="monto">Monto Fijo</option>
          </select>
        </div>
        <div>
          <label for="valorAjuste" class="block text-sm font-medium text-gray-700">Valor</label>
          <input id="valorAjuste" type="number" v-model="valor" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        </div>
        <div>
          <label for="aplicarA" class="block text-sm font-medium text-gray-700">Aplicar a</label>
          <select id="aplicarA" v-model="aplicarA" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option value="Paquete">Paquete</option>
            <option value="Servicio">Servicio</option>
          </select>
        </div>
        <div>
          <label for="descripcionAjuste" class="block text-sm font-medium text-gray-700">Descripción (opcional)</label>
          <input id="descripcionAjuste" v-model="descripcion" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        </div>
        <button type="submit" class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Agregar Ajuste
        </button>
        <button type="button" @click="$emit('close')" class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Cerrar
        </button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { Ajuste, TipoAjuste } from './salestypes';
  
  const emit = defineEmits<{
    (e: 'ajuste-add', ajuste: Ajuste): void
    (e: 'close'): void
  }>();
  
  const tipo = ref<TipoAjuste>('Descuento');
  const tipoValor = ref<'porcentaje' | 'monto'>('porcentaje');
  const valor = ref(0);
  const aplicarA = ref<'Paquete' | 'Servicio'>('Paquete');
  const descripcion = ref('');
  
  const handleSubmit = () => {
    const ajuste: Ajuste = {
      tipo: tipo.value,
      tipoValor: tipoValor.value,
      valor: tipoValor.value === 'porcentaje' ? valor.value / 100 : valor.value, 
      aplicarA: aplicarA.value,
      descripcion: descripcion.value || undefined,
    };
    emit('ajuste-add', ajuste);
    valor.value = 0;
    descripcion.value = '';
  };
  </script>