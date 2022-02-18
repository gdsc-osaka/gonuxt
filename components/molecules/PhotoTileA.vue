<template>
  <v-card class="gonuxt-photo-tile">
    <v-img
      :src="imgSrc"
      class="white--text align-end d-flex justify-center align-center"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
      <v-row class="d-flex-box justify-center text-center">
        <v-col
          cols="12"
          md="10"
          class="gonuxt-photo-tile-contents"
          :class="getTextBoxCSS"
        >
          <h3 class="font-weight-bold" :class="titleSize" v-text="title"></h3>
          <p v-text="txtBody"></p>
          <template v-if="existsLink">
            <NuxtLink :to="link.href">{{ link.txt }}</NuxtLink>
          </template>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>

<script scoped>
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
    titleSize: {
      type: String,
      default: 'text-h3',
    },
    txtBody: {
      type: String,
      default: 'This is a PhotoTileA component.',
    },
    link: {
      type: Object,
      default: () => ({
        href: '',
        txt: 'None',
      }),
    },
    txtPosition: {
      type: String,
      default: 'center',
    },
  },
  data: () => ({
    brandName: config.brand.nameShort,
  }),
  computed: {
    existsLink() {
      return this.link != null
    },
    getTextBoxCSS() {
      if (this.txtPosition === 'top') {
        return 'gonuxt-text-box-top'
      } else if (this.txtPosition === 'bottom') {
        return 'gonuxt-text-box-bottom'
      }
      return 'gonuxt-text-box-center'
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

  .gonuxt-text-box-center {
    position: inherit;
  }
  .gonuxt-text-box-top {
    position: absolute;
    top: 10%;
    padding: 0;
  }
  .gonuxt-text-box-bottom {
    position: absolute;
    bottom: 10%;
    padding: 0;
  }
}
</style>
