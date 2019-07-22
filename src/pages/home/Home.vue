<template>
  <div id="home">
      <div class="font">
          <div class="header">
            <div class="logo">
              <a href="javascript:;"></a>
            </div>
            <div class="search">
              <i class="iconfont icon-iconset0157"></i>
              <span class="placeholder">搜索商品，共27101件好物</span>
            </div>
            <div class="login">
              <span class="text">登录</span>
            </div>
          </div>
        <!-- 导航 -->
        <div class="nav" v-show="{isShow:true}">
          <ul class="navList">
            <li class="navItem" v-for="(item,index) in navListData" :key="index" :class="{active:currentIndex===index?true:false}">
                {{navListData[index]}}
            </li>
          </ul>
          <div class="right-arrow" @click="toggleShow">
              <i class="iconfont icon-xiangxia"></i>
          </div>
        </div>
      </div>
     <!-- 遮罩层 -->
     <div class="mask"  v-show="isShow">
       <div class='center'>
         <div class="header">
         <div class="left">全部频道</div>
         <div class="right" @click="toggleShow">
           <i class="iconfont icon-xiangshang"></i>
         </div>
       </div>
       <div class="content">
          <div class="content-item navItem" v-for="(item,index) in navListData" :key="index" :class="{active:currentIndex===index?true:false}">
            {{item}}
          </div>
       </div>
       </div>
     </div>
     <!-- 轮播 -->
    <div class="frist swiper-container">
        <div class="swiper-wrapper">
             <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
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
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination">
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet"></span>
        </div>
      
    </div>
    <!-- 退款 -->
    <section class="introduce">
      <div class="item">
        <i class="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong"></i>
        <span>网易自营品牌</span>
      </div>
       <div class="item">
        <i class="iconfont icon-anquan"></i>
        <span>30天无忧退款</span>
      </div>
       <div class="item">
        <i class="iconfont icon-jiaoyi"></i>
        <span>48小时快速退款</span>
      </div>
    </section>
    <!-- 发请求列表 -->
    <div class="categoryList">
       <ul>
         <li class="category-item">
           <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
           <div>新品首发</div>
         </li>
         <li class="category-item">
           <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
           <div>新品首发</div>
         </li>
         <li class="category-item">
           <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
           <div>新品首发</div>
         </li>
         <li class="category-item">
           <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
           <div>新品首发</div>
         </li>
         <li class="category-item">
           <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
           <div>新品首发</div>
         </li>
          <li class="category-item">
           <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
           <div>新品首发</div>
         </li>
         <li class="category-item">
           <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
           <div>新品首发</div>
         </li>
         <li class="category-item">
           <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
           <div>新品首发</div>
         </li>
         <li class="category-item">
           <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
           <div>新品首发</div>
         </li>
         <li class="category-item">
           <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
           <div>新品首发</div>
         </li>
       </ul>
    </div>
    <!-- 限时抢购图片 -->
    <div class="selection">
      <a href="javascript:;">
        <img src="https://yanxuan.nosdn.127.net/9e2248500f961bfe0e872027776b1e79.gif" alt="">
      </a>
    </div>
    <!-- 限时抢购 -->
    <section class="shopGuide">
        <div class="shopCenter">
            <div class="shop-item">
              <p class="top">几千就能买到小确幸</p>
              <p class="bottom">严选必买爆款</p>
              <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
              <img src="https://yanxuan.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
            </div>
            <div class="shop-item">
              <p class="top">几千就能买到小确幸</p>
              <p class="bottom">严选必买爆款</p>
              <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
              <img src="https://yanxuan.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
            </div>
            <div class="shop-item">
              <p class="top">几千就能买到小确幸</p>
              <p class="bottom">严选必买爆款</p>
              <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
              <img src="https://yanxuan.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
            </div>
            <div class="shop-item">
              <p class="top">几千就能买到小确幸</p>
              <p class="bottom">严选必买爆款</p>
              <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
              <img src="https://yanxuan.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
            </div>
        </div>
    </section>
    <!-- 私人订制 -->
    <section class="private">
      <div class="private-item">
            <span>
            私人订制
            </span>
        </div>
        <div class="private-info">
          <div class="second swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="picture">
                    <img src="https://yanxuan.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png?imageView&quality=65&thumbnail=330x330" alt="">
                    <div class="text">
                      <span>空气净化器</span>
                      <span class="price">￥49.9</span>
                    </div>
                  </div>
                    <div class="picture">
                    <img src="https://yanxuan.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png?imageView&quality=65&thumbnail=330x330" alt="">
                    <div class="text">
                      <span>空气净化器</span>
                      <span class="price">￥49.9</span>
                    </div>
                  </div>
                   <div class="picture">
                    <img src="https://yanxuan.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png?imageView&quality=65&thumbnail=330x330" alt="">
                    <div class="text">
                      <span>空气净化器</span>
                      <span class="price">￥49.9</span>
                    </div>
                  </div>
                </div>           
                <div class="swiper-slide"> 
                   <div class="picture">
                    <img src="https://yanxuan.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png?imageView&quality=65&thumbnail=330x330" alt="">
                    <div class="text">
                      <span>空气净化器</span>
                      <span class="price">￥49.9</span>
                    </div>
                  </div>
                  </div>
                <div class="swiper-slide">
                    <div class="picture">
                    <img src="https://yanxuan.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png?imageView&quality=65&thumbnail=330x330" alt="">
                    <div class="text">
                      <span>空气净化器</span>
                      <span class="price">￥49.9</span>
                    </div>
                  </div>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div> 
          </div> 
    </section>
    <!-- 限时购 、新品首发组件-->
    <section class="sixPic">
      <div class="header">
         <div class="shop">限时购</div>
         <div class="more">更多
            <i class="iconfont icon-tubiao-"></i>
         </div>
      </div>
      <div class="content">
            <div class="picture">
                <img src="https://yanxuan.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="text">
                 
                  <span class="new-price">￥49.9</span>
                  <span class="old-price"><del>￥59.9</del></span>
                </div>
             </div>
             <div class="picture">
                <img src="https://yanxuan.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="text">
                
                  <span class="price">￥49.9</span>
                </div>
             </div>
             <div class="picture">
                <img src="https://yanxuan.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="text">
                
                  <span class="price">￥49.9</span>
                </div>
             </div>
             <div class="picture">
                <img src="https://yanxuan.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="text">
                  <span class="price">￥49.9</span>
                </div>
             </div>
      </div>
    </section>
 </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

  export default {
    name:'home',
    data(){
      return{ 
        currentIndex:0,
        isShow:false,
        // 发请求获取的数据
        navListData:["推荐","居家生活","服饰鞋包","美食酒水","个护清洁","母婴亲子","运动旅行","数码家电","全球特色"]
      }
    },
    mounted(){
      
      new Swiper ('.frist', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          bulletClass : 'swiper-pagination-bullet'
        }
      }),
      new Swiper ('.second', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })                
      new BScroll('.nav',{
         scrollX: true,
         click:true
      })
    },
    methods:{
      toggleShow(){
        this.isShow = !this.isShow
      }
    }
  }
  //原生点击事件
  window.onload = function(){
    //const navList = document.getElementsByClassName('navList')[0]
    //循环遍历监听
       const navItem = document.getElementsByClassName('navItem')
        for(let i = 0;i<navItem.length;i++){
          navItem[i].addEventListener('click',function(){
              for(let j=0;j<navItem.length;j++){
                navItem[j].classList.remove('active')
              }
              this.classList.add('active')
          })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#home
  width 100%
  height 9999px
  overflow hidden
  .font
    width 100%
    height 148px
    position fixed
    background #fff
    z-index 10
    .header
      width 100%
      height 80px
      background #fff
      display flex
      padding 8px 15px
      flex-grow 1
      .logo
        font-size 48px
        margin 12px
        width 140px
        height 40px
        background-image url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
        background-size cover
        background-position center
      .search
        width 442px
        height 56px
        display flex
        justify-content center
        align-items center
        background #ededed
        border-radius 15px
        margin-top 6px
        flex-grow 1
        .iconfont
          font-size 36px
          vertical-align middle
          margin-left -40px
        .placeholder
          vertical-align middle
          font-size 20px
          color #666
      .login
        width 74px
        height 40px
        margin-top 16px
        margin-left 20px
        margin-right 30px
        border 1px solid #b4282d
        display flex
        justify-content center
        align-items center
        .text
          color #b4282d
    .nav
      width 100%
      overflow hidden
      display flex
      flex-direction column
      position relative
      .navList
        height 60px
        width 1450px
        padding 0 30px
        display flex
        .navItem
          height 60px
          padding 0 16px 
          text-align center
          font-size 28px
          line-height 60px
          color #333
          &.active
            border-bottom 1px solid #b4282d
            color #b4282d
      .right-arrow
        width 200px
        height 60px
        line-height 60px
        position absolute
        top 0px 
        right 0
        z-index 2
        background #fff 
        .iconfont
          padding-left 120px
  .frist
    width 100%
    height 370px
    margin-top 160px
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
  .introduce
    width 100%
    height 72px
    line-height 72px
    display flex
    justify-content space-around
    .iconfont
      width 32px
      height 32px
      margin-right 5px
      color #b4282d
    span
      font-size 24px
  .categoryList
    width 100%
    ul
      width 100%
      .category-item
        width 20%
        height 156px
        float left
        flex-grow 1
        display flex
        flex-direction column
        justify-content center
        align-items center
        img
          margin 0 auto
          width 110px
          height 110px
          margin-bottom 5px
        div
          font-size 24px
  .selection
    width 100%
    img
      width 100%
  .shopGuide
    width 100%
    height 576px
    background #fff
    .shopCenter
      width 100%
      flex-grow 1
      padding 10px 30px 30px 26px
      box-sizing border-box
      .shop-item
        width 48%
        height 264px
        float left
        background #f5f5f5
        margin 4px 6px 0 4px
        .top
          font-size 32px
          color #333
          padding-top 20px
          padding-left 20px
        .bottom 
          font-size 24px
          color #7f7f7f
          padding-left 20px
        img
          width 150px
          height 150px
          margin-right 4px
          margin-top 4px
  .private
    width 100%
    height 430px
    border-top 10px solid #f5f5f5
    .private-item
      display inline-block
      width 33%
      height 100px
      span
        font-size 32px
        height 42px
        text-align center
        line-height 100px
        color #333
        margin-left 30px
    .private-info
      width 100%
      height 310px
      display flex
      flex-grow 1
      .swiper-slide
        width 100%
        height 310px
        display flex
        .picture
          width 33%
          display flex
          flex-direction column
          justify-content center
          align-items center
          img
            width 216px
            height 216px
            background #f5f5f5
          .text
            width 216px
            height 63px
            text-align center
            line-height 63px
            margin 0 8px
            padding 0 0 8px
            .price
              color #b4282d
  .sixPic
    width 100%
    height 100px
    border-top 10px solid #f5f5f5
    background #fff
    .header
      height 100px
      box-sizing border-box
      width 100%
      display flex
      justify-content space-between
      div
        width 96px
        height 42px
        font-size 32px
        color #333
        text-align center
        line-height 50px
        margin-top 30px
        margin-left 30px
        margin-right 30px
        .shop
          margin-top 30px
        .more
          font-size 28px
    .content
      width 100%
      height 600px
      display flex
      flex-wrap wrap
      .picture
        width 33%
        display flex
        flex-direction column
        justify-content center
        align-items center
        img
          width 216px
          height 216px
          background #f5f5f5
        .text
          width 216px
          height 63px
          text-align center
          line-height 63px
          margin 0 8px
          padding 0 0 8px
        .new-price
          color #b4282d
        .old-price
          color #7f7f7f
  .mask
    width 100%
    height 100%
    position absolute
    top 88px
    right 0
    z-index 10
    background rgba(0,0,0,.5)
    .center
      width 100%
      height 372px
      background #fff
      .header
        width 100%
        height 60px
        display flex
        align-items center
        .left
          font-size 28px
          margin-left 30px
        .right
          width 100px
          height 60px
          line-height 60px
          text-align center
          position absolute
          right 15px
          top 5px
      .content
        padding-top 24px
        background #fafafa
        background #fff
        .content-item
          width 150px
          height 56px
          font-size 24px
          margin 0 0 40px 30px
          border 2px solid #ccc
          border-radius 5px
          line-height 56px
          text-align center
          color #000
          float left
          &.active
            color #b4282d
            border 2px solid #b4282d


      




      
    
          
      







      





 
</style>
