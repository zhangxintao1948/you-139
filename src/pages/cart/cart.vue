<template>
  <div class="cart">
    <header class="header">
      <h3>购物车</h3>
      <span>领劵</span>
    </header>
    <div class="business-promise">
      <ul class="promise-list">
        <li>
          <span>30天无忧退货</span>
        </li>
        <li>
          <span>48小时快速退款</span>
        </li>
        <li>
          <span>满88元免邮费</span>
        </li>
      </ul>
    </div>
    <div class="contentCenter">
      <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
      <span>添加点什么吧</span>
      <button @click="$router.push('/login')">登录</button>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cart
    width 100%
    height 100%
    background #f4f4f4
    .header
      width 670
      height 88px
      line-height 88px
      padding 0 40px
      display flex
      justify-content space-between
      font-size 30px
      background #ffffff
      h3
        height 88px
        line-height 88px
        font-size 38px
      span
        color #b4282d
        margin-right 30px
    .business-promise
      height 72px
      padding 0 35px
      .promise-list
        width 100%
        height 100%
        display flex
        justify-content space-between
        align-items center
        li
          height 36px
          line-height 36px
          font-size 24px
          span
            color #666
            margin-left 5px
            vertical-align top
    .contentCenter
      display flex
      flex-direction column
      justify-content center
      align-items center
      margin-top 380px
      img
        width 248px
        height 248px
      span
        font-size 28px
        color #999
      button
        color #fff
        font-size 30px
        width 480px
        height 92px
        background #b4282d
        outline none
        border none
        margin-top 50px
</style>
