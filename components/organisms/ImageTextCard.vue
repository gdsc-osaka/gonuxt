<template>
  <v-row justify="center" class="text-left" no-gutters>
    <v-col cols="12" sm="11">
    <div class="ui-section-feature-layout ui-layout-grid ui-layout-grid-2" :style="{background: bgColor}">
        <v-img
            :style= " imgLeft ? 'order:2' : 'order:3' "
            v-bind:src="imgSrc" 
            alt="#" 
        />
        <div class="sort">
            <h2><b>{{ title }}</b></h2>
            <p class="ui-text-intro">
            <span v-text="txtBody"></span>
            </p>
            <ul class="ui-component-list ui-component-list-feature ui-layout-grid">
                <li v-for="(list,id) in lists" :key="id" class="ui-component-list-item ui-component-list-item-check">
                    {{list.content}}
                </li>
            </ul>
        </div>    
    </div> 
    </v-col>
  </v-row>           
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '(title) place,activities, etc.',
    },
    txtBody: {
      type: String,
      default: '(txtbody)\nA perennial vascular plant with a stem apex that continues its activity (elongative growth) indefinitely and has a forming layer on the stem that undergoes secondary (hypertrophic) growth.',
    }, 
    bgColor: {
      type: String,
      default: '#E0E0E0'
    },
    lists: {
      type: Array,
      default: () => [
          {
            id: 1,
            content: '(lists) cheery blossom',
          },
          {
            id: 2,
            content: 'palm',
          },
          {
            id: 3,
            content: 'camphor tree',
          },
        ]
    },
    imgLeft: {
        type: Boolean,
        default: true
    },
    imgSrc: {
      type: String,
      default: require('@/assets/gonuxt/img/sample01.jpg')
    }
  },
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/app';

* {box-sizing: inherit}

div {
    display: block;
}

h2, p, ul{ 
    margin-top: 0;
}

p, ul{
    margin-bottom: 1.125rem
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
}

h2 {
  color: #353535;
  font-size: 1.5625rem;
  margin-bottom: .75rem;
  line-height: 1.2;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
}

ul {
    padding-left: 0;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 40px;
}

ul:last-child {
    margin-bottom: 0;
}


.ui-text-intro { 
    white-space: pre-wrap;
    word-wrap: break-word;
}

.ui-layout-flex, .ui-layout-grid{
    align-items: center;
    justify-content: center;
}
.ui-layout-grid{
    display: grid;
}

.ui-section-feature-layout{
    row-gap: 2rem;
}

.ui-component-list {
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
}

.ui-component-list-item-check {
    background-image: url(https://res.cloudinary.com/uisual/image/upload/assets/icons/check.svg);
}

.ui-component-list--item-cross {
  background-image: url(https://res.cloudinary.com/uisual/image/upload/assets/icons/cross.svg);
}

.ui-component-list-item {
    background-position: left center;
    background-repeat: no-repeat;
    background-size: 1.125rem;
    list-style: none;
    padding-left: 1.875rem;
}

.ui-component-list--pricing {
  margin-bottom: 1.5rem;
  margin-top: 1.25rem;
}

.sort {
    order: 1;
}


@media screen and (min-width: 48rem){
    h2 {
        font-size: 1.75rem;
    }
    .ui-section-feature-layout:first-of-type div {
        grid-row-start: initial;
    }
    .ui-layout-grid-2{
        column-gap: 1.5rem;
        grid-template-columns: repeat(2,1fr);
        justify-items: center;
    }
    .ui-component-list-item {
        background-size: 1.25rem;
        padding-left: 2rem;
    }
    .sort {
    order: 2;
    }
}

@media screen and (min-width: 75rem){
    h2 {
        font-size: 2.1875rem;
    }
    .ui-layout-grid-2{
        column-gap: 2rem;
        grid-template-columns: repeat(2,1fr);
        justify-items: center;
    }
    .ui-text-intro{
        font-size: 1.4375rem; 
    }
    .ui-section-feature-layout:last-of-type {
        margin-top: 7.5rem;
    }
    .ui-component-list-feature {
        column-gap: var(--ui-layout-gutter);
        grid-template-columns: repeat(2, 1fr);
  }
}
</style>