import MemberCard from '@/components/organisms/MemberCard.vue'

export default {
  name: 'CardGalleryLayoutST',
  components: { MemberCard },
  data: () => ({
    members: [
      {
        name: '田中　太郎',
        txtBody:
          '（自己紹介本文）- 吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。',
        job: '（役職等）',
        imgSrc: require('@/assets/gonuxt/img/sample01.jpg'),
      },
      {
        name: '田中　太郎',
        txtBody:
          '（自己紹介本文）- 吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。',
        job: '（役職等）',
        imgSrc: require('@/assets/gonuxt/img/sample02.jpg'),
      },
      {
        name: '田中　太郎',
        txtBody:
          '（自己紹介本文）- 吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。',
        job: '（役職等）',
        imgSrc: require('@/assets/gonuxt/img/sample03.jpg'),
      },
      {
        name: '田中　太郎',
        txtBody:
          '（自己紹介本文）- 吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。',
        job: '（役職等）',
        imgSrc: require('@/assets/gonuxt/img/sample01.jpg'),
      },
      {
        name: '田中　太郎',
        txtBody:
          '（自己紹介本文）- 吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。',
        job: '（役職等）',
        imgSrc: require('@/assets/gonuxt/img/sample02.jpg'),
      },
      {
        name: '田中　太郎',
        txtBody:
          '（自己紹介本文）- 吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。',
        job: '（役職等）',
        imgSrc: require('@/assets/gonuxt/img/sample03.jpg'),
      },
    ],
  }),
}
