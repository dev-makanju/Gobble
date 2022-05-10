import eventService from '../../Events/EventService'

const state = {
   loading: null,
   aborted: null,
   editing: null,
   deleting: null,
}

const mutations = {
   STATUS(state){
      state.loading = true;
   },
   USER_STATUS(state){
      state.loading = false;
   },
   USER_STATUS_ABORTED(state){
      state.aborted = true
   },
   CLEAR_ERROR(state){
      state.aborted = false;
   },
   iS_EDITING(state){
      state.editing = true;
   },
   EDITED(state){
      state.editing = false ;
   },
}

const actions = {
   //GET ALL REGISTERED USER
   async getAllRegUser({commit}){
      try{
         commit('CLEAR_ERROR')
         commit('STATUS') 
         const res = await eventService.getAllUserEvent()
         if(res.status){
            commit("USER_STATUS", res.data.data);
         }
         return res
      }catch(err){
         commit("USER_STATUS_ABORTED");
         return err.response
      }
   },  
   //MAKE A USER AN ADMIN
   async makeUserAdmin({commit} , email){
      try{
         commit('iS_EDITING') 
         const res = await eventService.makeUserAdminEvent(email)
         if(res.status){
            console.log(res)
            commit("EDITED");
         }
         return res
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