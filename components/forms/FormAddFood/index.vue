<template>
    <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-[#F0F0F3] rounded-3xl p-8 w-full max-w-md shadow-xl">
        <h2 class="text-2xl font-bold mb-6">Agregar Comida</h2>
        
        <div class="space-y-6">
          <!-- Image Upload -->
          <div 
            class="bg-white rounded-2xl p-4 shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.12),inset_2px_2px_5px_rgba(70,70,70,0.16),0_2px_4px_rgba(0,0,0,0.12)] cursor-pointer"
            @click="$refs.fileInput.click()"
          >
            <input 
              type="file" 
              accept="image/*" 
              class="hidden" 
              ref="fileInput"
              @change="handleImageUpload"
            />
            <div class="w-full h-32 flex items-center justify-center">
              <img v-if="imagePreview" :src="imagePreview" class="max-h-full rounded-lg object-contain" />
              <i v-else class="fas fa-camera text-3xl text-gray-400"></i>
            </div>
          </div>
  
          <!-- Nombre -->
          <div class="space-y-2">
            <label class="block text-sm font-medium">Nombre Del Plato</label>
            <input 
              type="text"
              v-model="formData.name"
              class="w-full px-4 py-3 rounded-2xl bg-white shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.9),inset_2px_2px_5px_rgba(70,70,70,0.16),0_2px_4px_rgba(0,0,0,0.12)] border-none focus:outline-none "
            />
          </div>
  
          <!-- Descripción -->
          <div class="space-y-2">
            <label class="block text-sm font-medium">Descripción</label>
            <textarea
              v-model="formData.description"
              rows="3"
              class="w-full px-4 py-3 rounded-2xl bg-white shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.9),inset_2px_2px_5px_rgba(70,70,70,0.16),0_2px_4px_rgba(0,0,0,0.12)] border-none focus:outline-none "
            ></textarea>
          </div>
  
          <!-- Price and Type Row -->
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-2">
              <label class="block text-sm font-medium">Precio</label>
              <input 
                type="number"
                v-model="formData.price"
                placeholder="00.00"
                class="w-full px-4 py-3 rounded-2xl bg-white shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.9),inset_2px_2px_5px_rgba(70,70,70,0.16),0_2px_4px_rgba(0,0,0,0.12)] border-none focus:outline-none "
              />
            </div>
            <div class="space-y-2">
              <label class="block text-sm font-medium">Tipo</label>
              <select 
                v-model="formData.type"
                class="w-full px-4 py-3 rounded-2xl bg-white shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.9),inset_2px_2px_5px_rgba(70,70,70,0.16),0_2px_4px_rgba(0,0,0,0.12)] border-none focus:outline-none appearance-none cursor-pointer"
              >
                <option value="">Seleccionar</option>
                <option value="comida">Comida</option>
                <option value="bebida">Bebida</option>
                <option value="postre">Postre</option>
              </select>
            </div>
          </div>
  
          <!-- Cantidad -->
          <div class="space-y-2">
            <label class="block text-sm font-medium">Cantidad</label>
            <input 
              type="number"
              v-model="formData.quantity"
              class="w-full px-4 py-3 rounded-2xl bg-white shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.9),inset_2px_2px_5px_rgba(70,70,70,0.12),0_2px_4px_rgba(0,0,0,0.12)] border-none focus:outline-none"
            />
          </div>
  
          <!-- Buttons -->
          <div class="flex gap-4 pt-4">
            <button 
              @click="handleCancel"
              class="flex-1 px-6 py-3 rounded-2xl bg-white text-gray-700 shadow-[4px_4px_8px_rgba(70,70,70,0.16),-4px_-4px_8px_rgba(255,255,255,0.19)] transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.16),inset_2px_2px_5px_rgba(70,70,70,0.20)] transition-all duration-200"
            >
              Cancelar
            </button>
            <button 
              @click="handleSubmit"
              class="flex-1 px-6 py-3 rounded-2xl bg-[#003B73] text-white shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-lg hover:bg-[#002c56]"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  
  const props = defineProps({
    isVisible: {
      type: Boolean,
      default: false
    }
  })
  
  const emit = defineEmits(['close', 'submit'])
  
  const fileInput = ref(null)
  const imagePreview = ref(null)
  
  const initialFormState = {
    name: '',
    description: '',
    price: '',
    type: '',
    quantity: '',
    image: null
  }
  
  const formData = reactive({ ...initialFormState })
  
  const resetForm = () => {
    Object.assign(formData, initialFormState)
    imagePreview.value = null
    if (fileInput.value) {
      fileInput.value.value = ''
    }
  }
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      formData.image = file
      imagePreview.value = URL.createObjectURL(file)
    }
  }
  
  const handleSubmit = () => {
    emit('submit', { ...formData })
    resetForm()
    emit('close')
  }
  
  const handleCancel = () => {
    resetForm()
    emit('close')
  }
  </script>
  
  <style scoped>
  /* Custom scrollbar for webkit browsers */
  textarea::-webkit-scrollbar {
    width: 8px;
  }
  
  textarea::-webkit-scrollbar-track {
    background: transparent;
  }
  
  textarea::-webkit-scrollbar-thumb {
    background-color: #cbd5e1;
    border-radius: 20px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
  
  /* Remove number input arrows */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  input[type="number"] {
    -moz-appearance: textfield;
  }
  
  /* Custom select arrow */
  select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem;
  }
  </style>
  