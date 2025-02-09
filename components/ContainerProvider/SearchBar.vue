<template>
    <div class="search-bar">
      <input
        type="text"
        placeholder="Buscar proveedor por nombre, código o ID"
        class="search-input"
      />
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 9999px; /* Hace que el contenedor sea redondo */
    padding: 0.5rem;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  }
  
  .search-input {
    border: none;
    flex-grow: 1;
    padding: 0.5rem;
    border-radius: 9999px;
    outline: none;
  }
  </style>
