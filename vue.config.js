const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, //禁止eslint
//路径别名配置
configureWebpack:{
  resolve:{
    alias:{
      'assets':'@/assets'
    }
  }
}
})
