<template>
   <div class="template">
      <div class="templateWrapper">
         <Logo class="logo"/>
         <div class="form-main">
             <AuthReg/>
         </div>
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
import Logo from '../atoms/AppLogo.vue'


export default{
   name:'RegisterTemplate',
   components:{
      AuthReg, 
      AuthBannerOrgs,
      Logo
   }
}

</script>

<style lang="scss" >

@media screen and (min-width: 600px){
   .template{
      display: grid;
      grid-template-columns: 400px 1fr;  

      .templateWrapper{
         overflow: hidden ;
         height: 100vh;
      }
   }
}

.logo{
   padding: 4px 8px;
}

@media screen and (max-width: 600px){
   .banner-tag{
      display: none; 
   }
}

</style>