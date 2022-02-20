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
  props: {
    title: {
      type: String,
      default: 'Sample Card',
    },
    txtBody: {
      type: String,
      default: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    },
    btnTxt: {
      type: String,
      default: 'Sample Button Text'
    },
    subTxt: {
      type: String,
      default: 'Sample Sub Text'
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