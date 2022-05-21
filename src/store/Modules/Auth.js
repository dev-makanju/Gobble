import axios from 'axios'
import eventService from '../../Events/EventService'
import router from '../../router'

const state = {
   token: localStorage.getItem('gobtoken') || '',
   user:{},
   role:'',
   status:'',
}

const getters = {
   isLoggedIn: (state) => !!state.token,
   user: (state) => state.user,
   authStatus: (state) => state.status,
   userRole: (state) => state.role == "ADMIN"
}

const mutations = {
   STATUS(state){
      state.status = 'loading';
   },
   USER_DATA( state , payload){
      state.token = payload.token
      state.role = payload.userRole
      state.user = payload.user
   },
   USER_STATUS(state){
      state.status = 'loaded'
   }
}

const actions = {
   //USER LOGGED IN
   async userLogin({commit} , data){
      try{ 
         commit('STATUS') 
         const response = await eventService.loginEvent(data)
         if(response.status){
            const token = response.data.token;
            localStorage.setItem("gobtoken" , token);
            axios.defaults.headers.common['Authorization'] = token;
            const user = response.data.data
            const role = response.data.data.role
            const data = {
               token: token,
               userRole: role,
               user: user 
            }  
            commit("USER_DATA", data);
            commit("USER_STATUS");
         }
         return response;
      }catch(err){
         return err.response;
      }
   },
   //USER SIGN UP
   async userSignUp({commit} , data){
      try{
         const res = await eventService.registerEvent(data );
         if(res.status){
            commit("USER_REGISTERED");
         }
         return res
      }catch(err){
         return err.response
      }
   },
   //FORGOT PASSWORD
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
   },
   //GET LOGGED IN USER 
   async getUserInfo({commit}){
      try{
         commit("STATUS");
         const response = await eventService.getUserEvent();
         if(response.status){   
            const token = localStorage.getItem("gobtoken");
            const user = response.data.data
            const role = response.data.data.role
            const data = {
               token: token,
               userRole: role,
               user: user 
            }  
            commit("USER_DATA", data);
            commit('USER_STATUS');
         }
         return response;
      }catch(err){
         return err.response
      }
   },
   //LOG USER OUT
   logout({commit}){
      localStorage.removeItem('gobtoken');
      sessionStorage.clear();
      router.push('/');
      commit('LOGGED_OUT');
      location.reload();
   },
}

export default {
   state,
   getters,
   mutations,
   actions,
}