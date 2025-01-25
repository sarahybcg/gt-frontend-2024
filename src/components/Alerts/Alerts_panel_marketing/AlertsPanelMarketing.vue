<script setup lang="ts">
import { ref, onMounted } from 'vue';


interface Alert {
  type: 'success' | 'warning' | 'info';
  message: string;
}

const alerts = ref<Alert[]>([]);

const fetchAlerts = async (): Promise<void> => {
  alerts.value = [
    {
      type: 'success',
      message: 'La campaña "Primavera" está teniendo un rendimiento excepcional',
    },
    {
      type: 'warning',
      message: 'La tasa de clics en la campaña de email ha disminuido',
    },
    {
      type: 'info',
      message: 'Recomendación: Aumentar el presupuesto para anuncios en LinkedIn',
    },
  ];
};

onMounted(() => {
  fetchAlerts();
});
</script>

<template>
  <div class="alerts-panel">
    <h2 class="alerts-title">Alertas y Recomendaciones</h2>
    <div class="alerts-container">
      <div
        v-for="(alert, index) in alerts"
        :key="index"
        :class="['alert-card', alert.type]"
      >
        <span class="alert-symbol">~</span>
        {{ alert.message }}
      </div>
    </div>
  </div>
</template>

<style src="./AlertsPanelMarketing.css" scoped ></style>
