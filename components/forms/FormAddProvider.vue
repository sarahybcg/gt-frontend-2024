<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded-xl w-96">
        <h2 class="text-2xl font-semibold mb-4">Agregar Proveedor</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              v-model="newProvider.nombre"
              type="text"
              id="nombre"
              class="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div class="mb-4">
            <label for="telefono" class="block text-sm font-medium text-gray-700">Teléfono</label>
            <input
              v-model="newProvider.telefono"
              type="text"
              id="telefono"
              class="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div class="mb-4">
            <label for="direccion" class="block text-sm font-medium text-gray-700">Dirección</label>
            <input
              v-model="newProvider.direccion"
              type="text"
              id="direccion"
              class="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div class="mb-4">
            <label for="descripcion" class="block text-sm font-medium text-gray-700">Descripción del Producto</label>
            <input
              v-model="newProvider.descripcion"
              type="text"
              id="descripcion"
              class="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
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
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newProvider: {
          nombre: '',
          telefono: '',
          direccion: '',
          descripcion: '',
        },
      };
    },
    methods: {
      handleSubmit() {
        this.$emit('add-provider', { ...this.newProvider });
        this.$emit('close');  // Close the modal after saving
      },
    },
  };
  </script>
  

<style scoped>
 
.form-group {
    margin-bottom: 1rem;
}
input[type="text"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.error {
    color: red;
    font-size: 0.875rem;
}
.form-actions {
    display: flex;
    justify-content: space-between;
}
.save-button {
    background-color: #003b73;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
}
.cancel-button {
    background-color: #ccc;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
}
</style>
