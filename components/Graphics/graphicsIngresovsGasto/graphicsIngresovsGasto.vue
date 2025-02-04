<template src="./graphicsIngresovsGasto.html">
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Chart from 'chart.js/auto';

export default defineComponent({
  name: 'GraphicsComponent',
  setup() {
    onMounted(() => {
      const canvas = document.getElementById('costosGastosChart') as HTMLCanvasElement;
      if (!canvas) {
        console.error('Canvas element not found');
        return;
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        console.error('Failed to get 2D context');
        return;
      }

      // Crear el degradado para Costos
      const gradientCostos = ctx.createLinearGradient(0, 0, ctx.canvas.width, ctx.canvas.height);
      gradientCostos.addColorStop(0, '#003B73');
      gradientCostos.addColorStop(1, '#00A6A6');

      // Crear el degradado para Gastos
      const gradientGastos = ctx.createLinearGradient(0, 0, ctx.canvas.width, ctx.canvas.height);
      gradientGastos.addColorStop(0, '#FF5733');
      gradientGastos.addColorStop(1, '#FFC300');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
          datasets: [
            {
              label: 'Ingresos',
              data: [1200, 1500, 1800, 2000, 1700, 1600],
              backgroundColor: gradientCostos,
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            },
            {
              label: 'Gastos',
              data: [1000, 1400, 1600, 1900, 1500, 1300],
              backgroundColor: gradientGastos,
              borderColor: 'rgb(185, 121, 0)',
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
  }
});
</script>

<style src="./graphicsIngresovsGasto.css">
</style>