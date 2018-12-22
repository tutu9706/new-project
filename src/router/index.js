import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
<<<<<<< HEAD
import home from '@/components/Home.vue'
import about from '@/components/about.vue'

import document from '@/components/document'
import noFound from '@/components/404'
=======
import Home from '@/components/Home.vue'
import about from '@/components/about.vue'

import document from '@/components/document'

>>>>>>> 8989582c40f30a8cda0dc5765182fd86b5713c4b
let router = new VueRouter({
  mode: 'history',
  linkActiveClass:'is-active',
  routes: [{
      path: '/home',
<<<<<<< HEAD
      name:'Home', //取的name名字
      component: home,
      alias:'/index' //别名
    },
    {
      path: "/about",
      name:'About',
=======
      component: Home
    },
    {
      path: "/about",
>>>>>>> 8989582c40f30a8cda0dc5765182fd86b5713c4b
      component: about
    },
    {
      path: "/document",
<<<<<<< HEAD
      name:'Document',
      component: document
    },
    {
      path:"*",
      //component:noFound
      //redirect:'/home'
      // redirect:{path:'/home'}
      // redirect:{name:"About"}
      redirect:(to)=>{//动态设置重定向的目标
        //to目标路由对象，就是我们访问的路径信息
        // console.log(to)
        if(to.path==="/123"){
          return '/home'
        }else if(to.path==="/456"){
          return {path:'/document'}
        }else{
          return {name:'About'}
        }

        // return '/home'
      }
=======
      component: document
>>>>>>> 8989582c40f30a8cda0dc5765182fd86b5713c4b
    }
  ]
})
export default router;
