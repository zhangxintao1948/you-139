<template>
  <div class="topic-find">
      <div class="nav">
        <ul class="nav-tab">
          <li class="tab-item" v-for="(item,index) in ListArr" :key="index">
              <a href="javascript:;" class="text">
                {{item}}
              </a>
          </li>
        </ul>
      </div>
       
<FindClub></FindClub>
<FindPub></FindPub>
  </div>
</template>

<script type="text/ecmascript-6">
import FindClub from '../../components/FindClub/FindClub'
import FindPub from '../../components/FindPub/FindPub.vue'
  export default {
    data(){
      return{
        ListArr:["推荐","居家生活","服饰鞋包","美食酒水","个护清洁","母婴亲子","运动旅行","数码家电","全球特色"]
      }
    },
    components:{
      FindClub,
      FindPub
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.topic-find
  width 100%
  height 100%
  overflow hidden
  .nav
    width 100%
    height 64px
    background #fafafa
    border-bottom .01rem solid #d9d9d9
    display flex
    .nav-tab
      display flex
      height 36px
      white-space nowrap
      .tab-item
        height 36px
        line-height 36px
        text-align center
        padding 0 8px
        margin 18px
        .text
          display block
          font-size 28px
          color #7f7f7f
          padding-bottom 5px
          &.active
            border-bottom 4px solid #B4282d


</style>
