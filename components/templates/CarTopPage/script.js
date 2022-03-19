export default {
  name: 'CarHeader',
  data: () => ({
    imgSrc: require('@/assets/gonuxt/img/sample01.jpg'),
    drawer: false,
    group: null,
    Name: 'OUAC 大阪大学自動車部',
    pages: [
      {
        icon: 'mdi-star',
        title: 'HOME',
        nuxtLink: '/templates',
      },
      {
        icon: 'mdi-star',
        title: '活動内容',
        nuxtLink: '/templates/key-visuals',
      },
      {
        icon: 'mdi-text',
        title: '新歓情報',
        nuxtLink: '/templates/texts',
      },
      {
        icon: 'mdi-text',
        title: '部員紹介',
        nuxtLink: '/templates/texts',
      },
      {
        icon: 'mdi-cards',
        title: '質問',
        nuxtLink: '/templates/cards',
      },
      {
        icon: 'mdi-list-status',
        title: 'リザルト',
        nuxtLink: '/templates/lists',
      },
    ],
  }),
}
