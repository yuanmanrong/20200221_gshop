<template>

      <header class="header">
        <slot name="left"></slot>
        <a class="header_title">
          <span class="header_title_text ellipsis">{{title}}</span>
        </a>
        <slot name="right"></slot>
      </header>

</template>

<script>
  export default {
    name: 'HeaderTop',
    props:{
      title:String
    }
  }
</script>

<style lang="stylus" ref="stylesheet/style/stylus">
   .header
     background-color #02a774
     position fixed
     top 0
     left 0
     z-index 100
     width 100%
     height 45px
     .header_title
       position absolute
       top 25%
       left 20%
       tranform translate(-50%,-50%)
       width 50%
       color #fff
       font-size 22px
       text-align center
       .header_title_text
         font-size 20px
         color #fff
         display block
</style>
