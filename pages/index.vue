<template>
  <div class="container">
    <div class="card">
      <input
        v-model="filter"
        type="text"
        placeholder="Filter Nama Ayat"
        class="p-2"
      />
    </div>
    <div v-if="ready">
      <div v-for="(item, index) in filtered" :key="index" class="card">
        <nuxt-link
          :to="{
            name: 'surat-nomor',
            params: { nomor: item.nomor }
          }"
          class="block outline-none"
        >
          <span class="badge">{{ item.nomor }}</span> {{ item.nama }}
          <span class="arabic float-right">{{ item.asma }}</span>
        </nuxt-link>
      </div>
    </div>
    <div v-else class="flex justify-center">
      <div class="p-16">Loading ...</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ready: false,
      list: '',
      filter: ''
    }
  },
  computed: {
    filtered() {
      if (this.filter) {
        return this.list.filter((item) => {
          return item.nama.toLowerCase().includes(this.filter.toLowerCase())
        })
      } else {
        return this.list
      }
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.list = require('@/surah/index.json')
      this.ready = true
    }
  }
}
</script>

<style></style>
