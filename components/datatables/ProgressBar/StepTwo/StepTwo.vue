<template>
    <div>
      <h2>Datos de Contacto</h2>
      <form @submit.prevent="nextStep">
        <div>
          <label for="city">Ciudad</label>
          <select id="city" v-model="employee.city" required>
            <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
          </select>
        </div>
        <div>
          <label for="phone">Teléfono</label>
          <input
            id="phone"
            v-model="employee.phone"
            @input="validatePhone"
            type="text"
            required
          />
          <p v-if="errors.phone">{{ errors.phone }}</p>
        </div>
        <div>
          <label for="description">Descripción</label>
          <textarea id="description" v-model="employee.description"></textarea>
        </div>
        <button type="button" @click="previousStep">Atrás</button>
        <button type="submit">Siguiente</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { useEmployeeStore } from '@/store/useEmployeeStore';
  
  const store = useEmployeeStore();
  const employee = store.employee;
  
  const cities = ['Caracas', 'Maracaibo', 'Valencia', 'Barquisimeto', 'Mérida'];
  const errors = reactive({ phone: '' });
  
  function validatePhone() {
    errors.phone = /^[0-9]{10}$/.test(employee.phone) ? '' : 'Teléfono inválido.';
  }
  
  function nextStep() {
    if (!errors.phone) {
      store.setStep(3);
    }
  }
  
  function previousStep() {
    store.setStep(1);
  }
  </script>
  