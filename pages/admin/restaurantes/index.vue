<template>
  <div class="flex flex-col min-h-screen bg-[#F0F0F3]">
    <SubNav module-name="Restaurante" />
    
    <div class="flex-grow p-8 mt-32">
      <div class="max-w-6xl mx-auto mb-12 flex flex-col md:flex-row gap-4">

        <div class="relative flex-1">
          <input 
            type="text" 
            placeholder="buscar"
            v-model="searchQuery"
            class="w-full px-4 py-2 rounded-2xl bg-white shadow-md focus:outline-none"
          />
          <button class="absolute right-4 top-1/2 -translate-y-1/2 text-[#003B73]">
            <i class="fas fa-search"></i>
          </button>
        </div>

        <select 
          v-model="selectedType"
          class="px-4 py-2 rounded-2xl bg-white shadow-md focus:outline-none min-w-[150px] cursor-pointer"
        >
          <option value="">Todos los tipos</option>
          <option value="comida">Comida</option>
          <option value="bebida">Bebida</option>
          <option value="postre">Postre</option>
        </select>

        <button 
          @click="isFormVisible = true"
          class="px-6 py-2 bg-[#003B73] text-white rounded-2xl shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-lg hover:bg-[#002c56]">
          Agregar Comida
        </button>

      </div>

      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ratingcard
        v-for="item in filteredFoodItems"
        :key="item.id"
        :title="item.name"
        :description="item.description"
        :initial-price="item.price"
        :initial-rating="item.rating"
        class="!relative !left-0 !top-0 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
        ></ratingcard>
      </div>

      <div v-if="filteredFoodItems.length === 0" class="text-center mt-8 text-gray-600">
        No se encontraron elementos que coincidan con tu búsqueda.
      </div>

      <FoodForm 
        :is-visible="isFormVisible"
        @close="isFormVisible = false"
        @submit="handleFormSubmit"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SubNav from '@/components/SubNav.vue' 
import ratingcard from '@/components/cards/ratingcard/ratingcard.vue'
import FoodForm from '@/components/forms/FormAddFood/index.vue'

const searchQuery = ref('')
const selectedType = ref('')
const isFormVisible = ref(false)

const foodItems = ref([
  {
    id: 1,
    name: 'Pizza Margherita',
    description: 'Classic Italian pizza with tomatoes and mozzarella',
    price: 12.99,
    rating: 5,
    type: 'comida'
  },
  {
    id: 2,
    name: 'Hamburger Clásica',
    description: 'Jugosa hamburguesa con queso y vegetales frescos',
    price: 2.99,
    rating: 4,
    type: 'comida'
  },
  {
    id: 3,
    name: 'Ensalada César',
    description: 'Lechuga romana, crutones y aderezo césar',
    price: 7.99,
    rating: 5,
    type: 'comida'
  },
  {
    id: 4,
    name: 'Pasta Alfredo',
    description: 'Fettuccine en salsa cremosa de queso parmesano',
    price: 15.99,
    rating: 4,
    type: 'comida'
  },
  {
    id: 5,
    name: 'Sushi Roll',
    description: 'Roll de salmón fresco con aguacate',
    price: 8.99,
    rating: 5,
    type: 'comida'
  },
  {
    id: 6,
    name: 'Filete Mignon',
    description: 'Corte premium de res a la parrilla',
    price: 22.99,
    rating: 5,
    type: 'comida'
  },
  {
    id: 7,
    name: 'Limonada Fresca',
    description: 'Refrescante limonada hecha con limones recién exprimidos',
    price: 3.99,
    rating: 4,
    type: 'bebida'
  },
  {
    id: 8,
    name: 'Tiramisú',
    description: 'Clásico postre italiano con café y mascarpone',
    price: 6.99,
    rating: 5,
    type: 'postre'
  }
])

const filteredFoodItems = computed(() => {
  return foodItems.value.filter(item => {
    const itemValues = Object.values(item).map(value => value ? String(value).toLowerCase() : '');
    const searchTerm = searchQuery.value.trim().toLowerCase();

    const typeMatch = selectedType.value === '' || (item.type && item.type === selectedType.value);

    const searchMatch = searchTerm === '' || itemValues.some(value => value.includes(searchTerm));

    return typeMatch && searchMatch;
  });
});


const handleFormSubmit = (formData) => {
  const newItem = {
    id: foodItems.value.length + 1,
    name: formData.name,
    description: formData.description,
    price: parseFloat(formData.price) || 0,
    rating: 0,
    type: formData.type || 'comida' 
  }
  foodItems.value.push(newItem)
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

.rating-card {
  position: relative !important;
  left: 0 !important;
  top: 0 !important;
  width: 100% !important;
  max-width: none !important;
}
</style>

