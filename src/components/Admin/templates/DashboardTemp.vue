<template>
   <div class="Dashboard__main">
      <!--Dashboard Header--> 
      <div :class="['Dashboard__main__container nav',showDashboardNavbar ? 'open' : '']">
         <DashboardNavbar @close-nav="closeNavbar"/>
      </div> 
      <!--Dashboard main wrapper-->
      <div class="Dashboard__main__container">  
         <div class="Dashboard__main__container header">
            <dashboard-header  @toggle-navigation="isDashboardActive"/>
         </div>
         <div class="Dashboard__main__container main">
            <div class="Dashboard__main__container__wrapper slider">
               <DashboardSlider/>
            </div>
            <div class="graph">
               <graph/>
            </div>
            <div class="Dashboard__main__container__wrapper stat">
               <div class="Dashboard__main__container__wrapper col">
                  <salesStat/>
                  <!--latest order-->
               </div>
               <div class="Dashboard__main__container__wrapper col">
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
import DashboardMixin from '../../../mixins/dashboardMixin'

export default {
   name: 'Dashboard',
   mixins:[DashboardMixin],
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

   @media (max-width: 900px) {
      grid-template-columns: none ;
   }
   
    &__container{
         //display: grid ;

         &.nav{
            background: #fff ;
            border-right: 2px solid #a9c6c077;
            transition: .5s ease;

            @media (max-width: 900px) {
               position: fixed;
               top: 0px;
               bottom: 0px;
               z-index: 111;
               width: 250px;
               transform: translateX(-250px);

               &.open{
                  transform: translateX(0px);
               }
            }
         }

         &.header{
           background: #fff ;
           height: 70px;
         }

         &__wrapper{
            flex: 1;

            &.col{
               @media (max-width: 1200px) {
                  padding-top: 4rem;
               }
            }

            &.slider{
               display: flex;
               justify-content: center;
               align-items: center;
               align-self: center;
               padding: 1rem 0px; 
               overflow-x: auto;  
               flex-wrap: nowrap;
               min-height: 250px;
            }

            &.stat{
               flex-direction: column;
               padding-bottom: 4rem;
               width: 95%;
               margin: 0px auto;

               @media (min-width: 1200px) {                  
                  display: flex ;
                  width: 95%;
                  margin: 0px auto;
                  flex-direction: row;
                  padding-bottom: 4rem;
                  flex: 1;
                  margin-top: 2rem;
                  gap: 2rem;
               }
            }
         }

         &.main{
            display: grid ;
            grid-template-rows: 250px 1fr;
            width: 100%;

            .graph{
               padding-top: 2rem;
               margin-top: 3rem;
               overflow-x: auto;
               width: 95%;
               margin: 0px auto;

               @media (max-width: 768px) {
                  display: none;
               }
            }
         }
    }
}

</style>