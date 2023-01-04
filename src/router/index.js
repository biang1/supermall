import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const Profile = ()=>import('@/views/profile/profile')
const Sort = ()=>import('@/views/sort/sort')
const Shop = ()=>import('@/views/shop/shop')
const Mine=()=>import('@/views/mine/mine')
const Detail=()=>import('@/views/detail/detail')
const routes= [
  {
    path:'/',
    component: Profile,
    redirect:'/Profile',
    meta:{title:'首页'}
  },
  {
    path:'/Profile',
    component:Profile,
    meta:{title:'首页'}
  },

  {
    path:'/Sort',
    component:Sort,
    meta:{title:'分类'}
  },
  {
    path:'/Shop',
    component:Shop,
    meta:{title:'购物车'}
  },
  {
    path:'/Mine',
    component:Mine,
    meta:{title:'我的'}
  },
  {
    path:'/Detail/:iid',
    component:Detail,
    meta:{title:'详情'}
  },
]
const router = new VueRouter({
  routes,
  mode:'history'
})
export default router
