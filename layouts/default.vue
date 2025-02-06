<template>
  <div class="relative">
    <div class="flex">
      <!-- Sidebar -->
      <Aside class="Absolute top-0 left-0 z-10" />

      <!-- Contenedor del contenido -->
      <div class="flex"> <!-- Ajusta el padding según el ancho del sidebar -->

        <div class="">
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
