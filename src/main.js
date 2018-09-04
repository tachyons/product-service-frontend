import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import { Model } from "vue-api-query";
import loginChecker from "./lib/loginChecker";
import { PaginationNav } from "bootstrap-vue/es/components";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import vSelect from "vue-select";

Vue.component("v-select", vSelect);

Vue.use(PaginationNav);

// inject global axios instance as http client to Model
Model.$http = axios;

Vue.config.productionTip = false;

router.beforeEach(loginChecker);

new Vue({
  router,
  store,
  Model,
  render: h => h(App)
}).$mount("#app");
