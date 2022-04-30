<template>
   <div class="main-banner">
      <div class="background"></div>
      <div class="overlay__content">
           <h2>Get <span class="highlight">10%</span> off your first purchase </h2>
           <p>From the harmonious union between a mixes of varieties</p>
           <router-link class="next-button" :to="{name:'MarketPlace'}">order now</router-link>
      </div>
   </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
   .main-banner{
      height: 400px;
      background: #065143; 
      position: relative ;    

      .background{
         height: 400px;
         width: 100%;
         position: absolute;
         top: 0px;
      }

      .overlay__content{
         height: 400px;
         width: 100%;
         position: absolute;
         flex-direction: column;
         top: 0;
         display: flex;
         justify-content: center;
         align-items: center;

         h2{
            color: #eee;
            font-family: 'Mochiy Pop P One', sans-serif;
            font-size: 40px;

            @media (max-width: 768px) {
               font-size: 30px;
            }

            @media (max-width: 500px) {
               font-size: 18px;
            }
         }

         p{
            margin-top: 10px;
            color: #fff ;
            font-family: 'Mochiy ', sans-serif;
            font-weight: lighter;
            margin-top: 3rem;

            @media (max-width: 500px) {
               font-size: 14px;
            }
         }

         .highlight{
            padding: 5px;
            background: #fff;
            border-radius: 5px;
            color: #000;
            letter-spacing: 2px;
         }

         .next-button{
            padding: 10px 20px;
            margin-top: 3rem;
            text-decoration: none ;
            border-radius: 5px;
            background: #eee;
            color: #065143;
         }
      }
   }
</style>