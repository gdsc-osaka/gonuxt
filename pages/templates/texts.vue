<template>
  <v-main>
    <ScrollTopBtn />
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center font-weight-bold">
          <h1>Template Showcase (Texts)</h1>
        </v-col>
      </v-row>
    </section>
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>No.1: IntorAST</h2>
        </v-col>
        <IntroAST />
      </v-row>
    </section>
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>No.2: TextCenterBST</h2>
        </v-col>
        <TextCenterBST />
      </v-row>
    </section>
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>No.3: TextImgST</h2>
        </v-col>
        <TextImgST />
      </v-row>
    </section>
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>No.4: ImageTextLayoutST</h2>
        </v-col>
        <ImageTextLayoutST />
      </v-row>
    </section>
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>No.5: MessageLayoutA</h2>
        </v-col>
        <MessageLayoutA />
      </v-row>
    </section>
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>No.6: MessageLayoutB</h2>
        </v-col>
        <MessageLayoutB />
      </v-row>
    </section>
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>No.7: CardListLayoutST</h2>
        </v-col>
        <CardListLayoutST />
      </v-row>
    </section>
  </v-main>
</template>

<script scoped>
import IntroAST from '@/components/templates/IntroAST/IntroAST.vue'
import TextCenterBST from '@/components/templates/TextCenterBST/TextCenterBST.vue'
import TextImgST from '@/components/templates/TextImgST/TextImgST.vue'
import ImageTextLayoutST from '@/components/templates/ImageTextLayoutST/ImageTextLayoutST.vue'
import MessageLayoutA from '@/components/templates/MessageLayoutA/MessageLayoutA.vue'
import MessageLayoutB from '@/components/templates/MessageLayoutB/MessageLayoutB.vue'
import CardListLayoutST from '@/components/templates/CardListLayoutST/CardListLayoutST.vue'

export default {
  name: 'TextPage',
  components: { IntroAST, TextCenterBST, TextImgST, ImageTextLayoutST,MessageLayoutA, MessageLayoutB, CardListLayoutST },
  head: {
    meta: [
      { hid: 'og:title', property: 'og:title', content: 'Text' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'GONuxTテンプレート一覧 (Text)',
      },
    ],
  },
}
</script>
