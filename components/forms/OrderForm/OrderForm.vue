<template>
  <div class="container mx-auto p-8 bg-white shadow-lg rounded-lg">
    <h1 class="text-3xl font-bold mb-6">Creación de Orden de Compra</h1>

    <!-- Selección de Proveedor -->
    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-3">Seleccionar Proveedor</h2>
      <select v-model="proveedorSeleccionado" @change="cargarProductos" class="w-full p-3 border border-gray-300 rounded-lg">
        <option disabled value="">Seleccione un proveedor</option>
        <option v-for="(productos, proveedor) in proveedores" :key="proveedor" :value="proveedor">{{ proveedor }}</option>
      </select>
    </section>

    <!-- Selección de Productos -->
    <section v-if="proveedorSeleccionado" class="mb-6">
      <h2 class="text-xl font-semibold mb-3">Seleccionar Productos</h2>
      <div v-for="(producto, index) in productosDisponibles" :key="index" class="flex items-center mb-3">
        <input type="checkbox" :id="`producto-${index}`" v-model="producto.seleccionado" @change="actualizarListaProductos" class="mr-2">
        <label :for="`producto-${index}`">{{ producto.nombre }} - {{ formatCurrency(producto.precioUnitario) }}</label>
      </div>
    </section>

    <!-- Tabla de Productos Seleccionados -->
    <section v-if="productosSeleccionados.length" class="mb-6">
      <h2 class="text-xl font-semibold mb-3">Productos Seleccionados</h2>
      <table class="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th class="p-3 border">Producto</th>
            <th class="p-3 border">Cantidad</th>
            <th class="p-3 border">Precio Unitario</th>
            <th class="p-3 border">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(producto, index) in productosSeleccionados" :key="index">
            <td class="p-3 border">{{ producto.nombre }}</td>
            <td class="p-3 border">
              <input v-model.number="producto.cantidad" type="number" min="1" @input="actualizarTotales" class="w-20 p-2 border border-gray-300 rounded" />
            </td>
            <td class="p-3 border">
              <input v-model.number="producto.precioUnitario" type="number" min="0" step="0.01" @input="actualizarTotales" class="w-24 p-2 border border-gray-300 rounded" />
            </td>
            <td class="p-3 border">{{ formatCurrency(producto.total) }}</td>
          </tr>
        </tbody>
      </table>
    </section>
    
    <!-- Resumen de la Orden -->
    <section v-if="productosSeleccionados.length" class="mt-6">
      <h2 class="text-xl font-semibold mb-3">Resumen de la Orden</h2>
      <p>Total Final: <span>{{ formatCurrency(totalSinIVA) }}</span></p>
    </section>
    
    <!-- Botón de Enviar -->
    <section v-if="productosSeleccionados.length" class="mt-6">
      <button @click="enviarOrden" class="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">Enviar Orden</button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const proveedores = ref({
  'Proveedor 1': [
    { nombre: 'Producto A', precioUnitario: 10, seleccionado: false, cantidad: 1, total: 10 },
    { nombre: 'Producto B', precioUnitario: 20, seleccionado: false, cantidad: 1, total: 20 },
  ],
  'Proveedor 2': [
    { nombre: 'Producto X', precioUnitario: 15, seleccionado: false, cantidad: 1, total: 15 },
    { nombre: 'Producto Y', precioUnitario: 25, seleccionado: false, cantidad: 1, total: 25 },
  ]
});

const proveedorSeleccionado = ref('');
const productosDisponibles = ref([]);
const productosSeleccionados = ref([]);

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD' }).format(value);
};

const cargarProductos = () => {
  productosDisponibles.value = proveedores.value[proveedorSeleccionado.value]?.map(producto => ({ ...producto }));
  actualizarListaProductos();
};

const actualizarListaProductos = () => {
  productosSeleccionados.value = productosDisponibles.value.filter(producto => producto.seleccionado);
  actualizarTotales();
};

const actualizarTotales = () => {
  productosSeleccionados.value.forEach(producto => {
    producto.total = producto.cantidad * producto.precioUnitario;
  });
};

const totalSinIVA = computed(() => 
  productosSeleccionados.value.reduce((total, producto) => total + producto.total, 0)
);

const enviarOrden = () => {
  alert('Orden enviada con éxito');
};
</script>

<style scoped>
.container {
  max-width: 1100px;
}
</style>
