<template>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
  <div class="chart-container">
    <div class="header">
    <h2 class="title">Costos por Proveedor</h2>
    <button class="expand-button">
      <LayoutGridIcon class="expand-icon" />
    </button>
    </div>
    
    <div class="chart-content">
    <div class="chart-wrapper">
      <Doughnut
      :data="chartData"
      :options="chartOptions"
      />
    </div>
  
    <div class="chart-legend">
      <div v-for="provider in providers" :key="provider.name" class="legend-item">
      <div class="percentage-circle" :style="{ backgroundColor: provider.color }">
        <span>{{ provider.percentage }}%</span>
      </div>
      <div class="provider-info">
        <span class="provider-name">{{ provider.name }}</span>
        <span class="provider-amount">${{ formatAmount(provider.amount) }}</span>
      </div>
      </div>
    </div>
    </div>
  </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { Doughnut } from 'vue-chartjs';
  import { LayoutGridIcon } from 'lucide-vue-next';
  import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
  } from 'chart.js';
  
  ChartJS.register(ArcElement, Tooltip, Legend);
  
  interface Provider {
  name: string;
  percentage: number;
  amount: number;
  color?: string;
  }
  
  const generateDistinctColors = (count: number): string[] => {
  const baseHues = [
    '#8B5CF6', // Violeta
    '#FCD34D', // Amarillo
    '#F97316', // Naranja
    '#10B981', // Verde esmeralda
    '#3B82F6', // Azul
    '#EC4899', // Rosa
    '#14B8A6', // Turquesa
    '#F43F5E', // Rojo
    '#8B5CF6', // Violeta claro
    '#06B6D4', // Cyan
  ];
  
  const colors = [...baseHues];
  
  if (count > colors.length) {
    for (let i = colors.length; i < count; i++) {
    const hue = (i * 137.508) % 360; 
    const saturation = 65 + Math.random() * 15; 
    const lightness = 55 + Math.random() * 10; 
    colors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
    }
  }
  
  return colors.slice(0, count);
  };
  
  const providers = ref<Provider[]>([
  { name: 'Prov14', percentage: 25, amount: 643 },
  { name: 'Prov15', percentage: 35, amount: 789 },
  { name: 'Prov16', percentage: 15, amount: 235 },
  { name: 'Prov17', percentage: 10, amount: 456 },
  { name: 'Prov18', percentage: 8, amount: 321 },
  { name: 'Prov19', percentage: 7, amount: 147 }
  ]);
  
  const colors = generateDistinctColors(providers.value.length);
  providers.value.forEach((provider, index) => {
  provider.color = colors[index];
  });
  
  const chartData = computed(() => ({
  labels: providers.value.map(p => p.name),
  datasets: [{
    data: providers.value.map(p => p.percentage),
    backgroundColor: providers.value.map(p => p.color),
    borderWidth: 0,
    borderRadius: 3,
  }]
  }));
  
  const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '25%',
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
    callbacks: {
      label: (context: any) => {
      const value = context.raw;
      const provider = providers.value[context.dataIndex];
      return [
        `${provider.name}`,
        `Porcentaje: ${value}%`,
        `Monto: $${formatAmount(provider.amount)}`
      ];
      }
    }
    }
  }
  };
  
  const formatAmount = (amount: number): string => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  </script>
  
  <style scoped src="./DoughnutChart.css">
  
  </style>