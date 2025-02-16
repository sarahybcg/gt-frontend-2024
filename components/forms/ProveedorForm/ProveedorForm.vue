<template>

    <div class="w-full max-w-7xl mx-auto">
        <div class="bg-white p-10 rounded-2xl shadow-lg">
            <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <div class="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                    <div class="relative w-full sm:w-56">
                        <select
                            class="appearance-none bg-white pl-4 pr-10 py-2.5 rounded-lg border border-gray-300 shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-base">
                            <option>Filtrar por Nombre</option>
                        </select>
                        <div class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    <div class="relative w-full sm:w-56">
                        <select
                            class="appearance-none bg-white pl-4 pr-10 py-2.5 rounded-lg border border-gray-300 shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-base">
                            <option>Filtrar por...</option>
                        </select>
                        <div class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                    <div class="relative w-full sm:w-72">
                        <input type="text" placeholder="Buscar Proveedor"
                            class="pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-base" />
                        <div class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <button
                        class="bg-[#003B73] hover:bg-[#004b8f] text-white rounded-lg font-medium py-2.5 px-6 shadow-md text-base w-full sm:w-auto">
                        Agregar Proveedor
                    </button>
                </div>
            </div>

            <div class="mt-10">
                <div class="overflow-hidden rounded-2xl border border-gray-50 shadow-md">
                    <table class="w-full">
                        <thead class="bg-gray-50 border-b border-gray-50">
                            <tr>
                                <th class="px-8 py-5 text-left text-lg font-semibold text-gray-700">Nombre</th>
                                <th class="px-8 py-5 text-left text-lg font-semibold text-gray-700">Teléfono</th>
                                <th class="px-8 py-5 text-left text-lg font-semibold text-gray-700">Dirección</th>
                                <th class="px-8 py-5 text-left text-lg font-semibold text-gray-700">Descripción del
                                    Producto</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-50">
                            <tr v-for="(proveedor, index) in proveedores" :key="index"
                                class="hover:bg-gray-50 transition-colors">
                                <td class="px-8 py-5 text-lg text-gray-700">{{ proveedor.nombre }}</td>
                                <td class="px-8 py-5 text-lg text-gray-700">{{ proveedor.telefono }}</td>
                                <td class="px-8 py-5 text-lg text-gray-700">{{ proveedor.direccion }}</td>
                                <td class="px-8 py-5 text-lg text-gray-700">{{ proveedor.descripcion }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "ProveedorForm",
    setup() {
        const proveedores = ref([
            { nombre: "Juan Pérez", telefono: "555-1234", direccion: "Calle 123, Ciudad A", descripcion: "Suministro de papel" },
            { nombre: "María López", telefono: "555-5678", direccion: "Avenida 456, Ciudad B", descripcion: "Equipo de oficina" },
            { nombre: "Carlos García", telefono: "555-8765", direccion: "Carrera 789, Ciudad C", descripcion: "Muebles de oficina" },
            { nombre: "Ana Torres", telefono: "555-4321", direccion: "Plaza 321, Ciudad D", descripcion: "Sistemas de cómputo" },
            { nombre: "Luis Ramírez", telefono: "555-6789", direccion: "Boulevard 654, Ciudad E", descripcion: "Suministros eléctricos" },
        ]);

        return { proveedores };
    },
});
</script>