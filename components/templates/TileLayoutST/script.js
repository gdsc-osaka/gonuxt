/* eslint-disable no-console */
import PhotoTileA from '@/components/molecules/PhotoTileA'

export default {
  name: 'TileLayoutST',
  components: { PhotoTileA },
  data: () => ({
    tiles2Col: [],
    tiles4Col: [],
  }),
  created: function () {
    this.tiles2Col = this.getTileData(4, "text-h3");
    this.tiles4Col = this.getTileData(4, "text-h4");
  },
  methods: {
    getTileData(ncol, titleSize) {
      const tiles = [];
      const positions = ["top", "center", "bottom"];
      for (let i = 0; i < ncol; i++) {
        const imgIndex = i % 2 + 1;
        const pos = positions[i % positions.length];
        const link = (i % 2 === 0) ? null : { href: "/home", txt: "link text" }
        tiles.push({
          title: `Card A${i}`,
          titleSize: titleSize,
          imgSrc: require(`@/assets/img/gonuxt/sample0${imgIndex}.jpg`),
          txtPosition: pos,
          link: link,
        });
      }
      return tiles;
    }
  }
}