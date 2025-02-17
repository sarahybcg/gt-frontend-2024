<template>
  <div class="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 class="text-xl font-semibold mb-6 text-gray-800">Agregar Proveedor</h2>
      <form @submit.prevent="handleSubmit">
        <!-- Nombre -->
        <div class="mb-4">
          <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            id="nombre"
            type="text"
            v-model="form.nombre"
            :class="{'border-red-500': errors.nombre}"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Nombre del proveedor"
          />
          <p v-if="errors.nombre" class="text-red-500 text-xs mt-1">{{ errors.nombre }}</p>
        </div>

        <!-- Teléfono -->
        <div class="mb-4">
          <label for="telefono" class="block text-sm font-medium text-gray-700">Teléfono</label>
          <input
            id="telefono"
            type="text"
            v-model="form.telefono"
            :class="{'border-red-500': errors.telefono}"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Número de teléfono"
          />
          <p v-if="errors.telefono" class="text-red-500 text-xs mt-1">{{ errors.telefono }}</p>
        </div>

        <!-- Dirección -->
        <div class="mb-4">
          <label for="direccion" class="block text-sm font-medium text-gray-700">Dirección</label>
          <input
            id="direccion"
            type="text"
            v-model="form.direccion"
            :class="{'border-red-500': errors.direccion}"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Dirección del proveedor"
          />
          <p v-if="errors.direccion" class="text-red-500 text-xs mt-1">{{ errors.direccion }}</p>
        </div>

        <!-- Descripción -->
        <div class="mb-4">
          <label for="descripcion" class="block text-sm font-medium text-gray-700">Descripción</label>
          <textarea
            id="descripcion"
            rows="4"
            v-model="form.descripcion"
            :class="{'border-red-500': errors.descripcion}"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Descripción del producto o servicio"
          ></textarea>
          <p v-if="errors.descripcion" class="text-red-500 text-xs mt-1">{{ errors.descripcion }}</p>
        </div>

        <!-- Acciones -->
        <div class="flex justify-between">
          <button
            type="button"
            @click="handleCancel"
            class="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Guardar
          </button>
        </div>
      </form>
      
      <!-- Success Modal -->
      <div v-if="showSuccess" class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30">
        <div class="bg-white p-6 rounded-lg text-center shadow-lg">
          <div class="flex justify-center items-center bg-green-500 w-16 h-16 rounded-full mx-auto">
            <span class="text-white text-2xl">✔</span>
          </div>
          <p class="mt-4 text-lg font-medium text-gray-800">Proveedor guardado con éxito</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "FormAddProvider",
  setup() {
    const emit = defineEmits();  // Emit function to handle closing the modal

    const form = ref({
      nombre: "",
      telefono: "",
      direccion: "",
      descripcion: "",
    });

    const errors = ref({
      nombre: "",
      telefono: "",
      direccion: "",
      descripcion: "",
    });

    const showSuccess = ref(false); // For showing the success message

    const validate = () => {
      let isValid = true;
      // Reset errors
      errors.value = { nombre: "", telefono: "", direccion: "", descripcion: "" };

      // Validate nombre
      if (!form.value.nombre) {
        errors.value.nombre = "El nombre es obligatorio.";
        isValid = false;
      }

      // Validate telefono
      if (!form.value.telefono) {
        errors.value.telefono = "El teléfono es obligatorio.";
      } else if (!/^(\+?[1-9][0-9]{7,14}|0[1-9]{2}[0-9]{6,10})$/.test(form.value.telefono)) {
        errors.value.telefono = "El teléfono debe ser un número válido.";
        isValid = false;
      }

      // Validate direccion
      if (!form.value.direccion) {
        errors.value.direccion = "La dirección es obligatoria.";
        isValid = false;
      }

      // Validate descripcion
      if (!form.value.descripcion) {
        errors.value.descripcion = "La descripción es obligatoria.";
        isValid = false;
      }

      return isValid;
    };

    const handleSubmit = () => {
      if (validate()) {
        // Submit form logic here (add provider)
        alert("Proveedor agregado correctamente");
        showSuccess.value = true;  // Show success message
        setTimeout(() => {
          emit("close");  // Close the modal after 2 seconds
        }, 2000);
      } else {
        alert("Por favor, corrija los errores en el formulario.");
      }
    };

    const handleCancel = () => {
      emit("close"); // Emit close event when canceling
    };

    return { form, errors, handleSubmit, handleCancel, showSuccess };
  },
};
</script>

<style scoped>
/* Add any custom styles you prefer */
.form-group {
  margin-bottom: 1rem;
}
input[type="text"],
textarea {
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
/* Success Modal */
.success-message {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
}
.success-message .message {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  font-size: 18px;
  color: green;
}
</style>
