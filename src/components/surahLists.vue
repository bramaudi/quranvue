<template>
  <router-link :to="{
      name: 'Surah',
      params: {
        nomor: data.nomor
      }
    }"
    class="link"
    >
   <q-card square flat bordered class="q-mt-md q-mb-md">
      <q-card-section>
        {{ data.nomor }} - {{ data.nama }}
        <br />
        (<span class="arabic">{{ data.asma }}</span>)
      </q-card-section>
    </q-card>
  </router-link>
</template>

<script>
export default {
  name: 'cardLists',
  props: {
    data: Object
  }
}
</script>

<style lang="stylus" scoped>
.link
  color unset
  text-decoration none
  cursor pointer
  &:hover
    color $secondary
</style>
