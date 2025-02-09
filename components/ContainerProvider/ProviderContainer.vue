<template>
    <div class="provider-container">
      <h2 class="title">NUEVA ORDEN DE COMPRA</h2>
      <hr>
      <div class="search-section">
        <label class="search-label" for="search">Seleccionar Proveedor</label>
        <p class="search-description">Encuentra el proveedor en nuestra base de datos o añádelo si es nuevo.</p>
        <SearchBar />
      </div>
      <div class="provider-cards">
        <ProviderCard v-for="(card, index) in visibleCards" :key="index" />
        <div class="card add-card">
          <div class="add-symbol">+</div>
        </div>
      </div>
      <Pagination @page-changed="updatePage" />
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import SearchBar from './SearchBar.vue';
  import ProviderCard from '~/components/cards/ProviderCard/providercard.vue';
  import Pagination from './Pagination.vue';
  
  const currentPage = ref(1);
  const cardsPerPage = 6;
  
  // Simular datos de tarjetas de proveedores (array de 12 elementos para simular 2 páginas)
  const allCards = Array.from({ length: 12 }, (_, i) => ({ id: i + 1 }));
  
  // Obtener las tarjetas visibles según la página actual
  const visibleCards = computed(() =>
    allCards.slice((currentPage.value - 1) * cardsPerPage, currentPage.value * cardsPerPage)
  );
  
  const updatePage = (page) => {
    currentPage.value = page;
  };
  </script>
  
  <style scoped>
  .provider-container {
    background-color: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    max-width: 1050px;
    margin-top: 1.5rem;
  }
  
  .title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0rem;
    text-align: center;
  }
  
  .search-section {
    margin-bottom: 1rem;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .search-label {
    display: block;
    color: #374151;
    font-size: 0.875rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    text-align: center;
  }
  
  .search-description {
    color: #6b7280;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .provider-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .card {
    background-color: white;
    border-radius: 24px;
    padding: 1.5rem;
    position: relative;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
    max-width: 320px;
  }
  
  .add-card {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 230px; /* Ajusta esto si es necesario */
    width: 240px;
  }
  
  .add-symbol {
    font-size: 2rem;
    color: #929292;
    font-size: 10rem;
    font-weight: 500;
  }
  </style>
  