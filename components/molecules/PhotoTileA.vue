<template>
  <v-card class="gonuxt-photo-tile">
    <v-img
      :src="imgSrc"
      class="white--text align-end d-flex justify-center align-center"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
      <v-row class="d-flex-box justify-center text-center">
        <v-col cols="10" class="gonuxt-photo-tile-contents">
          <h3 v-text="title"></h3>
          <p v-text="txtBody"></p>
          <template v-if="existsLink">
            <a :href="link">{{ linkTxt }}</a>
          </template>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>

<script scoped>
/* eslint-disable no-console */
import config from '@/assets/config'

export default {
  name: 'PhotoTileA',
  props: {
    imgSrc: {
      type: String,
      default: require('@/assets/img/gonuxt/sample01.jpg'),
    },
    title: {
      type: String,
      default: 'Photo Tile A',
    },
    txtBody: {
      type: String,
      default: 'This is a PhotoTileA component.',
    },
    link: {
      type: String,
      default: '/',
    },
    linkTxt: {
      type: String,
      default: 'link text',
    },
    bgcolor: {
      type: String,
      default: '#ffffff',
    },
  },
  data: () => ({
    brandName: config.brand.nameShort,
  }),
  computed: {
    existsLink() {
      return this.link.length > 0
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/app';

.gonuxt-photo-tile {
  .gonuxt-photo-tile-contents {
    h3,
    p,
    a {
      margin-bottom: 0;
    }

    a {
      text-decoration: underline;
      color: white;
    }
  }
}
</style>
