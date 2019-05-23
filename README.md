# y

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
#创建一个项目
vue webpack init demo 

#安装scss语法依赖
cd demo  
npm install css-loader sass-loader node-loader node-sass sass-resources-loader  --s-dev 

#scss 配置  
1.main.js 中引入 hotcss.js 解决移动端自适应问题    import "../static/lib/hotcss/hotcss"

#全局引入  px2rem.scss
1.将px2rem.scss 引入mixin.scss   @"./px2rem.scss" 
2 在mixin.scss中可以放入全局需要使用的scss变量  $color:red
3.配置文件中配置，将mixin.scss引入全局  build -> utils 中的

    scss: generateLoaders('sass').concat({
        loader: 'sass-resources-loader',
        options: {
            resources: path.resolve(__dirname, '../static/lib/hotcss/mixin.scss') 
        }
    })

4.在任意组件中设置 <style lang="scss" scoped>  即可以使用scss语法

#清除默认样式 
1.在app.vue  中的 style 中引入 @import "../static/reset/reset.css";  

#配置路由
1.确保已经安装vue-router 没有下载 npm install vue-router --save
2. 在src 中创建文件夹 router  创建文件 index.js
3. index.js 中配置
        1> 引入Vue      import Vue form "vue"
        2> 引入 Router  import Router form "vue-router"
        3> 使用中间件    Vue.use(router)
        4>创建router实例并暴露出去
                export default new Router( {
                    routes:[
                        {path:"xxx",
                        component:xxx}
                    ]
                })
4.在main.js 中引入  import router from "./src/router" ,挂载到vue实例上

#模块化引入vuex
 1. npm install vuex --save -dev
 2. 在src中创建store文件夹 创建index.ja    state.js getters.js matution.js matution-type.js actions.js
 3. index.js 引入其他js文件 暴露出去index.js
        1> import  Vue form "vue"
        2> import Vuex form  "vuex"
           Vue.use(vuex)
           export default  new Vuex.store({
               state,
               getters,
               matutions,
               actions
           })

 4. main.js引入store 挂载到vue的实例上
#封装自己的ajax
 1.在src文件中创建api文件夹  
       子文件 index.js      封装所有接口
       子文件  req-url.js   放置所有接口请求地址
       子文件  ajax.js      封装自己的ajax
       
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
