<template>
  <div class="product">
    Product details
    <div v-if="product.attributes">
    <p>
      {{product.attributes.name}}
    </p>
    <p>
    {{product.attributes.price}}

    </p>
    <p>
    {{product.attributes.sale_price}}

    </p>
  </div>
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
  name: "ProductPage",
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
