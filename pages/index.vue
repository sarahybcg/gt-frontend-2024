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
      <!-- Aquí podrías agregar componentes o gráficos -->
    </section>
    
    <section class="section">
      <h1>TABLAS</h1>
      <BudgetTable />
      <CampaignTable />
      <PaymentTable />
      <SupplierTable />
      <UserTable />
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
import tarjetacurso from '@/components/cards/tarjetacurso/tarjetacurso.vue'
import ratingcard from '@/components/cards/ratingcard/ratingcard.vue'
import BudgetTable from '@/components/datatables/BudgetTable/BudgetTable.vue'
import CampaignTable from '@/components/datatables/CampaignTable/CampaignTable.vue'
import PaymentTable from '@/components/datatables/PaymentTable/PaymentTable.vue'
import SupplierTable from '@/components/datatables/SupplierTable/SupplierTable.vue'
import UserTable from '@/components/datatables/UserTable/UserTable.vue'
import CEmpleados from '@/components/Widgets/ContadorEmpleados/CEmpleados.vue'
import MInventario from '@/components/Widgets/MovimientosInven/MInventario.vue'
import NEmpleados from '@/components/Widgets/NewEmpleados/NEmpleados.vue'
import RPendientes from '@/components/Widgets/ReservasPendientes/RPendientes.vue'
import Rcostos from '@/components/Widgets/ResumenCostos/Rcostos.vue'
import ResumenOrden from '@/components/Widgets/ResumenOrden/ResumenOrden.vue'
import SEmpleados from '@/components/Widgets/SolicitudesEmpleos/SEmpleados.vue'
import Tventas from '@/components/Widgets/TotalVentas/Tventas.vue'
import AddExpenses from '@/components/forms/FormAddExpenses/AddExpenses.vue'
import AddLead from '@/components/forms/FormAddLead/AddLead.vue'
import BudgetCreation from '@/components/forms/FormBudgetCreation/BudgetCreation.vue'
import CreateCampaign from '@/components/forms/FormCreateCampaign/CreateCampaign.vue'
import PaymentRegistration from '@/components/forms/FormPaymentRegistration/PaymentRegistration.vue'

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
    PaymentRegistration
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
