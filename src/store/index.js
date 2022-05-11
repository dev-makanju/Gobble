import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../store/Modules/Auth'
import admin from './Admin/product'
import cart from '../store/Modules/Cart'
import customer from '../store/Modules/Customer'
import EventService from '../Events/EventService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product_loading:'',
    isOpen:null,
    cartCount:0,
    isCartActive:[],
    products:[],
    price:'0',
    productError: null,
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
    },
    IS_LOADING(state){
      state.product_loading = true
    },
    UPDATE_PRODUCT(state , payload){
      state.product_loading = false; 
      state.products = payload
    },
    CLEAR_ERROR(state){
      state.productError = false;
    },
    ABORTED_PRODUCT(state){
      state.productError = true;
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
    },
  
    async getProducts({commit}){
      try{
         commit('CLEAR_ERROR')
         commit('IS_LOADING')
         const res = await EventService.getProductEvent();
          if(res.status){
            commit("UPDATE_PRODUCT" , res.data.data)
          }
         return res
      }catch(err){
         commit("ABORTED_PRODUCT")
         return err.response
      }
    },
    async editSingleProduct(id){
      try{
        const res = await EventService.getProductByIdEvent(id);
        if(res.status){
           console.log(res)
        }
        return res
      }catch(err){
         return err.response
      }
    },
    async deleteSingleProduct({commit} , id){
      try{
          const res = await EventService.deleteProductEvent(id)
          if(res.status){
              commit("PRODUCT_DELETED")
              console.log(res)
          }
          return res
      }catch(err){
          return err.response
      }
    }
  },
  modules: {
    auth,
    admin,
    cart,
    customer:{
      namespaced: true,
      ...customer
    }
  }
});
