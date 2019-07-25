//引入路由
import Vue from 'vue'
import Router from 'vue-router'
//引入自定义组件
import test from "./components/test.vue"
import pageOne from "./components/pages/pageOne"
import pageTwo from "./components/pages/pageTwo"
import pageThree from "./components/pages/pageThree"

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/test",component:test,children:[
      {path:"/pageOne",component:pageOne,meta:{index:1,keepAlive:true}},
      {path:"/pageTwo",component:pageTwo,meta:{index:2,keepAlive:true}},
      {path:"/pageThree",component:pageThree,meta:{index:3,keepAlive:true}},
    ]}
  ]
})
