import EventService from "../../Events/EventService"

const state = {
   status: '',
}

const mutations = {
   PRODUCT_STATUS(state){
      state.status = 'loaded'
   }
}

const actions = {
   //GET PRODUCT 
   async fetchAllProduct({ commit }){
      try{
         commit('PRODUCT_STATUS')
         const response = await EventService.getProductEvent();
         if(response.status){
            console.log(response)
            commit('PRODUCT_STATUS')
         }
         return response;
      }catch(err){
         return err.response
      }
   },
   //GET PRODUCT BY ID
   async getProductById({ commit } , product_id){
      try{
         commit('PRODUCT_STATUS')
         const response = await EventService.getProductByIdEvent(product_id);
         if(response.status){
            commit('PRODUCT_STATUS');
         }
         return response;
      }catch(err){
         return err.response
      }
   },
   //DELETE A PRODUCT 
   async deleteProductById({ commit } , product_id){
      try{
         commit('PRODUCT_STATUS')
         const response = await EventService.deleteProductEvent(product_id);
         if(response.status){
            console.log(response)
            commit('PRODUCT_STATUS');
         }
         return response;
      }catch(err){
         return err.response
      }
   },
   //UPDATE AN EDITED PRODUCT BY ID
   async editProductById({ commit } , product_id){
      try{
         commit('PRODUCT_STATUS');
         const response = await EventService.editProductEvent(product_id);
         if(response.status){
            console.log(response)
            commit('PRODUCT_STATUS');
         }
         return response;
      }catch(err){
         return err.response
      }
   },
}

export default {
   state,
   mutations,
   actions,
}