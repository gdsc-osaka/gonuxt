<template>
  <v-container fluid>
    <h1>Dev Page</h1>
    <TileLayoutST />
  </v-container>
</template>

<script>
// ====================================
//    For Development of Components
// ====================================
// import XXX from '@/XXX'
import TileLayoutST from '@/components/templates/TileLayoutST/TileLayoutST.vue'

export default {
  name: 'DevPage',
  components: { TileLayoutST },
}
</script>
