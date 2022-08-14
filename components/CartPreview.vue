<template>
  <div :class="$style.cart">
    <div :class="$style.header">
      <div :class="$style.closingCross" @click="toggle">
        <i class="ph-x-thin"></i>
      </div>
      <p :class="$style.heading">Cart</p>
    </div>

    <div :class="$style.body">
      <ul :class="$style.inner">
        <CartPreviewLineItem
          v-for="cartItem in $store.getters['cart/cartProducts']"
          v-bind="cartItem"
          :key="cartItem.id"
        />
      </ul>
    </div>

    <div :class="$style.bottom">
      <ZButton :class="$style.addToCart" block @click="toCart">
        Go To Basket
      </ZButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartPreview',
  methods: {
    toggle() {
      this.$store.commit('ui/TOGGLE_SIDEBAR')
    },
    toCart() {
      this.toggle()
      this.$router.push('/cart')
    },
  },
}
</script>

<style lang="scss" module>
.cart {
  padding: 30px;
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .header {
    display: flex;
    flex-direction: column;

    .closingCross {
      align-self: flex-end;
      cursor: pointer;

      i {
        font-size: 24px;
      }
    }

    .heading {
      font-size: 16px;
      font-weight: 400;
      text-transform: uppercase;
      margin: 28px 0;
    }
  }

  .body {
    overflow: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    .inner {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    border-top: 1px solid black;
  }
}
</style>
