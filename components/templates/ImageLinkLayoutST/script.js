export default {
  name: 'ImageLinkLayoutST',
  data: () => ({
    Cards2Col: [],
    Cards4Col: [],
  }),
  created: function () {
    this.Cards2Col = this.getCardData(4)
  },
  methods: {
    getCardData(ncol) {
      const cards = []
      const titleSizeList = ['title-1', 'title-2', 'title-3', 'title-4']

      for (let i = 0; i < ncol; i++) {
        const titleSize = titleSizeList[i % titleSizeList.length]
        const imgIndex = (i % 3) + 1

        cards.push({
          title: `(title) ${titleSize}`,
          imgSrc: require(`@/assets/gonuxt/img/sample0${imgIndex}.jpg`),
        })
      }
      return cards
    },
  },
}
