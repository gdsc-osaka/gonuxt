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
          <h2>No.1: MemberListLayoutST</h2>
        </v-col>
        <MemberListLayoutST />
      </v-row>
    </section>
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>No.2: MemberListBLayoutST</h2>
        </v-col>
        <MemberListBLayoutST />
      </v-row>
    </section>
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row class="pb-16 my-8">
        <v-col cols="12" class="text-center">
          <h2>No.3: MemberIntroST</h2>
        </v-col>
        <MemberIntroST />
      </v-row>
    </section>
  </v-main>
</template>

<script scoped>
import MemberListLayoutST from '@/components/templates/MemberListLayoutST/MemberListLayoutST.vue'
import MemberListBLayoutST from '@/components/templates/MemberListBLayoutST/MemberListBLayoutST.vue'
import MemberIntroST from '@/components/templates/MemberIntroST/MemberIntroST.vue'

export default {
  name: 'TextPage',
  components: { MemberListLayoutST, MemberListBLayoutST, MemberIntroST },
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
