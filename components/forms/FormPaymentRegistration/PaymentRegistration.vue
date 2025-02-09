<template>
    <div class="payment-registration">
      <h2>Registrar Pago</h2>
      <form @submit.prevent="validateForm">
        <div class="form-group">
          <label for="client-provider">Cliente/Proveedor:</label>
          <select id="client-provider" v-model="form.clientProvider">
            <option value="">Seleccione un cliente o proveedor</option>
            <option value="cliente1">Cliente 1</option>
            <option value="cliente2">Cliente 2</option>
            <option value="proveedor1">Proveedor 1</option>
          </select>
          <span v-if="errors.clientProvider" class="error">{{ errors.clientProvider }}</span>
        </div>
  
        <div class="form-group">
          <label for="payment-date">Fecha de pago</label>
          <input type="date" id="payment-date" v-model="form.paymentDate" />
          <span v-if="errors.paymentDate" class="error">{{ errors.paymentDate }}</span>
        </div>
  
        <div class="form-group">
          <label for="payment-amount">Monto</label>
          <input type="number" id="payment-amount" v-model="form.paymentAmount" placeholder="Monto del pago" />
          <span v-if="errors.paymentAmount" class="error">{{ errors.paymentAmount }}</span>
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
  
        <div class="form-group">
          <label for="payment-notes">Notas Adicionales</label>
          <textarea id="payment-notes" v-model="form.paymentNotes" placeholder="Notas adicionales" rows="4"></textarea>
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
  import './PaymentRegistration.css';

  const emit = defineEmits(["close"]);
  const handleCancel = () => {
  emit("close");
};
  
  const form = ref({
    clientProvider: "",
    paymentDate: "",
    paymentAmount: "",
    paymentMethod: "",
    paymentNotes: "",
  });
  
  const errors = ref({
    clientProvider: "",
    paymentDate: "",
    paymentAmount: "",
    paymentMethod: "",
  });
  
  const validateForm = () => {
    let valid = true;
  
    if (!form.value.clientProvider) {
      errors.value.clientProvider = "Debe seleccionar un cliente o proveedor.";
      valid = false;
    } else {
      errors.value.clientProvider = "";
    }
  
    if (!form.value.paymentDate) {
      errors.value.paymentDate = "Debe seleccionar una fecha de pago.";
      valid = false;
    } else {
      errors.value.paymentDate = "";
    }
  
    if (!form.value.paymentAmount || Number(form.value.paymentAmount) <= 0) {
      errors.value.paymentAmount = "El monto debe ser mayor a 0.";
      valid = false;
    } else {
      errors.value.paymentAmount = "";
    }
  
    if (!form.value.paymentMethod) {
      errors.value.paymentMethod = "Debe seleccionar un método de pago.";
      valid = false;
    } else {
      errors.value.paymentMethod = "";
    }
  
    if (valid) {
      alert("Pago registrado correctamente.");
    }
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
    font-size: 12px;
    margin-top: 5px;
    display: block;
  }
  </style>
  