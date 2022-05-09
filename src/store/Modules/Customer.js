import eventService from '../../Events/EventService'

const state = {

}

const mutations = {

}

const actions = {
   //GET ALL REGISTERED USER
   async getAllRegUser({commit}){
      commit('STATUS') 
      try{
         commit('STATUS') 
         const res = await eventService.getAllUserEvent()
         if(res.status){
            console.log(res)
            commit("USER_STATUS");
         }
      }catch(err){
         return err.response
      }
   },  
   //MAKE A USER AN ADMIN
   async makeUserAdmin({commit}){
      try{
         commit('STATUS') 
         const res = await eventService.makeUserAdminEvent()
         if(res.status){
            console.log(res)
            commit("USER_STATUS");
         }
      }catch(err){
         return err.response
      }
   },
   //DELETE A USER 
   async  deleteUserById({commit} , user_id){
      try{
         commit('STATUS') 
         const res = await eventService.getAllUserEvent(user_id)
         if(res.status){
            console.log(res)
            commit("USER_STATUS");
         }
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