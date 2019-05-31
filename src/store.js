import Vue from 'vue'
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    aaa(state, payload) {
      state.count += payload.amount;
    }
  },
  getters: {
    countAddTen: state => {
      return state.count + 110;
    }
  },
  actions:{
    bbb(context,payload){
      context.commit('aaa',payload)
    }
  }
});


export default store
