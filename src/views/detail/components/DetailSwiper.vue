<template>
    <swiper class="swiper-wrap">
        <swiper-item v-for="item in banners">
                <img :src="item" @load="imgLoad">
        </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from '@/components/swiper/index';
  export default {
    name: 'DetailSwiper',
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return {
        isLoad: false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imgLoad(){
        if(!this.isLoad){
          this.$emit('swiperImgLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>
    .swiper-wrap{
        height:350px;
    }
</style>
