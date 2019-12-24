<template>
  <div>
    <div v-if="result.name">
      <Ayat
        :nomor="ayat"
        :arText="result.text[ayat]"
        :idText="result.translations.id.text[ayat]"
      />
    </div>
    <div class="flex justify-center px-5 fixed bottom-0 mb-12 md:mb-5">
      <div class="card box">
        <label for="suratInput" class="label">Nomor Surat</label>
        <input
          id="suratInput"
          v-model="surat"
          @keyup="runFind"
          @click="surat = ''"
          class="input appearance-none"
          type="number"
        />
      </div>
      <div class="card box">
        <label for="ayatInput" class="label">Nomor Ayat</label>
        <input
          id="ayatInput"
          v-model="ayat"
          @keyup="runFind"
          @click="ayat = ''"
          class="input appearance-none"
          type="number"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.label {
  @apply block text-center;
}
.input {
  @apply block text-center w-full mt-5 outline-none;
}
</style>

<script>
export default {
  components: {
    Ayat: () => import('@/components/ayat')
  },
  data() {
    return {
      surat: 0,
      ayat: 0,
      result: ''
    }
  },
  methods: {
    runFind() {
      if (this.surat && this.surat > 0) {
        if (this.ayat && this.ayat > 0) {
          this.findAyat()
          if (this.result && this.ayat > this.result.number_of_ayah) {
            this.result = ''
          }
        } else {
          this.result = ''
        }
      }
    },
    findAyat() {
      let result = ''
      try {
        result = require(`@/surah/${this.surat}.json`)
      } catch (err) {
        this.result = ''
      }
      this.result = result[this.surat]
    }
  }
}
</script>
