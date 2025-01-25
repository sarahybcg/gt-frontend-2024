<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Alert {
  type: 'success' | 'warning';
  message: string;
}

const alerts = ref<Alert[]>([]);

const fetchAlerts = async (): Promise<void> => {
  alerts.value = [
    {
      type: 'success',
      message: 'Los gastos superaron los ingresos en marzo.',
    },
    {
      type: 'success',
      message: 'Aumento del 15% en ingresos respecto al mes anterior.',
    },
    {
      type: 'warning',
      message: 'El flujo de caja ha sido negativo en los últimos 3 meses.',
    },
  ];
};

onMounted(() => {
  fetchAlerts();
});
</script>

<template>
  <div class="alerts-panel">
    <h2 class="alerts-title">Insights Financieros</h2>
    <p>Resumen de puntos clave</p>
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

<style src="./AlertsPanelFinanzas.css" scoped>

</style>
