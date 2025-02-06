<template>
  <table class="budget-table">
    <thead>
      <tr>
        <th>Departamento</th>
        <th>Monto Asignado</th>
        <th>Monto Gastado</th>
        <th>% Utilizado</th>
        <th>Estado</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(department, index) in departments" :key="index">
        <td>{{ department.name }}</td>
        <td>${{ formatNumber(department.assigned) }}</td>
        <td>${{ formatNumber(department.spent) }}</td>
        <td>{{ department.percentage }}%</td>
        <td>{{ department.status }}</td>
      </tr>
    </tbody>
  </table>


</template>

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
