import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../store/Modules/Auth'

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
    },
    setCartData(state , payload){
      state.isCartActive = payload
    },
    clear(state){
      state.cartCount = 0;
      state.price = 0;
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
    addToCart({commit} , payload ){
        commit('setCartData' , payload)
    },
    setPrice({commit}, payload){
        commit('setGlobalPrice' , payload );
    },
    clearCart({commit}){
        commit('clear')
    }
  },
  modules: {
    auth,
  }
});
