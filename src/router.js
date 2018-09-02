import Vue from "vue";
import Router from "vue-router";
import Products from "./views/Products.vue";
import Product from "./views/Product.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Products
    },
    {
      path: "/products",
      name: "products",
      component: Products
    },
    {
      path: "/products/:productId",
      name: "product",
      component: Product
    }
  ]
});
