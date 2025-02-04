<template>
    <div class="container">
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
    <section class="section">
      <h1>GRAFICOS</h1>
      <DoughnutChart />
      <LineChart />
      <GraphicsComponent />
    </section>
    <section class="section">
      <h1>ALERTAS</h1>
      <AlertsPanelFinanzas />
      <AlertsPanelMarketing />
    </section>
    <section class="section">
      <h1>TABLAS</h1>
      <BudgetTable />
      <CampaignTable />
      <PaymentTable />
      <SupplierTable />
      <UserTable />
      <datatablepriority />
      <datatableproduct />
      <datatableprosup />
      <datatablesupplier />
      <datatabletype />
    </section>
    
    <section class="section">
      <h1>WIDGETS</h1>
      <div class="grid-container">
        <div class="grid-item"><CEmpleados /></div>
        <div class="grid-item"><MInventario /></div>
        <div class="grid-item"><NEmpleados /></div>
        <div class="grid-item"><RPendientes /></div>
        <div class="grid-item"><Rcostos /></div>
        <div class="grid-item"><ResumenOrden /></div>
        <div class="grid-item"><SEmpleados /></div>
        <div class="grid-item"><Tventas /></div>
        <div class="grid-item"><widget /></div>
        <div class="grid-item"><widgetss /></div>
        <div class="grid-item"><WidgetsComponent /></div>
      </div>
    </section>
    
    <section class="section">
      <h1>FORMS</h1>
      <div class="grid-container">
        <div class="grid-item"><AddExpenses /></div>
        <div class="grid-item"><AddLead /></div>
        <div class="grid-item"><BudgetCreation /></div>
        <div class="grid-item"><CreateCampaign /></div>
        <div class="grid-item"><PaymentRegistration /></div>
      </div>
    </section>
  </div>
</template>

<script lang="ts"> 
import { defineComponent } from 'vue'
import VCalendario from '@/components/calendario/VCalendario.vue'
//cards
import tarjetacurso from '@/components/cards/tarjetacurso/tarjetacurso.vue'
import ratingcard from '@/components/cards/ratingcard/ratingcard.vue'
//tabless
import BudgetTable from '@/components/datatables/BudgetTable/BudgetTable.vue'
import CampaignTable from '@/components/datatables/CampaignTable/CampaignTable.vue'
import PaymentTable from '@/components/datatables/PaymentTable/PaymentTable.vue'
import SupplierTable from '@/components/datatables/SupplierTable/SupplierTable.vue'
import UserTable from '@/components/datatables/UserTable/UserTable.vue'
import datatablepriority from '@/components/datatables/Datatablepriority/datatablepriority.vue'
import datatableproduct from '@/components/datatables/Datatableproduct/datatableproduct.vue'
import datatableprosup from '@/components/datatables/Datatableprosup/datatableprosup.vue'
import datatablesupplier from '@/components/datatables/Datatablesupplier/datatablesupplier.vue'
import datatabletype from '@/components/datatables/Datatabletype/datatabletype.vue'
//widgets
import CEmpleados from '@/components/Widgets/ContadorEmpleados/CEmpleados.vue'
import MInventario from '@/components/Widgets/MovimientosInven/MInventario.vue'
import NEmpleados from '@/components/Widgets/NewEmpleados/NEmpleados.vue'
import RPendientes from '@/components/Widgets/ReservasPendientes/RPendientes.vue'
import Rcostos from '@/components/Widgets/ResumenCostos/Rcostos.vue'
import ResumenOrden from '@/components/Widgets/ResumenOrden/ResumenOrden.vue'
import SEmpleados from '@/components/Widgets/SolicitudesEmpleos/SEmpleados.vue'
import Tventas from '@/components/Widgets/TotalVentas/Tventas.vue'
import widgetss from '@/components/Widgets/widget/widget.vue'
import AddExpenses from '@/components/forms/FormAddExpenses/AddExpenses.vue'
import AddLead from '@/components/forms/FormAddLead/AddLead.vue'
import BudgetCreation from '@/components/forms/FormBudgetCreation/BudgetCreation.vue'
import CreateCampaign from '@/components/forms/FormCreateCampaign/CreateCampaign.vue'
import PaymentRegistration from '@/components/forms/FormPaymentRegistration/PaymentRegistration.vue'
import WidgetsComponent from '@/components/Widgets/widgets/widgets.vue'

//Alert
import AlertsPanelFinanzas from '@/components/Alerts/Alerts_panel_finanzas/AlertsPanelFinanzas.vue'
import AlertsPanelMarketing from '@/components/Alerts/Alerts_panel_marketing/AlertsPanelMarketing.vue'
//Graphics
import DoughnutChart from '@/components/Graphics/Doughnut_Chart/DoughnutChart.vue'
import LineChart from '@/components/Graphics/Line_chart/LineChart.vue' 
import GraphicsComponent from '@/components/Graphics/graphicsIngresovsGasto/graphicsIngresovsGasto.vue'
import Datatablepriority from '@/components/datatables/Datatablepriority/datatablepriority.vue'
import Datatableproduct from '@/components/datatables/Datatableproduct/datatableproduct.vue'
import Datatableprosup from '@/components/datatables/Datatableprosup/datatableprosup.vue'
import Datatablesupplier from '@/components/datatables/Datatablesupplier/datatablesupplier.vue'
import Datatabletype from '@/components/datatables/Datatabletype/datatabletype.vue'
 
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
    Tventas,
    AddExpenses,
    AddLead,
    BudgetCreation,
    CreateCampaign,
    PaymentRegistration,
    widgetss,
    WidgetsComponent,
    AlertsPanelFinanzas,
    AlertsPanelMarketing,
    DoughnutChart,
    LineChart,
    GraphicsComponent,
    datatablepriority,
    datatableproduct,
    datatableprosup,
    datatablesupplier,
    datatabletype
  },
})
</script>

<style scoped>
/* Estilos generales para contenedores y secciones */
.container {
  display: flex;
  flex-direction: column;
  gap: 2rem; /* Espacio entre secciones */
  padding: 1rem;
}

.section {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

/* Contenedor de grid para organizar los componentes */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem; /* Espacio entre cada componente */
}

/* Opcional: Estilos para cada componente individual */
.grid-item {
  background: #fff;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
