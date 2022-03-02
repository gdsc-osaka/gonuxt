<template>
  <div :id="elementId" v-scroll="handleScroll">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FadeIn',
  props: {
    elementId: {
      type: String,
      default: 'fadeIn',
    },
    fadeInTime: {
      type: String,
      default: "1",
    },
  },
  methods: {
    handleScroll: function (evt, el, pos) {
      el = document.getElementById(this.elementId)
      pos = el.getBoundingClientRect().top
      if (pos < 280) {
        el.setAttribute('style', 'visibly 1; transition-duration: ' + this.fadeInTime + 's; transform: translateY(0px);')
      } else {
        el.setAttribute('style', 'opacity: 0; transition-duration: ' + this.fadeInTime + 's; transform: translateY(50px);')
      }
    },
  },
}
</script>