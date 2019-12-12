<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal bordered class="bg-primary text-white">
      <q-toolbar class="text-white">
        <router-link to="/" class="text-white">
          <q-btn flat round dense icon="house" />
        </router-link>
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar> -->
          Quran Vue
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="right" side="right" overlay behavior="mobile" bordered>
      <!-- drawer content -->
      <drawer />
    </q-drawer>

    <q-page-container>
      <router-view />
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
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
  }
}
</script>
