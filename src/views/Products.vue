
<template>
  <div class="products">
    <div>
      Logged in as {{loggedInUser.email}}
    </div>
    <div>
      <router-link to="/logout">Logout</router-link>
    </div>
    <div class="container">
      <ProductList/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import ProductList from "@/components/ProductList.vue";
import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    ProductList
  },
  computed: {
    ...mapGetters({
      loggedInUser: "loggedInUser"
    })
  }
};
</script>
