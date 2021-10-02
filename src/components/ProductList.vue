<template>
  <div
    v-for="item in products"
    :key="item.id"
    id="item-list"
    class="row align-items-center"
  >
    <Product :item="item" @add-to-cart="add2Cart" />
  </div>
</template>

<script>
import Product from "@/components/Product";

export default {
  name: "ProductList",
  props: ["products"],
  components: [Product]
};
</script>

<style></style>
