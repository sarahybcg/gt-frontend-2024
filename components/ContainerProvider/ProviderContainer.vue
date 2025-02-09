<template>
  <div>
    <div v-if="currentPage === 1">
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
      </div>
    </div>
    <div v-if="currentPage === 2" class="table-wrapper">
      <div class="provider-container">
        <h2 class="title">NUEVA ORDEN DE COMPRA</h2>
        <hr>
          <label class="search-label" for="search">Añadir Productos</label>
          <p class="search-description">Especifica los detalles de cada ítem para garantizar precisión</p>
        <Datatableaddproduct />
        <ResumenCostos />
      </div>
    </div>
    <div v-if="currentPage === 3" class="confirmation-wrapper">
      <div class="provider-container">
        <h2 class="title">NUEVA ORDEN DE COMPRA</h2>
        <hr>
          <label class="search-label" for="search"> Confirmación</label>
          <p class="search-description">Verifica los datos de la orden de compra</p>
          <div class="confirmation-content">
            <ResumenOrden />
            <ConfirmationBox />
          </div>
      </div>
    </div>
    <div class="pagination">
      <button class="pagination-button" @click="prevPage" :disabled="currentPage === 1" aria-label="Página anterior">
        Anterior
      </button>
      <div class="pagination-numbers">
        <span
          v-for="page in totalPages"
          :key="page"
          class="pagination-info"
          :class="{ 'active-page': page === currentPage }"
          @click="changePage(page)"
        >
          {{ page }}
        </span>
      </div>
      <button class="pagination-button" @click="nextPage" :disabled="currentPage === totalPages" aria-label="Página siguiente">
        Siguiente
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, defineEmits } from 'vue';
import SearchBar from './SearchBar.vue';
import ProviderCard from '~/components/cards/ProviderCard/providercard.vue';
import Datatableaddproduct from './components/datatables/Datatableaddproduct/Datatableaddproduct.vue'; // Asegúrate de importar el componente correctamente
import ResumenCostos from '../components/Widgets/ResumenCostos/Rcostos.vue'; // Asegúrate de importar el componente correctamente
import ResumenOrden from '../components/Widgets/ResumenOrden/ResumenOrden.vue';
import ConfirmationBox from './components/ConfirmationBox/ConfirmationBox.vue';

const currentPage = ref(1);
const totalPages = ref(3); // Actualiza según tus necesidades
const cardsPerPage = 7;

const emits = defineEmits(['page-changed']);

// Simular datos de tarjetas de proveedores (array de 12 elementos para simular 2 páginas)
const allCards = Array.from({ length: 12 }, (_, i) => ({ id: i + 1 }));

// Añade tus elementos adicionales
const additionalElements = [{ id: 13, name: 'Elemento adicional 1' }, { id: 14, name: 'Elemento adicional 2' }];

// Obtener las tarjetas visibles según la página actual
const visibleCards = computed(() => {
  let cards = allCards.slice((currentPage.value - 1) * cardsPerPage, currentPage.value * cardsPerPage);
  
  // Añadir elementos adicionales a la segunda página
  if (currentPage.value === 2) {
    cards = [...cards, ...additionalElements];
  }
  
  return cards;
});

const updatePage = (page) => {
  currentPage.value = page;
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    emitPageChange();
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    emitPageChange();
  }
};

const changePage = (page) => {
  currentPage.value = page;
  emitPageChange();
};

const emitPageChange = () => {
  emits('page-changed', currentPage.value);
};

watch(currentPage, emitPageChange);
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.pagination-button {
  padding: 0.5rem 1rem;
  background-color: #e5e7eb;
  border-radius: 0.375rem;
  cursor: pointer;
  margin: 0 0.5rem;
}

.pagination-numbers {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pagination-info {
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
}

.pagination-info:hover {
  transform: scale(1.1);
}

.active-page {
  background: linear-gradient(45deg, #003B73, #00A6A6);
  color: white;
}

.provider-container, .table-container {
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
  gap: 0rem;
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

.table-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.table-container {
  width: 100%;
  margin-top: 1rem;
  overflow-x: auto;
}

.resumen-costo {
  margin-top: 1rem;
}

.confirmation-wrapper .confirmation-content {
  display: flex;
  justify-content: space-between;
}
</style>
