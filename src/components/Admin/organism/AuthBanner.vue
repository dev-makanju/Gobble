<template>
   <div class="banner__wrapper">
      <img class="banner__image" src="@/assets/Desktop/j-image.jpg" alt="">
      <div class="banner__overlay">
         <div class="overlay__item">
            <h2>Gobble is the best selling food App for the fifth time in Africa.</h2>
            <div class="overlay__info">
               <li>Fast and Efficient Payment system...</li>
               <li>Enjoy quality online shopping with seamless experience</li>
            </div>
         </div>
      </div>
   </div>
</template>

<script>

export default {
    name:"AuthBanner"
}

</script>

<style>

.banner__wrapper{
   position: relative ;
}

.overlay__info{
   margin-top: 10px;
}

.banner__overlay{
   position: absolute ;
   top: 0px ;
   bottom: 0px;
   background: rgba(0, 0, 0, 0.408);
   width: 100% ;
   display: flex;
   justify-content: center;
   align-items: center;
}

.banner__image{
   width: 100%;
   height: 100vh;
   background-position: 100%  100%;
   object-fit: cover;
}

.overlay__item{
   width: 400px;
   background: rgba(238, 238, 238, 0.413);
   padding: 50px 50px;
   border-radius: 15px;
}

</style>