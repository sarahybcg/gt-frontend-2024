<template>
  <div class="relative">
    <div class="w-full flex">
      <!-- Sidebar -->
      <Aside class="fixed top-0 left-0 z-10" />

      <!-- Contenedor del contenido -->
      <div class="w-full pl-[250px]"> <!-- Ajusta el padding según el ancho del sidebar -->
        <SubNav class="relative z-0" />
        <div class="">
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
