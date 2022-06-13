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
            <div v-if="this.$store.state.customer.loading" class="loader-wrapper">
               <div v-for="(load  , index ) in loader" :key="index" class="loaders">
                  <PuSkeleton class="loader" height="50px">
                  </PuSkeleton>
               </div>
            </div>
            <div class="order-wrapper order">
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
               <div class="order-header">
                  <h3>Order</h3>
               </div>
               <div class="order-header search">
                  <Search/>
               </div>
            </div>
            <div>
               <table>
               <thead>
                  <th>Customer</th>
                  <th class="mobile">Address</th>
                  <th>Date</th>
                  <th>Status</th>
               </thead>
               <tbody>
                  <tr>
                     <td>Miracle</td>
                     <td class="mobile">Lagos, Nigeria</td>
                     <td>Jan, 05 2020</td>
                     <td><span class="status">Completed</span></td>
                  </tr>
                  <tr>
                     <td>Miracle</td>
                     <td class="mobile">Lagos, Nigeria</td>
                     <td>Jan, 05 2020</td>
                     <td><span class="status">Completed</span></td>
                  </tr>
                  <tr>
                     <td>Miracle</td>
                     <td class="mobile">Lagos, Nigeria</td>
                     <td>Jan, 05 2020</td>
                     <td><span class="status">Completed</span></td>
                  </tr>
                  <tr>
                     <td>Miracle</td>
                     <td class="mobile">Lagos, Nigeria</td>
                     <td>Jan, 05 2020</td>
                     <td><span class="status">Completed</span></td>
                  </tr>
                  <tr>
                     <td>Miracle</td>
                     <td class="mobile">Lagos, Nigeria</td>
                     <td>Jan, 05 2020</td>
                     <td><span class="status">Completed</span></td>
                  </tr>
                  <tr>
                     <td>Miracle</td>
                     <td class="mobile">Lagos, Nigeria</td>
                     <td>Jan, 05 2020</td>
                     <td><span class="status">Completed</span></td>
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
</template>

<script>
import DashboardNavbar from '../organism/DashboardNavbar.vue'
import DashboardHeader from '../organism/DashboardHeader.vue'
import Pagination from '../molecules/pagination.vue'
import Search from '../molecules/SearchMole.vue'
import { mapActions } from 'vuex'
import SuccessAlert from '../molecules/Alert.vue'
import ErrorAlert from '../molecules/ErrorMolecule.vue' 
import ServiceError from '../molecules/ServiceError.vue'
import DashboardMixin from '../../../mixins/dashboardMixin'


export default {
   name: 'OrderTemplate',
   mixins:[DashboardMixin],
   components:{
      SuccessAlert,
      ErrorAlert,
      ServiceError,
      DashboardNavbar,
      DashboardHeader,
      Search,
      Pagination
   },
   data(){
      return{
         loader: 7,
      }
   },
   methods:{
      ...mapActions([''])
   }
}

</script>

<style lang="scss">
   .table-parent-container{
      height: 100vh;
      display: flex;
      flex-grow: 100%;

   }

   .table-parent-wrapper{
      margin: 0px auto;
      padding: 5px;
   }
    
   .loader-wrapper{
      width: 100%;
      margin: 0px auto;
      margin-top: 30px;
      padding: 20px 0px;
   }

   .order-wrapper{
      margin: 0px auto;
      padding: 20px 0px;

      &.order{
         width: 80%;
      }


      @media (max-width: 450px) {
         padding: 5px;
         width: 100%;
      }
      
      table{
         width: 100%;
         border-collapse: collapse;
         margin-top: 10px;
         font-size: 14px;
         //word-break: break-all;

         thead th{
            padding: 10px;
            border: 1px solid #fff;
            text-align: left;



            &{
               background: #fff;
            }
         }
         tbody tr{
            padding: 10px;
            border-bottom: 1px solid rgba(228, 226, 226, 0.668);
            transition: .5s ease;

            .status{
                 background: rgba(161, 242, 161, 0.313);
                 padding: 2px 7px;
                 border-radius: 17px;
                 color: green;
            }

            &> td{
               padding: 10px;
            }

            &:hover{
               background: rgb(182, 178, 178);
            }
         }
      }

      .order-header .search{
         float: right;
         margin-bottom: .5rem ;
      }

      @media (min-width: 500px) {
         .order-header{
            display: flex;
            flex-direction: row ;
            padding: 5px 0px;
            justify-content: space-between;
            align-items: center;
         }
      }

   }
   @media (max-width: 700px) {
      .mobile{
         display: none;  
      }
   }
</style>