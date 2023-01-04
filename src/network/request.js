import axios from 'axios'
export function request(config){
  //创建axios实例
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
  })
  //axios拦截器
  instance.interceptors.request.use(config=>{
    return config
  },err=>{
    console.log(err)
  })
  instance.interceptors.response.use(config=>{
    return config
  },err=>{
    console.log(err)
  })
  return instance(config)
}
