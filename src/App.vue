<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
    <tab-bar-view></tab-bar-view>
  </div>
</template>

<script>

  import TabBarView from "./components/TabBarView";
export default {
  name: 'App',
  components: {
    TabBarView
  }
}
</script>

<style>
  @import './assets/css/publicCss.css';
</style>
