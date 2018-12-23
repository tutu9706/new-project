<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <!-- event="mouseover" 加在行间可以改变动作 -->
        <router-link 
          to="/" 
          tag="li"      
          exact
        >
          <i class="fa fa-home"></i>
          <span>home</span>
        </router-link>

        <router-link 
          :to="{path:'/about'}" 
          active-class="activeClass" 
          tag="li"  
        >
          <i></i>
          <span>about</span>
        </router-link>

        <router-link 
          to="/document" 
          tag="li"
          active-class="activeClass" 
        >
          <i></i>
          <span>document</span>
        </router-link>


        <!-- 加了锚点的/document -->
        <!-- <router-link 
          to="/document#abc" 
          tag="li"
          active-class="activeClass" 
        >
          <i></i>
          <span>document</span>
        </router-link> -->


        <router-link 
          to="/user" 
          tag="li"
          active-class="activeClass" 
        >
          <i></i>
          <span>user</span>
        </router-link>
      </ul>
    </div>

    <!-- 侧边栏 -->
    <!-- <router-view name="slider"></router-view> -->


    <!-- 动画模式mode  1.out-in 先出再进   2.in-out 先进再出 -->
    <!-- <transition mode="out-in">
      <router-view class="center"></router-view>
    </transition> -->

    <input type="button" value="后退" @click="backHandle" />
    <input type="button" value="前进" @click="forwardHandle" />
    <input type="button" value="控制前进后退的步数go" @click="goHandle" />
    <input type="button" value="控制指定的导航push" @click="pushHandle" />
    <input type="button" value="控制前进后退的步数replace" @click="replaceHandle" />




    当前导航的下标:
    {{$route.meta.index}}

    <!-- 找到自定义的那个前缀动画.left- -->
    <transition :name="names">
      <router-view class="center"></router-view>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: "App",
  watch:{
    $route(to,from){
      // console.log(to);
      // console.log(from);
      // console.log(to.meta.index)  //目标导航的下标
      // console.log(from.meta.index)  //离开的导航的下标
      if(to.meta.index<from.meta.index){
        this.names="right";
      }else{
        this.names="left";
      }
    }
  },
  data() {
    return {
      index: "/home",
      names:'left'
    };
  },
  methods:{
    backHandle(){
      this.$router.back();
    },
    forwardHandle(){
      this.$router.forward();
    },
    goHandle(){
      // this.$router.go(-3);
      this.$router.go(3);
    },
    pushHandle(){
      // this.$router.push('/document');
      this.$router.push({path:'/document',query:{}});
    },
    replaceHandle(){
      this.$router.replace({path:'/document',query:{}});
    }
  }
};
</script>

<style>
  /* 通过.v-开头的<transition>不用取名字name */
  .v-enter{
    opacity: 0;
  }
  .v-enter-to{
    opacity: 1;
  }
  .v-enter-active{
    transition:1s;
  }
  .v-leave{
    opacity: 1;
  }
  .v-leave-to{
    opacity: 0;
  }
  .v-leave-active{
    transition: 2s;
  }
  /* 自定义向左运动 */
  .left-enter{
    transform: translateX(100%);
  }
  .left-enter-to{
    transform: translateX(0);
  }
  .left-enter-active{
    transition: 1s;
  }

  .left-leave{
    transform: translateX(0);
  }
  .left-leave-to{
    transform: translateX(-100%);
  }
  .left-leave-active{
    transition: 1s;
  }
  /* 自定义向右运动 */
  .right-enter{
    transform: translateX(-100%);
  }
  .right-enter-active,.right-leave-active{
    transition: 1s;
  }
  .right-leave-to{
    transform: translateX(100%);
  }
  
</style>
