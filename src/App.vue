
<template>
  <div>
     <router-view></router-view>
     <FooterGuide v-show="$route.meta.isShow"></FooterGuide>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
   name: 'footerGuide',
 
   components:{
     FooterGuide,
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>



</style>


