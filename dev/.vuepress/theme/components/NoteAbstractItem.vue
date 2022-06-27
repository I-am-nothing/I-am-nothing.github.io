<template>
  <div v-if="index & 1" class="abstract-item">
    <i v-if="item.frontmatter.sticky" class="iconfont reco-sticky"></i>
    <div class = "abstract-item-text">
      <div class="title">
      <i v-if="item.frontmatter.keys" class="iconfont reco-lock"></i>
      <router-link :to="item.path">{{item.title}}</router-link>
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
  <div v-else class="abstract-item">
    <i v-if="item.frontmatter.sticky" class="iconfont reco-sticky"></i>
    <div v-if="item.frontmatter.cover" class="abstract-item-img">
      <img :src="coverSrc" alt="cover" class="cover-img">
    </div>
    <div class = "abstract-item-text">
      <div class="title">
      <i v-if="item.frontmatter.keys" class="iconfont reco-lock"></i>
      <router-link :to="item.path">{{item.title}}</router-link>
      </div>
      <hr class="hr"></hr>
      <PageInfo
        :pageInfo="item"
        :currentTag="currentTag">
      </PageInfo>
    </div>
  </div>
</template>

<script>
import PageInfo from './PageInfo'
export default {
  components: { PageInfo },
  props: ['item', 'currentPage', 'currentTag', 'index'],
  computed: {
    coverSrc(){
      return this.item.frontmatter.cover;
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../styles/mode.styl'
.abstract-item
  position: relative;
  padding-left: 2rem
  padding-right: 2rem
  margin: 0 auto 1rem
  width: 100%
  overflow: hidden
  border-radius: 0.5rem
  box-shadow: var(--box-shadow)
  box-sizing: border-box
  transition: all .3s
  background-color: var(--background-color)
  cursor: pointer
  display: flex
  flex-grow: 1
  flex-direction: row
  min-height: 200px
  align-items: center
  min-height: auto;
  &:hover
    box-shadow: var(--box-shadow-hover)
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
    width: 40%
    overflow: hidden
    display: flex
    margin-top: 1.4rem
    margin-bottom: 1.4rem
    padding-left: 1rem
    padding-right: 1rem
    .cover-img
      width: 100%
      height: 100%
      -o-object-fit: cover
      object-fit: cover
      transition: all 1s
      height: 175px
      border-radius: 10px
  .abstract-item-text
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
      color: #7bb5f5;
      background-color: #7bb5f5;
      margin-bottom: 0.8rem
      margin-left: 2rem
      margin-right: 2rem
    .tags
      display block
      margin-bottom: 0!important
</style>