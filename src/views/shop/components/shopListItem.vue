<template>
      <scroll ref="scroll" class="ShopListWrap">
          <div v-for="item of getCartList" class="goodList">
              <div class="goodSelect">
                  <div class="radio" @click="checkClick(item)">
                      <input name="goods" class="check" :class="{checkClick:item.checked}" type="checkbox" value=""  />
                  </div>
                  <div class="goodImg">
                      <img :src="item.image" alt="" @load="imgLoad">
                  </div>
              </div>
              <div class="goodInfo">
                  <p class="text-style titleSize">{{item.title}}</p>
                  <p class="text-style descSize">{{item.desc}}</p>
                  <div class="price">
                      <span class="priceColor">{{item.price}}</span>
                      <span>x{{item.count}}</span>
                  </div>
              </div>
          </div>
      </scroll>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Scroll from "@/components/scroll/Scroll";
  export default {
    name: "shopListItem",
    components:{
      Scroll
    },
    data(){
      return{

      }
    },
    mounted(){
    },
    computed:{
      ...mapGetters(['getCartList'])
    },
    methods:{
      imgLoad(){
        this.$refs.scroll.refresh()
      },
      checkClick(value){
       this.$store.commit('setChecked',value)
      }
    }
  }
</script>

<style scoped>
    .ShopListWrap{
        position: absolute;
        top: 44px;
        bottom: 89px;
        left:0;
        right:0;
        overflow: hidden;
    }
    .goodList{
        display:flex;
        padding:6px;
        border-bottom:2px solid #cad9ea;
    }
    .goodSelect{
        display: flex;
    }
    .radio{
        display:flex;
        padding-right:5px;
        /*height:90px;*/
        /*line-height:90px;*/
        align-items: center;
    }
    .check {
        width: 15px;
        height: 15px;
        overflow: hidden;
        border-radius: 50%;
        border: 1px solid #ececec;
    }
    .checkClick{
        background: url(~assets/img/detail/check_active.png) no-repeat center;
        background-size: cover;
    }
    .titleSize{
        color:#000;
        font-size: 18px;
    }
    .descSize{
        font-size: 14px;
        color:#666666;
    }
    .goodImg{
        margin-right:10px;
    }
    .goodImg img {
        border-radius:10px;
        width:80px;
        height:90px;
    }
    .goodInfo{
       width:70%
    }
    .text-style{
        text-overflow:ellipsis;
        overflow: hidden;
        word-break: break-all;
        white-space:nowrap;
        line-height:25px;
    }
    .price{
        line-height:35px;
        display: flex;
        justify-content: space-between;
    }
    .priceColor{
        color:#F9CD0B;
    }
</style>
