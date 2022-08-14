<template>
  <div>
    <p :class="$style.heading">{{ title }}</p>

    <div :class="$style.container">
      <img :src="thumbnail" :alt="title" :class="$style.thumbnail" />

      <aside>
        <div :class="$style.specs">
          <span>{{ colorName }}</span>
          <span>{{ size }}</span>
          <span>{{ quantity }}</span>
        </div>

        <!-- TODO: would require a money formatter function using numeral/money.js -->
        <p :class="$style.price">{{ quantity * price }} EUR</p>
      </aside>
    </div>
  </div>
</template>

<script>
import { ProductProps as props } from '@/types/product'

export default {
  name: 'CartPreviewLineItem',
  props,
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
    max-height: 300px;
    object-fit: cover;
  }

  aside {
    display: flex;
    flex-direction: column;

    .specs {
      display: flex;
      gap: 8px;
      align-items: flex-start;
      flex-direction: column;
    }

    .price {
      margin: auto 0;
    }
  }
}
</style>
