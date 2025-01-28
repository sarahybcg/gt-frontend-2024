<template src="./BudgetTable.html"></template>

<script>
export default {
  name: 'BudgetTable',
  data() {
    return {
      departments: [
        {
          name: 'Ventas',
          assigned: 100000,
          spent: 75000,
          percentage: 85,
          status: 'En progreso'
        },
        {
          name: 'Marketing',
          assigned: 50000,
          spent: 48000,
          percentage: 78,
          status: 'En progreso'
        },
        {
          name: 'Compras',
          assigned: 120000,
          spent: 75000,
          percentage: 59,
          status: 'En progreso'
        },
        {
          name: 'Transporte',
          assigned: 80000,
          spent: 100000,
          percentage: 96,
          status: 'Casi completo'
        },
        {
          name: 'Hoteleria',
          assigned: 65000,
          spent: 75000,
          percentage: 75,
          status: 'En progreso'
        }
      ]
    };
  },
  methods: {
    formatNumber(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }
};
</script>

<style scoped src="./BudgetTable.css"></style>
