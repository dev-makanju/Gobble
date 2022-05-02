import axios from 'axios'
import eventService from '../../Events/EventService'

const state = {
   token: localStorage.getItem('token') || '',
   user:{},
   status: '',
}

const getter = {
   isLoggedIn: (state) => !!state.token,
   user: state.user,
   authStatus: (state) => state.status
}

const mutation = {

}

const action = {
   //sign user in
   async userSignIn({commit} , data){
       try{
         const res = await eventService.loginEvent(data)
         console.log(res)
         if(res.status){
            const token = res.data.token;
            const user = res.data.user;
            localStorage.setItem("token" , token);
            axios.defaults.headers.common['Authorization'] = token;
            const dataInfo = {
               token: token,
               user: user,
            }
            commit("user_info" , dataInfo)
            return res
         }
       }catch(err){
         return err.response
       }
   },

   //sign user un
   async userSignUp({commit} , data){
      try{
         const res = await eventService.registerEvent({commit} , data );
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

   async forgotPassword(){
      try{
         const res = await eventService.passwordResetEvent({commit} , data);
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

const module = {
   
}