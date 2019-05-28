// alert(1)
import Vue from "vue"
import App from './App'
console.log(Vue)

console.log(process.env.NODE_ENV)
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})


// new Vue({
//     render:h=>h(App)
// }).$mount("#app")