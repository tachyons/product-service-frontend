<template>
    <div>
        <h2>Products</h2>
        <div class="filters">
          <v-select 
          @input="onCategoryChange" 
          :options="$store.state.categoryOptions"
          :value="$store.state.selectedCategory"
          id="category_filter"
        ></v-select>
        </div>
        <div id="product_list">
            <ProductComponent v-for="(product,index) in items" :product="product" v-bind:key="index" />
        </div>
        <b-pagination size="md" :total-rows="totalItems" v-model="currentPage" :per-page="perPage" v-on:change="updateProducts">
        </b-pagination>
    </div>
</template>
<script>
import Product from "../models/Product.js";
import ProductComponent from "@/components/Product.vue";
export default {
  name: "Products",
  data: () => {
    return {
      items: [],
      currentPage: 1,
      perPage: 6,
      totalItems: 6,
      totalPages: 1
    };
  },
  methods: {
    getProducts: () => {},
    async updateProducts(currentPage) {
      this.currentPage = currentPage || 1;
      let response = await Product.page(this.currentPage)
        .limit(this.perPage)
        .get();
      this.items = response.data;
      this.totalPages = response.meta.total_pages;
      this.totalItems = response.meta.total;
    },
    onCategoryChange() {
      console.log("hello")
    }
  },
  async mounted() {
    this.updateProducts();
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
.filters {
  margin: 0 auto;
  width: 1000px;
  box-sizing: border-box;
  margin-bottom: 30px;
}
#category_filter {
  width: 150px;
}
.pagination {
  margin-left: 160px;
  float: left;
}
</style>
