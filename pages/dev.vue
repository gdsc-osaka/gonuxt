<template>
  <v-container fluid>
    <h1>Dev Page</h1>
    <v-divider></v-divider>
    <SampleLayoutST />
  </v-container>
</template>

<script>
// ====================================
//    For Development of Components
// ====================================
// import XXX from '@/XXX'
import SampleLayoutST from '@/components/templates/SampleLayoutST/SampleLayoutST.vue'

export default {
  name: 'DevPage',
  components: { SampleLayoutST },
}
</script>