<template>
   <div class="main-landing-page">
      <div class="wrapper-landing-page">
         <div class="landing-page-child image position">
               <div class="image-wrapper">
                  <img src="@/assets/Desktop/landingImage1.png" onerror="this.style.display='none'">
               </div>
               <div v-scrollAnimate class="landing-page-tags image">
                  <ul>
                     <font-awesome-icon class="fab-icon-round"  icon="shopping-cart"/>
                     <div class="image-text">
                        <li>Easy Shopping</li>
                        <span>best shopping experience</span>
                     </div>
                  </ul>
               </div>
         </div>
         <div class="landing-page-child">
            <div v-scrollAnimate class="landing-page-child text">
               <div class="landing-page-tags ordinary">
                  <div>
                     <ul>
                        <font-awesome-icon class="fab-icon"  icon="border-none"/>
                        <li>No ordinary Meal</li>
                     </ul>
                  </div> 
               </div>
               <h1>Fastest and cheapest food delivery service</h1>
               <div>
                  <p>Get the best quality and most delicious food in Nigeria. You can get them all on our website</p>
               </div>
               <div>
                  <router-link class="order-now" :to="{name:'MarketPlace'}">Order Now</router-link>
               </div>
            </div>
         </div>
      </div>
      <div class="wrapper-landing-page why">
         <div class="landing-page-child image">
            <div class="image-wrapper">
               <img src="@/assets/Desktop/landingImage2.png" onerror="this.style.display='none'">
            </div>
         </div>
         <div class="landing-page-child">
            <div v-scrollAnimate class="landing-page-child text">
               <h4>SHOWCASE</h4>
               <h1>Why should you use our service?</h1>
               <div>
                  <p>We always provide the best and fastest service for our all of our customers</p>
               </div>
               <div class="landing-page-tags">
                  <div>
                     <ul>
                        <font-awesome-icon class="fab-icon"  icon="money-bill"/>
                        <li>We provide the fastest service</li>
                     </ul>
                  </div>
                  <div>
                     <ul>
                        <font-awesome-icon class="fab-icon"  icon="comment-dollar"/>
                        <li>No Additional fees for orders</li>
                     </ul> 
                  </div>
                  <div>
                     <ul>
                        <font-awesome-icon class="fab-icon"  icon="bolt-lightning"/>
                        <li>Fast and reliable delivery</li>
                     </ul>
                  </div> 
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
    name: 'landingPage',
}
</script>
<style scoped>

   .image-wrapper{
      width: 100% ;
   }

   .image-wrapper img{
      width: 100%;
      min-height: 400px;
      object-fit: cover;
   }

   .wrapper-landing-page{
      display: flex ;
      gap: 10px;
   }


   .wrapper-landing-page.why{
      padding: 8rem 0px ;
      flex-direction: row-reverse ;
   }

   @media screen and (max-width: 768px){
      .wrapper-landing-page{
         flex-direction: column;
         gap: 6rem;
      }
      
      .wrapper-landing-page.why{
         flex-direction: column;
         gap: 6rem;
         padding: 4rem 0px;
      }
   }

   .order-now{
      text-decoration: none;
      color: #eee;
      background: #065143;
      font-weight: 600;
      padding: 10px;
      border-radius: 5px;
      outline: none;
   }

   .fab-icon{
      background: #0651434e;
      padding: 10px ;
      border-radius: 4px;
      color: #065143fe;
      width: 30px;
   }

   .fab-icon-round{
      background: #065143fe;
      padding: 10px ;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #eee;
      float: left;
      margin-right: 10px;
   }

   .landing-page-child.image{
      display: flex;
      align-items: center;
   }

   .landing-page-child{
      flex: 1;
      min-width: 100px;
   }

   .landing-page-child.text{
      min-height: 400px;
      transition: .5s ease;
   }

   .landing-page-child.text.before-enter{
      opacity: 0;
      transform: translateY(60px);
   }

   .landing-page-child.text.enter{
      opacity: 1;
      transform: translateY(0px);
   }

   .landing-page-child.text h4{
      color: #065143;
   }

   .landing-page-child.text div p{
      padding-bottom: 2rem;
   }

   .landing-page-child.text h1{
      padding: 1rem 0px;
   }

   .main-landing-page{
      width: 90%;
      margin: 0px auto;
      max-width: 1440px;
      padding-top: 8rem ;
   }

   .landing-page-child.position{
      position: relative;
      min-width: 300px;
   }

   .landing-page-tags{
      display: flex;
      flex-direction: column;
      gap: 10px;
   }

   .landing-page-tags.image{
      position: absolute;
      bottom: 20px;
      right: 20px;
      background: #eee;
      width: 270px ;
      z-index: 1111;
   }

   .landing-page-tags.image.before-enter{
      transform: scale(.8);
   }

   .landing-page-tags.image.enter{
      animation: bounce .5s infinite alternate;
      animation-iteration-count: 4;
   }

   @keyframes bounce {
      to { 
         transform: scale(1.1); 
      }
   }

   .landing-page-tags.image ul{
      max-width: 300px ;
   }

   .landing-page-tags.ordinary ul{
      background: #06514327 ;
      padding: 10px ;
      box-shadow: 0px 2px 35px 10px rgba(0 , 0 , 0 , .1) ;
      border-radius: 7px ;
      max-width: 220px ;
   }
   
   .image-text{
      height: 30px;
   }

   .image-text span{
      font-size: 12px;
   }

   .image-text li{
      font-size: 16px;
      font-weight: 600;
      padding: 0px;
   }

   .landing-page-tags div{
      margin: 7px;
   }

   .landing-page-tags ul{
      padding: .8rem;
      box-shadow: 0px 2px 35px 5px rgba(0 , 0 , 0 , .1);
      border-radius: 7px;
      max-width: 350px;
   }

   .landing-page-tags ul>.fab-icon{
      float: left;
      margin-right: 1rem;
   }

   .landing-page-tags ul>li{
      padding: 8px 0px;
      font-weight: 600;
      font-size: 14px;
      color: rgb(76, 73, 73);
   }

</style>
