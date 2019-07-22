<template>
  <div class="loginHome">
      <div class="home">
          <div class="logo">
              <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
					<div class="phone" @click="showPhone">
             <i class="iconfont icon-shouji"></i>
						 <span>手机号码登录</span>
					</div>
					<div class="mail">
             <i class="iconfont icon-youxiang" @click="showMail"></i>
						 <span>邮箱账号登录</span>
					</div>
					<p class="quick">
						手机号快速注册
						<i class="iconfont icon-tubiao-"></i>
					</p>
					<ul class="footer">
						<li class="weixin">
               <i class="iconfont icon-weixin"></i>
							 <span>微信</span>
						</li>
						<li class="qq">
               <i class="iconfont icon-qq"></i>
							 <span>QQ</span>
						</li>
						<li class="sina">
							<i class="iconfont icon-weibo"></i>
							<span>微博</span>
						</li>
					</ul>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
	  name:'login',
	  props:{
		  showPhone:Function,
		  showMail:Function
	  },
	 
	  
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.loginHome
	width 100%
	.home
		width 100%
		position relative
		.logo
			width 100%
			height 205px
			padding-top 300px
			img
				width 280px
				height 90px
				margin-left 220px
	  .phone
			width 90%
			height 100px
			background #B4282D
			margin 0 auto
			border-radius 10px
			text-align center
			line-height 100px
			font-size 28px
			color #fff
			vertical-align middle
			.iconfont
				font-size 38px
				margin-right 20px
		.mail
			width 90%
			height 100px
			margin 0 auto
			border-radius 10px
			text-align center
			line-height 100px
			font-size 28px
			color #B4282D
			margin-top 30px
			vertical-align middle
			border 2px solid #B4282D
			.iconfont
				font-size 38px
				margin-right 20px
		.quick
			font-size 28px
			margin-left 35px
			margin-top 30px
			text-align center
		.footer
			width 100%
			position absolute
			bottom -400px
			left 180px
			display flex		
			li
				width 120px
				height 20px
				line-height 20px
				font-size 28px
				color #7f7f7f
				margin-right 30px
				vertical-align middle
				border-right 3px solid #7f7f7f
				.iconfont
					font-size 32px
					margin-right 10px
					vertical-align middle
			.sina
				border-right none
				
				
					
				



 
</style>
