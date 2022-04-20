<template>
   <div class="template">
      <div class="templateWrapper">
         <AuthReg/>
      </div>
      <div class="templateWrapper">
         <AuthBannerOrgs class="banner-tag"/>
      </div>
   </div>
</template>

<script>
//import component molecules
import AuthReg from '../organism/AuthReg.vue'
import AuthBannerOrgs from '../organism/AuthBanner.vue'

export default{
   name:'RegisterTemplate',
   components:{
      AuthReg , AuthBannerOrgs
   }
}

</script>

<style>

@media screen and (min-width: 600px){
   .template{
      display: grid;
      grid-template-columns: 400px 1fr;  
   }
}

@media screen and (max-width: 600px){
   .banner-tag{
      display: none; 
   }
}

</style>