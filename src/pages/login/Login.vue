<template>
  <div class="login">
       <div class="header">
              <i class="iconfont icon-shouye" @click="$router.push('/home')"></i>
              <div class="tab">
                <span class="text active">网易严选</span>
              </div>
              <!-- 搜索页路由 -->
              <i class="iconfont icon-iconset0157 first"></i>
              <i class='iconfont icon-gouwu1' @click="$router.push('/cart')"></i>
       </div>
     <LoginHome :showMail='showMail' :showPhone='showPhone' v-show="!isShowPhone && !isShowMail"></LoginHome>
     <LoginMail v-show="isShowMail"  :showMail='showMail'></LoginMail>
     <LoginPhone v-show="isShowPhone" :showPhone='showPhone'></LoginPhone>
    
  </div>
</template>

<script type="text/ecmascript-6">
import LoginHome from '../../pages/login/LoginHome'
import LoginPhone from '../../pages/login/LoginPhone'
import LoginMail from '../../pages/login/LoginMail'
  export default {
    data(){
      return{
        isShowPhone:false,
        isShowMail:false
      }
    },
    components:{
      LoginHome,
      LoginPhone,
      LoginMail
    },
    methods:{
      showPhone(){
        this.isShowPhone = !this.isShowPhone
      },
      showMail(){
        this.isShowMail = !this.isShowMail
      }
    }
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.login
  width 100%
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
