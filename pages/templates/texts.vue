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
          <h2>No.8: IntorAST</h2>
        </v-col>
        <IntroAST />
      </v-row>
    </section>
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>No.9: TextCenterBST</h2>
        </v-col>
        <TextCenterBST />
      </v-row>
    </section>
  </v-main>
</template>

<script scoped>
import IntroAST from '@/components/templates/IntroAST/IntroAST.vue'
import TextCenterBST from '@/components/templates/TextCenterBST/TextCenterBST.vue'

export default {
  name: 'TextPage',
  components: { IntroAST, TextCenterBST },
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
