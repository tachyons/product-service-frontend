import Vue from "vue";
import Router from "vue-router";
import Login from "./components/Login.vue";
import Logout from "./components/Logout.vue";
import ProductPage from "./components/Product.vue";
import Products from "./views/Products.vue";

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
      component: ProductPage,
      meta: {
        requireAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requireVisitor: true
      }
    },
    {
      path: "/logout",
      name: "Logout",
      component: Logout
    }
  ]
});
