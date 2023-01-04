import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import toast from '@/components/toast'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
//安装toast组件
Vue.use(toast)
//减少移动端点击延迟300ms
FastClick.attach(document.body)
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/lazy.gif')
})
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
