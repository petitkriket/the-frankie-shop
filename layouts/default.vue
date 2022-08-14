<template>
  <div>
    <TheNavbar />
    <main>
      <Nuxt />
    </main>

    <footer />

    <TheSidebar
      :is-open="$store.state.ui.isSidebarOpen"
      @close="$store.commit('ui/TOGGLE_SIDEBAR')"
    />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss" module>
:global {
  html {
    font-family: 'Roboto';
    font-weight: 100;
  }

  a,
  .nuxt-link-active,
  .nuxt-link-exact-active,
  .nuxt-link-exact-active:hover {
    text-transform: uppercase;
    color: black;
    text-decoration: none;
  }

  .nuxt-link-exact-active {
    font-weight: 400;
  }

  ul {
    padding-left: 0;
  }
}

main {
  padding: 0 64px;
}

footer {
  height: 200px;
}
</style>
