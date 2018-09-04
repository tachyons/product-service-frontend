<template>
    <div>
        <h2>Products</h2>
        <div class="filters">
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
        <b-pagination-nav size="md" base-url="#?page="  :number-of-pages="totalPages" v-model="currentPage" :per-page="perPage" >
        </b-pagination-nav>
    </div>
</template>
<script>
import Product from "../models/Product.js";
import ProductCardComponent from "@/components/ProductCard.vue";
export default {
  name: "ProductListComponent",
  data() {
    return {
      items: [],
      currentPage: Number(this.$route.query.page) || 1,
      perPage: 6,
      totalItems: 6,
      totalPages: 1,
      searchText: null,
      sortBy: null
    };
  },
  methods: {
    async updateProducts() {
      let builder = Product.page(this.currentPage).limit(this.perPage);
      if (this.searchText) {
        builder = builder.where("query", this.searchText);
      }
      if (this.sortBy) {
        builder = builder.orderBy(this.sortBy);
      }
      let response = await builder.get();
      this.items = response.data;
      this.totalPages = response.meta.total_pages;
      this.totalItems = response.meta.total;
    }
  },
  async mounted() {
    this.updateProducts();
  },
  components: {
    ProductCardComponent
  },
  watch: {
    currentPage() {
      this.updateProducts();
    }
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
