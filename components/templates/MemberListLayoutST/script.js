import MemberCard from '@/components/organisms/MemberCard.vue'

export default {
  name: 'MemberListLayoutST',
  components: { MemberCard },
  data: () => ({
    members: [
      {
        name: '(name) 田中 一郎',
        txtBody:
          '（txtBody）- 吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。',
        job: '（job）役職等',
        imgSrc: require('@/assets/gonuxt/img/sample01.jpg'),
      },
      {
        name: '(name) 田中 二郎',
        txtBody:
          '（txtBody）- 吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。',
        job: '（job）役職等',
        imgSrc: require('@/assets/gonuxt/img/sample02.jpg'),
      },
      {
        name: '(name) 田中 三郎',
        txtBody:
          '（txtBody）- 吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。',
        job: '（job）役職等',
        imgSrc: require('@/assets/gonuxt/img/sample03.jpg'),
      },
      {
        name: '(name) 田中 四郎',
        txtBody:
          '（txtBody）- 吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。',
        job: '（job）役職等',
        imgSrc: require('@/assets/gonuxt/img/sample01.jpg'),
      },
      {
        name: '(name) 田中 五郎',
        txtBody:
          '（txtBody）- 吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。',
        job: '（job）役職等',
        imgSrc: require('@/assets/gonuxt/img/sample02.jpg'),
      },
      {
        name: '(name) 田中 六郎',
        txtBody:
          '（txtBody）- 吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。',
        job: '（job）役職等',
        imgSrc: require('@/assets/gonuxt/img/sample03.jpg'),
      },
    ],
  }),
}
