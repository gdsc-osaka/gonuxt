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
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>No.5: MemberListLayoutST</h2>
        </v-col>
        <MemberListLayoutST />
      </v-row>
    </section>
    <v-divider></v-divider>
  </v-main>
</template>

<script scoped>
import MemberListLayoutST from '@/components/templates/MemberListLayoutST/MemberListLayoutST.vue'

export default {
  name: 'TextPage',
  components: { MemberListLayoutST },
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
