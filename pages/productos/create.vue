<template>
  <Container>
    <div class="flex justify-center">
      <form action="">
        <h2 class="text-2xl">Create product</h2>
        <label for="" class="bg-red-600">
          <span>Titulo</span>
          <input type="text" class="bg-red-600" />
        </label>
      </form>
    </div>
  </Container>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      description: "",
      price: "",
      currency: "",
      url_img: "",
      category: "",
    };
  },
  methods: {
    async createProduct() {
    //   const product = {
    //     name: this.name,
    //     description: this.description,
    //     price: this.price,
    //     currency: this.currency,
    //     url_img: this.url_img,
    //     category: this.category,
    //   };
    //   console.log(product);
    //   await useProductStore().createProduct(product);
    },
  },
};
</script>
