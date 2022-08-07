<template>
  <div>
    <div :class="$style.formInput">
      <ZInput
        v-model="modelValue"
        type="text"
        placeholder="Use a coupon!"
        :has-errors="hasErrors"
        :class="$style.input"
        @keyup.enter="onSubmit"
      />
      <ZButton
        :disabled="hasErrors"
        size="sm"
        variant="outline"
        @click="onSubmit"
      >
        Add discount code
      </ZButton>
    </div>

    <ul v-if="coupons.length" :class="$style.appliedCoupons">
      <li v-for="coupon in coupons" :key="coupon.code">
        {{ coupon.description }}
        <ZButton
          as="a"
          size="xs"
          variant="ghost"
          @click="onRemoval(coupon.code)"
        >
          x
        </ZButton>
      </li>
    </ul>

    <ul v-if="coupons.length" :class="$style.feedBackErrors">
      <li v-if="isAlreadyApplied">Sorry, coupons are one-time use only.</li>
      <li v-if="isCouponLimitReached">
        Sorry, only 3 coupons can be applied per purchase.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CartCoupons',
  props: {
    coupons: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      modelValue: '',
    }
  },
  computed: {
    normalizedCoupon() {
      return this.modelValue.toUpperCase()
    },
    isAlreadyApplied() {
      return this.coupons
        .map((coupon) => coupon.code)
        .includes(this.normalizedCoupon)
    },
    isCouponLimitReached() {
      return this.coupons.length > 2 && this.modelValue
    },
    hasErrors() {
      return this.isAlreadyApplied || this.isCouponLimitReached
    },
  },
  methods: {
    onSubmit() {
      if (this.hasErrors || !this.normalizedCoupon) return

      this.$emit('addition', this.normalizedCoupon)
      this.reset()
    },
    onRemoval(code) {
      this.$emit('removal', code)
    },
    reset() {
      this.modelValue = ''
    },
  },
}
</script>

<style lang="scss" module>
.formInput {
  width: 100%;

  .input {
    width: 150px;
    margin-right: 8px;
  }
}

.appliedCoupons,
.feedBackErrors {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-top: 16px;
  margin-left: 8px;
  list-style: none;
}

.feedBackErrors {
  color: red;
}
</style>
