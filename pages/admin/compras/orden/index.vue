<template>
    <div class="flex">
      <div class="">
        <SubNav module-name="Compras"/>
      </div>
      <Container class="w-full">
        <button @click="navigateToOrder">Añadir Orden</button>
        <Datatableproduct></Datatableproduct>
      </Container>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import Datatableproduct from '~/components/datatables/Datatableproduct/datatableproduct.vue';
  
  const router = useRouter();
  
  const navigateToOrder = () => {
    router.push('/admin/compras/orden/crear');
  }
  </script>
  