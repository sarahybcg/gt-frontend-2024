<template>
  <div class="flex flex-col min-h-screen bg-[#F0F0F3]">
    <SubNav module-name="Cursos y capacitaciones" />

    <div class="flex-grow p-8 mt-32">
      <div class="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row gap-4">
        
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
          class="px-4 py-2 rounded-2xl bg-white shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_2px_2px_5px_rgba(70,70,70,0.12),0_2px_4px_rgba(0,0,0,0.1)] focus:outline-none min-w-[150px] appearance-none cursor-pointer"
        >
          <option value="">Todos los tipos</option>
          <option value="Diseño">Diseño</option>
          <option value="Programación">Programación</option>
          <option value="Marketing">Marketing</option>
          <option value="Cocina">Cocina</option>
        </select>

        <button
          @click="toggleAddCourseForm"
          class="px-6 py-2 bg-[#003B73] text-white rounded-2xl shadow-md transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-lg hover:bg-[#002c56]"
        >
          Agregar Curso
        </button>
      </div>

      <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <TarjetaCurso
          v-for="course in filteredCourses"
          :key="course.number"
          :course-number="course.number"
          :course-type="course.type"
          :document-type="course.documentType"
          @show-details="showCourseDetails(course)"
          class="!relative !left-0 !top-0 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
        />
      </div>

      <div v-if="filteredCourses.length === 0" class="text-center mt-8 text-gray-600">
        No se encontraron cursos que coincidan con tu búsqueda.
      </div>

      <CourseForm
        v-if="showAddCourse"
        :isVisible="showAddCourse"
        @close="showAddCourse = false"
        @submit="handleAddCourse"
      />

      <ModalDetallesCurso
        v-if="showModal"
        :isVisible="showModal"
        :course="selectedCourse"
        @close="closeModal"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import TarjetaCurso from '@/components/cards/tarjetacurso/tarjetacurso.vue'
import CourseForm from '@/components/forms/FormAddCourse/AddCourse.vue'

const searchQuery = ref('')
const selectedType = ref('')
const showAddCourse = ref(false)

const courses = ref([
  { number: 1, type: 'Marketing', documentType: '4:35 Video' },
  { number: 2, type: 'Programación', documentType: '2:50 Video' },
  { number: 3, type: 'Diseño', documentType: '3:50 Video' },
  { number: 4, type: 'Diseño', documentType: 'Documento' },
  { number: 5, type: 'Cocina', documentType: 'Documento' },
  { number: 6, type: 'Cocina', documentType: 'Documento' },
  { number: 7, type: 'Marketing', documentType: '5:20 Video' },
  { number: 8, type: 'Programación', documentType: 'Documento' }
])

const showModal = ref(false)
const selectedCourse = ref(null)

const filteredCourses = computed(() => {
  return courses.value.filter(course => {
    const courseValues = Object.values(course).map(value => value ? String(value).toLowerCase() : '');
    const searchTerm = searchQuery.value.trim().toLowerCase();

    const typeMatch = selectedType.value === '' || (course.type && course.type === selectedType.value);

    const searchMatch = searchTerm === '' || courseValues.some(value => value.includes(searchTerm));

    return typeMatch && searchMatch;
  });
});

const handleAddCourse = (courseData) => {
  const newCourse = {
    number: courses.value.length + 1,
    type: courseData.type, 
    documentType: courseData.documentType
  }
  courses.value.push(newCourse)
  showAddCourse.value = false
  console.log('New course added:', newCourse)
}

const toggleAddCourseForm = () => {
  showAddCourse.value = !showAddCourse.value
  console.log('showAddCourse:', showAddCourse.value)
}

const showCourseDetails = (course) => {
  selectedCourse.value = course
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedCourse.value = null
}
</script>

<style scoped>
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}
</style>

