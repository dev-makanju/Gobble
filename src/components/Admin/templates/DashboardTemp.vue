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
         <div class="Dashboard__main__container main">
            <div class="Dashboard__main__container__wrapper slider">
               <DashboardSlider/>
            </div>
            <div class="graph">
               <graph/>
            </div>
            <div class="Dashboard__main__container__wrapper stat">
               <div class="Dashboard__main__container__wrapper stat">
                  <salesStat/>
                  <!--latest order-->
               </div>
               <div class="Dashboard__main__container__wrapper stat">
                  <earningStat/>
                  <!--customer review-->
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>

import DashboardNavbar from '../organism/DashboardNavbar.vue'
import DashboardHeader from '../organism/DashboardHeader.vue'
import DashboardSlider from '../organism/DashboardSlider.vue'
import salesStat from '../organism/SalesStat.vue'
import earningStat from '../organism/EarningStat.vue'
import graph from '../molecules/graph.vue'

export default {
   name: 'Dashboard',
   components:{
      DashboardNavbar,
      DashboardHeader,
      DashboardSlider,
      salesStat,
      earningStat,
      graph,
   },

}


</script>

<style lang="scss">

.Dashboard__main{
   display: grid;
   grid-template-columns: 250px 1fr ;
   height: 100vh;
   position: relative;
   
   
    &__container{
         display: grid ;
         grid-template-rows: 50px 1fr ;

         &.nav{
            background: #fff ;
            border-right: 2px solid #a9c6c077;
            transition: .5s ease;

            @media (max-width: 800px) {
               position: fixed;
               top: 0px;
               bottom: 0px;
               z-index: 111;
               width: 250px;
               transform: translateX(-250px);
            }
         }

         &.header{
           background: #fff ;
           height: 70px;
         }

         &__wrapper{

            &.slider{
               display: flex;
               justify-content: center;
               align-items: center;
            }

            &.stat{
               @media (min-width: 600px) {                  
                  display: flex ;
                  flex-direction: row;
                  flex: 1;
                  margin-top: 2rem;
                  padding: 20px 20px;
               }
               flex-direction: column ;
            }
         }

         &.main{
            display: grid ;
            grid-template-rows: 200px 1fr ;

            .graph{
               padding: 10px 20px;
               margin-top: 3rem;
            }
         }
    }
}

</style>