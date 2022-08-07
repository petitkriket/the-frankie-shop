<template>
  <component
    :is="as"
    v-bind="{ ...$props, ...$attrs }"
    :class="bindings"
    v-on="$listeners"
  >
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
      validator: (value) => ['regular', 'outline', 'ghost'].includes(value),
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['xs', 'sm', 'md', 'lg'].includes(value),
    },
    block: {
      type: Boolean,
      default: false,
    },
    to: {
      type: [String, Object],
      default: null,
    },
  },
  computed: {
    bindings() {
      const { size, variant, block } = this.$props
      return [
        this.$style.zButton,
        this.$style[size],
        this.$style[variant],
        {
          [this.$style.block]: block,
        },
      ]
    },
  },
}
</script>

<style lang="scss" module>
.zButton {
  cursor: pointer;
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;

  &.xs {
    font-weight: 200;
    padding: 2px;
  }

  &.sm {
    padding: 8px;
  }

  &.md {
    padding: 12px;
  }

  &.lg {
    font-weight: 400;
    padding: 16px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
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
    background-color: white;

    &:hover {
      background-color: black;
      color: white;
    }
  }

  &.ghost {
    color: black;
    background-color: transparent;
    border: 1px solid transparent;
  }

  &.block {
    text-align: center;
    display: block;
  }
}
</style>
