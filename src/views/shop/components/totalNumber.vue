<template>
    <div class="totalNumber">
        <input name="goods" class="check" :class="{checkClick:isTotalChecked}" type="checkbox" value="" @click="selectClick"/>
        <div class="font select">
            全选
        </div>
        <div class="font total">合计:￥{{total}}</div>
        <div class="font computed">去结算({{ListLength}})</div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "totalNumber",
    data(){
      return{
      }
    },
    computed:{
      ...mapGetters(['getCartList'],['getCartListLength'],['isTotalChecked']),
      total(){
       return  this.getCartList.filter((item)=>item.checked).reduce((pre,item)=>{
         return pre+item.price*item.count
       },0).toFixed(2)
      },
      ListLength(){
        return this.getCartList.filter((item)=>item.checked).length
      },
      isTotalChecked(){
        if(this.getCartList.length === 0) {
          return
        }else{
          // return !this.getCartList.filter((item)=> !item.checked).length
        return  !this.getCartList.find((item)=>{
            return !item.checked
          })
        }

      }
    },
    methods:{
      selectClick(){
        this.$store.dispatch('totalCheck')
      }
    }
  }
</script>

<style scoped>
    .totalNumber{
        display: flex;
        align-items: center;
        background-color: #d7d9e0;
        height:40px;
        position: absolute;
        bottom:49px;
        left:0;
        right:0;
    }
    .font{
       font-size:16px;
    }
    .select{
        margin-left:10px
    }
    .total{
        flex:1;
        text-align: center;
    }
    .computed{
        width:100px;
        text-align: center;
        background-color: #ff5777;
        color:#fff;
        line-height:40px;
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
</style>
