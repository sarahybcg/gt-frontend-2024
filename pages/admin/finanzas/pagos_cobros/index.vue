<template>
    <div class="w-full bg-white min-h-screen pt-20">
      <div class="w-full max-w-6xl mx-auto">
        <SubNav module-name="Pagos y Cobros" />
  
        <div class="bg-white p-6 rounded-xl shadow-md mt-8">
          <div class="flex justify-between items-center flex-wrap">
            <div class="relative">
              <select
                v-model="selectedFilter"
                class="appearance-none bg-white pl-4 pr-10 py-2 rounded-lg border border-gray-200 shadow-sm w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Todos</option>
                <option value="pagado">Pagado</option>
                <option value="pendiente">Pendiente</option>
              </select>
              <ChevronDownIcon
                class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              />
            </div>
  
            <div class="flex items-center gap-4">
              <div class="relative">
                <input
                  type="text"
                  v-model="searchQuery"
                  placeholder="Buscar Proveedor/Cliente"
                  class="pl-10 pr-4 py-2 rounded-lg border border-gray-200 shadow-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <SearchIcon
                  class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                />
              </div>
              <button
              @click="showPaymentRegistrationForm = true"
              class="bg-[#003B73] hover:bg-[#004b8f] text-white rounded-lg font-medium py-2 px-4 shadow-sm"
              >
                Registrar Pago
              </button>
            </div>
          </div>
  
          <div class="mt-8">
            <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold">Transacciones</h2>
            <div class="flex gap-2">
        </div>
    </div>
            <datatables-SupplierTable
              :filter="selectedFilter"
              :search="searchQuery"
            />
          </div>
        </div>
      </div>
      <div v-if="showPaymentRegistrationForm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-[20px] shadow-lg w-[500px] overflow-hidden">
        <PaymentRegistration @close="showPaymentRegistrationForm = false" />
      </div>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { ChevronDownIcon, SearchIcon } from "lucide-vue-next";
  import PaymentRegistration from "../../../components/forms/FormPaymentRegistration/PaymentRegistration.vue";
  
  const selectedFilter = ref("");
  const searchQuery = ref("");
  const showPaymentRegistrationForm = ref(false);
  </script>