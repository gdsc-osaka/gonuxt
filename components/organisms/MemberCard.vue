<template>
  <div class="mx-5">
    <v-img :src="imgSrc" class="rounded-circle img  mb-5" height="5rem" width="5rem"/>
    <p class="mx-5" style="display: inline-block">{{ txtBody }}</p>
    <p style="text-align:center;">
      <strong>{{ name }}</strong>
      <br>
      <small style="color:#aeaeae">{{ job }}</small>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: "https://res.cloudinary.com/uisual/image/upload/assets/icons/avatar.png",
    },
    txtBody: {
      type: String,
      default: '（自己紹介本文）- 吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。',
    }, 
    name: {
      type: String,
      default: '田中　太郎'
    },
    job: {
      type: String,
      default: 'CEO of Company'
    },
    bgcolor: {
      type: String,
      default: 'black'
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/app';

.img {
  display: block; 
  margin: auto;
}
</style>