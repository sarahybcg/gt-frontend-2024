<template>
  <div class="w-full max-w-7xl mx-auto">
    <div class="bg-white p-10 rounded-2xl shadow-lg">
      <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div class="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <div class="relative w-full sm:w-56">
            <select
              class="appearance-none bg-white pl-4 pr-10 py-2.5 rounded-lg border border-gray-300 shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-base">
              <option>Filtrar por Nombre</option>
            </select>
            <div class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>

          <div class="relative w-full sm:w-56">
            <select
              class="appearance-none bg-white pl-4 pr-10 py-2.5 rounded-lg border border-gray-300 shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-base">
              <option>Filtrar por...</option>
            </select>
            <div class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          <div class="relative w-full sm:w-72">
            <input type="text" placeholder="Buscar Producto"
              class="pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-base" />
            <div class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <button
            @click="isModalOpen = true"
            class="bg-[#003B73] hover:bg-[#004b8f] text-white rounded-lg font-medium py-2.5 px-6 shadow-md text-base w-full sm:w-auto">
            Agregar Producto
          </button>
        </div>
      </div>

      <div class="mt-10">
        <div class="overflow-hidden rounded-2xl border border-gray-50 shadow-md">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-50">
              <tr>
                <th class="px-8 py-5 text-left text-lg font-semibold text-gray-700">Nombre del Producto</th>
                <th class="px-8 py-5 text-left text-lg font-semibold text-gray-700">Precio</th>
                <th class="px-8 py-5 text-left text-lg font-semibold text-gray-700">Cantidad</th>
                <th class="px-8 py-5 text-left text-lg font-semibold text-gray-700">Descripción</th>
                <th class="px-8 py-5 text-left text-lg font-semibold text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr v-for="(producto, index) in productos" :key="index" class="hover:bg-gray-50 transition-colors">
                <td class="px-8 py-5 text-lg text-gray-700">{{ producto.nombre }}</td>
                <td class="px-8 py-5 text-lg text-gray-700">{{ producto.precio }}</td>
                <td class="px-8 py-5 text-lg text-gray-700">{{ producto.cantidad }}</td>
                <td class="px-8 py-5 text-lg text-gray-700">{{ producto.descripcion }}</td>
                <td class="px-8 py-5 text-lg text-gray-700">
                  <button @click="editProduct(index)" class="text-blue-600 hover:text-blue-800">Editar</button>
                  <button @click="deleteProduct(index)" class="ml-4 text-red-600 hover:text-red-800">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Modal for adding product -->
    <FormAddProduct v-if="isModalOpen" @close="isModalOpen = false" @add-product="addProduct" />
  </div>
</template>


<script>
import { defineComponent, ref } from "vue";
import FormAddProduct from "@/components/forms/FormAddProduct.vue";

export default defineComponent({
  name: "ProductForm",
  components: {
    FormAddProduct,
  },
  setup() {
    const productos = ref([
      { nombre: "Laptop", precio: "$1000", cantidad: "15", descripcion: "Laptop de alta gama" },
      { nombre: "Teclado", precio: "$50", cantidad: "50", descripcion: "Teclado mecánico" },
      { nombre: "Monitor", precio: "$300", cantidad: "30", descripcion: "Monitor LED 24 pulgadas" },
      { nombre: "Mouse", precio: "$25", cantidad: "40", descripcion: "Mouse ergonómico" },
      { nombre: "Cargador", precio: "$15", cantidad: "70", descripcion: "Cargador USB-C" },
    ]);
    const isModalOpen = ref(false);
    const productToEdit = ref(null);

    const addProduct = (product) => {
      productos.value.push(product);
    };

    const editProduct = (producto) => {
      productToEdit.value = { ...producto }; // Clonamos el producto para evitar mutaciones directas
      isModalOpen.value = true; // Abrimos el modal
    };

    const deleteProduct = (index) => {
      productos.value.splice(index, 1); // Eliminamos el producto
    };

    return { productos, isModalOpen, addProduct, editProduct, deleteProduct, productToEdit };
  },
});
</script>

