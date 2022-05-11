import axios from 'axios'

const token = localStorage.getItem('gobtoken');
const apiClient = axios.create({
   baseURL:'https://gobble-foods.herokuapp.com/api/v1/',
   headers:{
      'Access-Control-Allow-Origin':'*',
      'Authorization':'Bearer '+token,
      'Content-Type':'application/json'
   }
});

//export api client for usage...
export default {
   //Authentication service
   loginEvent(data){
      return apiClient.post('auth/login' , data);
   },
   registerEvent(data){
      return apiClient.post('auth/signup',data);
   },
   passwordResetEvent(data){
      return apiClient.post('forgotPassword' , data);
   },
   getUserEvent(){
      return apiClient.get('me');
   },
   getUserByIdEvent(id){
      return apiClient.get('user/'+id);
   },
   updatePasswordEvent(data){
      return apiClient.post('user/updatePassword' , data )
   },
   //delete your account
   deleteUserEvent(id){
      return apiClient.delete('user/deleteAccount' , id)
   },
   makeUserAdminEvent(data){
      return apiClient.patch('user/makeAdmin' , data)//accepting email
   },
   getAllUserEvent(){
      return apiClient.get('users/?page=1&limit=10');
   },
   editUserProfileEvent(data){
      return apiClient.post('user/editProfile' , data);
   },   

   //product handler services
   getProductEvent(){
      return apiClient.get('products')
   },
   //write review
   reviewEvent(productId){
      return apiClient.post(`reviews/${productId}`);
   },
   getProductReviewsEvent(productId){
      return apiClient.post('reviews/'+productId)
   },
   //Cart System
   getUserCartEvent(){
      return apiClient.get('mycart');
   },
   deleteCartItem(productId){
      return apiClient.delete('products/cart/'+productId);
   },
   createProductEvent(data){
      return apiClient.post(`products` , data)
   },
   productQuantityEvent(data){
      return apiClient.post(`products/cart/${data.id}`, data.qty )
   },
   getProductByIdEvent(data){
      return apiClient.get(`products/${data.id}`)
   },
   editProductEvent(data){
      return apiClient.patch(`products/${data.id}` , data.product)
   },
   deleteProductEvent(data){
      console.log(data)
      return apiClient.delete(`products/${data}`)
   },
   //search for a single product
   getProductBySearchEvent(data){
      return apiClient.get('queryProducts' , data)
   }, 
}