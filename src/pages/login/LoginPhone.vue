<template>
  <div class="loginPhone">
     <div class="content">
       <div class="logo">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
       </div>
       <div class="message"> 
          <div class="phone1">
              <input type="text" placeholder="请输入手机号">
          </div>
          <div class="code">
            <input type="text" placeholder="请输入手机验证码">
						<div class="getCode">
							获取验证码
						</div>
          </div>
          <div class="question">
            <span>遇到问题?</span>
            <span class="password">使用密码验证登录</span>
          </div>
					<div class="phone" @click="toHome">
           
						 <span>登录</span>
					</div>
					<div class="mail" @click="$router.push('/login')">
          
						 <span>其他登录方式</span>
					</div>
					<p class="quick">
						注册账号
						<i class="iconfont icon-tubiao-"></i>
					</p>
       </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
	  methods:{
		//   登录之前手机号验证
		  toHome(){
			  this.$router.push('/home')
		  }
	  }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.loginPhone
	width 100%
	input
		border none
		outline none
		font-size 26px
	.content
		width 100%
		position relative
		.logo
			width 100%
			height 200px
			padding-top 160px
			img
				width 200px
				height 80px
				margin-left 280px
		.message
			width 90%
			padding 30px
			.phone1
				width 100%
				height 100px
				line-height 130px
				font-size 28px
				border-bottom 1px solid #666
			.code
				width 100%
				height 100px
				line-height 130px
				font-size 28px
				border-bottom 1px solid #666
				.getCode
					margin-top 30px
					width 180px
					height 50px
					text-align center
					line-height 50px
					float right
					border 2px solid #666
					border-radius 8px
			.question
				width 100%
				height 100px
				line-height 130px
				font-size 28px
				color #666
				.password
					float right
			.phone
				width 100%
				height 100px
				background #B4282D
				margin 0 auto
				border-radius 10px
				text-align center
				line-height 100px
				font-size 28px
				color #fff
				vertical-align middle
				margin-top 30px
			.mail
				width 100%
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
			.quick
				font-size 28px
				margin-left 35px
				margin-top 30px
				text-align center
</style>
