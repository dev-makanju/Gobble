import axios from 'axios'

//get token
const token = localStorage.getItem('token');
const apiClient = axios.create({
    baseURL:'https://gobble-foods.herokuapp.com/api/v1/',
    headers:{
       'Access-Control-Allow-Origin':'*',
       'Authorization': 'Bearer'+token
    }
});

//export api client for usage...
export default{
   loginEvent(data){
      return apiClient.post('auth/login' , data);
   },
   registerEvent(data){
      return apiClient.post('auth/login' , data);
   },
   passwordResetEvent(data){
      return apiClient.post('forgotPassword' , data)
   }
}