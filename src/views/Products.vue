<template>
  <div class="product">
    <Products/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Products from "@/components/Products.vue";

export default {
  name: "home",
  components: {
    Products
  }
};
</script>
