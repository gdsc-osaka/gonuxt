<template>
  <div>
    <div class="slide-outer">
      <transition name="fade">
        <div v-for="idx in slidesIdx" :key="idx" class="slide-inner">
          <img class="slide-img" :src="slides[currentSlide].img" />
        </div>
      </transition>
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
    slidesIdx() {
      return this.slides.filter(slide => {
        return slide.id === this.currentSlide;
      })
    }
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
.slide-outer {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 500px;
  display: flex;
}

.slider-inner {
  position: absolute;
  width: 100vw;
  height: 500px;
}

.slide-img {
  width: 100vw;
  height: 500px;
  object-fit: cover;
}

.fade-enter-active {
  transition: all 5s ease;
}

.fade-leave-active {
  transition: all 5s ease;
  position: absolute;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
