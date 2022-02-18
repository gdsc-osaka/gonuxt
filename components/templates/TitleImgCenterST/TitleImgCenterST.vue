<template>
  <v-container>
    <v-row justify="center" class="my-8" no-gutters>
      <v-col cols="12" sm="11">
        <div class="mb-8">
          <TitleCenter class="mb-8"/>
        </div>
        <v-img :src="imgSrc" class="rounded-lg"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TitleCenter from '@/components/organisms/TitleCenter/TitleCenter.vue'

export default {
  components: { TitleCenter },
  data(){
        return {
            imgSrc: require("@/assets/image/gonuxt/sample01.jpg")
        }
    }
}
</script>