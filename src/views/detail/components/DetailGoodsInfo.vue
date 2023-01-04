<template>
    <div v-if="Object.keys(detailGoods).length !== 0">
        <div class="detailGoodsTop">
            <div class="top-left-style"></div>
            <div class="desc text-style">{{detailGoods.desc}}</div>
            <div class="top-right-style"></div>
        </div>
        <div class="img-list-wrap" v-for="item in detailGoods.detailImage">
            <div class="desc">{{item.key}}</div>
            <div v-for="(it,index) of item.list" :key="index">
                <img :src="it" alt="" @load="detailGoodsimgLoad">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props:{
      detailGoods:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{
        imgNumber:0,
        imgLength:0,
      }
    },
    methods:{
      detailGoodsimgLoad(){
        // if( ++ this.imgNumber === this.imgLength){
        //  this.$emit('detailGoodsimgLoad')
        // }
        this.$emit('detailGoodsimgLoad')
      }
    },
    watch:{
      // detailGoods(){
      //   this.imgLength = this.detailGoods.detailImage[0].length
      // }

    }
  }
</script>

<style scoped>
     .detailGoodsTop{
         position: relative;
         padding:10px;
     }
    .top-left-style{
        width: 100px;
        height: 1px;
        background-color: #333;
        margin-left: 4px;
    }
    .top-left-style::before{
          position: absolute;
          top: 6px;
          display: block;
          content: '';
          width: 5px;
          height: 5px;
          background-color: #333;
     }
    .text-style{
        padding:10px 0
    }
     .desc {
         font-size: 16px;
         line-height: 20px;
         margin: 4px 0;
         text-indent: 10px;
     }
    .top-right-style{
        position: absolute;
        width: 100px;
        height: 1px;
        background-color: #333;
        right:15px;
    }
     .top-right-style::after{
         position: absolute;
         right: 0px;
         top:-4px;
         display: block;
         content: '';
         width: 5px;
         height: 5px;
         background-color: #333;
     }
    .img-list-wrap img{
        width: 100%;
    }
</style>
