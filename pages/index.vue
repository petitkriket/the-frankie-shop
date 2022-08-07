<template>
  <div class="container">
    <ul :class="$style.productList">
      <li v-for="product in $store.state.products.items" :key="product.id">
        {{ product.title }}
        <ZButton @click="addToCart(product)">+ Add to cart</ZButton>
      </li>
    </ul>
  </div>
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
    },
  },
}
</script>

<style lang="scss" module>
.productList {
  max-width: 30vw;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
}
</style>
