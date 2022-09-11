<template>
  <div>
    <div v-if="isOpen" :class="$style.backdrop" @click="$emit('close')" />

    <aside :class="[$style.sidebar, { [$style.isOpen]: isOpen }]">
      <slot name="default">
        <CartPreview />
      </slot>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'TheSidebar',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isOpen(newValue) {
      this.toggleOverflowClass(newValue)
    },
  },
  mounted() {
    this.toggleOverflowClass(this.isOpen)
  },
  methods: {
    toggleOverflowClass(value) {
      const className = 'has-sidebar'
      value
        ? document.body.classList.add(className)
        : document.body.classList.remove(className)
    },
  },
}
</script>

<style lang="scss" module>
:global {
  body {
    &.has-sidebar {
      overflow: hidden;
    }
  }
}

.sidebar {
  overflow: auto;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1050;
  width: 384px;
  height: 100%;
  background-color: #ffffff;
  border: 1px solid rgba(204, 204, 204, 1);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transform-translate-x: 100%;
  transform: translateX(var(--transform-translate-x));

  &.isOpen {
    --transform-translate-x: 0%;
  }
}

.backdrop {
  position: fixed;
  inset: 0;
  z-index: 10;
}
</style>
