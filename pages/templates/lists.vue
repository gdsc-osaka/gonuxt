<template>
  <v-main>
    <ScrollTopBtn />
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center font-weight-bold">
          <h1>Template Showcase (List)</h1>
        </v-col>
      </v-row>
    </section>
  </v-main>
</template>

<script scoped>
export default {
  name: 'TextPage',
  head: {
    meta: [
      { hid: 'og:title', property: 'og:title', content: 'List' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'GONuxTテンプレート一覧 (List)',
      },
    ],
  },
}
</script>
