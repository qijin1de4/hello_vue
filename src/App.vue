<template>
  <navi-bar
    :cart="cart"
    :cartTotal="cartTotal"
    :cartQty="cartQty"
    @delete-from-cart="deleteFromCart"
  />
  <div class="container">
    <router-view :products="products" :cart="cart" @add2-cart="add2Cart" />
  </div>
</template>

<script>
import NaviBar from "@/components/NaviBar";

export default {
  data() {
    return {
      cart: [],
      products: []
    };
  },
  created() {
    fetch("http://hplussport.com/api/products/order/price")
      .then(response => response.json())
      .then(data => {
        this.products = data;
      });
  },
  methods: {
    add2Cart(product) {
      let whichProduct;
      let existing = this.cart.filter(function(productInCart, index) {
        if (productInCart.product.id == Number(product.id)) {
          whichProduct = index;
          return true;
        } else {
          return false;
        }
      });
      if (existing.length) {
        this.cart[whichProduct].qty++;
      } else {
        this.cart.push({ product: product, qty: 1 });
      }
    },
    deleteFromCart(id) {
      if (this.cart[id].qty > 1) {
        this.cart[id].qty--;
      } else {
        this.cart.splice(id, 1);
      }
    }
  },
  computed: {
    cartTotal() {
      return this.cart.reduce(
        (inc, itemInCart) =>
          Number(itemInCart.product.price * itemInCart.qty) + inc,
        0
      );
    },
    cartQty() {
      return this.cart.reduce(
        (inc, itemInCart) => Number(itemInCart.qty) + inc,
        0
      );
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
