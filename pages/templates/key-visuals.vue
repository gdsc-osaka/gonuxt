<template>
  <v-main>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center font-weight-bold">
          <h1>Template Showcase (Key Visuals)</h1>
        </v-col>
      </v-row>
    </section>
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>No.1: TextCenterST</h2>
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
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>No.3: AutoSwitchTitle</h2>
        </v-col>
        <AutoSwitchTitle />
      </v-row>
    </section>
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>No.4: ImgTeaser</h2>
        </v-col>
        <ImgTeaser />
      </v-row>
    </section>
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2>No.5: CarTopPage</h2>
        </v-col>
      </v-row>
      <CarTopPage />
    </section>
  </v-main>
</template>

<script scoped>
import TextCenterST from '@/components/templates/TextCenterST/TextCenterST.vue'
import TitleImgLayoutST from '@/components/templates/TitleImgLayoutST/TitleImgLayoutST.vue'
import AutoSwitchTitle from '@/components/templates/AutoSwitchTitle/AutoSwitchTitle.vue'
import ImgTeaser from '@/components/templates/ImgTeaser/ImgTeaser.vue'
import CarTopPage from '@/components/templates/CarTopPage/CarTopPage.vue'

export default {
  name: 'KeyVisualPage',
  components: { TextCenterST, TitleImgLayoutST, AutoSwitchTitle, ImgTeaser, CarTopPage },
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
