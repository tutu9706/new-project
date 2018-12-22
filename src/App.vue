<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
<<<<<<< HEAD
        <router-link :to="index" tag="li" event="mouseover">
          <i class="fa fa-home"></i>
          <span>home</span>
        </router-link>

        <router-link 
          :to="{path:'/about'}" 
          active-class="activeClass" 
          event="mouseover"
          tag="li"  
        >
          <i></i>
          <span>about</span>
        </router-link>

        <router-link 
          to="/document" 
          tag="li"
          active-class="activeClass" 
          event="mouseover">
          <i></i>
          <span>document</span>
        </router-link>
=======
        <router-link :to="index" tag="li">
          <i class="fa fa-home"></i>
          <span>home</span>
        </router-link>
        <li>
          <router-link :to="{path:'/about'}" active-class="activeClass">about</router-link>
        </li>
        <li>
          <router-link to="/document">document</router-link>
        </li>
>>>>>>> 8989582c40f30a8cda0dc5765182fd86b5713c4b
      </ul>
    </div>
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
