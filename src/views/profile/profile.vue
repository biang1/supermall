<template>
    <div id="profile">
        <Profile class="home-nav">
            <div slot="center">购物车</div>
        </Profile>
        <tab-control :titles="['流行','新款','精选']" class="ControlPosition-top" ref="TabControl1" @getIndex="getType" v-show="ifTabControl"></tab-control>
        <Scroll ref="scroll" class="scrollWrapper" :probeType="2" :pull-up-load="true" @isPosition="isPosition" @pullingUp="pullingUp">
            <profile-swiper :banners="banner" @swiperImgLoad="swiperImgLoad"></profile-swiper>
            <recommend-swiper :recommends="recommend"></recommend-swiper>
            <feature-view></feature-view>
            <tab-control :titles="['流行','新款','精选']" class="ControlPosition" ref="TabControl2" @getIndex="getType" v-show="!ifTabControl"></tab-control>
            <good-list :goodData="goodList[type].list"></good-list>
        </Scroll>
        <back-top @click.native="backTop" v-show="isShow" ></back-top>
    </div>
</template>

<script>
    import Profile from '@/components/navbar/NavBar'
    import TabControl from '@/components/tabControl/TabControl'
    import GoodList from '@/components/goodList/GoodList'
    import Scroll from '@/components/scroll/Scroll'
    // import BackTop from '@/components/backTop/BackTop'
    import ProfileSwiper from './childComp/ProfileSwiper'

    import {getProfile,getGoodList} from '@/network/profile'
    import RecommendSwiper from "./childComp/RecommendSwiper";
    import FeatureView from "./childComp/FeatureView";
    import {imgRefrashMixin,scrollTopMixin} from '@/common/mixins'
    // import {debounce} from '@/common/until'
  export default {
    name: "profile",
    mixins:[imgRefrashMixin,scrollTopMixin],
    components:{
      Profile,
      TabControl,
      GoodList,
      Scroll,
      // BackTop,
      ProfileSwiper,
      RecommendSwiper,
      FeatureView,
    },
    data(){
      return {
        banner:[],
        dKeyword:[],
        keywords:[],
        recommend:[],
        goodList:{
          pop:{page:0,list:[]},
          new:{page:0,list:[]},
          sell:{page:0,list:[]},
        },
        type:'pop',
        ifTabControl:false,
        tabOffsetTop:0,
        saveY:0,
        // isShow:false,
      }
    },
    created(){
      this.getProfile()
      this.getGoodList('pop')
      this.getGoodList('new')
      this.getGoodList('sell')
    },
    destroyed(){
      // console.log('333')
    },
    activated(){
      this.$refs.scroll.scrollTop(0,this.saveY,0)
      this.$refs.scroll.refresh();
    },
    deactivated(){
      this.saveY = this.$refs.scroll.getScrollY()
      this.$bus.$off('itemImgLoad',this.itemImgLister)
    },
   // mounted(){
   //    const refresh =debounce(this.$refs.scroll.refresh,100)
   //    this.$bus.$on('itemImgLoad',()=>{
   //      // this.$refs.scroll.bscroll.refresh()
   //      refresh()
   //    })
   // },
    methods:{
      getProfile(){
        getProfile().then(res=>{
          this.banner=res.data.data.banner.list
          this.dKeyword=res.data.data.dKeyword.list
          this.keywords=res.data.data.keywords.list
          this.recommend=res.data.data.recommend.list
        })
      },
      getGoodList(type){
        const page=this.goodList[type].page + 1
        getGoodList(type,page).then(res=>{
          this.goodList[type].list.push(...res.data.data.list)
          this.goodList[type].page+=1
          this.$refs.scroll.bscroll.finishPullUp()
        })
      },
      getType(index){
        switch(index){
          case 0:
            this.type='pop';
            break;
          case 1:
            this.type='new';
            break;
          case 2:
            this.type='sell';
            break;
        }
        this.$refs.TabControl1.activeIndex = index
        this.$refs.TabControl2.activeIndex = index
      },
      isPosition(position){
        const isPosition= -position.y
        this.ifTabControl = isPosition > this.tabOffsetTop
        this.backScrollTop(isPosition)
      },
      // backTop(){
      //   this.$refs.scroll.scrollTop(0,0)
      // },
      pullingUp(){
        // console.log(5)
        this.getGoodList(this.type)

      },
      swiperImgLoad(){
        this.tabOffsetTop = this.$refs.TabControl2.$el.offsetTop
        this.newRefresh()
      },
    }
  }
</script>

<style scoped>
    #profile{
        /*padding-top:44px;*/
        height:100vh;
        position:relative;
    }
   .home-nav{
    background-color: palevioletred;
    color:#fff;
    position: fixed;
    left:0;
    top:0;
    right:0;
    z-index: 9;
    }
    .ControlPosition{
       /*position: sticky;*/
       /* top:44px;*/
       /* z-index: 9;*/
    }
    .ControlPosition-top{
        position:relative;
        top:44px;
        z-index:9
    }
    .scrollWrapper{
       position:absolute;
        top:44px;
        bottom:49px;
        left:0;
        right:0;
      /*height: calc(100% - 93px);*/
      /*  margin-top:44px;*/
        overflow: hidden;
    }
</style>
