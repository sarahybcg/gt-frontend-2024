// Archivo: components/StepOne.vue
<template>
  <div>
    <h2>Datos Personales</h2>
    <form @submit.prevent="nextStep">
      <div>
        <label for="name">Nombre</label>
        <input id="name" v-model="employee.name" @input="validateName" type="text" required />
        <p v-if="errors.name">{{ errors.name }}</p>
      </div>
      <div>
        <label for="lastName">Apellido</label>
        <input id="lastName" v-model="employee.lastName" @input="validateLastName" type="text" required />
        <p v-if="errors.lastName">{{ errors.lastName }}</p>
      </div>
      <div>
        <label for="id">Cédula</label>
        <input id="id" v-model="employee.id" @input="validateId" type="text" maxlength="10" required />
        <p v-if="errors.id">{{ errors.id }}</p>
      </div>
      <div>
        <label for="birthDate">Fecha de Nacimiento</label>
        <input id="birthDate" v-model="employee.birthDate" type="date" required />
      </div>
      <div>
        <label for="email">Correo Electrónico</label>
        <input id="email" v-model="employee.email" @input="validateEmail" type="email" required />
        <p v-if="errors.email">{{ errors.email }}</p>
      </div>
      <button type="submit">Siguiente</button>
    </form>
  </div>
</template>

<script setup>
import { useEmployeeStore } from '@/store/useEmployeeStore';

const store = useEmployeeStore();
const employee = store.employee;
const errors = reactive({
  name: '',
  lastName: '',
  id: '',
  email: '',
});

function validateName() {
  errors.name = /^[a-zA-Z]+$/.test(employee.name) ? '' : 'Nombre inválido.';
}

function validateLastName() {
  errors.lastName = /^[a-zA-Z]+$/.test(employee.lastName) ? '' : 'Apellido inválido.';
}

function validateId() {
  errors.id = /^\d{8,10}$/.test(employee.id) ? '' : 'Cédula inválida.';
}

function validateEmail() {
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(employee.email) ? '' : 'Correo electrónico inválido.';
}

function nextStep() {
  if (!errors.name && !errors.lastName && !errors.id && !errors.email) {
    store.setStep(2);
  }
}
</script>
