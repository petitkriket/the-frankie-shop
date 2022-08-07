<template>
  <div>
    <TheNavbar />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss">
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
</style>
