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
      label="Cari Nomor Ayat"
    />

    <q-card v-for="( ayah, index ) in surah.text" :key="index" id="ayat_{index}">
      <q-btn outline color="primary" :label="index" style="float: left" />
      <q-card-section class="arabic text-h4 text-right">
        {{ ayah }}
      </q-card-section>
      <q-separator />
      <q-card-section class="text-subtitle1">
        {{ surah.translations.id.text[index] }}
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script>
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll

export default {
  name: 'Surah',
  data () {
    return {
      ayat: Number,
      surah: require(`../json/surah/${this.$route.params.nomor}.json`)[this.$route.params.nomor]
    }
  },
  methods: {
    handleScroll (targetID) {
      const el = document.getElementById(targetID)
      const target = getScrollTarget(el)
      const offset = el.offsetTop - el.scrollHeight
      const duration = 1000
      setScrollPosition(target, offset, duration)
    }
  }
}
</script>
