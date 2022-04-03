import SimpleCard from '@/components/molecules/SimpleCard.vue'
import OUACCard from '@/components/molecules/OUACCard.vue'

export default {
  components: { SimpleCard, OUACCard },

  data: () => ({
    members: [
      {
        imgSrc: require('@/assets/gonuxt/img/sample01.jpg'),
        imgSrc2: require('@/assets/gonuxt/img/sample02.jpg'),
      },
      {
        imgSrc: require('@/assets/gonuxt/img/sample01.jpg'),
        imgSrc2: require('@/assets/gonuxt/img/sample02.jpg'),
      },
      {
        imgSrc: require('@/assets/gonuxt/img/sample01.jpg'),
        imgSrc2: require('@/assets/gonuxt/img/sample02.jpg'),
      },
      {
        imgSrc: require('@/assets/gonuxt/img/sample01.jpg'),
        imgSrc2: require('@/assets/gonuxt/img/sample02.jpg'),
      },
    ],
  }),
}
