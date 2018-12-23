import Vue from 'vue'
import VueRouter from 'vue-router'
//注册VueRouter 才能使用</router-view>或</router-link>的标签
Vue.use(VueRouter)
import home from '@/components/Home.vue'
import about from '@/components/about.vue'

import document from '@/components/document'
import noFound from '@/components/404'
import user from '@/components/user'

import study from '@/view/study'
import work from '@/view/work'
import hobby from '@/view/hobby'
import slider from '@/view/slider'


let router = new VueRouter({
  mode: 'history',//历史模式    否则url上会出现hash（可以去掉试试看）
  linkActiveClass:'is-active',//给</router-link>添加active-class是同样的效果
  scrollBehavior(to,from,savePosition){//点击浏览器前进后退或切换导航触发
    // console.log(to);//要进入的目标路由对象   要去向哪里
    // console.log(from);//离开的路由对象   从哪里来
    // console.log(savePosition); //记录滚动条的坐标  点击前进后退的时候记录值

    if(to.hash){ 
      //定位到组件中有hash的那个地方    设置方法：1.路由中增加#abc  2.组建中设置id="abc"
      return {
        selector:to.hash
      }
    }

    /*if(savePosition){ //如果savePosition存在  这个函数的返回值就可以设置滚动条的位置
      return savePosition;
    }else{
      return {x:0,y:0}
    }*/

  },
  routes: [
    {
      path:'/',
      component:home
    },
    {
      path:'/user/:tip?/:userId?', //要想可以匹配/user/vip/1，/user/common/2 或者/user，需要加一个?，相当于正则中的{0，1}
      component:user
    },
    {
      path: '/home',
      name:'Home', //取的name名字
      component: home,
      alias:'/index' //别名
    },
    {
      path: "/about",
      // name:'About',
      component: about,
      children:[
        // {
        //   path:'study',//写成字符串就代表/about下的子路由了
        //   name:'About',
        //   component:study
        // },
        // {
        //   path:'work',  //  字符串形式相当于/about/work
        //   name:'Work',
        //   component:work
        // },
        // {
        //   path:'hobby',// /hobby
        //   name:'Hobby',
        //   component:hobby
        // },
        {
          path:'',//默认的子路由 /about     空字符串
          name:'About',
          component:study
        },
        {
          path:'/work',  //  /work
          name:'Work',
          component:work
        },
        {
          path:'/hobby',// /hobby
          name:'Hobby',
          component:hobby
        }
      ]
    },
    {
      path: "/document",
      name:'Document',
      components:{
        default:document,
        slider:slider
      }
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
    }
  ]
})
export default router;
