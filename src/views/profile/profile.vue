<template>
    <div>
        <Profile class="home-nav">
            <div slot="center">购物车</div>
        </Profile>
    </div>
</template>

<script>
    import Profile from '@/components/navbar/NavBar'
    import {getProfile} from '@/network/profile'
  export default {
    name: "profile",
    components:{
      Profile
    },
    data(){
      return {
        banner:[],
        dKeyword:[],
        keywords:[],
        recommend:[],
      }
    },
    created(){
      getProfile().then(res=>{
        this.banner=res.data.data.banner.list
        this.dKeyword=res.data.data.dKeyword.list
        this.keywords=res.data.data.keywords.list
        this.recommend=res.data.data.recommend.list
      })
    }
  }
</script>

<style scoped>
.home-nav{
    background-color: palevioletred;
    color:#fff;
}
</style>
