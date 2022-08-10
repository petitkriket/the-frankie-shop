<template>
  <div>
    <TheNavbar />
    <main>
      <Nuxt />
    </main>

    <footer />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss" module>
:global {
  html,
  button {
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
