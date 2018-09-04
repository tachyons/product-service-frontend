<template>
    <div v-if="product.attributes" class="product_item">
        <!-- <span> </span>{{product.attributes.name}}</span> -->
        <img :src="placeHolderImage" class="product_image">
        <div class="description">
          <router-link :to="{ name: 'product', params: { productId: product.id }}">
            <p class="item_name">{{product.attributes.name}}</p>
          </router-link>
          <p class="item_price">{{'$' + product.attributes.price.toFixed(2)}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "ProductCardComponent",
  props: {
    product: Object
  },
  computed: {
    placeHolderImage(){
      return ("https://dummyimage.com/75x225/d433d4/0000.png&text=" + this.product.attributes.name)
    }
  }
};
</script>
<style>
.product_item {
  width: 300px;
  height: 385px;
  border-style: solid;
  border-width: 1px;
  border-color: red;
  float: left;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 30px;
}
.product_image {
  margin: 0 auto;
  width: 75px;
  margin-top: 40px;
}
.item_price {
}
.item_name {
  font-weight: bold;
}
.description {
  text-align: left;
  margin-left: 20px;
}
</style>
