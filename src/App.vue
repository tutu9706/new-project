<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
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
