<template>
    <div class="wrapper" ref="wrapper">
        <div>
            <div @click="bntClick">按钮</div>
            <ul>
                <li @click="bntClick2">列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
                <li>列表数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
  export default {
    name: "profile",
    data(){
      return{

      }
    },
    //组件创建完后调用
    mounted(){
      // new BScroll(document.querySelector('.wrapper'))
      //probeType:0 默认不派发scroll事件
      //probeType:1 滑动超过一定时间派发scroll事件
      //probeType:2 手指滑动过程中监听滚动位置，手指滑动结束停止监听滚动位置
      //probeType:3 手指滑动过程中和手指滑动时都监听滚动位置
     const bscroll = new BScroll(this.$refs.wrapper,{
         click:true,//对div及其他标签的点击事件起作用
         probeType:2,
       pullUpLoad:true,
       })
      // bscroll.on('scroll',position=>{
      //      // console.log(position)
      // })
      // bscroll.on('pullingUp',()=>{
      //   console.log('上拉更多')
      //   //可以多次使用上拉加载
      //   setTimeout(()=>{
      //     bscroll.finishPullUp()
      //   },2000)
      // })
    },
    methods:{
      bntClick(){
        console.log(222)
      },
      bntClick2(){
        console.log(333)
      }
    }
  }
</script>

<style scoped>
.wrapper{
    height:500px;
    background-color: red;
}
</style>
