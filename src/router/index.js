import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/components/Home.vue'
import about from '@/components/about.vue'

import document from '@/components/document'

let router = new VueRouter({
  mode: 'history',
  linkActiveClass:'is-active',
  routes: [{
      path: '/home',
      component: Home
    },
    {
      path: "/about",
      component: about
    },
    {
      path: "/document",
      component: document
    }
  ]
})
export default router;
