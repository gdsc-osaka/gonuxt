<template>
  <v-main>
    <ScrollTopBtn />
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center font-weight-bold">
          <h1>Template Showcase (Access)</h1>
        </v-col>
      </v-row>
    </section>
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>No.7 AccessA</h2>
        </v-col>
        <AccessA />
      </v-row>
    </section>
    <v-divider></v-divider>
  </v-main>
</template>

<script scoped>
import AccessA from '@/components/templates/AccessA/AccessA.vue'

export default {
  name: 'AccessPage',
  components: { AccessA },
  head: {
    meta: [
      { hid: 'og:title', property: 'og:title', content: 'List' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'GONuxTテンプレート一覧 (Access)',
      },
    ],
  },
}
</script>
