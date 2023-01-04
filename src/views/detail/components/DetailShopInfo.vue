<template>
    <div class="detailShop">
       <div class="flex shopIconWrap" v-if="Object.keys(shop).length !==0">
           <img :src="shop.shopLogo" alt="">
           <div>{{shop.name}}</div>
       </div>
        <div class="flex">
            <div class="flex cSells">
                <div class="ShopNumber">
                    <p>{{shop.cSells | totalNum}}</p>
                    <p>总销量</p>
                </div>
                <div class="ShopNumber">
                    <p>{{shop.cGoods}}</p>
                    <p>全部宝贝</p>
                </div>
            </div>
            <div class="scoreWrap">
                <div v-for="(item,index) of shop.score" class="score" :key="index">
                    <span>{{item.name}}</span>
                    <span  :class="item.isBetter ? 'active': 'score-color'">{{item.score}}</span>
                    <span  :class="item.isBetter ? 'active-bg': 'score-bg'">{{item.isBetter ? '高' : '低'}}</span>
                </div>
            </div>
        </div>
        <div class="enter-shop-wrap">
            <div class="enter-shop">进店逛逛</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props:{
      shop:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      totalNum(value) {
        return  (value/10000).toFixed(1)+'万'
      }
    }
  }
</script>

<style scoped>
    .flex{
        display: flex;
    }
    .detailShop{
        border-bottom: 4px solid #ededed;
    }
    .shopIconWrap{
        padding:20px 10px;
        font-size:18px;
        align-items: center;
        color:#333333;
    }
    .shopIconWrap img{
        width:50px;
        height:50px;
        border-radius: 100%;
        border: 1px solid #d7d9e0;
        margin-right:10px;
    }
    .cSells{
        margin:20px 10px;
        border-right:1px solid #d7d9e0;
    }
    .ShopNumber{
        margin:0 16px;
    }
    .ShopNumber p{
        line-height:30px;
        font-size:16px;
        text-align: center;
    }
    .scoreWrap{
        margin-left:30px
    }
    .score{
        line-height:30px;
    }
    .score span{
        margin-right:15px
    }
    .score-color{
        color:#42b983;
    }
    .active{
        color:red
    }
    .score-bg{
        color:#fff;
        background-color: #42b983;
    }
    .active-bg{
        color:#fff;
        background-color: red;
    }
    .enter-shop-wrap{
        text-align: center;
    }
    .enter-shop {
        display: inline-block;
        background-color: #f2f2f2;
        font-size: 12px;
        padding: 6px 30px;
        border-radius: 100px;
        margin: 10px;
    }
</style>
