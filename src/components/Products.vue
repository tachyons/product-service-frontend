<template>
    <div>
        <h2>Products</h2>
        <div id="product_list">
            <ProductComponent v-for="(product,index) in items" :product="product" v-bind:key="index" />
        </div>
    </div>
</template>
<script>
import Product from "../models/Product.js";
import ProductComponent from "@/components/Product.vue";
export default {
  name: "Products",
  data: () => {
    return {
      items: []
    };
  },
  methods: {
    getProducts: () => {}
  },
  async mounted() {
    let response = await Product.get();
    this.items = response.data;
  },
  components: {
    ProductComponent
  }
};
</script>
<style>
#product_list {
  margin: 0 auto;
  width: 1000px;
  box-sizing: border-box;
}
</style>
