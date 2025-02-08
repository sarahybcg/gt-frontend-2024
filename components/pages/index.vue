<template>
  <div>
    <h1>CALENDARIO</h1> 
    <VCalendario />
  </div> 
  <div>
    <h1>TARJETA CURSO</h1> 
    <tarjetacurso /> 
  </div>
  <div>
    <h1>TARJETA RATING</h1> 
    <ratingcard />
  </div>
  <div>
    <h1>GRAFICOS</h1>  
  </div>
  <div>
    <h1>TABLAS</h1>  
    <BudgetTable />
    <CampaignTable />
    <PaymentTable />
    <SupplierTable />
    <UserTable />
  </div>
  <div>
    <h1>WIDGETS</h1>  
    <CEmpleados />
    <MInventario />
    <NEmpleados />
    <RPendientes />
    <Rcostos />
    <ResumenOrden />
    <SEmpleados />
    <Tventas /> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VCalendario from '@/components/VCalendario/VCalendario.vue'
import tarjetacurso from '@/components/tarjetacurso/tarjetacurso.vue';  
import ratingcard from '@/components/ratingcard/ratingcard.vue'; 
import BudgetTable from '@/components/datatables/BudgetTable/BudgetTable.vue';
import CampaignTable from '@/components/datatables/CampaignTable/CampaignTable.vue';
import PaymentTable from '@/components/datatables/PaymentTable/PaymentTable.vue';
import SupplierTable from '@/components/datatables/SupplierTable/SupplierTable.vue';
import UserTable from '@/components/datatables/UserTable/UserTable.vue'; 
import CEmpleados from '@/components/Widgets/ContadorEmpleados/CEmpleados.vue';
import MInventario from '@/components/Widgets/MovimientosInven/MInventario.vue';
import NEmpleados from '@/components/Widgets/NewEmpleados/NEmpleados.vue';
import RPendientes from '@/components/Widgets/ReservasPendientes/RPendientes.vue';
import Rcostos from '@/components/Widgets/ResumenCostos/Rcostos.vue';
import ResumenOrden from '@/components/Widgets/ResumenOrden/ResumenOrden.vue';
import SEmpleados from '@/components/Widgets/SolicitudesEmpleos/SEmpleados.vue';
import Tventas from '@/components/Widgets/TotalVentas/Tventas.vue';

export default defineComponent({
  components: {
    
    VCalendario,
    tarjetacurso,
    ratingcard,
    BudgetTable,
    CampaignTable,
    PaymentTable,
    SupplierTable, 
    UserTable,
    CEmpleados,
    MInventario,
    NEmpleados,
    RPendientes,
    Rcostos,
    ResumenOrden,
    SEmpleados,
    Tventas
  },
})
</script>

<style scoped>
/* Aquí puedes agregar estilos para tu index.vue si lo necesitas */
h1 {
  font-size: 2rem;
  color: #333;
}
p {
  font-size: 1rem;
  color: #555;
}
</style>