import { Model as BaseModel } from "vue-api-query";
import store from "../store";
import { ProductApiEndpoint } from "../globals";

export default class Model extends BaseModel {
  // define a base url for a REST API
  baseURL() {
    return ProductApiEndpoint;
  }

  // implement a default request method
  request(config) {
    config.headers = { Authorization: store.state.token };
    return this.$http.request(config);
  }
}
