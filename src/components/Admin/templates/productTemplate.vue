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
         <div>
            <CardTemplate :isFilterCard="1.0"/>
         </div>
      </div>
   </div>
</template>

<script>

import DashboardNavbar from '../organism/DashboardNavbar.vue'
import DashboardHeader from '../organism/DashboardHeader.vue'
import CardTemplate from '../../templates/cardTemplate.vue'

export default {
   name: 'ProductTemplate',
   components:{
      DashboardNavbar,
      DashboardHeader,
      CardTemplate
   },

}


</script>