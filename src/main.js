// alert(1)
import Vue from "vue"
import App from './App'
console.log(Vue)
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