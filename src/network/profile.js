import {request} from './request'
//请求banner数据
export function getProfile(){
  return request({
    url:'/home/multidata'
  })
}

//请求goods数据
export function getGoodList(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page,
    }
  })
}
