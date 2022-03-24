<template>
  <v-card>
    <div class="px-5 pt-5" :class="bgColor">
      <router-link :to="link">
        <v-img class="align-end rounded" :src="imgSrc" :aspect-ratio="12 / 9">
        </v-img>
      </router-link>
    </div>

    <v-card-actions class="pa-5">
      <div class="text-left">
        {{ title }}
      </div>
      <v-btn rounded elevation="1" :color="btncolor" class="ml-auto">
        {{ btnTxt }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script scoped>
import config from '@/assets/config'

export default {
  name: 'ImageLinkCard',
  props: {
    imgSrc: {
      type: String,
      default: require('@/assets/gonuxt/img/sample01.jpg'),
    },
    title: {
      type: String,
      default: 'Align',
    },
    btnTxt: {
      type: String,
      default: 'See More',
    },
    link: {
      type: String,
      default: '/',
    },
    btncolor: {
      type: String,
      default: 'primary',
    },
    bgColor: {
      type: String,
      default: 'accent',
    },
  },
  data: () => ({
    brandName: config.brand.nameShort,
  }),
}
</script>

<style lang="scss" scoped></style>
