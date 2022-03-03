<template>
  <v-row justify="center" class="text-center" no-gutters>
    <v-col cols="12" sm="2">
      <v-avatar size="128">
          <v-img :src="imgSrc"/>
      </v-avatar>
      <p class="mb-7">{{ txtBody }}</p>
      <small>{{ txt }}</small>
      <h2>{{ name }}</h2>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    imgSrc: {
      default: require('@/assets/gonuxt/img/sample01.jpg'),
    },
    name: {
      type: String,
      default: '名前',
    }, 
    txt: {
      type: String,
      default: '役職'
    }
  },
}
</script>