<template>
  <input
    :value="value"
    v-bind="{ ...$props, ...$attrs }"
    :class="bindings"
    v-on="{
      ...$listeners,
      input: (event) => $emit('input', event.target.value),
    }"
  />
</template>

<script>
export default {
  name: 'ZInput',
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      validator: (value) => ['text', 'number', 'password'].includes(value),
    },
    placeholder: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['md'].includes(value),
    },
    hasErrors: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    bindings() {
      const { size, hasError } = this.$props
      return [this.$style.zInput, this.$style[size], this.$style[hasError]]
    },
  },
}
</script>

<style lang="scss" module>
.zInput {
  width: 100%;
  border: 0 none;
  background: #fff;
  color: black;
  border: 1px solid black;
  transition: 0.2s ease-in-out;
  transition-property: color, background-color, border;

  &::placeholder {
    color: #999;
  }

  &.hasErrors {
    color: red;
    border: 2px solid red;
  }

  &.md {
    padding: 0 10px;
    height: 32px;
  }
}
</style>
