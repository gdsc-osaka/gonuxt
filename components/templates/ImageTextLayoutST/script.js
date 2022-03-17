import ImageTextLayoutST from '@/components/templates/ImageTextLayoutST/ImageTextLayoutST.vue'
import ImageTextCard from '@/components/organisms/ImageTextCard.vue'

export default {
  name : 'ImageTextLayoutST',
  components: { ImageTextCard, ImageTextLayoutST },
  data: () => ({
    Cards: [
      {

      },
      {
        title: 'タイトル',
        txtBody: '説明文',
        bgColor: '#00F040',
        lists: [
          {id: 1, content: 'さくら'},
          {id: 2, content: 'ヤシ'},
          {id: 3, content: 'クスノキ'},
        ],
        imgLeft: false,
        imgsrc: require('@/assets/gonuxt/img/sample02.jpg')
      },
      {
        title: 'タイトル',
        txtBody: '説明文',
        bgColor: '#F00040',
        lists: [
          {id: 1, content: 'さくら'},
          {id: 2, content: 'ヤシ'},
          {id: 3, content: 'クスノキ'},
        ],
        imgLeft: true,
        imgsrc: require('@/assets/gonuxt/img/sample03.jpg')
      }
    ]
  })
}