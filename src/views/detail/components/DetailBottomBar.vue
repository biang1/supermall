<template>
    <div class="detailBot">
        <div class="detailBotItem">
            <div class="icon"><img src="~assets/img/detail/icon01.png" alt=""></div>
            <p class="icon">客服</p>
        </div>
        <div class="detailBotItem">
            <div class="icon"><img src="~assets/img/detail/icon02.png" alt=""></div>
            <p class="icon">店铺</p>
        </div>
        <div class="detailBotItem">
            <div class="icon"><img src="~assets/img/detail/icon03.png" alt=""></div>
            <p class="icon">收藏</p>
        </div>
        <div class="bnt cart-style" @click="cartClick">加入购物车</div>
        <div class="bnt shop-style">购买</div>
    </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    data(){
      return{

      }
    },
    methods:{
      cartClick(){
        this.$emit('addShop')
      }
    }
  }
</script>

<style scoped>
    .detailBot{
        position: fixed;
        display: flex;
        height:49px;
        background-color: #ffffff;
        bottom:0;
        left:0;
        right:0;
        z-index:99;
        border-top:1px solid rgba(100,100,100,0.08);
    }
    .detailBotItem{
        width:16%;
        padding:6px;
    }
    .bnt{
        width:26%;
        line-height:49px;
    }
    .icon{
        text-align: center;
        font-size:12px;
        color: #333;
    }
    .icon img{
        width:20px;
        height:20px;
    }
    .cart-style{
        background-color: yellow;
        text-align: center;
    }
    .shop-style{
        background-color: #ff5777;
        text-align: center;
        color:#fff
    }
</style>
