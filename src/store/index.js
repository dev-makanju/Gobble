import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isOpen:null,
    cartCount:0,
    isCartActive:[],
    price:'0'
  },
  mutations: {
    open(state){
      state.isOpen = true;
    },
    updateCount(state , payload){
      state.cartCount = payload
    },
    close(state){
      state.isOpen = false;
    },
    setGlobalPrice(state , payload){
      state.price = payload
    }
  },
  actions: {
    cartUpdated({commit} , payload){
        commit('updateCount' , payload );
    },
    openCart({commit}){
        commit('open'); 
    },
    closeCart({commit}){
      commit('close') 
    },
    addToCart( ){
        //  
    },
    setPrice({commit}, payload){
        commit('setGlobalPrice' , payload)
        console.log(payload);
    }
  },
  modules: {
  }
});
