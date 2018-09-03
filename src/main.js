import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import { Model } from "vue-api-query";
import loginChecker from "./lib/loginChecker";

// inject global axios instance as http client to Model
Model.$http = axios;

Vue.config.productionTip = false;

router.beforeEach(loginChecker);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
