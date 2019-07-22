<template>
  <div id="footer">
     <a href="javascript:;" class="guide-item" @click="goto('/home')" :class="{on:$route.path=='/home'}">
         <span class="item-icon">
             <i class="iconfont icon-shouye"></i>
         </span>
         <span>首页</span>
     </a>
     <a href="javascript:;" class="guide-item" @click="goto('/category')" :class="{on:$route.path=='/category'}">
         <span class="item-icon">
             <i class="iconfont icon-chuangtougui"></i>
         </span>
         <span>分类</span>
     </a>
      <a href="javascript:;" class="guide-item" @click="goto('/topic')" :class="{on:$route.path=='/topic'}">
         <span class="item-icon">
             <i class="iconfont icon-tupian"></i>
         </span>
         <span>识物</span>
     </a>   
      <a href="javascript:;" class="guide-item" @click="goto('/cart')" :class="{on:$route.path=='/cart'}">
         <span class="item-icon">
             <i class="iconfont icon-gouwu1"></i>
         </span>
         <span>购物车</span>
     </a>
      <a href="javascript:;" class="guide-item" @click="goto('/login')" :class="{on:$route.path=='/login'}">
         <span class="item-icon">
             <i class="iconfont icon-tubiaozhizuomoban"></i>
         </span>
         <span>个人</span>
     </a>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #footer  //footer
      top-border-1px(#e4e4e4)
      position fixed
      z-index 100
      left 0
      right 0
      bottom 0
      background-color #fff
      width 100%
      height 100px
      display flex
      .guide-item
        display flex
        flex 1
        text-align center
        flex-direction column
        align-items center
        margin 5px
        color #999999
        &.on
          color red
        span
          font-size 24px
          margin-top 4px
          margin-bottom 4px
          .iconfont
            font-size 48px
    



 
</style>
