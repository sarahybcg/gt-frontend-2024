<template>
  <div class="container mx-auto p-8 bg-white shadow-lg rounded-lg">
    <h1 class="text-3xl font-bold mb-6">Creación de Orden de Compra</h1>

    <!-- Nombre del Vendedor -->
    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-3">Nombre del Vendedor</h2>
      <input v-model="nombreVendedor" type="text" placeholder="Ingrese el nombre del vendedor"
        class="w-full p-3 border border-gray-300 rounded-lg" />
    </section>

    <!-- Selección del Encargado -->
    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-3">Seleccionar Encargado</h2>
      <select v-model="encargadoSeleccionado" :disabled="!nombreVendedor.trim()"
        class="w-full p-3 border border-gray-300 rounded-lg">
        <option disabled value="">Seleccione un encargado</option>
        <option v-for="encargado in encargados" :key="encargado.id" :value="encargado.nombre">
          {{ encargado.nombre }}
        </option>
      </select>
    </section>

    <!-- Selección de Proveedor -->
    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-3">Seleccionar Proveedor</h2>
      <select v-model="proveedorSeleccionado" :disabled="!encargadoSeleccionado" @change="actualizarProductosProveedor"
        class="w-full p-3 border border-gray-300 rounded-lg">
        <option disabled value="">Seleccione un proveedor</option>
        <option v-for="proveedor in proveedores" :key="proveedor.id" :value="proveedor.id">
          {{ proveedor.nombre }}
        </option>
      </select>
    </section>

    <!-- Selección de Productos -->
    <section v-if="productosFiltrados.length" class="mb-6">
      <h2 class="text-xl font-semibold mb-3">Seleccionar Productos</h2>
      <div>
        <div v-for="(producto, index) in productosFiltrados" :key="index" class="flex items-center mb-3">
          <input type="checkbox" :id="`producto-${index}`" v-model="producto.seleccionado"
            @change="actualizarListaProductos" class="mr-2">
          <label :for="`producto-${index}`">
            {{ producto.nombre }} - {{ formatCurrency(producto.precioUnitario) }}
          </label>
        </div>
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
            <th class="p-3 border">IVA (16%)</th>
            <th class="p-3 border">IGTF (3%)</th>
            <th class="p-3 border">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(producto, index) in productosSeleccionados" :key="index">
            <td class="p-3 border">{{ producto.nombre }}</td>
            <td class="p-3 border">
              <input v-model.number="producto.cantidad" type="number" min="1" @input="actualizarTotales"
                class="w-20 p-2 border border-gray-300 rounded" />
            </td>
            <td class="p-3 border">{{ formatCurrency(producto.precioUnitario) }}</td>
            <td class="p-3 border">{{ formatCurrency(producto.iva) }}</td>
            <td class="p-3 border">{{ formatCurrency(producto.igtf) }}</td>
            <td class="p-3 border">{{ formatCurrency(producto.total) }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Botón de Enviar -->
    <section v-if="productosSeleccionados.length" class="mt-6">
      <button @click="enviarOrden"
        class="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
        Enviar Orden
      </button>
    </section>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const proveedores = ref([
  { id: 1, nombre: "Proveedor A" },
  { id: 2, nombre: "Proveedor B" },
]);

const encargados = ref([
  { id: 1, nombre: "Juan Pérez" },
  { id: 2, nombre: "María López" },
]);

const productos = ref([
  { id: 101, nombre: "Producto A1", precioUnitario: 10, proveedorId: 1, seleccionado: false, cantidad: 1, iva: 0, igtf: 0, total: 10 },
  { id: 102, nombre: "Producto A2", precioUnitario: 20, proveedorId: 1, seleccionado: false, cantidad: 1, iva: 0, igtf: 0, total: 20 },
  { id: 103, nombre: "Producto B1", precioUnitario: 15, proveedorId: 2, seleccionado: false, cantidad: 1, iva: 0, igtf: 0, total: 15 },
  { id: 104, nombre: "Producto B2", precioUnitario: 25, proveedorId: 2, seleccionado: false, cantidad: 1, iva: 0, igtf: 0, total: 25 },
]);

const nombreVendedor = ref("");
const encargadoSeleccionado = ref("");
const proveedorSeleccionado = ref(null);
const productosSeleccionados = ref([]);
const productosFiltrados = ref([]);

const actualizarProductosProveedor = () => {
  productosFiltrados.value = productos.value.filter(p => p.proveedorId === proveedorSeleccionado.value);
};

const actualizarListaProductos = () => {
  productosSeleccionados.value = productosFiltrados.value.filter(p => p.seleccionado);
  actualizarTotales();
};

const actualizarTotales = () => {
  productosSeleccionados.value.forEach(p => {
    p.iva = p.precioUnitario * 0.16; // 16% IVA
    p.igtf = p.precioUnitario * 0.03; // 3% IGTF
    p.total = p.cantidad * (p.precioUnitario + p.iva + p.igtf);
  });
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD' }).format(value);
};

const enviarOrden = () => {
  if (!nombreVendedor.value.trim() || !encargadoSeleccionado.value || !proveedorSeleccionado.value) {
    alert("Complete todos los campos antes de enviar la orden.");
    return;
  }
  alert("Orden enviada con éxito");
};

watch(proveedorSeleccionado, actualizarProductosProveedor);
</script>
