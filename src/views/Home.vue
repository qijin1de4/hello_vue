<template>
  <section class="container">
    <range-selector products="filteredProducts" />
    <product-list products="filteredProducts" />
  </section>
</template>

<script>
import ProductList from "@/components/ProductList";
import RangeSelector from "@/components/RangeSelector";

export default {
  name: "Home",
  props: ["products"],
  data() {
    return {
      displayCart: false,
      borderStyle: {
        border: "3px solid darkgreen",
        borderRadius: "50%"
      },
      warningStyle: {
        backgroundColor: "auto",
        border: "transparent"
      },
      btnColor: "btn-success",
      totalColor: "text-secondary"
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(item => item.price < this.max);
    }
  },
  methods: {
    transitionColor(el) {
      this.totalColor = "text-danger";
    },
    resetColor(el) {
      this.totalColor = "text-secondary";
    }
  },
  components: {
    ProductList,
    RangeSelector
  }
};
</script>
