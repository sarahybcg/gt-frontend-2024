<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg w-1/2">
        <h2 class="text-xl font-bold mb-4">Detalle de la Orden de Compra</h2>
        <div class="mb-4">
          <p><strong>Proveedor:</strong> {{ order.provider }}</p>
          <p><strong>Fecha:</strong> {{ order.requestDate }}</p>
          <p><strong>Estado:</strong> {{ order.status }}</p>
        </div>
        <table class="w-full mb-4">
          <thead>
            <tr>
              <th class="py-2 px-4 border">Producto</th>
              <th class="py-2 px-4 border">Cantidad</th>
              <th class="py-2 px-4 border">Precio</th>
              <th class="py-2 px-4 border">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in order.products" :key="product.id">
              <td class="py-2 px-4 border">{{ product.name }}</td>
              <td class="py-2 px-4 border">{{ product.quantity }}</td>
              <td class="py-2 px-4 border">${{ product.price }}</td>
              <td class="py-2 px-4 border">${{ product.total }}</td>
            </tr>
          </tbody>
        </table>
        <p><strong>Ajustes:</strong> ${{ order.adjustments }}</p>
        <p><strong>Monto Final:</strong> ${{ order.finalAmount }}</p>
        <div class="mt-4">
          <button @click="$emit('approve', order.id)" class="bg-green-500 text-white px-4 py-2 rounded mr-2">Aprobar</button>
          <button @click="rejectOrder" class="bg-red-500 text-white px-4 py-2 rounded mr-2">Rechazar</button>
          <button @click="$emit('request-modification', order.id)" class="bg-yellow-500 text-white px-4 py-2 rounded">Solicitar Modificación</button>
        </div>
        <button @click="$emit('close')" class="mt-4 bg-gray-500 text-white px-4 py-2 rounded">Cerrar</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    order: {
      type: Object as () => Order,
      required: true,
    },
  });
  
  const rejectOrder = () => {
    const reason = prompt('Ingrese el motivo de rechazo:');
    if (reason) {
      emit('reject', order.id, reason);
    }
  };
  </script>