import Toast from './Toast'

const obj ={

}
 obj.install = function(Vue){
//创建组件构造器
  const ToastContrustor = Vue.extend(Toast)
  //根据组件构造器创建一个组件对象
  const toast = new ToastContrustor()
  //将组件对象手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  //toast.$el对应的就是div
  document.body.appendChild(toast.$el)
  Vue.prototype.$Toast  =toast
 }

 export default  obj
