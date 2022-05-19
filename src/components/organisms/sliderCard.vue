<template>
   <div class="slide__wrapper">
      <div class="main-padding" v-for="card in cards" :key="card.id">
         <div class="card-slider">
         <div class="card-slider">
            <img class="card__image" :src="card.image" :alt="card.description">
         </div>
         <div class="card-slider details">
            <div class="description">
               <h2>₦ {{ card.price }}</h2>
            </div>
         </div>
         </div>
      </div>
   </div>
</template>
<script>

export default {
   name:"sliderCard",
   components:{

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
      min-height: 200px;
      gap: 2rem;
      align-items: center;
      flex-wrap: nowrap;
      width: 100%;
      -webkit-overflow-scrolling: touch;

      &::-webkit-scrollbar{
         display: none;
      }
   }

   .description{
      background: #065143;
      bottom: -1.7rem;
      right: -1.7rem;
      position: absolute;
      width: 40%;
      display: flex;
      justify-content: center;
      padding: 1rem 0px;

      h2{
         font-weight: 300;
         padding: 1px 4px;
         font-size: 16px;
         color: #eee;
      }
   }

   .card-slider{
      position: relative ;
      width: 200px;
      min-height: 150px;
      min-width: 200px;
      height: 150px;
      border-radius: 2px;
      transition: .5s ease-in-out;
      cursor: pointer;
         
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