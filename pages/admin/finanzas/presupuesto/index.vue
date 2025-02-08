<template>
  <div class="w-full bg-white min-h-screen pt-20">
    <div class="w-full max-w-6xl mx-auto">
      <SubNav module-name="Presupuesto" />

      <div class="bg-white p-6 rounded-xl shadow-md mt-8">
        <div class="flex justify-between items-center flex-wrap">
          <div class="flex gap-4">
            <div class="relative">
              <select
                v-model="selectedFilter"
                class="appearance-none bg-white pl-4 pr-10 py-2 rounded-lg border border-gray-200 shadow-sm w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Filtrar por Departamento</option>
                <option value="ventas">Ventas</option>
                <option value="marketing">Marketing</option>
                <option value="compras">Compras</option>
                <option value="transporte">Transporte</option>
                <option value="hoteleria">Hotelería</option>
              </select>
              <ChevronDownIcon
                class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              />
            </div>

            <div class="relative">
              <select
                v-model="selectedState"
                class="appearance-none bg-white pl-4 pr-10 py-2 rounded-lg border border-gray-200 shadow-sm w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Filtrar por...</option>
                <option value="En progreso">En progreso</option>
                <option value="Casi completo">Casi completo</option>
              </select>
              <ChevronDownIcon
                class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              />
            </div>
          </div>

          <div class="flex items-center gap-4 mt-4 lg:mt-0">
            <div class="relative">
              <input
                type="text"
                v-model="searchQuery"
                placeholder="Buscar Presupuesto"
                class="pl-10 pr-4 py-2 rounded-lg border border-gray-200 shadow-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <SearchIcon
                class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              />
            </div>
            <button
              @click="showBudgetForm = true"
              class="bg-[#003B73] hover:bg-[#004b8f] text-white rounded-lg font-medium py-2 px-4 shadow-sm"
            >
              Crear Presupuesto
            </button>
          </div>
        </div>
      

        <div class="mt-8">
          <div class="flex justify-between items-center mb-4">
              <h2 class="text-xl font-semibold">Transacciones</h2>
              <div class="flex gap-2">
          </div>
        </div>
          <datatables-BudgetTable
            :filter="selectedFilter"
            :state="selectedState"
            :search="searchQuery"
          />
        </div>
      </div>
    </div>

    <!-- Modal para el formulario de creación de presupuesto -->
    <div v-if="showBudgetForm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-[20px] shadow-lg w-[500px] overflow-hidden">
        <BudgetCreationForm @close="showBudgetForm = false" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SearchIcon, ChevronDownIcon } from "lucide-vue-next";
import BudgetCreationForm from "../../../components/forms/FormBudgetCreation/BudgetCreation.vue";

const selectedFilter = ref("");
const selectedState = ref("");
const searchQuery = ref("");
const showBudgetForm = ref(false);
</script>