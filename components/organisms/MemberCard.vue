<template>
  <v-row justify="center" class="text-center" no-gutters>
    <v-col cols="12" sm="6">
      <v-img :src="imgSrc" class="rounded-lg" />
      <p class="mb-7">{{ txtBody }}</p>
      <h1 class="font-weight-bold">{{ name }}</h1>
      <small>{{ job }}</small>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: "https://res.cloudinary.com/uisual/image/upload/assets/devices/ipad.png",
    },
    txtBody: {
      type: String,
      default: '(Text Body) - djfaidsjfoiaj iodjfaidsjf oiajiodjfaids jf;oiajiodjfa idsjf;oia jiodjfai dsjf;oiaji odjfaid sjf;oiajiodjfa  idsjf;oiajio djfaidsjf;oiaji odjfaidsj f;oiajiodjf aidsjf;oiajiod jfaidsjf;oiajiodj faidsjf;o iajio',
    }, 
    name: {
      type: String,
      default: 'Sample Button Text'
    },
    job: {
      type: String,
      default: 'Sample Subtext'
    },
    bgcolor: {
      type: String,
      default: 'black'
    },
  },
}
</script>