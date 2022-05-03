import axios from 'axios'
import eventService from '../../Events/EventService'

const state = {
   token: localStorage.getItem('gobtoken') || '',
   user:{},
   status: '',
}

const getters = {
   isLoggedIn: (state) => !!state.token,
   user: (state) => state.user,
   authStatus: (state) => state.status
}

const mutations = {

}

const actions = {
   //sign user in
   async userLogin({commit} , data){
       try{ 
         const response = await eventService.loginEvent(data);
         console.log(response)
         if(response.status){
            const token = response.data.token;
            const user = response.data.user;
            localStorage.setItem("gobtoken" , token);
            axios.defaults.headers.common['Authorization'] = token;
            const dataInfo = {
               token: token,
               user: user,
            }
            commit("user_info" , dataInfo);
            return response;
         }
       }catch(err){
         return err.response;
       }
   },

   //sign user un
   async userSignUp({commit} , data){
      try{
         const res = await eventService.registerEvent(data );
         console.log(res)
         if(res.status){
            commit("user__registered");
         }
         return res
      }catch(err){
         return err.response
      }
   },
   //forgot password

   async forgotPassword({commit}, data){
      try{
         const res = await eventService.passwordResetEvent(data);
         console.log(res)
         if(res.status){
            commit("password__reset")
         }
         return res
      }catch(err){
         return err.response
      }
   }
}

export default {
   state,
   getters,
   mutations,
   actions,
}