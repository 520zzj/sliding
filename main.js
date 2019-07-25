//main.js引入其他库，并配置库
import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入vuex
import Vuex from "vuex"
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    width_s:document.documentElement.clientWidth
  }
})
router.beforeEach((to,from,next)=>{
  console.log(store.state.width_s)
  next();
  })
  new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
