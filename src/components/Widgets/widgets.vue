<template>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
    <div class="widgets-container">
      <div class="widget income">
        <h3 class="widget-title text-center">Ingresos Totales</h3>
        <div class="widget-content">
          <div class="image-container">
            <img 
              src="./linear.png" 
              alt="Gráfico de línea de ingresos"
              class="widget-image"
            />
          </div>
          <span class="widget-amount">{{ formatCurrency(totalIncome) }}</span>
        </div>
      </div>
  
      <div class="widget expenses">
        <h3 class="widget-title text-center">Gastos Totales</h3>
        <div class="widget-content">
          <div class="image-container">
            <img 
              src="./bar.png" 
              alt="Gráfico de barras de gastos"
              class="widget-image"
            />
          </div>
          <span class="widget-amount">{{ formatCurrency(totalExpenses) }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'

  // Data
  const totalIncome = ref<number>(29000.00)
  const totalExpenses = ref<number>(14000.00)

  
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(value)
  }
</script>

  
  <style scoped src=".">
  
  </style>