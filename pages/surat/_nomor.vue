<template>
  <div>
    <div v-if="ready">
      <div v-for="(item, index) in list.text" :key="index">
        <Ayat
          :nomor="index"
          :arText="item"
          :idText="list.translations.id.text[index]"
        />
      </div>
    </div>
    <div v-else class="flex justify-center">
      <div class="p-16">Loading ...</div>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  components: {
    Ayat: () => import('@/components/ayat')
  },
  data() {
    return {
      ready: false,
      list: ''
    }
  },
  head() {
    return {
      title: this.list.name_latin
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      const nomor = this.$route.params.nomor
      const data = require(`@/surah/${nomor}.json`)
      this.list = data[nomor]
      this.ready = true
    }
  }
}
</script>
