
<template>
  <div class=" px-5">
    <div class="w-full  p-5 border-b-4 border-blue-500 mb-5 ">
      <div class="flex justify-between ">
        <button @click="goBack" class="bg-blue-400 p-2 font-bold text-white rounded-lg">Volver</button>
        <Button title="Crear Producto" type="link" size="default" color="green">Crear producto</Button>
    </div>

    </div>
    <slot />
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1); // Retrocede una página en el historial
    }
  }
}
</script>
