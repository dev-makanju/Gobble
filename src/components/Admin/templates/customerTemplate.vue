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
                  <h3>Customers</h3>
               </div>
               <div class="order-header">
                  <Search/>
               </div>
            </div>
            <div>
               <table>
                     <thead>
                        <th>Username</th>
                        <th class="mobile">Email</th>
                        <th>Role</th>
                        <th class="icon">Make Admin</th>
                        <th class="icon">delete</th>
                     </thead>
                  <tbody>
                     <tr>
                        <td>Miracle</td>
                        <td class="mobile">Makursemegmail.com</td>
                        <td><span class="status">Admin</span></td>
                        <td class="icon"><font-awesome-icon icon="circle-check"/></td>
                        <td class="icon"><font-awesome-icon icon="trash-alt"/></td>
                     </tr>
                     <tr>
                        <td>Miracle</td>
                        <td class="mobile">Makursemegmail.com</td>
                        <td><span class="status">Admin</span></td>
                        <td class="icon"><font-awesome-icon icon="circle-check"/></td>
                        <td class="icon"><font-awesome-icon icon="trash-alt"/></td>
                     </tr>
                     <tr>
                        <td>Miracle</td>
                        <td class="mobile">Makursemegmail.com</td>
                        <td><span class="status">Admin</span></td>
                        <td class="icon"><font-awesome-icon icon="circle-check"/></td>
                        <td class="icon"><font-awesome-icon icon="trash-alt"/></td>
                     </tr>
                     <tr>
                        <td>Miracle</td>
                        <td class="mobile">Makursemegmail.com</td>
                        <td><span class="status">Admin</span></td>
                        <td class="icon"><font-awesome-icon icon="circle-check"/></td>
                        <td class="icon"><font-awesome-icon icon="trash-alt"/></td>
                     </tr>
                     <tr>
                        <td>Miracle</td>
                        <td class="mobile">Makursemegmail.com</td>
                        <td><span class="status">Admin</span></td>
                        <td class="icon"><font-awesome-icon icon="circle-check"/></td>
                        <td class="icon"><font-awesome-icon icon="trash-alt"/></td>
                     </tr>
                     <tr>
                        <td>Miracle</td>
                        <td class="mobile">Makursemegmail.com</td>
                        <td><span class="status">Admin</span></td>
                        <td class="icon"><font-awesome-icon icon="circle-check"/></td>
                        <td class="icon"><font-awesome-icon icon="trash-alt"/></td>
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
   name: 'CustomerTemplate',
   components:{
      DashboardNavbar,
      DashboardHeader,
      Pagination,
      Search,
   },
}

</script>

<style scoped>
   .icon{
      text-align: center;
   }
</style>