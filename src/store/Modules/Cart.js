import EventService from '../../Events/EventService'

const state = {
   carts: [],
   cartLoaded: null,
}

const getters = {
   getCartCount(state){
      return state.carts.length
   }
}

const mutations = {
   STATUS(state){
      state.cartLoaded = false; 
   },
   UPDATE_STATUS(state , payload){
      state.cartLoaded = true;
      state.carts = payload
   },
   ADDED_PRODUCT(){},
   GET_REVIEW(){},
}

const actions = {
   async getCart({ commit }){
      try{
         commit("STATUS")
         const response = await EventService.getUserCartEvent();
         if(response.data.status === 'success'){
            commit('UPDATE_STATUS' , response.data.data)
         }
         return response;
      }catch(err){
         return err.response;
      }
   },

   async getProductReview({commit}, product_id){
      try{
         const response = await EventService.getProductReviewsEvent(product_id)
         if(response.status){
            commit("GET_REVIEW");
         }
         return response;
      }catch(err){
         return err.response;
      }
   },

   async addProductReview({commit}, data ){
      try{
         const response = await EventService.writeReviewEvent( data)
         if(response.status){
            commit("GET_REVIEW");
         }
         return response;
      }catch(err){
         return err.response;
      }
   },

   async addProduct({commit} , data ){
      try{
         const response = await EventService.addProductTocart(data)
         if(response.status){
            commit("ADDED_PRODUCT")
         }
      }catch(err){
         return err.response;
      }
   }
}

export default {
   state,
   mutations,
   getters,
   actions,
}