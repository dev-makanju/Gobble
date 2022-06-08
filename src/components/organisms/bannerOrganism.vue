<template>
   <div class="main-banner">
      <div class="background">
         <img src="@/assets/Desktop/heart.png" alt=" " onerror="this.style.display='none'">
      </div>
      <div class="overlay__content">
         <div class="banner-wrapper">
            <div>
               <h2>Get <span v-scrollAnimate class="highlight">10%</span> off your first purchase </h2>
            </div>
            <div>
               <p>From the harmonious union between a mixes of varieties</p>
            </div>
            <div>
               <router-link v-scrollAnimate class="next-button" :to="{name:'MarketPlace'}">order now</router-link>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default{
   name:'bannerCard',
}
</script>

<style lang="scss" scoped>
   .main-banner{
      height: 60vh ;
      background: #065143; 
      position: relative ;    

      .background{
         height: 60vh ;
         width: 100% ;
         position: absolute ;
         top: 0px ;

         img{
            width: 100%;
            height: 60vh;
            object-fit: cover;
         }
      }

      .overlay__content{
         height: 60vh;
         width: 100%;
         position: absolute;
         flex-direction: column;
         top: 0;
         display: flex;
         justify-content: center;
         align-items: center;
         background: rgba(0, 0, 0, 0.635);

         .banner-wrapper{
            background: rgba(238, 238, 238, 0.885);
            box-shadow: 0px 2px 5px rgba(157, 152, 152, 0.635);
            padding: 20px 4rem ;
            border-radius: 2px;
            height: 300px;
            justify-content: space-evenly;
            display: flex;
            align-items: center;
            flex-direction: column;
         }

         @media (max-width: 768px ) {
            .banner-wrapper{
               padding: 20px 15px ;
            }
         }

         h2{
            font-family: 'Mochiy Pop P One', sans-serif;
            font-size: 30px;

            @media (max-width: 768px) {
               font-size: 30px;
            }

            @media (max-width: 500px) {
               font-size: 18px;
            }
         }

         p{
            color: #000 ;
            font-family: 'Mochiy ', sans-serif;
            font-weight: lighter;


            @media (max-width: 500px) {
               font-size: 14px;
            }
         }

         .highlight{
            padding: 3px;
            background: #fff;
            border-radius: 5px;
            color: rgb(230, 96, 73);
            letter-spacing: 2px;
            transition: 1s ease;
            display: inline-block;

            &.before-enter{
               opacity: 0;
               transform: scale(.5);
            }

            &.enter{
               opacity: 1;
               transform: rotate(320deg);
            }
         }

         .next-button{
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            background: #065143;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.635);
            transition: .5s ease;
            color: #eee;

            &.before-enter{
               transform: scale(.8);
            }

            &.enter{
               animation: bounce .5s infinite alternate;
               animation-iteration-count: 4;
            }

            @keyframes bounce {
               to { 
                  transform: scale(1.2); 
               }
            }

         }
      }
   }
</style>