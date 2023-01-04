<template>
    <div class="detailWrap">
       <detail-nav-bar class="nav-bar" ref="NavBar" @activeClick="activeClick"></detail-nav-bar>
        <Scroll ref="scroll" class="ScrollWrap"  :probeType="3" @isPosition="isPosition">
            <detail-swiper :banners="topBnner" @swiperImgLoad="swiperImgLoad"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detailGoods="detailGoods" @detailGoodsimgLoad="detailGoodsimgLoad"></detail-goods-info>
            <detail-size-info :detailSizeInfo="detailSizeInfo" ref="detailSizeInfo"></detail-size-info>
            <detail-comment-info :commentInfo="commentInfo" ref="commentInfo"></detail-comment-info>
            <good-list :goodData="recommendInfo" ref="goodList"></good-list>
        </Scroll>
        <detail-bottom-bar @addShop="addShop"></detail-bottom-bar>
        <back-top @click.native="backTop" v-show="isShow" ></back-top>
<!--        <Toast :message="message" :show="show"></Toast>-->
    </div>
</template>

<script>
    import DetailNavBar from "./components/DetailNavBar";
    import DetailSwiper from "./components/DetailSwiper";
    import DetailBaseInfo from "./components/DetailBaseInfo";
    import DetailShopInfo from "./components/DetailShopInfo";
    import DetailGoodsInfo from "./components/DetailGoodsInfo";
    import DetailSizeInfo from "./components/DetailSizeInfo";
    import DetailCommentInfo from "./components/DetailCommentInfo";
    import DetailBottomBar from "./components/DetailBottomBar";
    import GoodList from '@/components/goodList/GoodList'
    import Scroll from "@/components/scroll/Scroll";
    // import Toast from "@/components/toast/Toast"
    // import BackTop from '@/components/backTop/BackTop'
    import {getDetail,Goods,Shop,SizeInfo,getRecommend} from "@/network/detail"
    import {imgRefrashMixin,scrollTopMixin} from '@/common/mixins'
    import {debounce} from "@/common/until";
    import {ADDCOUNT} from "../../store/mutationsType";
    import { mapActions } from "vuex"


  export default {
    name: "detail",
    mixins:[imgRefrashMixin,scrollTopMixin],
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailSizeInfo,
      DetailCommentInfo,
      DetailBottomBar,
      GoodList,
      Scroll,
      // Toast,
      // BackTop
    },
    data(){
      return{
        topBnner:[],
        goods:{},
        shop:{},
        detailGoods:{},
        detailSizeInfo:{},
        commentInfo: [],
        recommendInfo: [],
        itemImgLister:null,
        scrollTopHeight:[],
        getThemeTopY:null,
        currentIndex:0,
        cartGoods:{},
        // message:'',
        // show:false,
      }
    },
    created(){
      this.getDetail()
    },
    mounted(){
      // const refresh =debounce(this.$refs.scroll.refresh,300)
      // this.itemImgLister = ()=>{
      //   refresh()
      // }
      // this.$bus.$on('itemImgLoad',this.itemImgLister)
      this.getThemeTopY= debounce(()=>{
        this.scrollTopHeight = []
        this.scrollTopHeight.push(0)
        this.scrollTopHeight.push(this.$refs.detailSizeInfo.$el.offsetTop)
        this.scrollTopHeight.push(this.$refs.commentInfo.$el.offsetTop)
        this.scrollTopHeight.push(this.$refs.goodList.$el.offsetTop)
        this.scrollTopHeight.push(Number.MAX_VALUE)
      },100)
    },
    destroyed(){
      this.$bus.$off('itemImgLoad',this.itemImgLister)
    },
    methods:{
      ...mapActions(['addGoods']),
      getDetail(){
        const idd = this.$route.params.iid
        getDetail(idd).then(res=>{
          const data = res.data.result;
          //1.获取顶部banner
          this.topBnner = data.itemInfo.topImages
          //获取商品详情
          this.goods = new Goods (data.itemInfo,data.columns,data.shopInfo)
                //获取商铺信息
          this.shop = new Shop(data.shopInfo)
          //获取商品详细信息
          this.detailGoods = data.detailInfo
          //参数信息
          this.detailSizeInfo = new SizeInfo(data.itemParams.info, data.itemParams.rule)
          //获取评论信息
          if(data.rate.cRate !== 0){
            this.commentInfo = data.rate.list
          }
        })
        //请求推荐数据
        getRecommend().then(res => {
          this.recommendInfo = res.data.data.list
        })
      },
      swiperImgLoad(){
        this.newRefresh ()
      },
      detailGoodsimgLoad(){
        this.newRefresh ()
        this.getThemeTopY()
      },
      activeClick(index){
        this.$refs.scroll.scrollTop(0,-this.scrollTopHeight[index],500)
      },
      isPosition(position){
        let positionY = - position.y
        this.backScrollTop(positionY)
        let length = this.scrollTopHeight.length
        // for (let i=0 ;i<length-1;i++){
        //   if(this.currentIndex !== i && ((i < length -1 && positionY > this.scrollTopHeight[i] && positionY < this.scrollTopHeight[i+1])
        //       || (i === length - 1  &&  positionY >= this.scrollTopHeight[i]))
        //   ){
        //     this.currentIndex = i;
        //     this.$refs.NavBar.currentIndex = this.currentIndex
        //   }
        // }
        for (let i=0 ;i<length-1;i++){
          if(this.currentIndex !== i && (positionY > this.scrollTopHeight[i] && positionY < this.scrollTopHeight[i+1])
          ){
            this.currentIndex = i;
            this.$refs.NavBar.currentIndex = this.currentIndex
          }
        }
      },
      addShop(){
        this.cartGoods.iid = this.$route.params.iid
        this.cartGoods.image = this.topBnner[0];
        this.cartGoods.title = this.goods.title;
        this.cartGoods.desc = this.goods.discountDesc;
        this.cartGoods.price = this.goods.lowNowPrice;
        // this.$store.dispatch('addGoods',this.cartGoods).then((res)=>{
        //   console.log(res)
        // })
        this.addGoods(this.cartGoods).then((res)=>{
          //普通组件传值
          // this.message = res
          // this.show = true
          // setTimeout(()=>{
          //   this.message =''
          //   this.show = false
          // },2000)
           this.$Toast.show(res)
        })
      }
    }
  }
</script>

<style scoped>
    .detailWrap{
        height: 100vh;
        position: relative;
        background-color: #fff;
        z-index:10;
    }
    .nav-bar{
        position: relative;
        background-color: #fff;
        top:0;
        left:0;
        z-index:11;
    }
    .ScrollWrap{
        height: calc(100% - 44px);
        z-index:11

    }
</style>
