import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var state={
		username:null,
		password:null
  }
if(localStorage.getItem('userinfo')){
	state=JSON.parse(localStorage.getItem('userinfo'));
}
export default new Vuex.Store({
  state,
  mutations: {
	register:function(state,data){
			state.username=data.username;
			state.password=data.password;	
			localStorage.setItem('userinfo',JSON.stringify(state));		
		}
  }
});
