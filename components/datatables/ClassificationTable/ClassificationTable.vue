<template>
  <div class="p-8 bg-gray-100 min-h-screen bg-white flex justify-center items-center">
    <div class="w-full max-w-7xl">
      <!-- Button Container -->
      <div class="flex justify-end mb-4">
        <button @click="generateCSV" class="bg-[#003B73] hover:bg-[#004b8f] text-white rounded-lg font-medium py-2 px-4 shadow-sm">
          Generar Reporte CSV
        </button>
      </div>

      <!-- Table -->
      <table class="w-full bg-white rounded-lg shadow-lg border-collapse text-lg">
        <thead>
          <tr>
            <th class="py-6 px-8 text-left text-gray-700 font-semibold bg-gray-200 rounded-tl-lg">Cuentas</th>
            <th class="py-6 px-8 text-left text-gray-700 font-semibold bg-gray-200">Saldos expresados en Bolívares</th>
            <th class="py-6 px-8 text-left text-gray-700 font-semibold bg-gray-200">Nominales</th>
            <th class="py-6 px-8 text-left text-gray-700 font-semibold bg-gray-200"></th>
            <th class="py-6 px-8 text-left text-gray-700 font-semibold bg-gray-200">Reales</th>
            <th class="py-6 px-8 text-left text-gray-700 font-semibold bg-gray-200 rounded-tr-lg"></th>
          </tr>
          <tr>
            <th class="py-6 px-8 text-left text-gray-700 font-semibold bg-gray-100"></th>
            <th class="py-6 px-8 text-left text-gray-700 font-semibold bg-gray-100"></th>
            <th class="py-6 px-8 text-left text-gray-700 font-semibold bg-gray-100">Deudor</th>
            <th class="py-6 px-8 text-left text-gray-700 font-semibold bg-gray-100">Acreedor</th>
            <th class="py-6 px-8 text-left text-gray-700 font-semibold bg-gray-100">Deudor</th>
            <th class="py-6 px-8 text-left text-gray-700 font-semibold bg-gray-100">Acreedor</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cuenta, index) in cuentas" :key="index" class="hover:bg-gray-50">
            <td class="py-6 px-8 text-left">{{ cuenta.nombre }}</td>
            <td class="py-6 px-8 text-left">{{ cuenta.saldo }}</td>
            <td class="py-6 px-8 text-left">{{ cuenta.nominalDeudor }}</td>
            <td class="py-6 px-8 text-left">{{ cuenta.nominalAcreedor }}</td>
            <td class="py-6 px-8 text-left">{{ cuenta.realDeudor }}</td>
            <td class="py-6 px-8 text-left">{{ cuenta.realAcreedor }}</td>
          </tr>
          <tr class="font-semibold bg-gray-100">
            <td class="py-6 px-8 text-left">Subtotales</td>
            <td class="py-6 px-8 text-left">{{ subtotales.saldos }}</td>
            <td class="py-6 px-8 text-left">{{ subtotales.nominalDeudor }}</td>
            <td class="py-6 px-8 text-left">{{ subtotales.nominalAcreedor }}</td>
            <td class="py-6 px-8 text-left">{{ subtotales.realDeudor }}</td>
            <td class="py-6 px-8 text-left">{{ subtotales.realAcreedor }}</td>
          </tr>
          <tr class="font-semibold bg-gray-100">
            <td class="py-6 px-8 text-left">Resultado del ejercicio</td>
            <td class="py-6 px-8 text-left">{{ resultadoEjercicio }}</td>
            <td colspan="2" class="py-6 px-8"></td>
            <td colspan="2" class="py-6 px-8"></td>
          </tr>
          <tr class="font-semibold bg-gray-100">
            <td class="py-6 px-8 text-left">Totales</td>
            <td class="py-6 px-8 text-left">{{ totales.saldos }}</td>
            <td class="py-6 px-8 text-left">{{ totales.nominalDeudor }}</td>
            <td class="py-6 px-8 text-left">{{ totales.nominalAcreedor }}</td>
            <td class="py-6 px-8 text-left">{{ totales.realDeudor }}</td>
            <td class="py-6 px-8 text-left">{{ totales.realAcreedor }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cuentas: [
        { nombre: 'Caja', saldo: 500000, nominalDeudor: 500000, nominalAcreedor: 0, realDeudor: 0, realAcreedor: 0 },
        { nombre: 'Bancos', saldo: 1000000, nominalDeudor: 1000000, nominalAcreedor: 0, realDeudor: 0, realAcreedor: 0 },
        { nombre: 'Proveedores', saldo: 300000, nominalDeudor: 0, nominalAcreedor: 300000, realDeudor: 0, realAcreedor: 300000 },
        { nombre: 'Préstamos bancarios', saldo: 400000, nominalDeudor: 0, nominalAcreedor: 400000, realDeudor: 0, realAcreedor: 400000 },
        { nombre: 'Capital social', saldo: 600000, nominalDeudor: 0, nominalAcreedor: 600000, realDeudor: 0, realAcreedor: 600000 },
        { nombre: 'Ventas', saldo: 800000, nominalDeudor: 800000, nominalAcreedor: 0, realDeudor: 0, realAcreedor: 0 },
        { nombre: 'Sueldos y salarios', saldo: 200000, nominalDeudor: 0, nominalAcreedor: 200000, realDeudor: 200000, realAcreedor: 0 },
        { nombre: 'Alquiler', saldo: 150000, nominalDeudor: 0, nominalAcreedor: 150000, realDeudor: 150000, realAcreedor: 0 }
      ]
    };
  },
  computed: {
    subtotales() {
      let nominalDeudor = 0;
      let nominalAcreedor = 0;
      let realDeudor = 0;
      let realAcreedor = 0;
      let saldos = 0;

      this.cuentas.forEach(cuenta => {
        saldos += cuenta.saldo;
        nominalDeudor += cuenta.nominalDeudor;
        nominalAcreedor += cuenta.nominalAcreedor;
        realDeudor += cuenta.realDeudor;
        realAcreedor += cuenta.realAcreedor;
      });

      return {
        saldos,
        nominalDeudor,
        nominalAcreedor,
        realDeudor,
        realAcreedor
      };
    },
    resultadoEjercicio() {
      return this.subtotales.nominalDeudor - this.subtotales.nominalAcreedor - this.subtotales.realDeudor + this.subtotales.realAcreedor;
    },
    totales() {
      return {
        saldos: this.subtotales.saldos + this.resultadoEjercicio,
        nominalDeudor: this.subtotales.nominalDeudor + this.resultadoEjercicio,
        nominalAcreedor: this.subtotales.nominalAcreedor,
        realDeudor: this.subtotales.realDeudor + this.resultadoEjercicio,
        realAcreedor: this.subtotales.realAcreedor
      };
    }
  },
  methods: {
    generateCSV() {
      const rows = [];
      // Headers
      rows.push(['Cuentas', 'Saldos expresados en Bolívares', 'Nominales (Deudor)', 'Nominales (Acreedor)', 'Reales (Deudor)', 'Reales (Acreedor)']);
      
      // Cuentas data
      this.cuentas.forEach(cuenta => {
        rows.push([
          cuenta.nombre,
          cuenta.saldo,
          cuenta.nominalDeudor,
          cuenta.nominalAcreedor,
          cuenta.realDeudor,
          cuenta.realAcreedor
        ]);
      });

      // Subtotales
      rows.push([
        'Subtotales',
        this.subtotales.saldos,
        this.subtotales.nominalDeudor,
        this.subtotales.nominalAcreedor,
        this.subtotales.realDeudor,
        this.subtotales.realAcreedor
      ]);

      // Resultado del ejercicio
      rows.push(['Resultado del ejercicio', this.resultadoEjercicio, '', '', '', '']);

      // Totales
      rows.push([
        'Totales',
        this.totales.saldos,
        this.totales.nominalDeudor,
        this.totales.nominalAcreedor,
        this.totales.realDeudor,
        this.totales.realAcreedor
      ]);

      const csvContent = 'data:text/csv;charset=utf-8,' + rows.map(row => row.join(',')).join('\n');
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', 'reporte_financiero.csv');
      document.body.appendChild(link);
      link.click();
    }
  }
};
</script>

<style scoped>
table {
  border-spacing: 0;
}
th, td {
  padding: 12px 16px;
  border: 1px solid #d1d1d1;
  text-align: left;
}
th {
  background-color: #f9f9f9;
}
</style>


 