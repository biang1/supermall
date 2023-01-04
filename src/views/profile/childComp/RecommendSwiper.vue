<template>
    <div class="recommend">
        <div v-for="item of recommends" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
            <p>{{item.title}}</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: "RecommendSwiper",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.recommend{
    display:flex;
    text-align: center;
    font-size:14px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #ededed;
}
.recommend-item{
    flex:1
}
.recommend-item img{
    width:65px;
    height:65px;
    margin-bottom:10px
}
</style>
