<template>
  <div class="card" @mouseover="imageChange()" @mouseleave="imageReturn()">
    <div class="card2">
      <div :class="class1">
        <v-layout justify-center>
          <v-img :src="imgSrc" class="border" height="167px"></v-img>
        </v-layout>
      </div>

      <div :class="class2">
        <v-layout justify-center>
          <v-img :src="imgSrc2" class="border" height="167px"></v-img>
        </v-layout>
        <p class="profile mt-4" align="left">{{ name }}</p>
        <p class="profile" align="left">{{ txt }}</p>
        <p class="profile" align="left">{{ txt2 }}</p>
        <p class="profile" align="left">{{ txt3 }}</p>
        <p class="profile" align="left">{{ txt4 }}</p>
        <p class="profile" align="left">{{ txt5 }}</p>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  props: {
    imgSrc: {
      type: String,
      default: require('@/assets/gonuxt/img/sample01.jpg'),
    },
    imgSrc2: {
      type: String,
      default: require('@/assets/gonuxt/img/sample02.jpg'),
    },
    name: {
      type: String,
      default: '名前',
    },
    txt: {
      type: String,
      default: '学年：○○',
    },
    txt2: {
      type: String,
      default: '学部：○○',
    },
    txt3: {
      type: String,
      default: '愛車：○○',
    },
    txt4: {
      type: String,
      default: '役職：○○',
    },
    txt5: {
      type: String,
      default: '新入生への一言：○○',
    },
  },
  data() {
    return {
      class1: 'open',
      class2: 'hidden',
    }
  },
  methods: {
    imageChange() {
      setTimeout(() => {
        this.class1 = 'hidden'
        this.class2 = 'open-reverse'
      }, 250)
    },
    imageReturn() {
      setTimeout(() => {
        this.class1 = 'open'
        this.class2 = 'hidden'
      }, 250)
    },
  },
}
</script>

<style scoped>
.hidden {
  display: none;
  text-align: center;
}

.open {
  text-align: center;
}

.open-reverse {
  transform: scale(-1, 1);
  text-align: center;
}

.card {
  height: 167px;
}

.card2 {
  transition: 1s; /* 2秒かけて動く */
  height: 167px;
}

.card:hover .card2 {
  transform: rotateY(180deg); /* マウスオーバー時に回転 */
}

.img-hover {
  box-shadow: 2px 2px 10px 0 black;
}

.profile {
  font-size: 16px;
  line-height: 5px;
  font-weight: bold;
}
</style>
