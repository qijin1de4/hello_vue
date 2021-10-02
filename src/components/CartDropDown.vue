<template>
  <div class="cartDropdown-clip">
    <transition name="cartDropdown"
      @enter="transitionColor"
      @after-leave="resetColor" >
      <div v-if="displayCart" class="list-group" aria-labelledby="cartDropdown">
        <div v-for="item in cart" :key="item.id" class="list-group-item d-flex justify-content-between">
            <div>{{item.name}}</div>
            <div class="ml-3 font-weight-bold"><Currency :amt="item.price"></Currency></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

import Currency from '@/components/Currency'

export default {

}
</script>

<style scoped>

.cartDropdown-enter-active, .cartDropdown-leave-active {
  transition: all .5s ease-in-out;
  transform: auto
}

.cartDropdown-enter-from, .cartDropdown-leave-to {
  opacity: 0;
  transform: translateY(-300px)
}

.cartDropdown-clip {
  overflow:hidden
}
</style>
