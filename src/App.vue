<template>
  <div :class="$style.box">
    222
    <h1 :class="$style.title">{{title}}</h1>
    <P>{{content}}</P>
    <!-- <img src="./assets/1.JPG" alt=""> -->
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
    width: 100px;
    height: 100px;
    .title {
        color: red;
    }
}
</style>