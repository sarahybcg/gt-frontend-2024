<template>
    <div class="add-expenses">
      <h2>Agregar Nuevo Gasto</h2>
      <form @submit.prevent="validateForm">
        <div class="form-group">
          <label for="expense-description">Descripción</label>
          <input type="text" id="expense-description" v-model="form.description" placeholder="Descripción del gasto" />
          <span v-if="errors.description" class="error">{{ errors.description }}</span>
        </div>
  
        <div class="form-group">
          <label for="expense-category">Categoría</label>
          <select id="expense-category" v-model="form.category">
            <option value="">Seleccione una categoría</option>
            <option value="oficina">Oficina</option>
            <option value="servicios">Servicios</option>
            <option value="tecnologia">Tecnología</option>
            <option value="salarios">Salarios</option>
          </select>
          <span v-if="errors.category" class="error">{{ errors.category }}</span>
        </div>
  
        <div class="form-group">
          <label for="expense-amount">Monto</label>
          <input type="number" id="expense-amount" v-model="form.amount" placeholder="Monto del gasto" />
          <span v-if="errors.amount" class="error">{{ errors.amount }}</span>
        </div>
  
        <div class="form-group">
          <label for="expense-provider">Proveedor</label>
          <input type="text" id="expense-provider" v-model="form.provider" placeholder="Ingrese el nombre del proveedor" />
          <span v-if="errors.provider" class="error">{{ errors.provider }}</span>
        </div>
  
        <div class="form-group">
          <label for="payment-method">Método de Pago</label>
          <select id="payment-method" v-model="form.paymentMethod">
            <option value="">Seleccione un método de pago</option>
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta</option>
            <option value="transferencia">Transferencia</option>
          </select>
          <span v-if="errors.paymentMethod" class="error">{{ errors.paymentMethod }}</span>
        </div>

        <div class="form-group file-group">
         <label for="expense-receipt">Comprobante</label>
             <input type="file" id="expense-receipt" name="expense-receipt" accept="image/*" />
         <label for="expense-receipt" class="file-label">Subir Comprobante</label>
        </div>
  
        <div class="form-actions">
        <button type="button" class="cancel-button" @click="handleCancel">Cancelar</button>
        <button type="submit" class="save-button">Guardar</button>
      </div>
    </form>
  </div>
</template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import './AddExpenses.css';

  const emit = defineEmits(["close"]);
  const handleCancel = () => {
  emit("close");
};
  
  const form = ref({
    description: "",
    category: "",
    amount: "",
    provider: "",
    paymentMethod: "",
  });
  
  const errors = ref({
    description: "",
    category: "",
    amount: "",
    provider: "",
    paymentMethod: "",
  });
  
  const validateForm = () => {
    let valid = true;
  
    if (!form.value.description) {
      errors.value.description = "La descripción es obligatoria.";
      valid = false;
    } else {
      errors.value.description = "";
    }
  
    if (!form.value.category) {
      errors.value.category = "La categoría es obligatoria.";
      valid = false;
    } else {
      errors.value.category = "";
    }
  
    if (!form.value.amount) {
      errors.value.amount = "El monto es obligatorio.";
      valid = false;
    } else {
      errors.value.amount = "";
    }
  
    if (!form.value.provider) {
      errors.value.provider = "El proveedor es obligatorio.";
      valid = false;
    } else {
      errors.value.provider = "";
    }
  
    if (!form.value.paymentMethod) {
      errors.value.paymentMethod = "El método de pago es obligatorio.";
      valid = false;
    } else {
      errors.value.paymentMethod = "";
    }
  
    if (valid) {
      alert("Formulario enviado correctamente.");
    }
  };
  </script>
  