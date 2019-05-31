<template>
  <div>
    <div>{{count}}</div>
    <div>{{countAddTen}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    // count(){
    //     return this.$store.state.count
    // },
    ...mapState(["count"]),
    ...mapGetters(["countAddTen"])
    // countAddOne() {
    //   return this.$store.getters.countAddTen;
    // }
  },
  methods: {
    ...mapMutations(["aaa"]),
    ...mapActions(["bbb"])
  },
  mounted() {
    this.bbb({
      amount: 1000
    });
    // console.log(this.$store.getters.countAddTen)
    // this.$store.commit('aaa',{
    // amount:100
    // })
    //     console.log("from conut", 1);
    //     console.log("count from store", this.$store.state.count);
  }
};
</script>

<style scoped>
</style>