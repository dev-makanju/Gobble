<template>
   <div class="slide__wrapper">
      <div class="main-padding" v-for="card in cards" :key="card.id">
         <div class="card-slider">
         <div class="card-slider">
            <img class="card__image" :src="card.image" :alt="card.description">
         </div>
         <div class="card-slider details">
            <div class="description">
               <div class="item" style="display:inline-flex; font-weight: bold;">
                  <AtomStarf style="color:gold;font-size: 20px;"/><p class="padding:2px">{{ card.rating }}</p>
               </div> 
               <h2>NGN {{ card.price }}</h2>
            </div>
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
   props:['cards']
}
</script>

<style lang="scss" scoped>
   .main-padding{
      padding: 4px;
   }
   .slide__wrapper{
      display: flex;
      overflow-x: auto;
      gap: 2px;
      align-items: center;
      flex-wrap: nowrap;
      width: 100%;
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
         font-weight: 300;
         padding: 1px 4px;
         font-size: 16px;
         color: #065143;
      }
   }

   .card-slider{
      position: relative ;
      width: 200px;
      min-height: 150px;
      min-width: 200px;
      height: 150px;
      border-radius: 10px;
      transition: .5s ease-in-out;
      overflow: hidden;
      cursor: pointer;

         &:hover{
            transform: scale(1.04);
            box-shadow: 0px 2px 1px 1px rgba(0 , 0 , 0 , .1);
         }
         
         .card__image{
            width: 200px;
            object-fit: cover;
            min-height: inherit;
            transition: .5s all ease;
         }  
   }

   .details{
         position: absolute;
         top: 0;
         background: rgba(24, 23, 23, 0.178);
   }
</style>