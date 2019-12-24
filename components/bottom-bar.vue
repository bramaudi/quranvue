<template>
  <div
    class="flex justify-center md:block w-full border-0 md:border-r-2 md:border-primary"
  >
    <nuxt-link class="nav-item md:block" to="/">Daftar</nuxt-link>
    <nuxt-link class="nav-item md:block" to="/cari">Cari</nuxt-link>
    <nuxt-link class="nav-item md:block" to="/pengaturan">Pengtrn.</nuxt-link>
  </div>
</template>

<style scoped>
.nav-item {
  @apply w-full text-center py-2 px-5 text-light outline-none;
}
.nuxt-link-exact-active {
  @apply bg-light text-dark;
}
</style>
