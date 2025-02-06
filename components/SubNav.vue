<template>
  <nav class="bg-white fixed  top-0 left-0 m-0 w-full p-4 flex justify-between items-center z-0">
    <!-- Nombre del módulo -->
    
    <h1 class="text-2xl font-bold text-gray-800 ml-[20%]">{{ moduleName }}</h1>
    
    <!-- Contenedor de iconos y buscador -->
    <div class="flex items-center space-x-4">

      <!-- Buscador -->
      <div class="relative" @click="expandSearch = true">
        <input
          v-if="expandSearch"
          type="text"
          class="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-blue-300 transition-all w-48"
          placeholder="Buscar..."
          @blur="expandSearch = false"
        />
        <LucideSearch class="w-6 h-6 text-[#003B73] cursor-pointer stroke-[4] hover:text-[#FF6F61]" />
      </div>
      
      <!-- Contenedor de iconos redondeado -->
      <div class="flex items-center space-x-2 bg-gray-100 py-1 px-2 rounded-full">
        <div class="p-2 rounded-full hover:bg-gray-200 transition">
          <LucideSettings class="w-6 h-6 text-[#003B73] cursor-pointer hover:text-[#FF6F61]" />
        </div>
        <div class="p-2 rounded-full hover:bg-gray-200 transition">
          <LucideUser class="w-6 h-6 text-[#003B73] fill-[#003B73] cursor-pointer hover:text-[#FF6F61] hover:fill-[#FF6F61]" />
        </div>
      </div>
      
      <!-- Icono de notificación -->
      <LucideBell class="w-6 h-6 text-[#003B73] fill-[#003B73] cursor-pointer hover:text-[#FF6F61] hover:fill-[#FF6F61]" />
    </div>
  </nav>
</template>

<script>
import { ref, defineComponent } from 'vue';
import { LucideSearch, LucideSettings, LucideUser, LucideBell } from 'lucide-vue-next';

export default defineComponent({
  components: { LucideSearch, LucideSettings, LucideUser, LucideBell },
  props: {
    moduleName: {
      type: String,
      required: true
    }
  },
  setup() {
    const expandSearch = ref(false);
    return { expandSearch };
  }
});
</script>
