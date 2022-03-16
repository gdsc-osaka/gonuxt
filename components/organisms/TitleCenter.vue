<template>
  <v-row justify="center" class="text-center" no-gutters>
    <v-col cols="12" sm="6">
      <h1 class="font-weight-bold">{{ title }}</h1>
      <p class="mb-7">{{ txtBody }}</p>

      <div class="mb-2">
        <v-btn
          style="text-transform: none"
          large
          rounded
          class="white--text"
          :color="btnColor"
          :to="link"
        >
          {{ btnTxt }}
        </v-btn>
      </div>
      <small>{{ subTxt }}</small>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'TitleCenter',
  props: {
    title: {
      type: String,
      default: '(title) Title',
    },
    txtBody: {
      type: String,
      default: '(txtBody) - djfaidsjfoiaj iodjfaidsjf oiajiodjfaids jf;oiajiodjfa idsjf;oia jiodjfai dsjf;oiaji odjfaid sjf;oiajiodjfa  idsjf;oiajio djfaidsjf;oiaji odjfaidsj f;oiajiodjf aidsjf;oiajiod jfaidsjf;oiajiodj faidsjf;o iajio',
    }, 
    btnTxt: {
      type: String,
      default: '(btnTxt) Button Text'
    },
    subTxt: {
      type: String,
      default: '(subTxt) Sample Subtext'
    },
    btnColor: {
      type: String,
      default: 'black'
    },
    link: {
      type: String,
      default: '/'
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/app';
</style>
