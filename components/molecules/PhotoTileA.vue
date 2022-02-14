<template>
  <v-card> TBA </v-card>
</template>

<script scoped>
import config from '@/assets/config'

export default {
  name: 'PhotoTileA',
  props: {
    imgSrc: {
      type: String,
      default: 'TBA',
    },
    txtBody: {
      type: String,
      default: 'body text',
    },
    // links: {
    //   type: Array,
    //   default: ['TBA'],
    // },
    bgcolor: {
      type: String,
      default: '#ffffff',
    },
  },
  data: () => ({
    brandName: config.brand.nameShort,
  }),
}
</script>

<style lang="scss">
@import '@/assets/styles/app';
</style>
