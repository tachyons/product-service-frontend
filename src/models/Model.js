import { Model as BaseModel } from "vue-api-query";
import store from "../store";

export default class Model extends BaseModel {
  // define a base url for a REST API
  baseURL() {
    return "http://localhost:3001";
  }

  // implement a default request method
  request(config) {
    config.headers = { Authorization: store.state.token };
    return this.$http.request(config);
  }
}
