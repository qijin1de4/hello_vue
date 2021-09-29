<template>
    <div class="col-1 m-auto">
      <button class="btn btn-success" @click="$emit('addToCart', item)">+</button>
    </div>
    <div class="col-sm-4">
      <img class="img-fluid d-block" :src="item.image" :alt="item.name">
    </div>
    <div class="col">
     <h3 class="text-primary">{{item.name }}</h3>
     <p class="mb-0">{{ item.description }}</p>
     <div class="h5 float-right">
       <Currency :amt="item.price" /></div>
    </div>
</template>

<script>

import Currency from './Currency.vue'

export default ({
	name:'Product',
	props: ['item'],
	emits: ['addToCart'],
	components: {
		Currency
	}
})
</script>
