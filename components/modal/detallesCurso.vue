<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <button @click="$emit('close')" class="close-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 class="modal-title">Detalles del Curso</h2>
      <div class="modal-body">
        <div class="info-item">
          <span class="info-label">Número:</span>
          <span class="info-value">{{ course.number }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Tipo:</span>
          <span class="info-value">{{ course.type }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Documento:</span>
          <span class="info-value">{{ course.documentType }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModalDetallesCurso',
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    course: {
      type: Object,
      required: true
    }
  },
  emits: ['close']
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  border-radius: 16px;
  max-width: 300px;
  width: 90%;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  transition: color 0.2s ease;
}

.close-icon:hover {
  color: #003B73;
}

.modal-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #003B73;
  margin-bottom: 15px;
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}

.info-label {
  font-weight: 600;
  color: #666;
}

.info-value {
  color: #333;
}
</style>