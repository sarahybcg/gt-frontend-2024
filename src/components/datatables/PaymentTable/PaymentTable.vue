<template src="./PaymentTable.html"></template>

<script>
export default {
  name: 'PaymentTable',
  data() {
    return {
      payments: [
        {
          date: '2023-05-01',
          description: 'Compra de suministros',
          category: 'Oficina',
          amount: 150.0,
          status: 'Pagado'
        },
        {
          date: '2023-05-03',
          description: 'Pago de servicios',
          category: 'Servicios',
          amount: 200.0,
          status: 'Pagado'
        },
        {
          date: '2023-05-05',
          description: 'Compra de equipo',
          category: 'Tecnología',
          amount: 200.0,
          status: 'Pendiente'
        },
        {
          date: '2023-05-10',
          description: 'Pago de nómina',
          category: 'Salarios',
          amount: 5000.0,
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

<style scoped src="./PaymentTable.css"></style>
