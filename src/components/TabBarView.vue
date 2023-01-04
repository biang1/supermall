<template>
  <tab-bar>
    <tab-bar-item path="/profile"  isColor="palevioletred">
      <img slot="bar-icon" src="~assets/img/profile1.svg" alt="">
      <img slot="bar-icon-active" src="~assets/img/profile2.svg" alt="">
      <div slot="bar-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/sort">
      <img slot="bar-icon" src="~assets/img/sort1.svg" alt="">
      <img slot="bar-icon-active" src="~assets/img/sort2.svg" alt="">
      <div slot="bar-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shop">
      <img slot="bar-icon" src="~assets/img/shop1.svg" alt="">
      <img slot="bar-icon-active" src="~assets/img/shop2.svg" alt="">
      <div slot="bar-text">购物</div>
    </tab-bar-item>
    <tab-bar-item path="/mine">
      <img slot="bar-icon" src="~assets/img/mine1.svg" alt="">
      <img slot="bar-icon-active" src="~assets/img/mine2.svg" alt="">
      <div slot="bar-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "./TabBar";
  import TabBarItem from "./TabBarItem";
  export default {
    name: "TabBarView",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
