<template>
    <div>
      <h2>Verificación</h2>
      <div>
        <h3>Datos Personales</h3>
        <p><strong>Nombre:</strong> {{ employee.name }}</p>
        <p><strong>Apellido:</strong> {{ employee.lastName }}</p>
        <p><strong>Cédula:</strong> {{ employee.id }}</p>
        <p><strong>Correo:</strong> {{ employee.email }}</p>
      </div>
      <div>
        <h3>Datos de Contacto</h3>
        <p><strong>Ciudad:</strong> {{ employee.city }}</p>
        <p><strong>Teléfono:</strong> {{ employee.phone }}</p>
        <p><strong>Descripción:</strong> {{ employee.description }}</p>
      </div>
      <button @click="previousStep">Atrás</button>
      <button @click="confirm">Confirmar</button>
    </div>
  </template>
  
  <script setup>
  import { useEmployeeStore } from '@/store/useEmployeeStore';
  
  const store = useEmployeeStore();
  const employee = store.employee;
  
  function previousStep() {
    store.setStep(2);
  }
  
  function confirm() {
    store.setSuccess(true);
  }
  </script>
  