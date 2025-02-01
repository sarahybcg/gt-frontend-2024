<template>
    <Container>

        <div>
            <span>Obtner productos</span>
        </div>
        <div>
      

<Table></Table>

        </div>
    </Container>
</template>
<script setup>
import { ref } from 'vue';
import { useProductStore } from '../stores/product';

// const dato = await useProductStore().products;

const productos = useProductStore().products;
// Mounted( async() => {
//   await useProductStore().getProducts();

// });
await useProductStore().getProducts();

// onBeforeUpdate(async () => {
//   await useProductStore().getProducts();
// });
onMounted(async () => {
    console.log("hola");
  await useProductStore().getProducts();

});
</script>