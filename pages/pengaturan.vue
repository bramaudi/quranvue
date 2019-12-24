<template>
  <div>
    <div @click="toggleDark" class="card cursor-pointer">
      Dark Mode <OnOff :model="setting.darkMode" class="float-right" />
    </div>
    <div class="card cursor-pointer">
      <label for="changeFS">Font Size</label>
      <select
        id="changeFS"
        @change="changeFontSize"
        class="float-right text-center border-1 border-white border-solid appearance-none"
      >
        <option>Default</option>
        <option :selected="setting.fontSize === 'md'" value="md">Medium</option>
        <option :selected="setting.fontSize === 'lg'" value="lg">Large</option>
        <option :selected="setting.fontSize === 'xl'" value="xl"
          >Extra Large</option
        >
      </select>
    </div>
  </div>
</template>

<script>
import pengaturan from '@/db.js'
export default {
  components: {
    OnOff: () => import('@/components/on-off')
  },
  data() {
    return {
      setting: ''
    }
  },
  mounted() {
    this.loadSetting()
  },
  methods: {
    async loadSetting() {
      this.setting = {
        darkMode: await pengaturan.getItem('darkMode'),
        fontSize: await pengaturan.getItem('fontSize')
      }
    },
    applyDark(darkMode) {
      if (darkMode) {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
    },
    toggleDark() {
      this.setting.darkMode = !this.setting.darkMode
      this.applyDark(this.setting.darkMode)
      if (this.setting.darkMode) {
        pengaturan.setItem('darkMode', true)
      } else {
        pengaturan.setItem('darkMode', false)
      }
    },
    changeFontSize(e) {
      pengaturan.setItem('fontSize', e.target.value)
      switch (e.target.value) {
        case 'md':
          document.body.classList.add('font-md')
          document.body.classList.remove('font-lg')
          document.body.classList.remove('font-xl')
          break

        case 'lg':
          document.body.classList.remove('font-md')
          document.body.classList.add('font-lg')
          document.body.classList.remove('font-xl')
          break

        case 'xl':
          document.body.classList.remove('font-md')
          document.body.classList.remove('font-lg')
          document.body.classList.add('font-xl')
          break

        default:
          document.body.classList.remove('font-md')
          document.body.classList.remove('font-lg')
          document.body.classList.remove('font-xl')
          break
      }
    }
  }
}
</script>
