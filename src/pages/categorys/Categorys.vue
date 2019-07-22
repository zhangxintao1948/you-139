<template>
  <div id="categorys">
     <div class="header">
       <div class="search">
          <i class="iconfont icon-iconset0157"></i>
          <span class="placeholder">搜索商品，共27101件好物</span>
     </div>
     </div>
    <div class="content">
       <ul class="list">
          <li class="list-item active">
            <a href="javascript:;">
                 推荐专区
            </a> 
          </li>
          <li class="list-item">
            <a href="javascript:;">
                 推荐专区
            </a> 
          </li>
          <li class="list-item">
            <a href="javascript:;">
                 推荐专区
            </a> 
          </li>
       </ul>
     <div class="right">
        <img class="bigImg" src="https://yanxuan.nosdn.127.net/cb225335d4a438564040f00b448e8db8.png?imageView&thumbnail=0x196" alt="">
           <ul class="rightContent">
             <li class="item">
                 <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144" alt="">
                 <div class="text">员工精选好货</div>
             </li>
              <li class="item">
                 <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144" alt="">
                 <div class="text">员工精选好货</div>
             </li>
              <li class="item">
                 <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144" alt="">
                 <div class="text">员工精选好货8888888</div>
             </li>
              <li class="item">
                 <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144" alt="">
                 <div class="text">员工精选好货</div>
             </li>
           </ul>
     </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#categorys
  .header
    width 100%
    height 88px
    padding 0 30px
    display flex
    justify-content center
    align-items center
    border-bottom 2px solid #d9d9d9
    .search
      flex-grow 1
      height 56px
      background #ededed
      margin-right 60px
      border-radius 10px
      text-align center
      line-height 56px
      .placeholder
        font-size 28px
        color #666
  .content
    width 100%
    height 1148px
    flex-grow 1
    position relative
    .list
      width 20%
      float left
      .list-item
        width 100%
        height 60px
        text-align center
        margin  40px 0
        box-sizing border-box
        &.active
          border-left 6px solid #ab2b2b
          a
            color #ab2b2b
        a
          font-size 29px
          color #333
          line-height 50px
    .right
      heigth 100%
      overflow hidden
      float right
      padding 30px 30px 21px
      .bigImg
        width 528px
        height 192px
        margin-bottom 32px
        background: center no-repeat #eeeeee
        background-size cover
        border-radius 4px
      .rightContent
        width 528px
        .item
          width 144px
          height 216px
          float left
          margin-right 32px
          img
            width 144px
            height 144px
          .text
            width 144px
            height 72px
            text-align center
        
       





 
</style>
