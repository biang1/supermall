<template>
    <div  v-if="isShow" class="toastWrap">
        <div>{{message}}</div>
    </div>
</template>

<script>
  export default {
    name: "Toast",
    // props:{
    //   message:{
    //     type:String,
    //     default(){
    //       return ''
    //     }
    //   },
    //   isshow:{
    //     type:Boolean,
    //     default:false,
    //   }
    // },
    data(){
      return {
        message:'',
        isShow:false
      }
    },
    methods:{
       show(message,time = 2000){
         this.message = message
         this.isShow = true
         setTimeout(()=>{
           this.message =''
           this.isShow = false
         },time)
       }
    }
  }
</script>

<style scoped>
 .toastWrap{
     position:fixed;
     left:50%;
     top:50%;
     padding:10px;
     transform: translate(-50%,-50%);
     background-color: rgba(0,0,0,0.5);
     color:#fff;
     z-index:12
 }
</style>
