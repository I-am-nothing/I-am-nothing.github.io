<template>
  <router-link :to="item.path">
    <div id="xdd" :class="abstractItemStyle" ref="app">
      <i class="iconfont reco-sticky"></i>
      <div class="abstract-item-text">
        <div class="title">
        <i v-if="item.frontmatter.keys" class="iconfont reco-lock"></i>
        {{item.title}}</br>
        </div>
        <hr class="hr"></hr>
        <PageInfo
          :pageInfo="item"
          :currentTag="currentTag">
        </PageInfo>
      </div>
      <div v-if="item.frontmatter.cover" class="abstract-item-img">
        <img :src="coverSrc" alt="cover" class="cover-img">
      </div>
    </div>
  </router-link>
</template>

<script>
import PageInfo from './PageInfo'

var xdd = 0
export default {
  components: { PageInfo },
  props: ['item', 'currentPage', 'currentTag', 'index'],
  computed: {
    coverSrc(){
      return this.item.frontmatter.cover;
    },
    getWidth(){
      return window.innerWidth;
    }
  },
  data(){
    var object = {abstractItemStyle: "abstract-item "};

    if(this.index & 1) {
      object['abstractItemStyle'] += 'abstract-item-style-one draw';
    }
    else{
      object['abstractItemStyle'] += 'abstract-item-style-two draw meet';
    }

    return object;
  }
}
</script>

<style lang="stylus" scoped>
@require '../styles/mode.styl'
.center:hover {
  color: #6477b9;
}
.center::before, .center::after {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  -webkit-transform-origin: center;
          transform-origin: center;
}
.center::before {
  border-top: 2px solid #6477b9;
  border-bottom: 2px solid #6477b9;
  -webkit-transform: scale3d(0, 1, 1);
          transform: scale3d(0, 1, 1);
}
.center::after {
  border-left: 2px solid #6477b9;
  border-right: 2px solid #6477b9;
  -webkit-transform: scale3d(1, 0, 1);
          transform: scale3d(1, 0, 1);
}
.center:hover::before, .center:hover::after {
  -webkit-transform: scale3d(1, 1, 1);
          transform: scale3d(1, 1, 1);
  transition: transform 0.5s, -webkit-transform 0.5s;
}   
  
.draw
  padding-left: 2rem
  padding-right: 2rem
  &::after
    bottom: 0;
    right: 0;
  &:hover
    color: #60daaa;
    &::before, &::after
      width: 100%;
      height: 100%;
    &::before
      border-top-color: #60daaa;
      border-right-color: #60daaa;
      transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
    &::after
      border-bottom-color: #60daaa;
      border-left-color: #60daaa;
      transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;

.meet
  &:hover
    color: #fbca67;
    &::before
      border-top-color: #fbca67;
      border-right-color: #fbca67;
    &::after
      border-bottom-color: #fbca67;
      border-left-color: #fbca67;
      transition: height 0.25s ease-out, width 0.25s ease-out 0.25s;
  &::after
    top: 0;
    left: 0;

.abstract-item
  position: relative;
  padding-left: 2rem
  padding-right: 2rem
  margin: 1rem auto 1rem
  width: 100%
  overflow: hidden
  border-radius: 0.5rem
  box-shadow: var(--box-shadow)
  box-sizing: border-box
  transition: all .3s
  background-color: var(--background-color)
  cursor: pointer
  flex-grow: 1
  min-height: 200px
  align-items: center
  min-height: auto;
  &::before, &::after
    box-sizing: inherit;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
  transition: color 0.25s;
  &::before, &::after
    border: 4px solid transparent;
    width: 0;
    height: 0;
  &::before
    top: 0;
    left: 0;
  &:hover
    box-shadow: var(--box-shadow-hover)
    .abstract-item-text
      .hr
        background-color: #888888
    .tags
      display block
      margin-bottom: 0!important
  .tags
    .tag-item
      cursor: pointer;
      &.active
        color $accentColor
      &:hover
        color $accentColor
  .reco-sticky
    position absolute
    top 0
    left 0
    display inline-block
    color $accentColor
    font-size 2.4rem
  .abstract-item-img
    overflow: hidden
    display: flex
    margin-top: 1.75rem
    margin-bottom: 1.75rem
    box-sizing border-box
    justify-content center
    align-items center
    border-radius: 10px
    transition: all 0.5s
    .cover-img
      margin-left: auto
      margin-right: auto
      position relative
      -o-object-fit: cover
      object-fit: cover
      transition: all 0.5s 
  .abstract-item-text
    margin-left: 0.5rem
    margin-right: 0.5rem
    padding-top: 0.5rem
    padding-bottom: 0.5rem
    box-sizing: border-box
    height: -webkit-min-content
    height: -moz-min-content
    height: min-content
    flex: 1
    text-align: center;
    .title
      position: relative
      font-size: 1.28rem
      line-height: 46px
      display: inline-block
    .abstract
      pointer-events: auto;
    .hr
      font-family: Ubuntu,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 15px;
      margin-bottom: 0.8rem
      margin-left: 2rem
      margin-right: 2rem
      background-color: #469fff
    .tags
      display block
      margin-bottom: 0!important
@media screen and (min-width: 700px)
  .abstract-item
    .cover-img
      width: 100%
      height: auto
    &:hover
      box-shadow: var(--box-shadow-hover)
      .abstract-item-img
        width: 45%
      .cover-img
        width: 100%
        height: auto
  .abstract-item-style-one
    display: flex
    flex-direction: row-reverse;
    .abstract-item-img
      margin-left: 1rem
      margin-right: 1rem 
      width: 40%
  .abstract-item-style-two
    display: flex
    flex-direction: row;
    .abstract-item-img
      margin-left: 1rem
      margin-right: 1rem
      width: 40%
@media screen and (max-width: 700px)
  .abstract-item
    .cover-img
      width: 85%
      height: auto
    &:hover
      .abstract-item-img
        width: 100%
      .cover-img
        width: 100%
        height: auto
  .abstract-item-style-one
    display: list
    .abstract-item-img
      margin-left: auto
      margin-right: auto
      width: 100%
  .abstract-item-style-two
    display: list
    .abstract-item-img
      margin-left: auto
      margin-right: auto
      width: 100%
</style>