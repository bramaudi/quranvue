<template>
  <q-page padding class="q-pa-md">

    <q-input color="accent" outlined v-model="cari" label="Cari Nama Surat">
      <template v-slot:append>
        <q-avatar>
          <q-icon name="close" @click="cari = ''" class="cursor-pointer" />
        </q-avatar>
      </template>
    </q-input>

    <q-intersection
      v-for="item in filteredList"
      :key="item.nomor"
      transition="scale"
      once
    >
      <Surah :data="item" />
    </q-intersection>

  </q-page>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      cari: '',
      surat: require('../json/surah.json').hasil
    }
  },
  components: {
    Surah: () => import('../components/surahLists')
  },
  computed: {
    filteredList () {
      return this.surat.filter(surat => {
        return surat.nama.toLowerCase().includes(this.cari.toLowerCase())
      })
    }
  }
}
</script>
