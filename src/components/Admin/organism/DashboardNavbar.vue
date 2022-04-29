<template>
   <div>
      <div class="appLogo">
         <AppLogo/>
      </div>
      <ul class="navbar">
         <li>
            <router-link class="nav-link" to="/">
               <div class="navbar icon">
                  <div class="navbar child">
                     <font-awesome-icon  icon="home"/>
                  </div>
                  <div class="navbar child">Dashboard</div>
               </div>
            </router-link>
         </li>
         <li>
            <router-link class="nav-link" to="/">
               <div class="navbar icon">
                  <div class="navbar child">
                      <font-awesome-icon  icon="shopping-cart"/>
                  </div>
                  <div class="navbar child">Orders</div>
               </div>
            </router-link>
         </li>
         <li>
            <router-link class="nav-link" to="/">
               <div class="navbar icon">
                  <div class="navbar child">
                      <font-awesome-icon  icon="store"/>
                  </div>
                  <div class="navbar child">Product</div>
               </div>
            </router-link>
         </li>
         <li>
            <router-link class="nav-link" to="/">
               <div class="navbar icon">
                  <div class="navbar child">
                     <font-awesome-icon icon="user-friends"/>
                  </div>
                  <div class="navbar child">Customers</div>
               </div>
            </router-link>
         </li>
         <li>
            <router-link class="nav-link" to="/">
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
         color: #A8B087;
         font-family: 'Poppins', sans-serif;

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
         background: #A8B087;
      }

      .navbar.child{
         padding: 0px 8px;
      }
   }
}


</style>

