import ImageTextCard from '@/components/organisms/ImageTextCard.vue'

export default {
  components: { ImageTextCard },
  data(){
    return {
      title: 'チェックです',
      lists: [
        {
          id: 1,
          content: '一番',
        },
        {
          id: 2,
          content: '二番',
        },
        {
          id: 3,
          content: '三番',
        }
      ]
    }
  }

}