
<template>
<div>
  <nav class="navbar navbar-light sticky-top mr-3">
  <div  class=" w-100 navbar-text ml-auto d-flex justify-content-end position-relative">
    <div class="mr-auto d-flex align-items-end flex-column bd-highlight mb-3 position-absolute" >
      <div class="mb-2">
        <span class="font-weight-bold bg-white" :class="totalColor"> {{ currency(cartTotal) }}</span>
        <button
          class="btn btn-success btn-sm ml-3"
          id="cartDropdown"
          aria-haspopup="true"
          aria-expanded="false"
          @click="displayCart = !displayCart"
          :style="warningStyle"
        >
        <i class="fas fa-shopping-cart mr-1">
          {{ cart.length }}</i>
        </button>
      </div>
      <div class="cartDropdown-clip">
        <transition name="cartDropdown"
          @enter="transitionColor" 
          @after-leave="resetColor" >
          <div v-if="displayCart" class="list-group" aria-labelledby="cartDropdown">
            <div v-for="(item, index) in cart" :key="index" class="list-group-item d-flex justify-content-between">
                <div>{{item.name}}</div>
                <div class="ml-3 font-weight-bold">{{currency(item.price)}}</div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</nav>

<section class="container">  
  <label for="max-price" class="form-label h2">Max Price (${{max}})</label>
  <div class="badge bg-success ml-3">results: {{filteredProducts.length}}</div>

  <input v-model.number="max" type="range" class="form-range" min="0" max="130" >
  
  <div v-for="(item, index) in filteredProducts" :key="item.id" id="item-list" class="row align-items-center">
    <div class="col-1 m-auto">
      <button class="btn btn-success" :style="borderStyle" @click="add2Cart(item)">+</button>
    </div>
    <div class="col-sm-4">
      <img class="img-fluid d-block" :src="item.image" :alt="item.name">
    </div>
    <div class="col">
     <h3 class="text-primary">{{item.name }}</h3>
     <p class="mb-0">{{ item.description }}</p>
     <div class="h5 float-right">
       {{ currency(item.price) }}</div>
    </div>
  </div>
</section>
</div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      displayCart: false,
      max: 50,
      cart: [],
      products: [],
      borderStyle: {
        border: '3px solid darkgreen',
        borderRadius: '50%'
      },
      warningStyle: {
        backgroundColor: 'auto',
        border: 'transparent'
      },
      btnColor: 'btn-success',
      totalColor:'text-secondary'
    }
  },
  created() {
    fetch('http://hplussport.com/api/products/order/price')
    .then(response => response.json())
    .then(data => {
      this.products = data;
    })
  },
  computed: {
    filteredProducts() {
      return this.products.filter( item => (item.price < this.max));
    },
    cartTotal() {
      return this.cart.reduce((inc, item) => Number(item.price)+inc, 0);
    }
  },
  methods: {
    currency(value) {
      return `$${Number.parseFloat(value).toFixed(2)}`
    },
    add2Cart(product) {
      this.cart.push(product);
      if(this.cartTotal > 100) {
        this.warningStyle.backgroundColor = 'red'
      }
    },
    transitionColor(el) {
      this.totalColor="text-danger"
    },
    resetColor(el) {
      this.totalColor="text-secondary"
    }
  }
};
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