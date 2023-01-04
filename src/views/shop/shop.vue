<template>
    <div class="shopWrap">
        <nav-bar class="navBar">
            <div slot="center">购物车（{{getCartListLength}}）</div>
        </nav-bar>
        <shop-list-item></shop-list-item>
        <total-number></total-number>
    </div>
</template>

<script>
    import NavBar from "@/components/navbar/NavBar";
    import ShopListItem from './components/shopListItem'
    import totalNumber from './components/totalNumber'
    import {mapGetters} from 'vuex'

  export default {
    name: "profile",
    components: {
      NavBar,
      ShopListItem,
      totalNumber
    },
    data(){
      return{
        number:0,

      }
    },
    computed:{
      ...mapGetters(['getCartListLength'])
    },
    created(){

    }
  }
</script>

<style scoped>
    .shopWrap{
        position: relative;
        height:100vh;
        background-color: #fff;
    }
    .navBar{
        position: relative;
        top:0;
        left:0;
        color:#fff;
        background-color: palevioletred;
        font-weight: bold;
        align-items: center;
    }
</style>
