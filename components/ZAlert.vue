<template>
  <div :class="bindings">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ZAlert',
  props: {
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['md'].includes(value),
    },
    color: {
      type: String,
      default: 'light',
      validator: (value) => ['light'].includes(value),
    },
  },
  computed: {
    bindings() {
      const { size, color } = this.$props
      return [this.$style.zAlert, this.$style[size], this.$style[color]]
    },
  },
}
</script>

<style lang="scss" module>
.zAlert {
  &.light {
    background-color: #f2f2f2;
    color: #000;
  }

  &.md {
    padding: 12px 20px;
    font-weight: 300;
    font-size: 10px;
  }
}
</style>
