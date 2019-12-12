<template>
  <q-scroll-area class="fit">
    <q-list padding class="menu-list">

      <q-item to="/" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="house" />
          </q-item-section>
          <q-item-section>Beranda</q-item-section>
      </q-item>

      <q-item to="/about" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="account_circle" />
          </q-item-section>
          <q-item-section>Tentang</q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Dark Mode</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle color="accent" v-model="darkMode" />
        </q-item-section>
      </q-item>

    </q-list>
  </q-scroll-area>
</template>

<script>
export default {
  name: 'drawerContent',
  data () {
    return {
      darkMode: true
    }
  },
  updated () {
    this.$q.dark.set(this.darkMode)
  }
}
</script>
