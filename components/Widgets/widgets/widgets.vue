<template src="./widgets.html">
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Chart from 'chart.js/auto';

export default defineComponent({
  name: 'WidgetsComponent',
  setup() {
    onMounted(() => {
      // Inicializar el gráfico de ventas
      const salesCanvas = document.getElementById('salesChart') as HTMLCanvasElement;
      if (!salesCanvas) {
        console.error('Sales canvas element not found');
        return;
      }

      const salesCtx = salesCanvas.getContext('2d');
      if (!salesCtx) {
        console.error('Failed to get 2D context for sales chart');
        return;
      }

      const salesGradient = salesCtx.createLinearGradient(0, 0, 0, 400);
      salesGradient.addColorStop(0, '#003B73');
      salesGradient.addColorStop(1, '#00A6A6');

      const salesChart = new Chart(salesCtx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: salesGradient,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      document.getElementById('downloadChart')?.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = salesChart.toBase64Image();
        link.download = 'sales-chart.png';
        link.click();
      });

      // Inicializar el gráfico de ingresos y gastos
      const incomeExpenseCanvas = document.getElementById('incomeExpenseChart') as HTMLCanvasElement;
      if (!incomeExpenseCanvas) {
        console.error('Income/Expense canvas element not found');
        return;
      }

      const incomeExpenseCtx = incomeExpenseCanvas.getContext('2d');
      if (!incomeExpenseCtx) {
        console.error('Failed to get 2D context for income/expense chart');
        return;
      }

      const gradientCostos = incomeExpenseCtx.createLinearGradient(0, 0, incomeExpenseCtx.canvas.width, incomeExpenseCtx.canvas.height);
      gradientCostos.addColorStop(0, '#003B73');
      gradientCostos.addColorStop(1, '#00A6A6');

      const gradientGastos = incomeExpenseCtx.createLinearGradient(0, 0, incomeExpenseCtx.canvas.width, incomeExpenseCtx.canvas.height);
      gradientGastos.addColorStop(0, '#FF5733');
      gradientGastos.addColorStop(1, '#FFC300');

      new Chart(incomeExpenseCtx, {
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

<style src="./widgets.css">
</style>