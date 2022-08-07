<template>
  <div>
    <p :class="$style.heading">{{ title }}</p>

    <div :class="$style.container">
      <img :src="thumbnail" :alt="title" :class="$style.thumbnail" />

      <aside>
        <div :class="$style.specs">
          <span>REF. | {{ reference }}</span>
          <span>{{ colorName }}</span>
          <span>{{ size }}</span>
        </div>

        <div :class="$style.quantityInput">
          <ZButton variant="ghost" size="sm" @click="decrease">-</ZButton>
          <span>{{ quantity }}</span>
          <ZButton variant="ghost" size="sm" @click="increase">+</ZButton>
        </div>

        <!-- TODO: would require a money formatter function using numeral/money.js -->
        <p>{{ quantity * price }} EUR</p>

        <ZButton as="a" size="sm" variant="ghost" @click="removal">
          delete
        </ZButton>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartLineItem',
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    reference: {
      type: String,
      required: true,
    },
    colorName: {
      type: String,
      required: false,
      default: '',
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      required: false,
      default: '',
    },
    thumbnail: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    increase() {
      this.$emit('increase')
    },
    decrease() {
      this.$emit('decrease')
    },
    removal() {
      this.$emit('removal')
    },
  },
}
</script>

<style lang="scss" module>
.heading {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 11px;
  font-weight: 400;
  text-transform: uppercase;
}
.container {
  display: flex;
  gap: 20px;
  font-size: 12px;
  text-transform: uppercase;

  .thumbnail {
    height: 529px;
    width: 352px;
    object-fit: cover;
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .specs {
      display: flex;
      gap: 8px;
      align-items: flex-start;
      flex-direction: column;
    }

    .quantityInput {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
}
</style>
