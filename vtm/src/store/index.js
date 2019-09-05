import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
      token:'123456',
      userinfo:{
        name:'张三',
        sex:'男',
        age:'23',
        like:['看书','听音乐']
      }
    },
    mutations:{
      addage:function(state){
        return ++state.userinfo.age;
      }
    }
});

export default store;
