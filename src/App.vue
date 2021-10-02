<template>
  <navi-bar :cart="cart" />
  <div class="container">
    <router-view :products="products" , :cart="cart" />
  </div>
</template>

<script>
import NaviBar from "@/components/NaviBar";

export default {
  data() {
    return {
      cart: [],
      produts: [],
      displayCart: false
    };
  },
  methods: {
    created() {
      fetch("http://hplussport.com/api/products/order/price")
        .then(response => response.json())
        .then(data => {
          this.products = data;
        });
    }
  },
  components: {
    NaviBar
  }
};
</script>

<style lang="scss">
$primary: #6f42c1;
@import "node_modules/bootstrap/scss/bootstrap";
</style>
