<template>
  <div class="card">
    <div class="badge float-left">
      {{ nomor }}
    </div>
    <div class="arabic ar text-right leading-loose">{{ arText }}</div>
    <div class="text-sm mt-2">
      {{ idText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AyatCard',
  props: {
    nomor: { type: String, default: '0' },
    arText: { type: String, default: '???' },
    idText: { type: String, default: '---' }
  }
}
</script>
