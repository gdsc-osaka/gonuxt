<template>
  <v-app>
    <TheHeader />
    <v-sheet elevation="0" height="64" width="100%"></v-sheet>
    <v-main>
      <Nuxt />
    </v-main>
    <FooterBasic />
  </v-app>
</template>

<script>
import TheHeader from '@/sections/TheHeader'
import FooterBasic from '@/components/organisms/FooterBasic'

export default {
  name: 'DefaultLayout',
  components: { TheHeader, FooterBasic },
}
</script>
