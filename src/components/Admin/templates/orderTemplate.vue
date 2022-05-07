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
      </div>
   </div>
</template>

<script>

import DashboardNavbar from '../organism/DashboardNavbar.vue'
import DashboardHeader from '../organism/DashboardHeader.vue'

export default {
   name: 'OrderTemplate',
   components:{
      DashboardNavbar,
      DashboardHeader,
   },

}


</script>