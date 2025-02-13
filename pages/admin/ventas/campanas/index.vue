<template>
  <div class="w-full bg-white min-h-screen pt-20">
    <div class="w-full max-w-6xl mx-auto">
      <div class="bg-white p-6 rounded-xl shadow-md mt-8">
        <div class="flex flex-wrap justify-between items-center mb-6 gap-4">
          <div class="flex items-center gap-4 flex-1">
            <SubNav module-name="Campañas" />
            <div class="relative flex-1">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Buscar Campañas..."
                  class="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500"
                />
                <span class="absolute left-3 top-2.5 text-gray-400">
                  <SearchIcon class="w-5 h-5" />
                </span>
              </div>
            <select 
              v-model="selectedState" 
              class="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleccionar Estado</option>
              <option value="activa">Activa</option>
              <option value="pausada">Pausada</option>
              <option value="finalizada">Finalizada</option>
              <option value="pendiente">Pendiente</option>
            </select>
          </div>
          <button
            @click="showCreateForm = true"
            class="bg-[#003B73] hover:bg-[#004b8f] text-white rounded-lg font-medium py-2 px-4 shadow-md transition-all"
          >
            Crear Nueva Campaña
          </button>
        </div>
        <datatables-CampaignTable 
          :search="searchQuery"
          :stateFilter="selectedState"
        />
      </div>
    </div>
    <transition name="fade">
      <div v-if="showCreateForm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 class="text-2xl font-bold mb-4">Crear Nueva Campaña</h2>
          <FormCreateCampaign @close="showCreateForm = false" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import FormCreateCampaign from './components/forms/FormCreateCampaign/CreateCampaign.vue'; 

const searchQuery = ref("");
const selectedState = ref("");
const showCreateForm = ref(false);
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
