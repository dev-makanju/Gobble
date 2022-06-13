<template>
   <div class="Dashboard__main">
      <!--Dashboard Header--> 
      <div :class="['Dashboard__main__container nav',showDashboardNavbar ? 'open' : '']">
         <DashboardNavbar @close-nav="closeNavbar"/>
      </div>
      <!--Dashboard main wrapper-->
      <div class="Dashboard__main__container">  
         <div class="Dashboard__main__container header">
            <DashboardHeader @toggle-navigation="isDashboardActive"/>
         </div>
         <div v-if="this.$store.state.customer.aborted" class="table-parent-container">
            <div class="table-parent-wrapper">
                <ServiceError/>
            </div>
         </div>
         <div v-if="!this.$store.state.customer.aborted" class="table-parent-container">
            <div class="table-parent-wrapper">
               <div v-if="this.$store.state.customer.loading" class="loader-wrapper">
                  <div v-for="(load  , index ) in loader" :key="index" class="loaders">
                     <PuSkeleton class="loader" height="50px">
                     </PuSkeleton>
                  </div>
               </div>
               <div v-if="!this.$store.state.customer.loading" class="order-wrapper">
                  <div>
                     <SuccessAlert 
                        @close="notifyAlert()"
                        v-if="success"  
                        :message="message"
                     />
                     <ErrorAlert 
                        @close="notifyError()" 
                        v-if="error" 
                        :message="message"
                     />
                  </div>
                  <div class="order-header">
                     <div class="order-head">
                        <h3>Customers</h3>
                     </div>
                     <div class="order-head search">
                        <Search/>
                     </div>
                  </div>
                  <div>
                     <table>
                           <thead>
                              <th>S/N</th>
                              <th>Username</th>
                              <th class="mobile">Email</th>
                              <th>Role</th>
                              <th class="icon">Admin</th>
                           </thead>
                        <tbody>
                           <tr v-for="(user , index ) in userList" :key="user._id" >
                              <td>{{ index+1 }}</td>
                              <td>{{ user.name }}</td>
                              <td class="mobile">{{ user.email }}</td>
                              <td><span class="status">{{ user.role }}</span></td>
                              <td class="icon relative flex">
                                 <font-awesome-icon 
                                    @click="makeAdmin(user.email , index)"
                                    style="cursor: pointer;" 
                                    icon="circle-check"/>
                                 <div :class="['overlay-click' , selected === index ? 'show' :' hide']">
                                    <Loader class="load"/>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div>
                     <Pagination/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>

import DashboardNavbar from '../organism/DashboardNavbar.vue'
import DashboardHeader from '../organism/DashboardHeader.vue'
import Search from '../molecules/SearchMole.vue'
import Pagination from '../molecules/pagination.vue'
import { mapActions, mapGetters, mapState } from 'vuex'
import Loader from '../../molecules/Loading.vue'
import SuccessAlert from '../molecules/Alert.vue'
import ErrorAlert from '../molecules/ErrorMolecule.vue' 
import ServiceError from '../molecules/ServiceError.vue'
import DashboardMixin from '../../../mixins/dashboardMixin'

export default {
   name: 'CustomerTemplate',
   mixins:[DashboardMixin],
   components:{
      DashboardNavbar,  
      DashboardHeader,
      Pagination,
      Search,
      Loader,   
      ErrorAlert, 
      ServiceError,
      SuccessAlert,
   },
   data(){
      return{
         loader: 7,
         userList: [],
         selected: null,
         select: null,
         loading:null,
         errorAlert: null,
         success: null,
         error: null,
         successAlert: null,
         message:'',
      }
   },
   mounted(){
      if(this.$store.state.customer.loading){
         this.getAllRegUser()
      }else{
         this.userList = this.$store.state.customer.customers  
      }
   },
   methods:{
      ...mapState('customer' , ['']),
      ...mapActions('customer',['getAllRegUser' , 'makeUserAdmin']),
      getAllCustomer(){
         this.userList = this.$store.state.customer.customers  
      },
      makeAdmin(email , id){
         this.selected = id
         this.success = false;
         this.error = false;
         const emailObj = {
            email
         }
         this.makeUserAdmin(emailObj).then(res => {
            if(res.status == 200){
               this.success = true;
               this.message = res.data.data
               this.selected = null
            }else{
               this.error = true
               this.selected = null
               this.message = res.data.error.message
            }
         }).catch(err => {
            this.error = true 
            this.message = 'Failed Request, Try again...'
            this.selected = null
            console.log(err)
         })
      },
      notifyError(){
         this.error = !this.error
      },
      notifyAlert(){
         this.success = !this.success
      }
   },
   computed:{
      ...mapGetters( 'customer',{
         customers: 'returnCustomers'
      })
   },
   watch:{
      customers: function(){
         this.userList = this.$store.state.customer.customers
      }
   }
}

</script>

<style lang="scss" scoped>
   .icon{
      text-align: center ;
   }

   .table-parent-container{
      height: 100vh;
      display: flex;
      flex-grow: 100%;
      width: 100%;

      }
      .table-parent-wrapper{
         margin: 0px auto;
         width: 90% ;
         max-width: 800px;
         padding: 5px;

         @media (max-width: 800px) {
            width: 100%;
            padding: 5px;
            margin: 0px auto;
         }
      }


   .loaders{
      margin: 5px;

      .loading{
         width: 800px;
      }
   }
 
   .overlay-click{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0px;
      left: 0px;
      top: calc(50% - 13px);

      &.hide{
         visibility: visible;
      }

      &.hide{
         display: none;
      }


      .load{
         margin:0px auto;
      }
   }
</style>