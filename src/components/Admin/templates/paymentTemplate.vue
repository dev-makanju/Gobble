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
                        <th class="mobile">Payment Method</th>
                        <th>Amount</th>
                        <th class="mobile">Date</th>
                        <th>Status</th>
                     </thead>
                  <tbody>
                     <tr>
                        <td>Miracle</td>
                        <td class="mobile">Visa</td>
                        <td>NgN2000</td>
                        <td class="mobile">Jan, 05 2020</td>
                        <td><span class="status">successfully</span></td>
                     </tr>
                     <tr>
                        <td>Miracle</td>
                        <td class="mobile">Mastercard</td>
                        <td>NgN2000</td>
                        <td class="mobile">Jan, 05 2020</td>
                        <td><span class="status">successfully</span></td>
                     </tr>
                     <tr>
                        <td>Miracle</td>
                        <td class="mobile">Visa</td>
                        <td>NgN2000</td>
                        <td class="mobile">Jan, 05 2020</td>
                        <td><span class="status">successfully</span></td>
                     </tr>
                     <tr>
                        <td>Miracle</td>
                        <td class="mobile">Visa</td>
                        <td>NgN2000</td>
                        <td class="mobile">Jan, 05 2020</td>
                        <td><span class="status">successfully</span></td>
                     </tr>
                     <tr>
                        <td>Miracle</td>
                        <td class="mobile">Visa</td>
                        <td>NgN2000</td>
                        <td class="mobile">Jan, 05 2020</td>
                        <td><span class="status">successfully</span></td>
                     </tr>
                     <tr>
                        <td>Miracle</td>
                        <td class="mobile">Mastercard</td>
                        <td>NgN2000</td>
                        <td class="mobile">Jan, 05 2020</td>
                        <td><span class="status">successfully</span></td>
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
import DashboardMixin from '../../../mixins/dashboardMixin'


export default {
   name: 'paymentTemplate',
   mixins:[DashboardMixin],
   components:{
      DashboardNavbar,
      DashboardHeader,
      Pagination,
      Search,
   },

}


</script>