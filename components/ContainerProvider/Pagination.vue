<template>
  <div class="pagination">
    <button class="pagination-button" @click="prevPage" :disabled="currentPage === 1">
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
    <button class="pagination-button" @click="nextPage" :disabled="currentPage === totalPages">
      Siguiente
    </button>
  </div>
</template>

<script setup>
import { ref, watch, defineEmits } from 'vue';

const currentPage = ref(1);
const totalPages = ref(3); // Supongamos que tienes 10 páginas

const emits = defineEmits(['page-changed']);

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
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
}

.active-page {
  background: linear-gradient(45deg, #003B73, #00A6A6);
  color: white;
}
</style>
