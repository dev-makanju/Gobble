<template>
   <div>
      <router-link class="link" to="/">
         <div class="logo__base">
            <div class="logo__base__icon"></div>
            <div class="logo__base__white"></div>
         </div>
         <h4>Gobble</h4>
      </router-link>
   </div>
</template>

<script>

export default {
   name:"GobbleLogo"
}

</script>

<style lang="scss">
   .link{
      display: flex;
      text-decoration: none;

      h4{
         padding: 2px; 
         display: flex;
         align-items: end;
      }
   }

   .logo__base{
      position: relative;
      padding: 4px;
      width: 40px;
      float: left;

      &__icon{
         width: 30px;
         height: 30px;
         border-radius: 50%;
         background: #A8B087;
         box-shadow: 0px 2px 5px 4px rgba(0 , 0 , 0 , .2);
      }

      &__white{
         width: 30px;
         height: 30px;
         border-radius: 50%;
         background: #eee;
         position: absolute;
         top: 0px;
      }
   }
</style>