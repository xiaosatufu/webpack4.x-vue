// alert(1)
import Vue from "vue"
// import VueRouter from 'vue-router'
import router from './router'
import Vuex from 'vuex'
import App from './App'

// Vue.use(VueRouter)
Vue.use(Vuex)




const store = new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    aaa(state) {
      state.count++
    }
  }
})




store.commit('aaa')
console.log(store.state.count)


// const Foo = {
//   template:'<div>1</div>'
// }
// const Bar = {
//   template:'<div>2</div>'
// }

// const routes = [
//   {
//     path:'/foo',
//     component:Foo
//   },
//   {
//     path:'/bar',
//     component:Bar
//   }
// ]


// const router = new VueRouter({
//   routes:routes
  
// })

console.log(Vue)

console.log(process.env.NODE_ENV)
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})


// new Vue({
//     render:h=>h(App)
// }).$mount("#app")