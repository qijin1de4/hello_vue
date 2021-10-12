<template>
  <nav class="navbar navbar-light sticky-top mr-3">
    <div
      v-if="cart.length"
      class=" w-100 navbar-text ml-auto d-flex justify-content-end position-relative"
    >
      <div
        class="mr-auto d-flex align-items-end flex-column bd-highlight mb-3 position-absolute"
      >
        <div class="mb-2">
          <span class="font-weight-bold bg-white"
            ><Currency :amt="cartTotal"
          /></span>
          <button
            class="btn btn-success btn-sm ml-3"
            id="cartDropdown"
            aria-haspopup="true"
            aria-expanded="false"
            @click="displayCart = !displayCart"
          >
            <fa icon="shopping-cart" />{{ cartQty }}
          </button>
          <cart-drop-down :cart="cart" :displayCart="displayCart" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Currency from "@/components/Currency";
import CartDropDown from "@/components/CartDropDown.vue";

export default {
  props: ["cart", "cartTotal", "cartQty"],
  data() {
    return {
      displayCart: false
    };
  },
  components: { Currency, CartDropDown }
};
</script>
