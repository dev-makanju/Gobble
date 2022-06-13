<template>
 <div class="review-wrapper">
      <div v-if="this.$store.state.auth.status == 'loading'">
         <h4 style="text-align: center; color: red;">Loading...</h4>
      </div>
      <div class="details__wrapper">
         <div class="details__wrap wrap">
            <img :src="image">
         </div>
      <div class="details__wrap__information">
      <div class="details__wrap">
            <div v-if="!loading" class="category">
               <p> category <span class="cart">{{ category }}</span></p>
            </div>
            <h1 v-if="!loading">{{  name }}</h1>
            <p v-if="!loading" style="max-width:300px;">{{ description }}</p>
            <p v-if="!loading">Price: <span style="font-size: 20px; color:#065143;">₦ {{ price }}</span></p>
            <div v-if="!loading" class="cart__increment">
               <div class="cart__add">
                  <div>
                     <font-awesome-icon 
                        style="cursor:pointer;
                        border: 1px solid #065143; 
                        padding:5px; 
                        border-radius: 5px;" 
                        @click="reduceQty" icon="subtract"
                     />
                  </div>
                  <div>
                  <p style="padding: 5px;">{{ quantity }}</p>
                  </div>
                  <div>
                     <font-awesome-icon 
                        style="cursor:pointer; 
                        padding:5px;
                        border: 1px solid #065143;
                        border-radius: 5px;" 
                        @click="quantity++" icon="plus"
                     />
                  </div>
               </div>
            </div>
            <div v-if="!loading" class="item" style="display:flex;flex-direction:column;margin-left: 4px; ">
               <div class="review">
                  <div class="stars">
                     <atom-starf style="color:orange;font-size: 34px;"></atom-starf>
                     <p>
                        {{ parseFloat(reviewAvg).toFixed(1) }} ({{ allReviews.length > 0 ? allReviews.length : '0' }}) 
                        review{{ allReviews.length > 0 ? 's' : '' }}
                     </p>
                     <p v-if="allReviews.length !== 0" @click="getProReview($route.params.slug)" class="show">show more...</p>
                  </div> 
               </div>
               <div class="review">
               <!---reviews-->
                  <div v-for="review in reviewCart" :key="review.id" v-show="review.review !== null" class="review-container">
                     <img class="avater" src="@/assets/mobile/3898372_user_people_man_add_icon.png" alt="">
                     <ul class="review-details">
                        <h3>{{ review.User.name }}</h3>
                        <p>{{ review.review }}</p>
                     </ul>
                  </div>
                  <div v-if="allReviews.length == 0">
                     <p class="text">Be the first to write review</p>
                  </div>
                  <div class="type-review">
                     <h5>Enjoy the taste?, write your review</h5>
                     <textarea name="" v-model.trim="reviewText" id="" cols="30" rows="10" required></textarea>
                     <button v-show="reviewText" @click="sendReview" class="btn">Send</button>
                  </div>
               </div>
            </div>
            <div v-if="!loading" class="footer-info">
               <div v-if="!showButton">
                  <button @click="addCartProduct(id)" class="button-btn">
                     Add To Cart
                  </button>
               </div>
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
         reviewText: '',
         showButton: null,
         name: '',
         description: '',
         price:'',
         image:'',
         reviewAvg: '',
         category:'',
         quantity: 0,
         allReviews: [],
         reviewCart: [],
         id:'',
         loading: null,
      }
   },
   mounted(){
      this.getProduct();
   },
   methods:{
      ...mapActions(['getProductById']),
      ...mapActions('cart' , ['addProduct' , 'getProductReview' , 'addProductReview']),
      getProduct(){
         this.loading = true;
         const id = this.$route.params.slug
         this.getProductById(id).then(res => {
            if(res.status){
               this.loading = false;
               this.id = res.data.data.id
               this.name = res.data.data.name;
               this.description = res.data.data.description;
               this.price = res.data.data.price;
               this.allReviews = res.data.data.Reviews
               this.image = res.data.data.image;
               this.reviewAvg = res.data.data.averageReview;
               this.category = res.data.data.category
            }
         }).catch(err => {
            err
         })
      },
      getProReview(id){
         this.getProductReview(id).then(res => {
            if(res.status){
               this.reviewCart = res.data.data
            }
         }).catch(err => {
            console.log(err)
         })
      },
      sendReview(){
         const id = this.$route.params.slug
         const data = {
            review: this.reviewText
         }
         const data_value = {
            id: id,
            data: data
         }

         if(!this.$store.getters.isLoggedIn){
            this.$router.push({name: 'Login'});
         }else{
            if(this.reviewText !== ''){
               this.addProductReview(data_value).then(res => {
                  if(res.status){
                     const userName =  this.$store.state.auth.user.name;
                     const result = {
                        User:{
                           name: userName
                        },
                        review:this.reviewText
                     }
                     this.reviewCart.push(result);
                  }
               }).catch(err => {
                  err
               })
            }
         }
      },
      addCartProduct(id){
         const p_id = {
            pro_id: id,
            qty: this.quantity
         }
         if(!this.$store.getters.isLoggedIn){
            this.$router.push({name: 'Login'});
         }else{
            this.addProduct(p_id).then(res => {
            if(res.status){
               //
            }
            }).catcn(err => {
               err
            })
         }
      },
      reduceQty(){
         if(this.quantity !== 1 ){
            this.quantity--
            return;
         }
      },
   }
}
</script>

