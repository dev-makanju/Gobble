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
         <div v-if="this.$store.state.productError" class="table-parent-container">
            <div class="table-parent-wrapper">
                <ServiceError/>
            </div>
         </div>
         <div v-if="!this.$store.state.productError" class="table-parent-container">
            <div class="table-parent-wrapper">
               <div v-if="this.$store.state.product_loading" class="loader-wrapper">
                  <div v-for="(load  , index ) in loader" :key="index" class="loaders">
                     <PuSkeleton class="loader" height="50px">
                     </PuSkeleton>
                  </div>
               </div> 
               <div v-if="!this.$store.state.product_loading" class="order-wrapper">
                  <div>
                     <SuccessAlert 
                        @close="notifyAlert()"
                        v-if="success"  
                        :message="message"
                     />
                     <ErrorAlert 
                        @close="notifyError()" 
                        v-if="error" 
                        :message="message"
                     />
                  </div>
                  <div>
                     <div id="topp"></div>
                     <CardOrganism :isFilterCard="1.0" :cards="paginated"/>
                  </div>
                  <div>
                     <Pagination
                        :current="current"
                        :pageSize="pageSize"
                        :cards="products"
                        @paging="updateHandler"
                        @value-subtract="subtractHandler"
                        @value-increased="increasedHandler"
                     />
                  </div>
                  <div class="top">
                     <a class="back-top" href="#top" v-smooth-scroll>
                        <font-awesome-icon icon="arrow-up"/>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>

import DashboardNavbar from '../organism/DashboardNavbar.vue'
import DashboardHeader from '../organism/DashboardHeader.vue'
import CardOrganism  from '../../organisms/CardOrgansim.vue'
import SuccessAlert from '../molecules/Alert.vue'
import ErrorAlert from '../molecules/ErrorMolecule.vue' 
import ServiceError from '../molecules/ServiceError.vue'
import Pagination from '../molecules/pagination.vue'
import DashboardMixin from '../../../mixins/dashboardMixin'
import {mapGetters} from 'vuex'

export default {
   name: 'ProductTemplate',
   mixins:[DashboardMixin],
   components:{
      DashboardNavbar,
      DashboardHeader,
      CardOrganism,
      Pagination,  
      ErrorAlert, 
      ServiceError,
      SuccessAlert, 
   },
   data(){
      return{
         paginated:[],
         current: 1,
         pageSize: 9 ,
         products:[],
         loader: 7,
         loading:null,
         errorAlert: null,
         success: null,
         error: null,
         successAlert: null,
         message:'',
      }
   },
   mounted(){
      this.getAllProduct();
   },
   methods:{
      subtractHandler(value){
         this.current = value
         this.scrollToTop()
      },
      increasedHandler(value){
         this.current = value
         this.scrollToTop()
      },
      updateHandler(value){ 
         this.paginated = value
      },
      getAllProduct(){
         this.products = this.$store.state.products
      },
      scrollToTop(){    	
         const el = document.querySelector('#topp');
         el.scrollIntoView({behavior: 'smooth'});
      },
   },
   computed:{
      ...mapGetters({
         isLoading: 'returnLoadState',
         product: 'returnAllProducts',
      })
   },
   watch:{
      isLoading: function(){
         if(!this.$store.state.product_loading){
            this.getAllProduct()
         }
      },
      product: function(){
         this.getAllProduct()
      }
   }, 
}


</script>

<style lang="scss" scoped>
    .icon{
      text-align: center ;
   }

   .table-parent-container{
      display: flex;
      flex-grow: 100%;
      width: 100%;
      min-height: 90%;

      }
      .table-parent-wrapper{
         margin: 0px auto;
         width: 90% ;
         padding: 5px;

         @media (max-width: 800px) {
            width: 100%;
            padding: 5px;
            margin: 0px auto;
         }
      }


   .loaders{
      margin: 5px;

      .loading{
         width: 800px;
      }
   }
 
   .overlay-click{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0px;
      left: 0px;
      top: calc(50% - 13px);

      &.hide{
         visibility: visible;
      }

      &.hide{
         display: none;
      }


      .load{
         margin:0px auto;
      }
   }

</style>