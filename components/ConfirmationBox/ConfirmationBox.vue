<template>
    <div class="confirmation-box">
      <textarea class="confirmation-text" placeholder="Escriba aquí cualquier comentario adicional..."></textarea>
      <div class="buttons">
        <button class="confirm-button">Confirmar</button>
        <button class="cancel-button">Cancelar</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // Puedes añadir cualquier lógica aquí si es necesario
  </script>
  
  <style scoped>
  .confirmation-box {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  
  .confirmation-text {
    width: 100%;
    height: 25%;
    padding: 2rem;
    border-radius: 0.5rem;
    border: 1px solid #e5e7eb;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    resize: none;
    margin-bottom: 1rem;
  }
  
  .buttons {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
  
  .confirm-button, .cancel-button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .confirm-button {
    background: linear-gradient(45deg, #003B73, #00A6A6);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.cancel-button {
    background: linear-gradient(45deg, #FF5733, #FFC300);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.confirm-button:hover, .cancel-button:hover {
    transform: scale(1.05);
}
  </style>
  