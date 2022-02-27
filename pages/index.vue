<template>
  <v-container fluid>
    <KeyVisualSec />
    <AboutGonuxtSec />
  </v-container>
</template>

<script>
import KeyVisualSec from '@/sections/KeyVisualSec/KeyVisualSec.vue'
import AboutGonuxtSec from '@/sections/AboutGonuxtSec/AboutGonuxtSec.vue'

export default {
  name: 'IndexPage',
  components: { KeyVisualSec, AboutGonuxtSec },
  head: {
    titleTemplate: null,
    title: 'GONuxT',
  },
}
</script>
