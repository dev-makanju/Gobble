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
            <ProductForm @open="openPreview"/>
         </div>
      </div>
      <div v-show="showPreview" @click="closePreview" class="preview-photo">
         <div class="preview-wrapper" v-for="(image , index) in images" :key="index">
             <img :src="image" :alt="`Image Uploader ${index}`">
         </div>
      </div>
   </div>
</template>
<script>

import DashboardNavbar from '../organism/DashboardNavbar.vue'
import DashboardHeader from '../organism/DashboardHeader.vue'
import ProductForm from '../organism/ProductForm.vue'


export default {
   name: 'CreateTemplate',
   data(){
      return{
         showPreview: null,
         images:[],
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
         this.images = image
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