<template>
  <div class="container mx-auto p-8 bg-white shadow-lg rounded-lg">
    <h1 class="text-3xl font-bold mb-6">Creación de Orden de Compra</h1>

    <!-- Selección de Proveedor -->
    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-3">Seleccionar Proveedor</h2>
      <select
        v-model="proveedorSeleccionado"
        @change="cargarProductos"
        class="w-full p-3 border border-gray-300 rounded-lg"
      >
        <option disabled value="">Seleccione un proveedor</option>
        <option v-for="supplier in proveedores" :key="supplier.id" :value="supplier.id">
          {{ supplier.name }}
        </option>
      </select>
    </section>

    <!-- Selección de Productos -->
    <section v-if="proveedorSeleccionado" class="mb-6">
      <h2 class="text-xl font-semibold mb-3">Seleccionar Productos</h2>
      <div
        v-for="(producto, index) in productosDisponibles"
        :key="index"
        class="flex items-center mb-3"
      >
        <input
          type="checkbox"
          :id="`producto-${index}`"
          v-model="producto.seleccionado"
          @change="actualizarListaProductos"
          class="mr-2"
        />
        <label :for="`producto-${index}`">
          {{ producto.nombre }} - {{ formatCurrency(producto.precioUnitario) }}
        </label>
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
              <input
                v-model.number="producto.cantidad"
                type="number"
                min="1"
                @input="actualizarTotales"
                class="w-20 p-2 border border-gray-300 rounded"
              />
            </td>
            <td class="p-3 border">
              <input
                v-model.number="producto.precioUnitario"
                type="number"
                min="0"
                step="0.01"
                @input="actualizarTotales"
                class="w-24 p-2 border border-gray-300 rounded"
              />
            </td>
            <td class="p-3 border">{{ formatCurrency(producto.total) }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Resumen de la Orden -->
    <section v-if="productosSeleccionados.length" class="mt-6">
      <h2 class="text-xl font-semibold mb-3">Resumen de la Orden</h2>
      <p>
        Total Final:
        <span>{{ formatCurrency(totalSinIVA) }}</span>
      </p>
    </section>

    <!-- Botón de Enviar -->
    <section v-if="productosSeleccionados.length" class="mt-6">
      <button
        @click="enviarOrden"
        class="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Enviar Orden
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const { $api } = useNuxtApp();

const proveedores = ref([]);
const proveedorSeleccionado = ref('');
const productosDisponibles = ref([]);
const productosSeleccionados = ref([]);

const obtenerProveedores = async () => {
  try {
    const response = await $api.get('/supplier');
    proveedores.value = response.data.data.suppliers.map(supplier => ({
      id: supplier.id,
      name: supplier.name
    }));
  } catch (error) {
    console.error('Error en la petición:', error);
  }
};

const cargarProductos = async () => {
  try {
    const response = await $api.get('/products');
    productosDisponibles.value = response.data.data.Products.map(product => ({
      id: product.id,
      nombre: product.name,
      precioUnitario: parseFloat(product.unit_price),
      cantidad: 1,
      total: parseFloat(product.unit_price),
      seleccionado: false
    }));
  } catch (error) {
    console.error('Error al cargar productos:', error);
  }
};

const actualizarListaProductos = () => {
  productosSeleccionados.value = productosDisponibles.value.filter(
    producto => producto.seleccionado
  );
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

const enviarOrden = async () => {
  if (totalSinIVA.value <= 0) {
    alert('El total de la orden no puede ser cero');
    return;
  }

  try {
    const ordenCompra = {
      order_date: new Date().toISOString().split('T')[0],
      id_supplier: proveedorSeleccionado.value,
      id_contract: null,
      name_seller: "Vendedor Predeterminado",
      status: true
    };

    const responseOrden = await $api.post('/purcharses', ordenCompra);
    const idOrden = responseOrden.data.id;

    const detallesOrden = productosSeleccionados.value.map(producto => ({
      id_purcharseOrder: idOrden,
      id_product: producto.id,
      unit_price: producto.precioUnitario,
      quantity: producto.cantidad,
      status: true
    }));

    for (const detalle of detallesOrden) {
      await $api.post('/detailspurcharses', detalle);
    }

    alert('Orden enviada con éxito');
  } catch (error) {
    console.error('Error al enviar la orden:', error);
    alert('Hubo un error al enviar la orden');
  }
};

onMounted(() => {
  obtenerProveedores();
});

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD'
  }).format(value);
};
</script>

<style scoped>
.container {
  max-width: 1100px;
}
</style>
