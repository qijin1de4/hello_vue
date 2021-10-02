<template>
  <nav class="navbar navbar-light sticky-top mr-3">
    <div
      class=" w-100 navbar-text ml-auto d-flex justify-content-end position-relative"
    >
      <div
        class="mr-auto d-flex align-items-end flex-column bd-highlight mb-3 position-absolute"
      >
        <div class="mb-2">
          <span class="font-weight-bold bg-white" :class="totalColor"
            ><Currency :amt="cartTotal"></Currency
          ></span>
          <button
            class="btn btn-success btn-sm ml-3"
            id="cartDropdown"
            aria-haspopup="true"
            aria-expanded="false"
            @click="displayCart = !displayCart"
            :style="warningStyle"
          >
            <fa icon="shopping-cart">{{ cart.length }}</fa>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Currency from "@/components/Currency";

export default {
  props: ["cart"],
  data() {
    return {
      displayCart: false
    };
  },
  computed: {
    cartTotal() {
      return this.cart.reduce((inc, item) => Number(item.price) + inc, 0);
    }
  },
  components: [Currency]
};
</script>
