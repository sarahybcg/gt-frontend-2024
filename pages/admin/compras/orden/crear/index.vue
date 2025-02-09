<template>
    <div class="flex flex-col">
      <div class="bg-gray-200 py-4 px-6 shadow-md">
        <SubNav module-name="Compras" />
      </div>
      <div class="container mx-auto py-8">
        <ProviderContainer />
      </div>
    </div>
  </template>
  
  <script setup>
  import ProviderContainer from './components/ContainerProvider/ProviderContainer.vue';
  import SubNav from '~/components/SubNav.vue';
  </script>
  
  <style>
  .app-container {
    display: flex;
    flex-direction: column;
  }
  </style>
  