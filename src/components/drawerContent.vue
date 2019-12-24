<template>
  <q-scroll-area class="fit">
    <q-list padding class="menu-list">

      <q-item to="/" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="ion-home" class="icon"/>
          </q-item-section>
          <q-item-section>Beranda</q-item-section>
      </q-item>

      <q-separator />

      <q-item to="/about" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="ion-information-circle-outline" class="icon"/>
          </q-item-section>
          <q-item-section>Tentang</q-item-section>
      </q-item>

      <q-separator />

      <q-item tag="label" v-ripple>
        <q-item-section avatar>
          <q-icon v-if="this.$q.dark.isActive" name="ion-moon" class="icon"/>
          <q-icon v-else name="ion-sunny" class="icon"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>Dark Mode</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle color="accent" v-model="darkMode" />
        </q-item-section>
      </q-item>

      <q-separator />

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

<style lang="scss" scoped>
.menu-list {
  font-size: large;
  .icon {
    font-size: 1.5em;
  }
}
</style>
