<template>
    <div class="w-full bg-white min-h-screen pt-20">
      <div class="w-full max-w-6xl mx-auto">
        <div class="bg-white p-6 rounded-xl shadow-md mt-8">
          <div class="flex flex-wrap justify-between items-center mb-6 gap-4">
            <div class="flex flex-1 items-center gap-4">
              <SubNav module-name="Gestión de Leads" />
              
              <div class="relative flex-1">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Buscar Leads..."
                  class="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500"
                />
                <span class="absolute left-3 top-2.5 text-gray-400">
                  <SearchIcon class="w-5 h-5" />
                </span>
              </div>
  
              <select 
                v-model="selectedSource"
                class="border border-gray-200 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Filtrar Por Fuente</option>
                <option value="Redes Sociales">Redes Sociales</option>
                <option value="Google Ads">Google Ads</option>
                <option value="Referido">Referido</option>
              </select>
            </div>
  
            <button
              @click="showCreateForm = true"
              class="bg-[#003B73] hover:bg-[#004b8f] text-white rounded-lg font-medium py-2 px-4 shadow-sm"
            >
              + Agregar Lead
            </button>
          </div>
  
          <div class="flex gap-2 mb-6">
            <button 
              v-for="tab in tabs" 
              :key="tab.value"
              @click="currentTab = tab.value"
              class="px-4 py-2 rounded-lg transition-colors"
              :class="currentTab === tab.value ? 
                'bg-[#003B73] text-white' : 
                'bg-gray-100 text-gray-600 hover:bg-gray-200'"
            >
              {{ tab.label }}
            </button>
          </div>
  
          <datatables-UserTable 
            :search="searchQuery"
            :sourceFilter="selectedSource"
            :statusFilter="currentTab"
          />
        </div>
      </div>
  
      <div v-if="showCreateForm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold">Agregar Nuevo Lead</h2>
            <button @click="handleFormClose" class="text-gray-600 hover:text-red-500 text-xl font-bold">&times;</button>
          </div>
          <FormAddLead @close="handleFormClose" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { SearchIcon } from 'lucide-vue-next';
  import FormAddLead from './components/forms/FormAddLead/AddLead.vue'; 
  
  const searchQuery = ref("");
  const selectedSource = ref("");
  const showCreateForm = ref(false);
  
  const tabs = [
    { label: 'Todos', value: '' },
    { label: 'Nuevos', value: 'nuevo' },
    { label: 'En Seguimiento', value: 'en_seguimiento' },
    { label: 'Convertidos', value: 'convertido' }
  ];
  
  const currentTab = ref('');
  
  const handleFormClose = () => {
    showCreateForm.value = false;
  };
  </script>
  