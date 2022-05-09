import EventService from "../../Events/EventService"

const state = {

}

const mutations = {

}

const actions = {
   //CREATE PRODUCT
   async AdminCreateProduct({ commit } , data){
      try{
         commit('PRODUCT_STATUS')
         const response = await EventService.createProductEvent(data)
         if(response.status){
            console.log(response)
            commit('PRODUCT_STATUS')
         }
         return response;
      }catch(err){
         return err.response
      }
   },
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
            console.log(response)
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

const modules = {

}

export default {
   state,
   mutations,
   actions,
   modules
}