<template>
  <div class="topCulling">
     <div class="content">
          <div class="container">
            <div class="frist swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/4c7dea0d162b3dd3fb87dfe34829bb90.jpg?imageView&quality=75&thumbnail=670x371" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg?imageView&quality=75&thumbnail=750x0" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/ea5fde8d19b12c0e252365e713520cd6.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/8ceaa8053baf2056334e166493e9eaab.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/9a98a10f260bcde62951a36ac43b2f92.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                </div>
                </div>
              </div>
          </div>
          <div class="advice">
             <div class="top">
               <h3>建议征集</h3>
               <p>告诉我们，你的好物标准</p>
             </div>
             <div class="middle">
                 <div class="left">
                   <img src="https://yanxuan.nosdn.127.net/fdcfa17b26d048eacb4ea087bb678345.jpg?imageView&quality=75&thumbnail=272x200" alt="">
                 </div>
                 <div class="right">
                   <div class="title">你希望严选推出哪些方便菜肴呢？</div>
                    <div class="count">
                      <div class="count1">
                          <i class="iconfont icon-liuyanjianyi"></i>
                          <span>0条建议</span>
                      </div>
                      <div class="count2">
                          <i class="iconfont icon-guankan"></i>
                          <span>230人看过</span>
                      </div>
                    </div>
                 </div>
             </div>
            <footer class="footer">
               <div class="dec">
                 如果我们推出方便菜肴，你会希望有哪些口味呢？比如酸甜口味、香辣口味、咖喱口味或者其他口味；希望推出1人份还是多人份？希望是加热即食还是可以简单烹饪？你对严选的方便菜肴还有哪些期待呢？快来说说吧
               </div>
               <div class="sec">
                 我要建议
               </div>
            </footer>
          </div>
          <div class="sample">
             <div class="top">
               <h3>样式甄选</h3>
               <p>请挑选，你喜爱的好物款式</p>
             </div>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper";
  export default {
    mounted(){
        new Swiper ('.frist', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay:true,

        
        // 如果需要分页器
        // pagination: {
        //   el: '.swiper-pagination',
        // }
      })  
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.topCulling
  width 100%
  height 2000px
  position relative
  .content
    width 100%
    position absolute
    top 100px
    left 0
    .container
      padding 30px
      .frist
        width 100%
        height 380px
        border-radius 10px
        .swiper-wrapper
          .swiper-slide
            img
              width 100%
              height 100% 
        .swiper-pagination
          .swiper-pagination-bullet
            width 100px
            height 10px
            display inline-block
            background #fff
            opacity .3
            &.swiper-pagination-bullet-active
              background #fff
    .advice
      border-top 20px solid #fafafa
      width 100%
      height 70px
      padding 17px 0
      text-align center
      .top
        margin  0 auto
        h3
          font-size 36px
          color #333
          margin-bottom 12px
        p
          color #7f7f7f
          font-size 24px
      .middle
        height 260px
        margin 30px
        display flex
        background #fafafa
        align-items center
        .left
          width 272px
          height 200px
          line-height 200px
          margin-left 30px
          img 
            width 100%
            height 100%
        .right 
          margin-left 20px
          margin-top 40px
          text-align left
          .title
            width 318px
            font-size 32px
          .count
            display flex
            font-size 24px
            color #7f7f7f
            margin-top 40px
            .count1
              margin-right 16px
              margin-left 20px
      .footer
        margin 30px
        .dec
          color #7f7f7f
          font-size 24px
          text-align left
        .sec
          height 88px
          margin 30px 10px
          border 4px solid #eee
          font-size 28px
          text-align center
          line-height 88px
          border-radius 10px
          color #333
    .sample
      border-top 20px solid #fafafa
      width 100%
      height 70px
      padding 17px 0
      text-align center
      margin-top 560px
      .top
        h3
          font-size 36px
          color #333
          margin-bottom 12px
        p
          color #7f7f7f
          font-size 24px 
      
      



 
</style>
