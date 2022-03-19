<template>
  <div :style="'background-color:'+bgcolor">
    <v-img :src="icon" class="icon rounded-circle img" height="1.25rem" width="1.25rem"/>
    <h4 class= "qa-title"><b>{{ title }}</b></h4>
    <p class= "qa-body">{{ txtBody }}</p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg",
    },
    title: {
      type: String,
      default: "Lorem ipsum dolor?",
    },
    txtBody: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    bgcolor: {
      type: String,
      default: '#FFFFFF'
    },

  },
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/app';

.icon{
  vertical-align: middle;
  display: inline-block; 
  margin-bottom: 0.5rem
}
.qa-title {
  font-size: 1rem;
  display: inline-block;
  margin-left: 0.5rem;
}
.qa-body {
  font-size: 1.25rem;
  margin-left: 2.0rem;
}
</style>