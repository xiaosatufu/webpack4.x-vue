<template>
  <div :class="$style.box">
    <!-- 222 -->
    <!-- <h1 :class="$style.title">{{title}}</h1> -->
    <!-- <P>{{content}}</P> -->
    <!-- <img src="@/assets/1.jpg" alt=""> -->
    <div>main</div>
    <router-link to="/foo">foo</router-link>
    <router-link to="/bar">bar</router-link>
    <router-link to="/count">count</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "webpack21112222",
      content: "build webpack4.x vue "
    };
  }
};
</script>

<style lang="scss"  module>
.box {
    // width: 100px;
    // height: 100px;
    .title {
        color: red;
    }
}
</style>