<template>
  <div class="budget-creation">
    <h2>Crear un Presupuesto</h2>
    <form @submit.prevent="validateForm">
      <div class="form-group">
        <label for="department">Departamento</label>
        <select id="department" v-model="form.department">
          <option value="">Seleccione un departamento</option>
          <option value="ventas">Ventas</option>
          <option value="marketing">Marketing</option>
          <option value="compras">Compras</option>
          <option value="transporte">Transporte</option>
          <option value="hoteleria">Hotelería</option>
        </select>
        <span v-if="errors.department" class="error">{{ errors.department }}</span>
      </div>

      <div class="form-group">
        <label for="amount">Monto Asignado</label>
        <input type="number" id="amount" v-model="form.amount" placeholder="Monto del presupuesto" />
        <span v-if="errors.amount" class="error">{{ errors.amount }}</span>
      </div>

      <div class="form-group">
        <label for="period">Periodo</label>
        <div class="period-group">
          <div class="date-group">
            <label for="start-date">Fecha de Inicio</label>
            <input type="date" id="start-date" v-model="form.startDate" />
            <span v-if="errors.startDate" class="error">{{ errors.startDate }}</span>
          </div>
          <div class="date-group">
            <label for="end-date">Fecha Final</label>
            <input type="date" id="end-date" v-model="form.endDate" />
            <span v-if="errors.endDate" class="error">{{ errors.endDate }}</span>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label for="description">Descripción</label>
        <textarea id="description" v-model="form.description" placeholder="Descripción del presupuesto" rows="4"></textarea>
        <span v-if="errors.description" class="error">{{ errors.description }}</span>
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

const emit = defineEmits(["close"]);
const handleCancel = () => {
  emit("close");
};

const form = ref({
  department: "",
  amount: "",
  startDate: "",
  endDate: "",
  description: "",
});

const errors = ref({
  department: "",
  amount: "",
  startDate: "",
  endDate: "",
  description: "",
});

const validateForm = () => {
  let valid = true;
  
  if (!form.value.department) {
    errors.value.department = "El departamento es obligatorio.";
    valid = false;
  } else {
    errors.value.department = "";
  }

  if (!form.value.amount) {
    errors.value.amount = "El monto asignado es obligatorio.";
    valid = false;
  } else {
    errors.value.amount = "";
  }

  if (!form.value.startDate) {
    errors.value.startDate = "La fecha de inicio es obligatoria.";
    valid = false;
  } else {
    errors.value.startDate = "";
  }

  if (!form.value.endDate) {
    errors.value.endDate = "La fecha final es obligatoria.";
    valid = false;
  } else {
    errors.value.endDate = "";
  }

  if (!form.value.description) {
    errors.value.description = "La descripción es obligatoria.";
    valid = false;
  } else {
    errors.value.description = "";
  }

  if (valid) {
    alert("Formulario enviado correctamente.");
  }
};
</script>

<style>
.error {
  color: red;
  font-size: 12px;
  margin-top: 5px;
  display: block;
}

.budget-creation {
  width: 500px; /* Ajusta el ancho */
  margin: 0 auto;
  padding: 20px; /* Ajusta el padding */
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
}

.budget-creation label {
  display: block;
  margin-bottom: 5px;
  font-family: 'Lobster', sans-serif; 
  font-size: 14px; 
  color: #000000; 
}

.budget-creation input,
.budget-creation select,
.budget-creation textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgb(95, 82, 82);
}

.budget-creation .period-group {
  display: flex;
  gap: 10px;
}

.budget-creation button {
  padding: 10px 20px;
  background-color: #6d70f7;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgb(90, 82, 82);
  cursor: pointer;
}

.budget-creation .form-actions {
  display: flex;
  justify-content: space-between;
}

.budget-creation .form-actions button {
  margin-right: 10px;
}

.budget-creation .form-actions button:last-child {
  margin-right: 0;
}

.budget-creation .form-actions button:first-child {
  background-color: #ffffff; /* Rojo para el botón Cancelar */
}
</style>