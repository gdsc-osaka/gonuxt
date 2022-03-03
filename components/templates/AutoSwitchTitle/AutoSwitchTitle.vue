<template>
  <div>
    <div class="slide-outer">
      <transition name="fade">
        <div v-for="slide in Slides" :key="slide.id" class="slide-inner">
          <img class="slide-img" :src="slide.img" />
        </div>
      </transition>
      <div class="slide-element">
        <p>最高のバーミキュラ体験を。</p>
        <h1>VERMICULAR</h1>
        <h2>HOUSE</h2>
      </div>
    </div>
  </div>
</template>

<script>
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
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/app';

.slide-outer {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 530px;
  display: flex;
}

.slider-inner {
  position: absolute;
  width: 100vw;
  height: 530px;
}

.slide-img {
  width: 100vw;
  height: 530px;
  object-fit: cover;
}

.fade-enter-active {
  transition: all 2.5s ease;
}

.fade-leave-active {
  transition: all 2.5s ease;
  position: absolute;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-element {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  color: white;
  text-align: center;
}

.slide-element h1 {
  font-size: 3.2em; 
  font-weight: bold;
  letter-spacing: 0.15em;
}

.slide-element h2 {
  font-size: 2em; 
  font-weight: bold;
  letter-spacing: 0.15em;
}

.slide-element p {
  font-size: 1.1em; 
}

</style>
