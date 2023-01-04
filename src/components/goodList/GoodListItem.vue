<template>
   <div class="goodListItem" @click="goodListItemClick">
           <img v-lazy="showImg" alt="" class="goodListItem-img" @load="imgLoad">
           <div class="goodListItem-content">
               <p>{{goods.title}}</p>
               <div class="goods-list-price">
                   <span class="good-price">{{goods.price}}</span>
                   <div>
                       <i class="collect-icon"></i>
                       <span>{{goods.cfav}}</span>
                   </div>
               </div>
           </div>
   </div>
</template>

<script>
  export default {
    name: "GoodListItem",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {

      }
    },
    computed:{
      showImg(){
        return this.goods.image || this.goods.show.img
      }
    },
    methods:{
      imgLoad(){
        this.$bus.$emit('itemImgLoad')
      },
      goodListItemClick(){
        this.$router.push('/Detail/'+this.goods.iid)
        // this.$router.push(
        //     {
        //       path:'/Detail',
        //       query:{
        //         iid:this.goods.iid
        //       }
        //     }
        // )
      }
    }
  }
</script>

<style scoped>
    .goodListItem{
     width:45%;
     padding:9px;
    }
    .goodListItem-img{
       width:100%;
       border-radius:3%;
    }
    .goodListItem-content{
        font-size:14px;
        color:#000000;
    }
    .goodListItem-content p{
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
        word-break:break-all;
        padding:5px 0 10px;
    }
    .goods-list-price{
        display: flex;
        justify-content:space-between;
    }
    .good-price{
        color:#ef4562;
    }
    .collect-icon {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(~assets/img/home/collect_icon.png) no-repeat;
        background-size: cover;
        vertical-align: bottom;
    }
</style>
