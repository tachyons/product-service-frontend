import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { AuthApiEndPoint } from "./globals";
import User from "./models/User";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("access_token") || null,
    categoryOptions: ["sample"],
    selectedCategory: null
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post(AuthApiEndPoint + "/sessions", {
            email: credentials.email,
            password: credentials.password
          })
          .then(response => {
            const token = response.data.auth_token;
            localStorage.setItem("access_token", token);
            context.commit("retrieveToken", token);
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    logout(context) {
      context.commit("retrieveToken", null);
    }
  },
  getters: {
    loggedIn(state) {
      return state.token != null;
    },
    loggedInUser(state) {
      return User.from(state.token);
    }
  }
});
