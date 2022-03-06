<template>
  <v-main>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center font-weight-bold">
          <h1>Template Showcase (Cards)</h1>
        </v-col>
      </v-row>
    </section>
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>No.1: Tile Layout ST</h2>
        </v-col>
        <TileLayoutST />
      </v-row>
    </section>
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>No.10: CardGalleryLayoutST</h2>
        </v-col>
        <CardGalleryLayoutST />
      </v-row>
    </section>
  </v-main>
</template>

<script scoped>
import TileLayoutST from '@/components/templates/TileLayoutST/TileLayoutST.vue'
import CardGalleryLayoutST from '@/components/templates/CardGalleryLayoutST/CardGalleryLayoutST.vue'

export default {
  name: 'CardPage',
  components: { TileLayoutST, CardGalleryLayoutST },
  head: {
    meta: [
      { hid: 'og:title', property: 'og:title', content: 'Cards' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'GONuxTテンプレート一覧 (Cards)',
      },
    ],
  },
}
</script>
