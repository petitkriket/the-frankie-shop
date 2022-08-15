<template>
  <nav :class="$style.navbar">
    <nuxt-link to="/" :class="$style.brandLogo">
      <img :src="brandLogo" alt="Zara brand logo" />
    </nuxt-link>

    <span :class="$style.links">
      <nuxt-link to="/">Products</nuxt-link>
      <nuxt-link to="/cart" :class="$style.cart">
        <span :class="$style.count">{{ $store.getters['cart/size'] }}</span>
        <i :class="[$style.icon, 'ph-bag-thin']"></i>
      </nuxt-link>
    </span>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
  computed: {
    brandLogo() {
      // shortcut to load SVGs (instead of setting up a whole svg-loader for the exercise)
      return require('~/assets/brand.svg')
    },
  },
}
</script>

<style lang="scss" module>
nav {
  position: sticky;
  display: flex;
  justify-content: space-between;
  top: 0;
  z-index: 1000;
  background-color: #fff;
  padding: 5px 12px 16px 12px;

  .brandLogo {
    margin-left: 160px;
    img {
      height: 110px;
    }
  }

  .links {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    font-size: 12px;
    font-weight: 300;

    a {
      padding: 8px 0;
    }

    .cart {
      position: relative;

      .icon {
        font-size: 24px;
      }

      .count {
        position: absolute;
        width: 100%;
        height: 100%;
        font-size: 9px;
        line-height: 28px;
        text-align: center;
      }
    }
  }
}
</style>
