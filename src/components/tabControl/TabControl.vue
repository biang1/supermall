<template>
    <div class="tabControl">
        <div v-for="(item,index) of titles" :class="{active:index===activeIndex}" @click="tabItemClick(index)" class="tabControl-item">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        activeIndex:0
      }
    },
    methods:{
      tabItemClick(index){
        this.activeIndex = index
        this.$emit('getIndex',index)
      }
    }
  }
</script>

<style scoped>
   .tabControl{
       display: flex;
       font-size:14px;
       height:40px;
       line-height:40px;
       text-align: center;
       background-color: #fff;
       position: sticky;
       top:44px;
   }
   .tabControl-item{
       flex:1;
   }
    .active{
        color:palevioletred;
    }
    .active  span{
        padding:5px;
        border-bottom:1px solid palevioletred;
    }
</style>
