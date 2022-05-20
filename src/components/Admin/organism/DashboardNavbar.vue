<template>
   <div>
      <div class="appLogo">
         <AppLogo/>
         <font-awesome-icon class="mobile-navbar" @click="$emit('close-nav')" icon="times"/>
      </div>
      <ul class="navbar">
         <li>
            <router-link class="nav-link" :to="{name:'Dashboard'}">
               <div class="navbar icon">
                  <div class="navbar child">
                     <font-awesome-icon  icon="home"/>
                  </div>
                  <div class="navbar child">Dashboard</div>
               </div>
            </router-link>
         </li>
         <li>
            <router-link class="nav-link" :to="{name:'Order'}">
               <div class="navbar icon">
                  <div class="navbar child">
                     <font-awesome-icon  icon="shopping-cart"/>
                  </div>
                  <div class="navbar child">Orders</div>
               </div>
            </router-link>
         </li>
         <li>
            <router-link class="nav-link" :to="{name:'Product'}">
               <div class="navbar icon">
                  <div class="navbar child">
                     <font-awesome-icon  icon="store"/>
                  </div>
                  <div class="navbar child">Product</div>
               </div>
            </router-link>
         </li>
         <li>
            <router-link class="nav-link" :to="{name:'CreateProduct'}">
               <div class="navbar icon">
                  <div class="navbar child">
                      <font-awesome-icon  icon="plus"/>
                  </div>
                  <div class="navbar child">Create Product</div>
               </div>
            </router-link>
         </li>
         <li>
            <router-link class="nav-link" :to="{name:'Customers'}">
               <div class="navbar icon">
                  <div class="navbar child">
                     <font-awesome-icon icon="user-friends"/>
                  </div>
                  <div class="navbar child">Customers</div>
               </div>
            </router-link>
         </li>
         <li>
            <router-link class="nav-link" :to="{name:'payHistory'}">
               <div class="navbar icon">
                  <div class="navbar child">
                     <font-awesome-icon  icon="comment-dollar"/>
                  </div>
                  <div class="navbar child">Payment</div>
               </div>
            </router-link>
         </li>
      </ul>
   </div>
</template>

<script>

import AppLogo from '../atoms/AppLogo.vue'

export default {
   name: "DashboardNavbarOrgs",
   components:{
      AppLogo,
   }
} 

</script>

<style lang="scss" scoped>

.appLogo{
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 15px 10px ;
   border-bottom: 1px solid rgb(249, 247, 247) ;
}

.navbar{

   &>li{
      padding: 0px 0px 0px 10px;
      margin-top: 10px ;

      &:hover{
         background: #eee ;
         border: 1px solid #A8B087;
      }

      .nav-link{
         text-decoration: none;
         font-weight: 500;
         font-family: 'Poppins', sans-serif;
         color: #065143;

         &:hover{
            color: rgb(249, 247, 247) ;
         }
      }

   }

   .navbar.icon{
      display: flex ;
      flex-direction: row ;
      padding: 20px 0px 20px 0px;
      
      &:hover{
         background: #065143;
      }

      .navbar.child{
         padding: 0px 8px;
      }
   }
}


</style>

