<template>
    <div v-if="Object.keys(goods).length !== 0" >
      <div class="baseInfoWrap">
          <div class="baseInfoTitle">{{goods.title}}</div>
          <div class="price">
              <div class="newPrice">{{goods.price}}</div>
              <div class="oldPrice">{{goods.oldPrice}}</div>
              <div class="discountDesc">{{goods.discountDesc}}</div>
          </div>
          <div class="columnsNumber">
              <div>{{goods.columns[0]}}</div>
              <div>{{goods.columns[1]}}</div>
              <div>{{goods.services[goods.services.length-1].name}}</div>
          </div>
      </div>
        <div class="serves-wrap">
            <div v-for="index in goods.services.length-1" :key="index">
                <img :src="goods.services[index-1].icon" alt="">
                {{goods.services[index-1].name}}
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
   .baseInfoWrap{
       height:100%;
       padding:20px 10px 0;
   }
    .baseInfoTitle{
        font-size:18px;
        line-height:20px;
    }
    .price{
        display: flex;
        justify-content:flex-start;
        padding:10px 0;
    }
    .newPrice{
        font-size:24px;
        color:#ff5777;
    }
    .oldPrice{
        font-size:16px;
        text-decoration:line-through;
        color:#d7d9e0;
        padding:10px 10px 0;
    }
    .discountDesc{
        padding: 2px 6px;
        font-size: 12px;
        height: 20px;
        border-radius: 15px;
        line-height: 20px;
        background-color: #ff5777;
        text-align: center;
        color: #ffffff;
    }
    .columnsNumber{
        display: flex;
        justify-content:space-between;
        color:#a2a5b3;
        font-size:12px;
        padding:10px 0 8px;
        border-bottom: 1px solid #ededed;
    }
   .serves-wrap {
       display: flex;
       font-size: 14px;
       color: #333;
       padding: 20px 4px;
       justify-content: space-between;
       border-bottom: 4px solid #ededed;
   }
   .serves-wrap img {
       width: 12px;
       height: 12px;
       vertical-align: middle;
   }
</style>
