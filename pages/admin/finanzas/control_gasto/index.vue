<template>
    <div class="w-full bg-white min-h-screen pt-20">
      <div class="w-full max-w-6xl mx-auto">
        <SubNav module-name="Control de Gastos" />
  
        <div class="bg-white p-6 rounded-xl shadow-md mt-8">
          <div class="flex justify-between items-center flex-wrap">
            <div class="flex gap-4">
              <div class="relative">
                <select
                  v-model="selectedCategory"
                  class="appearance-none bg-white pl-4 pr-10 py-2 rounded-lg border border-gray-200 shadow-sm w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Filtrar por Estado</option>
                  <option value="pagado">Pagado</option>
                  <option value="pendiente">Pendiente</option>
                </select>
                <ChevronDownIcon
                  class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                />
              </div>
            </div>
  
            <button
              @click="showAddExpensesForm = true"
              class="bg-[#003B73] hover:bg-[#004b8f] text-white rounded-lg font-medium py-2 px-4 shadow-sm"
            >
              + Agregar Gasto
            </button>
          </div>
  
          <div class="mt-8">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-xl font-semibold">Transacciones</h2>
              <div class="flex gap-2">
                <button class="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <DownloadIcon class="w-4 h-4" />
                  VCS
                </button>
                <button class="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <DownloadIcon class="w-4 h-4" />
                  Excel
                </button>
              </div>
            </div>
            
            <datatables-PaymentTable
              :filter="selectedCategory"
              :state="selectedState"
              :search="searchQuery"
            />
          </div>
        </div>
      </div>
      <div v-if="showAddExpensesForm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-[20px] shadow-lg w-[500px] overflow-hidden">
        <AddExpenses @close="showAddExpensesForm = false" />
      </div>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { ChevronDownIcon, DownloadIcon } from "lucide-vue-next";
  import AddExpenses from "../../../components/forms/FormAddExpenses/AddExpenses.vue";
  
  const selectedCategory = ref("");
  const selectedState = ref("");
  const searchQuery = ref("");
  const showAddExpensesForm = ref(false);
  </script>