<style lang="scss" scoped>
   /****Review****/
   .text{
      font-size: 12px;
      font-style: italic;
      color: rgba(0, 0, 0, 0.309);
   }

   .show{
      font-size: 12px;
      font-style: italic;
      color: rgba(0, 0, 0, 0.309);
      cursor: pointer;
      float: right;
      transition: .5s ease;
      margin-left: 30px;

      &:hover{
         color: #06514386;
      }
   }


   .cart__add{
      display: inline-flex;
      padding: 10px 5px;
   }

   .review-wrapper{
      height: 100%;
   }

   .rounded{
      background: green;
      height: 13px;
      width: 13px;
      border-radius: 50%;
   }

   .review{
      max-height: 320px;
      overflow: hidden;
      overflow-y: auto;
      border:  1px solid rgba(0, 0, 0, 0.246);
      margin-bottom: 5px;
      padding: 7px;
      max-width: 350px;
      border-radius: 2px;

      .stars{
         display: inline-flex;
      }

      .stars p{
         font-weight: bold;
         letter-spacing: 1px;
      }

      .type-review{
         width: 100%;

         h5{
            padding: 10px 0px;
         }

         & textarea{
            width: 100%;
            box-sizing: border-box;
            padding: 5px;
            border: 1px solid rgba(238, 238, 238, 0.328);
            outline: none;
            font-size: 12px;
         }

         & .btn{
            width: 100%;
            padding: 5px;
            font-size: 14px;
            color:#065143;
            border: 1px solid #065143;
            border-radius: 4px;
            cursor: pointer;
            margin: 10px 0px;

            &:active{
                transform: scale(1.1);
                /* Scaling button to 0.98 to its original size */
                box-shadow: 3px 2px 15px 7px rgba(0, 0, 0, .2);
                /* Lowering the shadow */
            }
         }
      }

      .review-container {
         border-radius: 5px;
         padding: 5px;

         .review-details {
            margin-top: 10px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.246);
            
            h3 {
               font-weight: 300;
               font-size: 14px;
            }

            p{
               font-weight: 400;
               padding: 10px 1px;
               font-size: 12px;
            }
         }

         .avater{
            width: 35px;
            float: left;
            margin-right: 10px;
            border: 1px solid rgba(0, 0, 0, 0.227);
         }
      }
   }

   .category{

      .cart{
         color: #065143;
         font-size: 20px;
         font-family: 'Courier New', Courier, monospace;
         font-weight: bold;
         border: 1px solid #065143;
         border-radius: 10px;
      }
   }

   .footer-info button{
      border: 1px solid #065143;
      border-radius: 4px;
      width: 100%;
      padding: 8px;
      font-size: 16px;
      cursor: pointer;
      color: #065143;
      outline: none;
      transition: .5s ease;

      &:active{
         transform: scale(1.1);
         /* Scaling button to 0.98 to its original size */
         box-shadow: 3px 2px 15px 7px rgba(0, 0, 0, .2);
         /* Lowering the shadow */
      }
   }

   .details__wrapper{
      max-width: 900px;
      display: flex;
      flex-direction: column;
      margin: 0px auto;
      gap: 2rem;
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