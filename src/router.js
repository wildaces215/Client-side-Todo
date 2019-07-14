import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Update from './components/Update.vue'
import Add from './components/Add.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add',
      name: 'add',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Add
    },
    {
      "path":"/update/:id",
      name:"update",
      component:Update
    }
  ]
})
