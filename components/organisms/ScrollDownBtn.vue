<template>
  <p class="scroll js-scroll">
    <a href="#" v-on:click.stop.prevent="openWindow">{{btnTxt}}</a>
  </p>
</template>

<script>
export default {
  props: {
    btnTxt: {
      type: String,
      default: 'btnTxt',
    },
  }
}
</script>

<style lang="scss" scoped>
.scroll {
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
  letter-spacing: 0.15em;
  text-shadow: 1px 0 1px black;
  a {
    position: relative;
    display: inline-block;
    font-size: 24px;
    font-weight: bold;
    color: white;
    text-decoration: none;
    padding: 0 0 50px;
    opacity: 0.8;
    &:before {
      content: '';
      position: absolute;
      width: 15px;
      height: 15px;
      left: 0;
      right: 0;
      bottom: 25px;
      margin: auto;
      border-bottom: 4px solid white;
      border-right: 4px solid white;
      transform: rotate(45deg);
      animation: move 2s infinite;
    }
  }
}

@keyframes move {
  0% {
    transform: rotate(45deg) translate(0, 0);
  }
  20% {
    transform: rotate(45deg) translate(8px, 8px);
  }
  40% {
    transform: rotate(45deg) translate(0, 0);
  }
}
</style>
