<template>
  <div class="tab-bar-item" @click="activeClick">
    <div v-if="!isActive"><slot name="bar-icon"></slot></div>
    <div v-else><slot name="bar-icon-active"></slot></div>
    <div  :style="activeStyle" ><slot name="bar-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String,
      isColor:{
        type:String,
        default:'palevioletred'
      }
    },
    data(){
      return{
        // isActive:true
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) >-1
      },
      activeStyle(){
         return  this.isActive ? {color:this.isColor} :{}
      }
    },
    methods:{
      activeClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    height:49px;
    flex:1;
    text-align: center;
  }
  .active{
    color:palevioletred;
  }
</style>
