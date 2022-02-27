<template>
  <header>
    <v-app-bar dark dense height="64" fixed>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title :class="brandNameFontWeight">{{
        brandName
      }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-none d-md-block">
        <router-link to="/" class="nt-app-bar-link">
          <v-btn elevation="0">Home</v-btn>
        </router-link>
        <router-link to="/template" class="nt-app-bar-link">
          <v-btn elevation="0">Templates</v-btn>
        </router-link>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> GONuxT </v-list-item-title>
          <v-list-item-subtitle> Template & Layouts </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="primary--text text--accent-4"
        >
          <NuxtLink to="/" class="text-decoration-none">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </NuxtLink>
          <v-divider></v-divider>
          <NuxtLink v-for="page in pages" :key="page.title" :to="page.nuxtLink">
            <v-list-item>
              <v-list-item-icon>
                <v-icon v-text="page.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-title v-text="page.title"></v-list-item-title>
            </v-list-item>
          </NuxtLink>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script scoped>
import config from '@/assets/config'

export default {
  name: 'TheHeader',
  props: {
    brandNameFontWeight: {
      type: String,
      default: 'font-weight-bold',
    },
  },
  data: () => ({
    drawer: false,
    group: null,
    brandName: config.brand.nameShort,
    pages: [
      {
        icon: 'mdi-account',
        title: 'Key Visual',
        nuxtLink: '/templates/key-visuals',
      },
      {
        icon: 'mdi-account',
        title: 'Text',
        nuxtLink: '/templates/texts',
      },
      {
        icon: 'mdi-account',
        title: 'Card',
        nuxtLink: '/templates/cards',
      },
      {
        icon: 'mdi-account',
        title: 'List',
        nuxtLink: '/templates/lists',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
// @import '@/assets/styles/app';

a {
  text-decoration: none !important;
}
</style>
