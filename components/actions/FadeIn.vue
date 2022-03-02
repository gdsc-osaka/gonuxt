<template>
  <div :id="fadeIn" v-scroll="handleScroll">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FadeIn',
  props: {
    fadeIn: {
      type: String,
      default: 'fadeIn',
    },
  },
  methods: {
    handleScroll: function (evt, el, pos) {
      el = document.getElementById(this.fadeIn)
      pos = el.getBoundingClientRect().top
      if (pos < 280) {
        el.setAttribute('style', 'visibly 1; transition-duration: 1s; transform: translateY(0px);')
      } else {
        el.setAttribute('style', 'opacity: 0; transition-duration: 1s; transform: translateY(50px);')
      }
    },
  },
}
</script>