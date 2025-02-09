<template>
  <div class="flex flex-col justify-center">
    <SubNav module-name="Presupuesto" />

    <div class="flex justify-end mt-[150px]">
      <button
        class="bg-[#003B73] hover:bg-blue-600 border-black text-white rounded-full font-bold border-2 shadow-md text-md py-2 px-3"
        title="Crear Producto"
        type="link"
        size="default"
        color="blue"
      >
        Crear presupuesto
      </button>
    </div>

    <div class="flex">
      <!-- <forms-FormBudgetCreation /> -->
      <datatables-ProgressBar></datatables-ProgressBar>
      <datatables-BudgetTable></datatables-BudgetTable>
    </div>
  </div>
</template>
<script setup>
const modal = ref(false);
</script>
