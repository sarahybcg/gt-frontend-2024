<template src="./SupplierTable.html"></template>

<script>
export default {
  name: 'SupplierTable',
  data() {
    return {
      suppliers: [
        {
          name: 'Empresa A',
          amount: 1500.0,
          dueDate: '14/03/2024',
          status: 'Pagado'
        },
        {
          name: 'Empresa B',
          amount: 2000.0,
          dueDate: '09/03/2024',
          status: 'Pagado'
        },
        {
          name: 'Empresa C',
          amount: 3000.0,
          dueDate: '19/03/2024',
          status: 'Pendiente'
        },
        {
          name: 'Empresa D',
          amount: 1000.0,
          dueDate: '04/03/2024',
          status: 'Pagado'
        }
      ]
    };
  },
  methods: {
    formatCurrency(value) {
      return `$${value.toFixed(2)}`;
    }
  }
};
</script>

<style scoped src="./SupplierTable.css"></style>
