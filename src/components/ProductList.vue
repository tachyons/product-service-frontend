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
        <input type="search" placeholder="search" v-model="searchText" v-on:change="updateProducts">
        <label for="sort_by">Sort By</label>
        <select name="sort_by" id="sort_by" v-on:change="updateProducts" v-model="sortBy">
          <option value=""></option>
          <option value="price">price</option>
        </select>
        </div>
        <div id="product_list">
            <ProductCardComponent v-for="(product,index) in items" :product="product" v-bind:key="index" />
        </div>
        <b-pagination size="md" :total-rows="totalItems" v-model="currentPage" :per-page="perPage" v-on:change="updatePage">
        </b-pagination>
    </div>
</template>
<script>
import Product from "../models/Product.js";
import ProductCardComponent from "@/components/ProductCard.vue";
export default {
  name: "ProductListComponent",
  data: () => {
    return {
      items: [],
      currentPage: 1,
      perPage: 6,
      totalItems: 6,
      totalPages: 1,
      searchText: null,
      sortBy: null,
    };
  },
  methods: {
    getProducts: () => {},
    async updatePage(currentPage){
      this.currentPage = currentPage || 1;
      await this.updateProducts()
    },
    async updateProducts() {
      let builder = Product.page(this.currentPage)
       .limit(this.perPage)
      if(this.searchText) {
        builder = builder.where('query', this.searchText)
      }
      if(this.sortBy) {
        builder = builder.orderBy(this.sortBy)
      }
      let response = await builder.get()
      this.items = response.data;
      this.totalPages = response.meta.total_pages;
      this.totalItems = response.meta.total;
    },
    onCategoryChange() {
      console.log("hello")
    },
    onCategoryChange(){
      console.log("searching")
    }
  },
  async mounted() {
    this.updateProducts();
  },
  components: {
    ProductCardComponent
  }
};
</script>
<style>
#product_list {
  margin: 0 auto;
  width: 962px;
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
  clear: both;
}
</style>
