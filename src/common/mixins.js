import {debounce} from "@/common/until";
import BackTop from '@/components/backTop/BackTop'
export const imgRefrashMixin = {
  data(){
    return{
      itemImgLister:null,
      newRefresh:null,
    }
  },
  mounted(){
    this.newRefresh =debounce(this.$refs.scroll.refresh,50)
    this.itemImgLister = ()=>{
      this.newRefresh()
    }
    this.$bus.$on('itemImgLoad',this.itemImgLister)
  },
}

export const scrollTopMixin = {
  components:{
    BackTop
  },
  data(){
    return {
      isShow:false,
    }
  },
  methods:{
    backScrollTop(isPosition){
      this.isShow= isPosition > 700
    },
    backTop(){
      this.$refs.scroll.scrollTop(0,0)
    },
  }
}
