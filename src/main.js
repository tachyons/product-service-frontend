import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import { Model } from "vue-api-query";
import loginChecker from "./lib/loginChecker";
import { Pagination } from 'bootstrap-vue/es/components';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Pagination);

// inject global axios instance as http client to Model
Model.$http = axios;

Vue.config.productionTip = false;

router.beforeEach(loginChecker);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
