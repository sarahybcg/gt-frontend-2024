
<template>
  <div class=" flex flex-col">
    <div class="w-full  px-5 mb-5 ">
      <div class="flex justify-between ">
        <div></div>
        <!--<button @click="goBack" class="bg-blue-400 p-2 font-bold text-white rounded-lg">Volver</button>
       -->
          <button class="bg-[#003B73] hover:bg-blue-600 border-black text-white rounded-full font-bold border-2  shadow-md text-md py-2 px-3" title="Crear Producto" type="link" size="default" color="blue"> {{ buttonTitle }}</button>
    </div>

    </div>
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Título"
    },
    buttonTitle: {
      type: String,
      default: "Crear"
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Retrocede una página en el historial
    }
  }
}
</script>
