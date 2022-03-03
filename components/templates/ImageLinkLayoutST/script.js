export default {
  name: 'ImageLinkLayoutST',
  data: () => ({
    tiles2Col: [],
    tiles4Col: [],
  }),
  created: function () {
    this.tiles2Col = this.getTileData(4)
  },
  methods: {
    getTileData(ncol) {
      const tiles = []
      const positions = ['top', 'center', 'bottom']
      const titleSizeList = ['title-1', 'title-2', 'title-3', 'title-4']

      for (let i = 0; i < ncol; i++) {
        const titleSize = titleSizeList[i % titleSizeList.length]
        const imgIndex = (i % 3) + 1
        const pos = positions[i % positions.length]

        tiles.push({
          title: `ImageLinkLayout ${titleSize}`,
          titleSize: titleSize,
          imgSrc: require(`@/assets/gonuxt/img/sample0${imgIndex}.jpg`),
          txtPosition: pos,
        })
      }
      return tiles
    },
  },
}
