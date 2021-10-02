<template>
  <label for="max-price" class="form-label h2">Max Price (${{ max }})</label>
  <div class="badge bg-success ml-3">results: {{ products.length }}</div>

  <input
    v-model.number="max"
    type="range"
    class="form-range"
    min="0"
    max="130"
  />
</template>

<script>
export default {
  data() {
    return {
      max: 50
    };
  },
  props: ["products"]
};
</script>
