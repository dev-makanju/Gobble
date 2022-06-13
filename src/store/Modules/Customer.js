import eventService from '../../Events/EventService'

const state = {
   customers: [],
   loading: true,
   aborted: null,
   editing: null,
   deleting: null,
}

const getters = {
   returnCustomers(state){
      return state.customers
   },
   totalUsers(state){
      return state.customers.length
   }
}

const mutations = {
   STATUS(state){
      state.loading = true;
   },
   USER_STATUS(state , payload){
      state.loading = false;
      state.customers = payload
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
   getters,
   mutations,
   actions,
   modules
}