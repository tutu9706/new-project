<template>
  <div class="a">关于我们
    <hr>
    <ul class="nav">
      <router-link to="/about/study" tag="li">
        <a>study</a>
      </router-link>
      <router-link to="/about/work" tag="li">
        <a>work</a>
      </router-link>
      <router-link to="/about/hobby" tag="li">
        <a>hobby</a>
      </router-link>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "component_name",
  data() {
    return {};
  }
};
</script>
<style>
</style>