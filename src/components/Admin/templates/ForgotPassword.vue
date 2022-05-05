<template>
   <div class="template">
      <div class="templateWrapper">
         <Logo class="logo"/>
         <div class="form-main">
             <AuthForgot/>
         </div>
      </div>
      <div class="templateWrapper">
         <AuthBannerOrgs class="banner-tag"/>
      </div>
   </div>
</template>

<script>
//import component molecules
import AuthForgot from '../organism/AuthForgot.vue'
import AuthBannerOrgs from '../organism/AuthBanner.vue'
import Logo from '../atoms/AppLogo.vue'


export default{
   name:'ForgotTemplate',
   components:{
      Logo, AuthForgot, AuthBannerOrgs
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