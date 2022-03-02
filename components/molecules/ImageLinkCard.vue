<template>
  <v-card class="rect">
    <v-hover v-slot="{ hover }" open-delay="200">
      <v-img class="align-end" :src="imgSrc" :aspect-ratio="15 / 9">
        <v-sheet :elevation="hover ? 10 : 2" :class="{ 'on-hover': hover }">
        </v-sheet>
      </v-img>
    </v-hover>
    <v-card-actions>
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
    txtBody: {
      type: String,
      default: '(txtBody) 2022-03-01開催',
    },
    btnTxt: {
      type: String,
      default: 'See More',
    },
    btncolor: {
      type: String,
      default: 'primary',
    },
    bgColor: {
      type: String,
      default: 'primary',
    },
  },
  data: () => ({
    brandName: config.brand.nameShort,
  }),
  computed: {
    getPopupTxtColor() {
      return this.bgColor + '--text'
    },
  },
}
</script>

<style lang="scss" scoped></style>
