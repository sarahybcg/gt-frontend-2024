<template>
    <div class="">
 
        <aside 
            class="w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
            <div class="h-full px-3 py-4 overflow-y-auto bg-gray-800 dark:bg-gray-800">
                <ul class="space-y-2 font-medium">
                    <li class="flex pt-2 m-2 pl-4 p-2  font-medium border-b border-gray-200">
                        
                        <span class="text-white font-bold text-center text-2xl mb-4 mr-4">Logo</span>
                        <img src="../public/logo2.png" width="48px" height="auto" alt="">

                        
                    </li>
                </ul>
                <ul class="space-y-2 font-medium">
                    <li v-for="item in list" :key="item.name">
                        <NuxtLink :to="item.src"
                            class="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group">
                            <svg class="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 22 21">
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039a1 .999 0 0 0-1-1.066h.002Z" />
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                            </svg>
                            <span class="ms-3">{{item.name}}</span>
                        </NuxtLink>
                    </li>

                    
         
                    <!-- Repite el bloque anterior para más elementos del menú -->
                </ul>
                <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                    <li>
                        <a href="#"
                            class="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group">
                            <svg class="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 22 21">
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039a1 .999 0 0 0-1-1.066h.002Z" />
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                            </svg>
                            <span class="ms-3">Salir</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>

        <!-- Contenido principal de la página -->
    

        <!-- Footer -->

    </div>
</template>

<script setup>

const list = ref([
    { name: 'Dashboard',src:'/admin/dashboard', },
    { name: 'Productos', src: '/admin/productos' },
    { name: 'Categorías', src: '/admin/productoscategoria' },
    { name: 'SubCategorías',src: '/admin/subproductoscategoria',},
])


</script>

<style scoped>
/* Agrega estilos específicos si es necesario */
</style>
