<template>
  <v-main>
    <ScrollTopBtn />
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center font-weight-bold">
          <h1>Template Showcase (Schedule)</h1>
        </v-col>
      </v-row>
    </section>
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>No.1 ListA</h2>
        </v-col>
        <ListA />
      </v-row>
    </section>
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>No.2 ListB</h2>
        </v-col>
        <ListB />
      </v-row>
    </section>
    <v-divider></v-divider>
    <section class="gnt-sec-2">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>No.3 ScheduleST</h2>
        </v-col>
        <ScheduleST />
      </v-row>
    </section>
    <v-divider></v-divider>
  </v-main>
</template>

<script scoped>
import ListA from '@/components/templates/ListA/ListA.vue'
import ListB from '@/components/templates/ListB/ListB.vue'
import ScheduleST from '@/components/templates/ScheduleST/ScheduleST.vue'

export default {
  name: 'SchedulePage',
  components: { ListA, ListB, ScheduleST },
  head: {
    meta: [
      { hid: 'og:title', property: 'og:title', content: 'List' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'GONuxTテンプレート一覧 (Schedule)',
      },
    ],
  },
}
</script>
