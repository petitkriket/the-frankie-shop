<template>
  <div :class="$style.container">
    <img :src="thumbnail" :alt="title" :class="$style.thumbnail" />

    <div :class="$style.thumbnailHover">
      <p :class="$style.heading">{{ title }}</p>
      <p :class="$style.heading">{{ price }} EUR</p>
      <ZButton :class="$style.addToCart" block @click="$emit('add')">
        Add to cart
      </ZButton>
    </div>
  </div>
</template>

<script>
import { ProductProps as props } from '@/types/product'

export default {
  name: 'ProductListItem',
  props,
  methods: {
    add() {
      this.$emit('add')
    },
  },
}
</script>

<style lang="scss" module>
.container {
  display: flex;
  gap: 20px;
  font-size: 12px;
  text-transform: uppercase;
  position: relative;

  img {
    object-fit: cover;
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
  }

  .thumbnailHover {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 500ms ease;
    opacity: 0;
    background-color: white;

    .heading {
      margin: 4px;
      font-size: 11px;
      font-weight: 500;
      text-transform: uppercase;
    }

    .addToCart {
      margin-top: 8px;
      width: 50%;
    }
  }

  &:hover {
    .thumbnailHover {
      opacity: 1;
      background-color: rgba(255, 255, 255, 0.75);
    }
  }
}
</style>
