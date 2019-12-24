<template>
  <div id="app">
    <header
      class="text-center p-2 bg-primary text-dark md:w-3/4 md:float-right"
    >
      Quran Vue
    </header>
    <div id="mainContent" class="w-full md:float-right md:w-3/4">
      <nuxt />
    </div>
    <div class="mt-12 md:mt-0"></div>
    <div
      class="w-full fixed bottom-0 left-0 right-0 flex justify-center bg-dark | md:flex md:top-0 md:right-auto md:w-1/4"
    >
      <BottomNav />
    </div>
    <go-top class="gotop" bottom="50px">
      &uarr;
    </go-top>
  </div>
</template>

<style>
@font-face {
  font-family: 'LPMQ';
  src: url('~assets/font/LPMQ IsepMisbah.ttf');
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.dark,
html .dark,
body .dark,
.dark input,
.dark select {
  @apply bg-dark text-white;
}

.arabic {
  font-family: 'LPMQ';
}
.font-md .ar {
  font-size: 1.5rem;
}
.font-lg .ar {
  font-size: 2rem;
}
.font-xl .ar {
  font-size: 2.5rem;
}

.card {
  @apply p-2 m-2 shadow-md rounded;
}

.badge {
  @apply inline-block bg-accent text-light p-0 px-2 rounded-full text-sm shadow-lg;
}
.dark .badge {
  @apply bg-primary text-dark;
}

.gotop {
  @apply bg-accent text-white p-0 px-2 text-xl shadow-lg rounded;
}
</style>

<script>
import pengaturan from '@/db.js'
export default {
  components: {
    BottomNav: () => import('@/components/bottom-bar'),
    GoTop: () => import('vue-backtotop')
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
      this.applyDarkMode(this.setting.darkMode)
      this.applyFontSize(this.setting.fontSize)
    },
    applyDarkMode(darkMode) {
      if (darkMode) {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
    },
    applyFontSize(fontSize) {
      switch (fontSize) {
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
