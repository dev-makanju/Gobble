<template>
   <div class="details__wrapper">
      <div class="details__wrap wrap">
         <img :src="image" onerror="this.style.display='none'">
         <PuSkeleton v-if="loading" class="single__loader">
         </PuSkeleton>
      </div>
      <div class="details__wrap">
         <div class="details__wrap__information">
            <h1 v-if="!loading">{{  name }}</h1>
            <p v-if="!loading">{{ description }}</p>
            <p v-if="!loading">Price: <span style="font-size: 20px; color:#065143;">₦ {{ price }}</span></p>
            <div v-if="!loading" class="item" style="display:inline-flex;margin-left: 4px; ">
               <AtomStarf style="color:orange;font-size: 34px;"/> <p class="padding:2px; cursor: pointer;">234 reviews</p>
            </div>
            <div v-if="!loading" class="category">
               <p>~category~ <span class="cart">{{ category }}</span></p>
            </div>
            <div v-if="!loading" class="footer-info">
               <div v-if="!showButton">
                  <button @click="addToCart()" class="button-btn">
                     Add To Cart
                  </button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>

import AtomStarf from '../components/atoms/AtomStarRating.vue'
import { mapActions } from 'vuex';

export default {
   name:'ProductDetails',
   components:{
      AtomStarf
   },
   data(){
      return{
         showButton: null,
         name: '',
         description: '',
         price:'',
         image:'',
         riview: '',
         category:'',
         loading: null,
      }
   },
   mounted(){
      this.getProduct();
   },
   methods:{
      ...mapActions(['getProductById']),
      getProduct(){
         this.loading = true;
         const id = this.$route.params.slug
         this.getProductById(id).then(res => {
            if(res.status){
               this.loading = false;
               this.name = res.data.data.name;
               this.description = res.data.data.description;
               this.price = res.data.data.price;
               this.image = res.data.data.image;
               this.review = res.data.data.averageReview;
               this.category = res.data.data.category
            }
         }).catch(err => {
            err
         })
      }
   }
}
</script>

<style lang="scss" scoped>
   .category{
      border: 2px solid #065143;
      padding: .3rem 0px;
      margin-bottom: 1rem;
      border-radius: 5px;

      .cart{
         color: #065143;
         font-size: 20px;
         font-family: 'Courier New', Courier, monospace;
         font-weight: bold;
      }
   }

   .footer-info button{
      border: 1px solid #065143;
      border-radius: 4px;
      width: 100%;
      padding: 10px;
      font-size: 22px;
      cursor: pointer;
      color: #065143;
      outline: none;
   }

   .details__wrapper{
      max-width: 900px;
      display: flex;
      flex-direction: column;
      margin: 0px auto;
      gap: 4rem;
      margin-bottom: 4rem;
      
      .details__wrap__information{
         padding: 5px 5px;
      }

      .details__wrap__information h1 , p{
         padding: 15px 10px;
         font-family: 'Poppins', sans-serif;
      }

      @media (min-width: 600px ) {
         flex-direction: row;
      }

      .details__wrap{
         flex: 1; 
         height: 600px;
         min-width:300px;

         &.wrap{
            display: flex;
            justify-content: center ;
            align-items: center;
         }

         & img{
            width: 100%;
            border-radius: 4px;
            object-fit: cover;
            max-height: 400px;
            border:1px solid #06514347;
         }

         & .single__loader{
            width: 300px;
            border-radius: 4px;
            height: 350px;
            border:1px solid #06514347;
         }
      }
   }
</style>