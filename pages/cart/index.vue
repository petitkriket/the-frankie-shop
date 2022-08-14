<template>
  <div>
    <template v-if="$store.getters['cart/size']">
      <ZAlert :class="$style.banner">
        Items in the basket are not reserved until completing the purchase.
      </ZAlert>

      <div
        v-if="$store.getters['cart/cartProducts'].length > 3"
        :class="$style.cartControls"
      >
        <ZButton
          size="xs"
          variant="ghost"
          :disabled="hasReachedLeft"
          @click="scrollTo('left')"
        >
          <i class="ph-arrow-left-thin" />
        </ZButton>
        <ZButton
          size="xs"
          variant="ghost"
          :disabled="hasReachedRight"
          @click="scrollTo('right')"
        >
          <i class="ph-arrow-right-thin" />
        </ZButton>
      </div>

      <div ref="slider" :class="$style.cartSlider">
        <ul :class="$style.inner">
          <CartLineItem
            v-for="cartItem in $store.getters['cart/cartProducts']"
            v-bind="cartItem"
            :key="cartItem.id"
            @increase="$store.dispatch('cart/CREATE_ITEM', { id: cartItem.id })"
            @decrease="
              $store.dispatch('cart/DESTROY_ITEM', { id: cartItem.id })
            "
            @removal="$store.dispatch('cart/DISCARD_ITEM', { id: cartItem.id })"
          />
        </ul>
      </div>

      <CartCoupons
        :coupons="$store.state.cart.coupons"
        @addition="(code) => $store.dispatch('cart/CREATE_COUPON', code)"
        @removal="(code) => $store.commit('cart/REMOVE_COUPON', { code })"
      />

      <div :class="$style.cartSummary">
        <div :class="$style.left">
          <div :class="$style.gifts">
            <p :class="$style.heading">Is your order a gift ?</p>
            <span>
              <span>Gift receipt</span>
              <span>Gift wrapping</span>
            </span>
          </div>
        </div>

        <div :class="$style.right">
          <div :class="$style.sum">
            <template v-if="$store.state.cart.coupons.length">
              <s>{{ $store.getters['cart/totalSum'] }} EUR</s>
            </template>

            <p :class="$style.heading">
              total
              <span :class="$style.value">
                {{ $store.getters['cart/totalSumWithCoupons'] }} EUR
              </span>
            </p>
            <span>* including vat</span>
          </div>

          <div :class="$style.checkoutCTA">
            <ZButton as="nuxt-link" to="/checkout" block>Continue</ZButton>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div>Your cart is empty</div>
    </template>
  </div>
</template>

<script>
import { ref, toRefs } from '@nuxtjs/composition-api'
import { useScroll } from '@vueuse/core'

export default {
  name: 'CartContentPage',
  scrollToTop: true,
  setup() {
    const slider = ref(null)

    const { arrivedState } = useScroll(slider)
    const { left, right } = toRefs(arrivedState)

    const scrollTo = (direction) => {
      const sliderEl = slider.value
      const sliderScroll = sliderEl.scrollLeft
      const value = direction === 'left' ? -600 : +600
      slider.value.scrollTo({
        left: sliderScroll + value,
        behavior: 'smooth',
      })
    }

    return {
      slider,
      hasReachedLeft: left,
      hasReachedRight: right,
      scrollTo,
    }
  },
}
</script>

<style lang="scss" module>
.banner {
  margin-bottom: 32px;
  display: inline-block;
}

.cartControls {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  i {
    font-size: 22px;
  }
}

.cartSlider {
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  .inner {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    gap: 20px;
  }
}

.cartSummary {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  font-size: 10px;
  text-transform: uppercase;
  background-color: white;
  transition-duration: 200ms;
  transition-delay: 200ms;
  opacity: 1;
  z-index: 1;

  .left {
    margin-left: calc(170px - 20px);
    margin-right: auto;

    .gifts {
      display: flex;
      flex-direction: column;
      gap: 4px;
      .heading {
        font-weight: 500;
        margin: 0;
      }
    }
  }

  .right {
    display: flex;
    gap: 50px;

    .sum {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 2px;

      .heading {
        margin: 0;
        font-weight: 500;
      }
      .value {
        margin-left: 20px;
      }
    }

    .checkoutCTA {
      width: 240px;
    }
  }
}
</style>
