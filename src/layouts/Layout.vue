<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal bordered class="bg-primary text-white">
      <q-toolbar class="text-white">
        <router-link to="/" class="text-white">
          <q-btn flat round dense icon="ion-home" />
        </router-link>
        <q-toolbar-title>Quran Vue</q-toolbar-title>

        <!-- <q-space />

        <q-input dark dense standout v-model="text" label="Cari Ayat, misal: 2:280" input-class="text-right" class="q-ml-lg">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input> -->

        <q-btn dense flat round icon="ion-menu" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="right" side="right" show-if-above bordered>
      <!-- drawer content -->
      <drawer />
    </q-drawer>

    <q-page-container>
      <router-view />
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="ion-arrow-round-up" color="accent" />
      </q-page-scroller>
    </q-page-container>

  </q-layout>
</template>

<script>
import drawer from '../components/drawerContent'

export default {
  name: 'Layout',
  components: {
    drawer: drawer
  },
  data () {
    return {
      right: false
    }
  },
  created () {
    this.showLoading()
  },
  methods: {
    showLoading () {
      this.$q.loading.show()

      this.timer = setTimeout(() => {
        this.$q.loading.hide()
        this.timer = void 0
      }, 2000)
    }
  },
  beforeDestroy () {
    if (this.timer !== void 0) {
      clearTimeout(this.timer)
      this.$q.loading.hide()
    }
  }
}
</script>
