<template>
    <NavBar>
        <div slot="left" @click="back">
            <img  src="~assets/img/back.png" class="back-icon"/>
        </div>
        <div slot="center" class="center-title">
            <div
             v-for="(item,index) of titles"
             class="center-title-item"
             :class="{active:currentIndex === index}"
             @click="activeClick(index)"
            >
                {{item}}
            </div>
        </div>
    </NavBar>
</template>

<script>
  import NavBar from "@/components/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    components:{
      NavBar
    },
    data(){
      return{
        titles:['商品','参数','评论','推荐'],
        currentIndex:0,
      }
    },
    methods:{
      activeClick(index){
        this.currentIndex = index
        this.$emit('activeClick',index)
      },
      back(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
.center-title{
    display: flex;
}
.center-title-item{
        flex: 1;
        font-size:14px;
 }
.back-icon{
    width:30px;
    height:30px;
    margin-top:7px;
}
.active{
    color:red;
}
</style>
