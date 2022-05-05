<template>
   <div class="template">
      <div class="templateWrapper">
         <Logo class="logo"/>
         <div class="form-main">
             <AuthOrgs/>
         </div>
      </div>
      <div class="templateWrapper">
         <AuthBannerOrgs class="banner-tag"/>
      </div>
   </div>
</template>

<script>
//import component molecules
import AuthOrgs from '../organism/AuthLogin.vue'
import AuthBannerOrgs from '../organism/AuthBanner.vue'
import Logo from '../atoms/AppLogo.vue'


export default{
   name:'LoginTemplate',
   components:{
      AuthOrgs,AuthBannerOrgs,Logo
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

.form-main{
   display: flex;
   flex-direction: column;
   justify-content: center;
}

@media screen and (max-width: 600px){
   .banner-tag{
      display: none; 
   }
}


</style>