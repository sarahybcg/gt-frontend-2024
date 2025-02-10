<template>
  <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-[#F0F0F3] rounded-2xl p-6 w-full max-w-sm shadow-xl">
      <h2 class="text-xl font-bold mb-4">Agregar Comida</h2>
      
      <div class="space-y-4">
        <div 
          class="bg-white rounded-xl p-2 shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.12),inset_2px_2px_5px_rgba(70,70,70,0.16),0_2px_4px_rgba(0,0,0,0.09)] cursor-pointer"
          @click="$refs.fileInput.click()"
        >
          <input 
            type="file" 
            accept="image/*" 
            class="hidden" 
            ref="fileInput"
            @change="handleImageUpload"
          />
          <div class="w-full h-24 flex items-center justify-center">
            <img v-if="imagePreview" :src="imagePreview" class="max-h-full rounded-lg object-contain" />
            <i v-else class="fas fa-camera text-2xl text-gray-400"></i>
          </div>
        </div>

        <input 
          type="text"
          v-model="formData.name"
          :placeholder="errors.name ? errors.name : 'Nombre Del Plato'"
          class="w-full px-3 py-2 rounded-xl bg-white shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.12),inset_2px_2px_5px_rgba(70,70,70,0.16),0_2px_4px_rgba(0,0,0,0.09)] border-none focus:outline-none text-sm mb-2"
          :class="{'placeholder-red-500': errors.name}"
        />

        <textarea
          v-model="formData.description"
          rows="2"
          :placeholder="errors.description ? errors.description : 'Descripción'"
          class="w-full px-3 py-2 rounded-xl bg-white shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.9),inset_2px_2px_5px_rgba(70,70,70,0.16),0_2px_4px_rgba(0,0,0,0.09)] border-none focus:outline-none text-sm mb-2"
          :class="{'placeholder-red-500': errors.description}"
        ></textarea>

        <div class="grid grid-cols-2 gap-3 mb-2">
          <div>
            <input 
              type="number"
              v-model="formData.price"
              :placeholder="errors.price ? errors.price : 'Precio'"
              class="w-full px-3 py-2 rounded-xl bg-white shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.9),inset_2px_2px_5px_rgba(70,70,70,0.16),0_2px_4px_rgba(0,0,0,0.09)] border-none focus:outline-none text-sm"
              :class="{'placeholder-red-500': errors.price}"
            />
          </div>
          <div>
            <select 
              v-model="formData.type"
              class="w-full px-3 py-2 rounded-xl bg-white shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.9),inset_2px_2px_5px_rgba(70,70,70,0.16),0_2px_4px_rgba(0,0,0,0.09)] border-none focus:outline-none appearance-none cursor-pointer text-sm"
              :class="{'text-red-500': errors.type}"
            >
              <option value="">{{ errors.type ? errors.type : 'Tipo' }}</option>
              <option value="comida">Comida</option>
              <option value="bebida">Bebida</option>
              <option value="postre">Postre</option>
            </select>
          </div>
        </div>

        <input 
          type="number"
          v-model="formData.quantity"
          :placeholder="errors.quantity ? errors.quantity : 'Cantidad'"
          class="w-full px-3 py-2 rounded-xl bg-white shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.9),inset_2px_2px_5px_rgba(70,70,70,0.16),0_2px_4px_rgba(0,0,0,0.09)] border-none focus:outline-none text-sm mb-2"
          :class="{'placeholder-red-500': errors.quantity}"
        />

        <div class="flex gap-3 pt-2">
          <button 
            @click="handleCancel"
            class="flex-1 px-4 py-2 rounded-xl bg-white text-gray-700 shadow-[4px_4px_8px_rgba(70,70,70,0.16),-4px_-4px_8px_rgba(255,255,255,0.19)] transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.16),inset_2px_2px_5px_rgba(70,70,70,0.20)] text-sm"
          >
            Cancelar
          </button>
          <button 
            @click="handleSubmit"
            class="flex-1 px-4 py-2 rounded-xl bg-[#003B73] text-white shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-lg hover:bg-[#002c56] hover:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.16),inset_2px_2px_5px_rgba(70,70,70,0.20)] text-sm"
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

const errors = reactive({
  name: '',
  description: '',
  price: '',
  type: '',
  quantity: ''
})

const resetForm = () => {
  Object.assign(formData, initialFormState)
  imagePreview.value = null
  if (fileInput.value) {
    fileInput.value.value = ''
  }
  Object.keys(errors).forEach(key => errors[key] = '')
}

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    formData.image = file
    imagePreview.value = URL.createObjectURL(file)
  }
}

const validateForm = () => {
  let isValid = true

  errors.name = ''
  errors.description = ''
  errors.price = ''
  errors.type = ''
  errors.quantity = ''

  if (!formData.name.trim()) {
    errors.name = 'El nombre es requerido.'
    isValid = false
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Mínimo 2 caracteres.'
    isValid = false
  }

  if (!formData.description.trim()) {
    errors.description = 'La descripción es requerida.'
    isValid = false
  } else if (formData.description.trim().length < 2) {
    errors.description = 'Mínimo 2 caracteres.'
    isValid = false
  }

  if (!formData.price.toString().trim()) {
    errors.price = 'El precio es requerido.'
    isValid = false
  } else if (isNaN(formData.price)) {
    errors.price = 'Precio numérico.'
    isValid = false
  } else if (Number(formData.price) <= 0) {
    errors.price = 'Mayor a 0.'
    isValid = false
  }

  if (!formData.type) {
    errors.type = 'El tipo es requerido.'
    isValid = false
  }

  if (!formData.quantity.toString().trim()) {
    errors.quantity = 'La cantidad es requerida.'
    isValid = false
  } else if (isNaN(formData.quantity)) {
    errors.quantity = 'Cantidad numérica.'
    isValid = false
  } else if (Number(formData.quantity) <= 0) {
    errors.quantity = 'Mayor a 0.'
    isValid = false
  } else if (!Number.isInteger(Number(formData.quantity))) {
    errors.quantity = 'Debe ser entera.'
    isValid = false
  }

  return isValid
}

const handleSubmit = () => {
  if (!validateForm()) return

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
.placeholder-red-500::placeholder {
  color: #f56565; 
}

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

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}
</style>
