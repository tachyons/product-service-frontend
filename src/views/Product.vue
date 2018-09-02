<template>
  <div class="product">
    Product details
    <p v-if="product.attributes">
    {{product.attributes.name}}
  </p>
  <p v-else>
    "Loading"
  </p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Product from "../models/Product.js";

export default {
  name: "home",
  data: () => {
    return {
      product: {}
    };
  },
  async mounted() {
    let response = await Product.find(this.$route.params.productId);
    this.product = response.data;
  }
};
</script>
