import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const Foo = () => import(/* webpackChunkName:'foo'*/'../pages/foo.vue');
const Bar = () => import(/* webpackChunkName:'bar'*/'../pages/bar.vue');
const Count = () => import(/* webpackChunkName:'bar'*/'../pages/count.vue');
// const Foo = () => import('./Foo.vue')

// const Foo = {
//   template:'<div>1</div>'
// }
// const Bar = {
//   template:'<div>2</div>'
// }
const router = new VueRouter({
    routes:[
        {
            path:'/foo',
            component:Foo
        },
        {
            path:'/bar',
            component:Bar
        },
        {
            path:'/count',
            component:Count
        }
    ]
})


export default router