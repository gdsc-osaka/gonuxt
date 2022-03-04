<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="imgSrc" class="border" height="200px"></v-img>
    <v-card-title class="justify-center">{{ title }}</v-card-title>
    <v-card-subtitle>{{ mainText }}</v-card-subtitle>
    <v-card-actions>
      <v-card-text class="orange--text"> 詳細 </v-card-text>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>{{ subText }}</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '活動場所',
    },
    mainText: {
      type: String,
      default: '説明文',
    },
    subText: {
      type: String,
      default: '詳細文',
    },
    imgSrc: {
      type: String,
      default: require('@/assets/gonuxt/img/sample01.jpg'),
    },
  },
  data() {
    return {
      show: false,
    }
  },
}
</script>
