import axios from 'axios'

//get token
const token = localStorage.getItem('gobtoken');
const apiClient = axios.create({
    baseURL:'https://gobble-foods.herokuapp.com/api/v1/',
    headers:{
       'Access-Control-Allow-Origin': '*',
       'Authorization': 'Bearer'+token,
       'Content-Type': 'application/json'
    }
});

//export api client for usage...
export default {
   //Authentication service
   loginEvent(data){
      return apiClient.post('auth/login' , data);
   },
   registerEvent(data){
      return apiClient.post('auth/signup' , data);
   },
   passwordResetEvent(data){
      return apiClient.post('forgotPassword' , data);
   },

   //product handler services
   getProductEvent(){
      return apiClient.get('products')
   },
   createProductEvent(data){
      return apiClient.post(`products` , data)
   },
   getProductByIdEvent(data){
      return apiClient.get(`products/${data.id}`)
   },
   editProductEvent(data){
      return apiClient.patch(`products/${data.id}` , data.product)
   },
   deleteProductEvent(data){
      return apiClient.delete(`products/${data.id}`)
   }

   //search for a single product
 
}