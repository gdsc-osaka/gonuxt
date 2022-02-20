<template>
  <v-container>
    <v-row justify="center" class="my-8" no-gutters>
      <v-col cols="12" sm="11">
        <div class="mb-8">
          <SampleCard />
        </div>
        <v-img :src="imgSrc" class="rounded-lg" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SampleCard from '@/components/organisms/SampleCard/SampleCard.vue'

export default {
  components: { SampleCard },
  data(){
        return {
            imgSrc: require("@/assets/img/gonuxt/sample01.jpg")
        }
    }
}
</script>