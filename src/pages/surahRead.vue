<template>
  <q-page class="q-pa-md q-gutter-y-md">

      <q-card square flat bordered>
        <q-card-section class="text-center">
          <div class="text-h6">{{ surah.name_latin }}</div>
          <div class="text-h2 arabic">{{ surah.name }}</div>
          <div class="text-subtitle1">( {{ surah.translations.id.name }} )</div>
        </q-card-section>

        <q-separator inset />

        <q-card-section class="text-center text-h5">
          {{ surah.number_of_ayah }} Ayat
        </q-card-section>
      </q-card>

      <q-input
        v-model.number="ayat"
        type="number"
        outlined
        min="1"
        :max="surah.number_of_ayah"
        label="Cari Nomor Ayat"
        @keyup="scrollToAyat"
      />

      <q-intersection
        ref="content"
        v-for="( ayah, index ) in surah.text"
        :key="index"
        transition="scale"
        once
        :id="elementID(index)"
      >
        <q-card flat bordered>
          <q-btn outline color="accent" :label="index" style="float: left" />
          <q-card-section class="arabic text-h4 text-right q-pa-md">
            {{ ayah }}
          </q-card-section>
          <q-separator />
          <q-card-section class="text-subtitle1">
            {{ surah.translations.id.text[index] }}
          </q-card-section>
        </q-card>
      </q-intersection>

  </q-page>
</template>

<script>
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

export default {
  name: 'Surah',
  data () {
    return {
      ayat: null,
      surah: require(`../assets/json/surah/${this.$route.params.nomor}.json`)[this.$route.params.nomor]
    }
  },
  methods: {
    handleScroll (targetID) {
      const el = document.getElementById(targetID)
      const target = getScrollTarget(el)
      const offset = el.offsetTop - el.scrollHeight + el.scrollHeight
      const duration = 300
      setScrollPosition(target, offset, duration)
    },
    elementID (nomor) {
      return 'ayat_ke' + nomor
    },
    scrollToAyat (e) {
      if (e.keyCode === 13) {
        this.handleScroll('ayat_ke' + this.ayat)
      }
    }
  }
}
</script>
