<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-6 rounded-xl w-96">
      <h2 class="text-2xl font-semibold mb-4">{{ isEditMode ? 'Editar Producto' : 'Agregar Producto' }}</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            v-model="newProduct.nombre"
            type="text"
            id="nombre"
            class="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
          <span v-if="errors.nombre" class="text-red-500 text-sm">{{ errors.nombre }}</span>
        </div>
        <div class="mb-4">
          <label for="categoria_id" class="block text-sm font-medium text-gray-700">Categoría</label>
          <select
            v-model="newProduct.categoria_id"
            id="categoria_id"
            class="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          >
            <option value="" disabled>Seleccionar Categoría</option>
            <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">{{ categoria.nombre }}</option>
          </select>
          <span v-if="errors.categoria_id" class="text-red-500 text-sm">{{ errors.categoria_id }}</span>
        </div>
        <div class="mb-4">
          <label for="unidad_medida_id" class="block text-sm font-medium text-gray-700">Unidad de Medida</label>
          <select
            v-model="newProduct.unidad_medida_id"
            id="unidad_medida_id"
            class="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          >
            <option value="" disabled>Seleccionar Unidad de Medida</option>
            <option v-for="unidad in unidadesMedida" :key="unidad.id" :value="unidad.id">{{ unidad.nombre }}</option>
          </select>
          <span v-if="errors.unidad_medida_id" class="text-red-500 text-sm">{{ errors.unidad_medida_id }}</span>
        </div>
        <div class="mb-4">
          <label for="costo" class="block text-sm font-medium text-gray-700">Costo</label>
          <input
            v-model="newProduct.costo"
            type="number"
            step="0.01"
            id="costo"
            class="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
          <span v-if="errors.costo" class="text-red-500 text-sm">{{ errors.costo }}</span>
        </div>
        <div class="mb-4">
          <label for="precio_venta" class="block text-sm font-medium text-gray-700">Precio de Venta</label>
          <input
            v-model="newProduct.precio_venta"
            type="number"
            step="0.01"
            id="precio_venta"
            class="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
          <span v-if="errors.precio_venta" class="text-red-500 text-sm">{{ errors.precio_venta }}</span>
        </div>
        <div class="flex justify-end gap-2">
          <button
            type="button"
            @click="$emit('close')"
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2.5 px-4 rounded-lg"
          >
            Cancelar
          </button>
          <button
            type="submit"
            class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg"
          >
            {{ isEditMode ? 'Actualizar' : 'Guardar' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {  // Propiedad para el producto a editar (puede ser null en caso de ser un nuevo producto)
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      newProduct: {
        nombre: '',
        categoria_id: null,
        unidad_medida_id: null,
        costo: null,
        precio_venta: null,
      },
      categorias: [],  // Esto debe ser llenado con las categorías disponibles
      unidadesMedida: [],  // Esto debe ser llenado con las unidades de medida disponibles
      errors: {
        nombre: '',
        categoria_id: '',
        unidad_medida_id: '',
        costo: '',
        precio_venta: '',
      },
    };
  },
  computed: {
    // Determinar si estamos en modo de edición o no
    isEditMode() {
      return this.product !== null;
    },
  },
  methods: {
    validateForm() {
      this.errors = {}; // Resetear errores
      let isValid = true;

      if (!this.newProduct.nombre) {
        this.errors.nombre = 'El nombre es obligatorio.';
        isValid = false;
      }

      if (!this.newProduct.categoria_id) {
        this.errors.categoria_id = 'La categoría es obligatoria.';
        isValid = false;
      }

      if (!this.newProduct.unidad_medida_id) {
        this.errors.unidad_medida_id = 'La unidad de medida es obligatoria.';
        isValid = false;
      }

      if (this.newProduct.costo == null || isNaN(this.newProduct.costo)) {
        this.errors.costo = 'El costo es obligatorio y debe ser un número.';
        isValid = false;
      }

      if (this.newProduct.precio_venta == null || isNaN(this.newProduct.precio_venta)) {
        this.errors.precio_venta = 'El precio de venta es obligatorio y debe ser un número.';
        isValid = false;
      }

      return isValid;
    },

    handleSubmit() {
      if (this.validateForm()) {
        if (this.isEditMode) {
          // Si estamos en modo edición, emitimos un evento para actualizar el producto
          this.$emit('update-product', { ...this.newProduct });
        } else {
          // Si es nuevo, emitimos un evento para agregarlo
          this.$emit('add-product', { ...this.newProduct });
        }
        this.$emit('close');  // Cerrar el modal después de guardar
      }
    },
  },
  watch: {
    // Si el producto cambia, actualizamos los valores del formulario
    product: {
      handler(newProduct) {
        if (newProduct) {
          this.newProduct = { ...newProduct };  // Llenar el formulario con los datos del producto
        }
      },
      immediate: true,
    },
  },
  created() {
    // Aquí deberías obtener las categorías y las unidades de medida desde una API o desde el store
    // Ejemplo:
    // this.categorias = await fetchCategorias();
    // this.unidadesMedida = await fetchUnidadesMedida();
  },
};
</script>

<style scoped> 
</style>
