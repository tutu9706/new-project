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
          to="/document#abc" 
          tag="li"
          active-class="activeClass" 
        >
          <i></i>
          <span>document</span>
        </router-link>

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

    <router-view name="slider"></router-view>


    <router-view class="center"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      index: "/home"
    };
  }
};
</script>

<style>
</style>
