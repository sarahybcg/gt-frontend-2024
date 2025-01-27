<template>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
    <div class="chart-container">
      <div class="header">
        <h2 class="title">Gastos Acumulados</h2>
        <div class="controls">
          <select v-model="selectedCategory" class="category-select">
            <option value="">Categorías</option>
            <option value="categoria1">Categoría 1</option>
            <option value="categoria2">Categoría 2</option>
            <option value="categoria3">Categoría 3</option>
          </select>
          <button class="grid-button">
            <LayoutGrid class="icon" />
          </button>
        </div>
      </div>
      <div class="chart-wrapper">
        <Line
          :data="chartData"
          :options="chartOptions"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { Line } from 'vue-chartjs';
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
  import { LayoutGrid } from 'lucide-vue-next';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const selectedCategory = ref('');
  
  const expenses = [6000, 0, 6000, 7500, 9500, 9000, 5500, 1000, 9000, 1500];
  
  const chartData = computed(() => ({
    labels: Array.from({ length: 10 }, (_, i) => i.toString()),
    datasets: [
      {
        label: 'Gastos',
        data: expenses,
        borderColor: '#0066FF',
        backgroundColor: 'rgba(0, 102, 255, 0.1)',
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#0066FF',
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2,
      }
    ]
  }));
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 10000,
        ticks: {
          stepSize: 2500,
          font: {
            family: "'Inter', sans-serif",
            size: 12
          },
          color: '#666'
        },
        grid: {
          color: '#E5E7EB',
          drawBorder: false
        },
        border: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
            size: 12
          },
          color: '#666'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'white',
        titleColor: '#333',
        bodyColor: '#666',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        titleFont: {
          size: 14,
          weight: '600',
          family: "'Inter', sans-serif"
        },
        bodyFont: {
          size: 13,
          family: "'Inter', sans-serif"
        },
        callbacks: {
          title: (items) => `Período ${items[0].label}`,
          label: (item) => `$${item.raw.toLocaleString()}`
        }
      }
    }
  };
  </script>
  
  <style scoped src="./LineChart.css">
  
  </style>