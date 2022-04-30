<template>
   <div class="slide__wrapper">
      <div class="card-slider">
         <div class="card-slider">
            <img class="card__image" src="@/assets/mobile/i-image.jpg" alt="">
         </div>
         <div class="card-slider details">
            <div class="description">
               <div class="item" style="display:inline-flex; font-weight: bold;">
                  <AtomStarf style="color:gold;font-size: 20px;"/><p class="padding:2px">4.6</p>
               </div> 
               <h2>NgN 300.00</h2>
            </div>
         </div>
      </div>
      <div class="card-slider">
         <div class="card-slider">
            <img class="card__image" src="@/assets/mobile/i-image.jpg" alt="">
         </div>
         <div class="card-slider details">
            <div class="description">
               <div class="item" style="display:inline-flex; font-weight: bold;">
                  <AtomStarf style="color:gold;font-size: 20px;"/><p class="padding:2px">4.6</p>
               </div> 
               <h2>NgN 300.00</h2>
            </div>
         </div>
      </div>
      <div class="card-slider">
         <div class="card-slider">
            <img class="card__image" src="@/assets/mobile/i-image.jpg" alt="">
         </div>
         <div class="card-slider details">
            <div class="description">
               <div class="item" style="display:inline-flex; font-weight: bold;">
                  <AtomStarf style="color:gold;font-size: 20px;"/><p class="padding:2px">4.6</p>
               </div> 
               <h2>NgN 300.00</h2>
            </div>
         </div>
      </div>
      <div class="card-slider">
         <div class="card-slider">
            <img class="card__image" src="@/assets/mobile/i-image.jpg" alt="">
         </div>
         <div class="card-slider details">
            <div class="description">
               <div class="item" style="display:inline-flex; font-weight: bold;">
                  <AtomStarf style="color:gold;font-size: 20px;"/><p class="padding:2px">4.6</p>
               </div> 
               <h2>NgN 300.00</h2>
            </div>
         </div>
      </div>
      <div class="card-slider">
         <div class="card-slider">
            <img class="card__image" src="@/assets/mobile/i-image.jpg" alt="">
         </div>
         <div class="card-slider details">
            <div class="description">
               <div class="item" style="display:inline-flex; font-weight: bold;">
                  <AtomStarf style="color:gold;font-size: 20px;"/><p class="padding:2px">4.6</p>
               </div> 
               <h2>NgN 300.00</h2>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import AtomStarf from '../atoms/AtomStarfRating.vue'

export default {
   name:"sliderCard",
   components:{
      AtomStarf
   },
   data(){
      return{

      }
   },
}
</script>

<style lang="scss" scoped>
   .slide__wrapper{
      display: flex;
      margin: -7px;
      overflow-x: auto;
      flex-wrap: nowrap;
      -webkit-overflow-scrolling: touch;

      &::-webkit-scrollbar{
         display: none;
      }
   }

   .description{
      background: rgba(255, 255, 255, 0.575) ;
      bottom: 0px;
      position: absolute;
      width: 100%;
      padding: 4px 0px;

      h2{
         font-weight: 500;
         padding: 1px 4px;
         color: #065143;
      }
   }

   .card-slider{
      position: relative ;
      width: 200px;
      margin: 7px;
      min-height: 150px;
      min-width: 200px;
      height: 150px;
      border-radius: 10px;
      box-shadow: 0px 2px 37px 5px rgba(0 , 0 , 0 , .1);
      transition: .5s ease-in-out;
      overflow: hidden;
      cursor: pointer;

         &:hover.card__image{
            transform: scale(1.3);
         }
   }

   .card__image{
         min-width: 200px;
         width: 200px;
         object-fit: cover;
         min-height: inherit;
         transition: .5s all ease;
   }  

   .details{
         position: absolute;
         top: 0;
         background: rgba(24, 23, 23, 0.178);
   }
</style>