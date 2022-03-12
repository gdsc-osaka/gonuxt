<template>
  <v-main>
    <ScrollTopBtn />
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
          <h2>No.6: Simple Card List</h2>
        </v-col>
        <SimpleCardListST />
      </v-row>
    </section>
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>No.7: ImageLinkLayoutST</h2>
        </v-col>
        <ImageLinkLayoutST />
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
import ImageLinkLayoutST from '@/components/templates/ImageLinkLayoutST/ImageLinkLayoutST.vue'
import SimpleCardListST from '@/components/templates/SimpleCardListST/SimpleCardListST.vue'

export default {
  name: 'CardPage',
  components: { TileLayoutST, ImageLinkLayoutST, CardGalleryLayoutST, SimpleCardListST },
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
