 import {ADDCOUNT,ADDTOCART,SET_CHECKED,TOTAL_CHECKED} from './mutationsType'
export default{
   [ADDCOUNT](state,payload) {
     payload.count += 1
     state.cartList = [...state.cartList]
   },
   [ADDTOCART](state,payload){
     payload.checked = true
     state.cartList.push(payload)
   },
   [SET_CHECKED](state,payload) {
     const index =state.cartList.findIndex((item) => {
       return item.iid === payload.iid
     })
     state.cartList[index].checked = !state.cartList[index].checked
     state.cartList = [...state.cartList]
   },
   [TOTAL_CHECKED](state){
     const isChecked = state.cartList.find((item)=>{
       return !item.checked
     })
     if(isChecked){
        state.cartList.forEach((item)=>{
         return item.checked = true
       })
     }else{
       state.cartList.forEach((item)=>{
         return item.checked = false
       })
     }
     state.cartList = [...state.cartList]
   }
 }
