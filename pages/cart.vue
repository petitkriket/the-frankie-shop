<template>
  <div :class="$style.cart">
    <div :class="$style.tabs">
      <NuxtLink to="/cart" :class="$style.tabPane">
        Cart
        <span v-if="$store.getters['cart/size']">
          ({{ $store.getters['cart/size'] }})
        </span>
      </NuxtLink>

      <NuxtLink to="/cart/wishlist" :class="$style.tabPane">
        <span>Wishlist</span>
        <i
          :class="[
            $route.name === 'cart-wishlist'
              ? 'ph-bookmark-simple-bold'
              : 'ph-bookmark-simple-thin',
          ]"
        />
      </NuxtLink>
    </div>

    <NuxtChild />
  </div>
</template>

<script>
export default {
  name: 'CartPage',
}
</script>

<style lang="scss" module>
.cart {
  margin-left: 170px;

  .tabs {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;

    .tabPane {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 4px;
    }
  }
}
</style>
