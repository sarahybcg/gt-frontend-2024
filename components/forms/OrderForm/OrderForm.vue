<template>
    <div class="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 class="text-2xl font-bold mb-6">Creación de Orden de Compra</h1>
      
      <!-- Datos del Proveedor y Orden -->
      <section class="mb-6">
        <h2 class="text-lg font-semibold mb-3">Datos del Proveedor y Orden</h2>
        <label for="proveedor" class="block mb-2">Proveedor:</label>
        <input v-model="proveedor" type="text" id="proveedor" placeholder="Buscar proveedor..." class="w-full p-2 border border-gray-300 rounded-lg" required />
  
        <label for="fechaOrden" class="block mt-4 mb-2">Fecha de Orden:</label>
        <input v-model="fechaOrden" type="date" id="fechaOrden" class="w-full p-2 border border-gray-300 rounded-lg" required />
  
        <label for="estado" class="block mt-4 mb-2">Estado:</label>
        <select v-model="estado" id="estado" class="w-full p-2 border border-gray-300 rounded-lg" required>
          <option value="pendiente">Pendiente</option>
          <option value="aprobada">Aprobada</option>
          <option value="rechazada">Rechazada</option>
        </select>
      </section>
      
      <!-- Selección de Productos a Comprar -->
      <section class="mb-6">
        <h2 class="text-lg font-semibold mb-3">Selección de Productos a Comprar</h2>
        <table class="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th class="p-2 border">Producto</th>
              <th class="p-2 border">Cantidad</th>
              <th class="p-2 border">Precio Unitario</th>
              <th class="p-2 border">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(producto, index) in productos" :key="index">
              <td class="p-2 border">{{ producto.nombre }}</td>
              <td class="p-2 border">
                <input v-model="producto.cantidad" type="number" min="1" @input="actualizarTotales" class="w-16 p-1 border border-gray-300 rounded" />
              </td>
              <td class="p-2 border">{{ formatCurrency(producto.precioUnitario) }}</td>
              <td class="p-2 border">{{ formatCurrency(producto.total) }}</td>
            </tr>
          </tbody>
        </table>
        <button @click="agregarProducto" class="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Agregar Producto</button>
      </section>
      
      <!-- Resumen de la Orden -->
      <section class="mb-6">
        <h2 class="text-lg font-semibold mb-3">Resumen de la Orden</h2>
        <p>Total sin ajustes: <span>{{ formatCurrency(totalSinAjustes) }}</span></p>
        <p>Ajustes aplicados: <span>{{ formatCurrency(ajustesAplicados) }}</span></p>
        <p>Total Final: <span>{{ formatCurrency(totalFinal) }}</span></p>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
  const proveedor = ref('');
  const fechaOrden = ref('');
  const estado = ref('pendiente');
  const productos = ref([
    { nombre: 'Producto 1', cantidad: 1, precioUnitario: 10.00, total: 10.00 },
    { nombre: 'Producto 2', cantidad: 1, precioUnitario: 15.00, total: 15.00 },
    { nombre: 'Producto 3', cantidad: 1, precioUnitario: 20.00, total: 20.00 },
  ]);
  const ajustesAplicados = ref(0);
  
  const totalSinAjustes = computed(() => 
    productos.value.reduce((total, producto) => total + producto.total, 0)
  );
  const totalFinal = computed(() => totalSinAjustes.value + ajustesAplicados.value);
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD' }).format(value);
  };
  
  const actualizarTotales = () => {
    productos.value.forEach(producto => {
      producto.total = producto.cantidad * producto.precioUnitario;
    });
  };
  
  const agregarProducto = () => {
    productos.value.push({ nombre: 'Nuevo Producto', cantidad: 1, precioUnitario: 0, total: 0 });
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 900px;
  }
  </style>
  