export default {
  
  data() {
    return {
      currentSlide: 0,
      slides: [
        { id: 0, img: require('@/assets/gonuxt/img/sample01.jpg') },
        { id: 1, img: require('@/assets/gonuxt/img/sample02.jpg') },
        { id: 2, img: require('@/assets/gonuxt/img/sample03.jpg') },
      ],
      fade: 'next',
      show: true,
      timer: 0,
    }
  },
  computed: {
    Slides() {
      return this.slides.filter((slide) => {
        return slide.id === this.currentSlide
      })
    },
  },
  created() {
    this.timer = setInterval(() => {
      this.autoPlay()
    }, 3000)
  },
  methods: {
    autoPlay() {
      this.currentSlide++
      if (this.currentSlide === this.slides.length) {
        this.currentSlide = 0
      }
    },
    openWindow: function (height) {
      height = document.getElementById('slide-outers').clientHeight
      window.scrollTo({
        top: height,
        behavior: 'smooth',
      })
    },
  },
}
