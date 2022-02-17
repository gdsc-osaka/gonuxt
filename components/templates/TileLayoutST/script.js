import PhotoTileA from '@/components/molecules/PhotoTileA'

export default {
  name: 'TileLayoutST',
  components: { PhotoTileA },
  data: () => ({
    tiles: [
      {
        title: "Card A0",
        imgSrc: require('@/assets/img/gonuxt/sample01.jpg'),
      },
      {
        title: "Card A1",
        imgSrc: require('@/assets/img/gonuxt/sample01.jpg'),
      },
      {
        title: "Card A2",
        imgSrc: require('@/assets/img/gonuxt/sample01.jpg'),
      },
      {
        title: "Card A3",
        imgSrc: require('@/assets/img/gonuxt/sample02.jpg'),
      },
      {
        title: "Card A4",
        imgSrc: require('@/assets/img/gonuxt/sample02.jpg'),
      },
      {
        title: "Card A4",
        imgSrc: require('@/assets/img/gonuxt/sample02.jpg'),
      },
    ]
  })
}