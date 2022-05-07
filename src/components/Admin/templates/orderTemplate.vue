<template>
   <div class="Dashboard__main">
      <!--Dashboard Header--> 
      <div class="Dashboard__main__container nav">
         <DashboardNavbar/>
      </div>
      
      <!--Dashboard main wrapper-->
      <div class="Dashboard__main__container">  
         <div class="Dashboard__main__container header">
            <DashboardHeader/>
         </div>
         <div class="order-wrapper">
            <div class="order-header">
               <div class="order-header">
                  <h3>Order</h3>
               </div>
               <div class="order-header">
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
</template>

<script>

import DashboardNavbar from '../organism/DashboardNavbar.vue'
import DashboardHeader from '../organism/DashboardHeader.vue'
import Pagination from '../molecules/pagination.vue'
import Search from '../molecules/SearchMole.vue'

export default {
   name: 'OrderTemplate',
   components:{
      DashboardNavbar,
      DashboardHeader,
      Search,
      Pagination
   },
}

</script>

<style lang="scss">
   .order-wrapper{
      width: 80%;
      margin: 0px auto;
      min-width: 400px;
      margin-top: 30px;
      padding: 20px 0px;

      @media (max-width: 450px) {
         padding: 5px;
      }
      
      table{
         width: 100%;
         border-collapse: collapse;
         margin-top: 10px;

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
      
      .order-header{
         display: flex;
         justify-content: space-between;
         align-items: center;
      }
   }
   @media (max-width: 450px) {
      .mobile{
         display: none;  
      }
   }
</style>