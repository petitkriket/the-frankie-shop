<template>
  <ul :class="$style.productList">
    <ProductListItem
      v-for="product in $store.state.products.items"
      :key="product.id"
      v-bind="product"
      @add="addToCart(product)"
    />
  </ul>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    products() {
      return this.$store.state.products.items
    },
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('cart/CREATE_ITEM', product)
      this.$store.commit('ui/TOGGLE_SIDEBAR')
    },
  },
}
</script>

<style lang="scss" module>
.productList {
  max-width: 33vw;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 20px;
}
</style>
