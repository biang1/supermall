<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props:{
      probeType:{
        type:Number,
        default:0,
      },
      pullUpLoad:{
        type:Boolean,
        default:false,
      }
    },
    data(){
      return{
        bscroll:null
      }
    },
    mounted(){
      this.bscroll = new BScroll(this.$refs.wrapper,{
        click:true,
        probeType: this.probeType,
        pullUpLoad:this.pullUpLoad,
      })
      if(this.probeType === 2 || this.probeType === 3){
        this.bscroll.on('scroll',position=>{
          this.$emit('isPosition',position)
        })
      }
      if(this.pullUpLoad){
        this.bscroll.on('pullingUp',()=>{
          this.$emit('pullingUp')
        })
      }
    },
    methods:{
      scrollTop(x, y, time=500){
        this.bscroll && this.bscroll.scrollTo(x, y, time)
      },
      refresh(){
        this.bscroll && this.bscroll.refresh()
      },
      getScrollY(){
       return this.bscroll ? this.bscroll.y : 0
      }
    }
  }
</script>

<style scoped>

</style>
