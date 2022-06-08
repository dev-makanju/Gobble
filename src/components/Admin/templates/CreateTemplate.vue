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
         <div>
            <ProductForm @open="openPreview"/>
         </div>
      </div>
      <div v-show="showPreview" @click="closePreview" class="preview-photo">
         <div class="preview-wrapper">
            <img :src="image" :alt="`Image Uploader ${image}`">
         </div>
      </div>
   </div>
</template>
<script>

import DashboardNavbar from '../organism/DashboardNavbar.vue'
import DashboardHeader from '../organism/DashboardHeader.vue'
import ProductForm from '../organism/ProductForm.vue'
import DashboardMixin from '../../../mixins/dashboardMixin'

export default {
   name: 'CreateTemplate',
   mixins:[DashboardMixin],
   data(){
      return{
         showPreview: null,
         image:'',
      }
   },
   components:{
      DashboardNavbar,
      DashboardHeader,
      ProductForm,
   },
   methods:{
      openPreview(image){
         this.showPreview = true;
         this.image = image
      },
      closePreview(){
         this.showPreview = !this.showPreview
      }
   }
}


</script>

<style lang="scss" scoped>
   .preview-photo{
       background: rgba(0, 0, 0, 0.531);
       position: fixed;
       inset: 0;
       display: flex;
       justify-content: center;
       align-items: center;

       .preview-wrapper{
          height: 400px;
          width: 40%;
          min-width: 350px;
          background: #eee;
          border-radius: 5px;
          overflow: hidden;

          img{
             height: 400px;
             width: 100%;
             object-fit: cover;
          }
       }
   }
</style>