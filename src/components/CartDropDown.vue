<template>
  <div class="cartDropdown-clip">
    <transition name="cartDropdown">
      <div v-if="displayCart" class="list-group" aria-labelledby="cartDropdown">
        <div
          v-for="(item, index) in cart"
          :key="item.product.id"
          class="list-group-item d-flex justify-content-between"
        >
          <div>{{ item.product.name }}</div>
          <div class="ml-3 font-weight-bold">
            <Currency :amt="item.product.price" />
          </div>
          <button
            @click.stop="this.$parent.$emit('deleteFromCart', index)"
            class="btn btn-sm btn-danger ml-2"
          >
            -
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Currency from "@/components/Currency";

export default {
  props: ["cart", "displayCart"],
  emits: ["deleteFromCart"],
  components: {
    Currency
  }
};
</script>

<style scoped>
.cartDropdown-enter-active,
.cartDropdown-leave-active {
  transition: all 0.5s ease-in-out;
  transform: auto;
}

.cartDropdown-enter-from,
.cartDropdown-leave-to {
  opacity: 0;
  transform: translateY(-300px);
}

.cartDropdown-clip {
  overflow: hidden;
}
</style>
