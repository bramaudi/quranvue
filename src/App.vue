<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
require('./css/app.scss')

export default {
  name: 'App',
  mounted () {
    this.$q.dark.set(true)
  }
}
</script>
