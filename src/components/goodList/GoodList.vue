<template>
   <div class="goodList">
       <good-list-item v-for="(item,index ) of goodData" :goods="item" :key="index">
       </good-list-item>
   </div>
</template>

<script>
    import GoodListItem from "./GoodListItem";
  export default {
    name: "GoodList",
    components:{
      GoodListItem
    },
    props:{
      goodData:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
.goodList{
    display: flex;
    flex-wrap:wrap;
    justify-content:space-between;
    width:100%;
}
</style>
