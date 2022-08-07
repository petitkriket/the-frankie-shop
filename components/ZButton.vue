<template>
  <component :is="as" :class="bindings" v-on="$listeners">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'ZButton',
  props: {
    as: {
      type: String,
      default: 'button',
      validator: (value) => ['button', 'a', 'nuxt-link'].includes(value),
    },
    variant: {
      type: String,
      default: 'regular',
      validator: (value) => ['regular', 'outline'].includes(value),
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value),
    },
  },
  computed: {
    bindings() {
      const { size, variant } = this.$props
      return [this.$style.zButton, this.$style[size], this.$style[variant]]
    },
  },
}
</script>

<style lang="scss" module>
.zButton {
  cursor: pointer;
  font-weight: 300;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;

  &.xs {
    padding: 4px;
  }
  &.sm {
    padding: 8px;
  }
  &.md {
    padding: 12px;
  }
  &.lg {
    padding: 16px;
  }

  &.regular {
    color: white;
    background-color: black;
    border: 1px solid black;

    &:hover {
      background-color: #232323;
    }
  }

  &.outline {
    border: 1px solid black;
    background-color: transparent;

    &:hover {
      background-color: black;
      color: white;
    }
  }
}
</style>
