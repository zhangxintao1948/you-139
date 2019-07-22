<template>
  <div id="topic">
    <div class="header">
            <i class="iconfont icon-shouye"></i>
            <div class="tab">
              <span class="text active">发现</span>
              <span class="text">甄选家</span>
            </div>
            <i class="iconfont icon-iconset0157 first"></i>
            <i class='iconfont icon-gouwu1'></i>
    </div>
     <!-- 主页 -->
     <!-- <TopicFind></TopicFind> -->
     <TopicCulling></TopicCulling>
      <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import TopicFind from './TopicFind.vue'
import TopicCulling from './TopicCulling.vue'
  export default {
    components:{
      TopicFind,
      TopicCulling
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#topic
  position relative
  .header
    width 100%
    height 100px
    background #fafafa
    padding 0 13px 0 12px
    display flex
    flex-grow 1
    line-height 100px
    border-bottom: .01rem solid #d9d9d9
    position absolute
    top 0 
    left 0
    z-index 2
    .iconfont
      font-size 50px
    .tab
      width 320px
      height 100px
      text-align center
      margin-left 140px
      margin-right 80px
      .text
        font-size 28px
        color #7f7f7f
        margin-left 30px
        &.active
          font-size 40px
          color #b4282d
          font-weight bold
    .first
      display inline
      margin 0 30px 0 -20px
    
      
    

      
      
 
</style>
