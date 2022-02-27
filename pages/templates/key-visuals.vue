<template>
  <v-main>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center font-weight-bold">
          <h1>Template Showcase (Key Visuals)</h1>
        </v-col>
      </v-row>
    </section>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>No.0: TextCenterST</h2>
        </v-col>
        <TextCenterST />
      </v-row>
    </section>
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>No.2: TitleImgLayoutST</h2>
        </v-col>
        <TitleImgLayoutST />
      </v-row>
    </section>
  </v-main>
</template>

<script scoped>
import TextCenterST from '@/components/templates/TextCenterST/TextCenterST.vue'
import TitleImgLayoutST from '@/components/templates/TitleImgLayoutST/TitleImgLayoutST.vue'

export default {
  name: 'KeyVisualPage',
  components: { TextCenterST, TitleImgLayoutST },
  head: {
    meta: [
      { hid: 'og:title', property: 'og:title', content: 'Key Visuals' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'GONuxTテンプレート一覧 (Key Visuals)',
      },
    ],
  },
}
</script>
