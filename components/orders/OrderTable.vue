<template>
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="py-2 px-4 border">ID de Orden</th>
          <th class="py-2 px-4 border">Proveedor</th>
          <th class="py-2 px-4 border">Fecha de Solicitud</th>
          <th class="py-2 px-4 border">Departamento</th>
          <th class="py-2 px-4 border">Estado</th>
          <th class="py-2 px-4 border">Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td class="py-2 px-4 border">{{ order.id }}</td>
          <td class="py-2 px-4 border">{{ order.provider }}</td>
          <td class="py-2 px-4 border">{{ order.requestDate }}</td>
          <td class="py-2 px-4 border">{{ order.department }}</td>
          <td class="py-2 px-4 border">{{ order.status }}</td>
          <td class="py-2 px-4 border">
            <button @click="$emit('view-detail', order.id)" class="bg-blue-500 text-white px-2 py-1 rounded">
              Ver Detalle
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup lang="ts">
  defineProps({
    orders: {
      type: Array as () => Order[],
      required: true,
    },
  });
  </script>