<template>
  <div>
    <div
      v-if="$store.getters['cart/cartProducts'].length > 3"
      :class="$style.controls"
    >
      <ZButton
        v-if="swiper"
        size="xs"
        variant="ghost"
        :disabled="swiper.isBeginning"
        @click="swiper.slidePrev()"
      >
        <i class="ph-arrow-left-thin" />
      </ZButton>

      <ZButton
        v-if="swiper"
        size="xs"
        variant="ghost"
        :disabled="swiper.isEnd"
        @click="swiper.slideNext()"
      >
        <i class="ph-arrow-right-thin" />
      </ZButton>
    </div>

    <div ref="swiperEl" :class="[$style.swiper, 'swiper']">
      <div class="swiper-wrapper">
        <div
          v-for="cartItem in $store.getters['cart/cartProducts']"
          :key="cartItem.id"
          class="swiper-slide"
        >
          <CartLineItem
            v-bind="cartItem"
            @increase="$store.dispatch('cart/CREATE_ITEM', { id: cartItem.id })"
            @decrease="
              $store.dispatch('cart/DESTROY_ITEM', { id: cartItem.id })
            "
            @removal="removeCartLineItem(cartItem.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartLineItemsSlider',
  scrollToTop: true,
  data() {
    return {
      swiperOptions: {
        slidesPerView: 2.25,
        variableWidth: true,
        spaceBetween: 0,
        grabCursor: true,
      },
      swiper: null,
    }
  },
  async mounted() {
    await this.$nextTick()
    this.swiper = new this.$swiper(this.$refs.swiperEl, this.swiperOptions)
  },
  methods: {
    removeCartLineItem(id) {
      const cartItemIndex = this.$store.getters['cart/cartProducts'].findIndex(
        (product) => product.id === id
      )
      this.swiper.removeSlide(cartItemIndex)
      this.$store.dispatch('cart/DISCARD_ITEM', { id })
    },
  },
}
</script>

<style lang="scss" module>
.controls {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  i {
    font-size: 22px;
  }
}

.swiper {
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
}
</style>
