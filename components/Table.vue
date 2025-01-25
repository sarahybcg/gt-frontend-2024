import { Button } from '../.nuxt/components';
<template>
 <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-16 py-3">
                    <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="px-6 py-3">
                    Producto
                </th>
                <th scope="col" class="px-6 py-3">
                    Cantidad
                </th>
                <th scope="col" class="px-6 py-3">
                    Precio
                </th>
                <th scope="col" class="px-6 py-3">
                    Accion
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,key,index) in productos" :key="key" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="p-4">
                    <img src="#" class="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch">
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {{ key }}
                    {{ index }}
                </td>
                <td class="px-6 py-4">
              {{item.title.key}}
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ${{ item.price }}
                </td>
                <td class="px-6 py-4 flex space-x-2">
                    <Button color="green" size="default">Editar</Button>
                    <Button color="red" size="default">Eliminar</Button>

                </td>
            </tr>
  
        </tbody>
    </table>
</div>
</template>
<script setup>

const productos = ref([
    {id: 1, title: 'Apple Watch',description:"dadsas" ,quantity: 5, price: 599,img:"asdas"},
]);
</script>