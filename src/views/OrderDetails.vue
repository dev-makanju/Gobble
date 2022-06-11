<template>
<div class="Dashboard__main__container">  
   <h4
      v-if="this.$store.state.auth.status == 'loading'" 
      style="text-align: center; color: red;">Loading...</h4>
   <div v-if="this.$store.state.auth.status == 'loaded'" class="order-wrapper">
      <div v-if="orders.length === 0" class="order-header">
         <h1>You have not created any order</h1>
      </div>
      <div v-if="orders.length > 0" class="order-header">
         <div class="order-header">
            <h3>Order</h3>
         </div>
         <div class="order-header search">
            <Search/>
         </div>
      </div>
      <div v-if="orders.length > 0">
         <table>
            <thead>
               <th>Customer</th>
               <th class="mobile">Address</th>
               <th>Date</th>
               <th>Status</th>
            </thead>
            <tbody v-for="(order , index) in orders" :key="index">
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
      <div v-if="orders.length > 0">
         <Pagination/>
      </div>
   </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

import Pagination from '../components/Admin/molecules/pagination.vue'
import Search from '../components/Admin/molecules/SearchMole.vue'

export default {
   name:'OrderDetails',
   data(){
      return {
         orders:[],
      }
   },
   components: {
      Pagination,
      Search,
   },
   computed:{
      ...mapState({
          userDate : state => state.auth.user
      })
   },
   watch: {
       userDate(val){
         this.orders = val.orders
       }
   }
}

</script>

<style lang="scss" scoped>

.Dashboard__main__container {
   max-width: 1200px;
   margin: 0px auto;
   margin-top: 2.5rem;

   @media (max-width: 600px){
      padding: 5px;
   }

   .order-header h1{
      text-align: center;
      width: 100%;
      padding: 2rem 0px;
      font-family: 'Popins' ;
      font-size: 50px;
      color: rgba(0, 0, 0, 0.137);

      @media (max-width: 800px){
         text-align: left;
      }
   }
}

</style>