import Vue from "vue";
import Router from "vue-router";
import Products from "./views/Products.vue";
import Product from "./views/Product.vue";
import Login from "./components/Login.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Products,
      meta: {
        requireAuth: true
      }
    },
    {
      path: "/products",
      name: "products",
      component: Products,
      meta: {
        requireAuth: true
      }
    },
    {
      path: "/products/:productId",
      name: "product",
      component: Product,
      meta: {
        requireAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});
