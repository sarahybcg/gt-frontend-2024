<template>
    <div class="modal" v-if="show">
      <p>¡Registro Exitoso!</p>
      <button @click="close">Cerrar</button>
    </div>
  </template>
  
  <script lang="ts">
  const props = defineProps({
    show: { type: Boolean, required: true },
  });
  
  const emit = defineEmits(['close']);
  
  function close() {
    emit('close');
  }
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  </style>
  