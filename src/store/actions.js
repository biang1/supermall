 export default {
   addGoods(context,payload){
     return new Promise((resolve,reject)=>{
       let oldProduct = context.state.cartList.find((item)=>{
         return item.iid === payload.iid
       })
       if(oldProduct){
         context.commit('addCount',oldProduct)
         resolve('商品+1')
       }else{
         payload.count =1
         context.commit('addToCart',payload)
         resolve('添加新的商品')
       }
     })
   },
   totalCheck(context,payload){
     context.commit('totalChecked',payload)
   }
 }
