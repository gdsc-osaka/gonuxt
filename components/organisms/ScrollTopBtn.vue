<template>
  <div id="btnmenu" v-scroll="handleScroll" class="btn-container">
    <v-btn fab elevation="6" :color="color" @click="scrollTop">
      <v-icon large color="white">mdi-chevron-up</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'ScrollTopBtn',
  props: {
    color: {
      type: String,
      default: 'warning',
    },
  },
  methods: {
    scrollTop: function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    handleScroll: function (evt, el, btm) {
      el = document.getElementById('btnmenu')
      btm =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      if (window.scrollY > 100 && window.scrollY < btm - 100) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(-64px, 0, 0)'
        )
      } else {
        el.setAttribute('style', 'opacity: 0;')
      }
    },
  },
}
</script>

<style>
.btn-container {
  opacity: 0;
  transition: 0.3s all cubic-bezier(0.39, 0.575, 0.565, 1);
  position: fixed;
  right: -40px;
  bottom: 32px;
  z-index: 9;
}
</style>
