import axios from 'axios'
import EventService from '../../Events/EventService'
import eventService from '../../Events/EventService'
import router from '../../router'

const state = {
   token: localStorage.getItem('gobtoken') || '',
   user:{},
   role:'',
   status:'',
   isDeletingUser:'',
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

   IS_USER_DELETED(state){
      state.isDeletingUser = 'deleting'
   },

   USER_DELETED(state){
      state.isDeletingUser = 'deleted'
   },

   USER_DATA( state , payload){
      state.token = payload.token
      state.role = payload.userRole
      state.user = payload.user
   },
   USER_STATUS(state){
      state.status = 'loaded'
   },
   RAW(){},
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
         if(res.status){
            commit("RAW")
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
   //DELETE USER 
   async deleteAccount( {commit}){
      try{
         commit('IS_USER_DELETED')
         const response = await eventService.deleteUserEvent();
         if(response.status){
            commit('USER_DELETED')
         }
         return response
      }catch(err){
         return err.response
      } 
   },
   async updateUser({commit} , data){
      try{
         const response = await eventService.editUserProfileEvent(data)
         if(response.status){
            commit('USER_UPDATED')
         }
         return response
      }catch(err){
         return err.response
      } 
   },
   async getUserInfoById({commit} , data ){
      try{
         const response = await EventService.getUserByIdEvent(data)
         if(response.status){
            commit('RAW');
            console.log(response)
         }
         return response
      }catch(err){
         return err.reponse;
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