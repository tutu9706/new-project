<template>
  <div class="a">关于我们
    <hr>
    <ul class="nav">
      <!-- <router-link to="/about" exact tag="li">
        <a>study</a>
      </router-link>
      <router-link to="/about/work" tag="li">
        <a>work</a>
      </router-link>
      <router-link to="/about/hobby" tag="li">
        <a>hobby</a>
      </router-link> -->

      <router-link :to="{name:'About'}" exact tag="li">
        <a>study</a>
      </router-link>
      <router-link :to="{name:'Work'}" tag="li">
        <a>work</a>
      </router-link>
      <router-link :to="{name:'Hobby'}" tag="li">
        <a>hobby</a>
      </router-link>
    </ul>
    <hr>
    测试数据:{{test}}
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  beforeCreate(){//创建组件时候执行的钩子函数
    console.log('beforeCreate');
    
  },
  beforeRouteEnter (to, from, next) {
    // ...
    console.log("beforeRouteEnter");
    // console.log(this);//这里的this是undefined ，因为beforeRouteEnter在执行的时候这个组件的实例还没有被创建出来
    
    next((vm)=>{ //next接收的这个回调函数参数就是当前这个组件的实例
      vm.test='改变了'
    })
  },
  beforeRouteUpdate(to, from, next){//当组建内  
    console.log('beforeRouteUpdate');
    next()
  },
  beforeRouteLeave (to, from, next) {
    // ...
    console.log('beforeRouteLeave');
    next()
    
  },
  data() {
    return {
      test:'改变前'
    };
  }
};
</script>
<style>
</style>