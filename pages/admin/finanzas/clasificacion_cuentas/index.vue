<template>
    <div class="min-h-screen bg-white pt-20">
      <div class="w-full max-w-6xl mx-auto bg-white">
        <SubNav module-name="Clasificación de Cuentas" />
        <div class="bg-white p-6 rounded-xl shadow-md mt-8 flex flex-col">
          <!-- Contenedor de la tabla -->
          <div class="overflow-auto w-full h-full bg-white">
  <ClassificationTable :accounts="filteredAccounts" />
</div>

        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  import { SearchIcon } from "lucide-vue-next";
  import ClassificationTable from "../../../components/datatables/ClassificationTable/ClassificationTable.vue";
  
  const searchQuery = ref("");
  const accounts = ref([
    { name: "Caja", balance: 500000 },
    { name: "Bancos", balance: 1000000 },
    { name: "Proveedores", balance: 300000 },
    { name: "Préstamos bancarios", balance: 400000 },
    { name: "Capital social", balance: 600000 },
    { name: "Ventas", balance: 800000 },
    { name: "Sueldos y salarios", balance: 200000 },
    { name: "Alquiler", balance: 150000 },
  ]);
  
  const filteredAccounts = computed(() => {
    const query = searchQuery.value.toLowerCase();
    let results = accounts.value.filter((account) =>
      account.name.toLowerCase().includes(query)
    );
  
    return results;
  });
  </script>
  
  