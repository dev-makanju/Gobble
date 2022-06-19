<template>
<div>
   <div v-if="!error" class="review-wrapper">
      <div class="details__wrapper">
         <div class="details__wrap wrap">
            <img :src="image">
         </div>
      <div class="details__wrap__information">
      <div class="details__wrap">
            <div class="category">
               <p> category <span class="cart">{{ category }}</span></p>
               <h1>{{  name }}</h1>
            </div>
            <div class="review">
               Average review: <AtomStarf style="color: orange;"/>
               <div>
                 {{ reviewAvg }} 
               </div>
            </div>
            <p style="max-width:300px;">{{ description }}</p>
            <p>Price: <span style="font-size: 20px; color:#065143;">₦ {{ price }}</span></p>
            <div class="cart__increment">
               <div class="cart__add">
                  <!--Added all details-->
                  <div class="Add button">
                     <div>
                        <font-awesome-icon 
                           style="cursor:pointer;
                           border: 1px solid #065143; 
                           padding:5px; 
                           border-radius: 5px;" 
                           @click="reduceQty" icon="subtract"
                        />
                     </div>
                     <!---qty-->
                     <div>
                        <p style="padding: 5px;">{{ quantity }}</p>
                     </div>
                     <!---add-->
                     <div>
                        <font-awesome-icon 
                           style="cursor: pointer; 
                           padding: 5px;
                           border: 1px solid #065143;
                           border-radius: 5px;" 
                           @click="quantity++" icon="plus"
                        />
                     </div>
                  </div>
                  <div class="Add footer-info">
                     <div v-if="!showButton">
                        <button @click="addCartProduct(id)" :disabled="sending" class="button-btn">
                           Add To Cart
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <!--Reviews-->
      </div>
   </div>
   </div>
   </div>
   <div v-else class="review-wrapper error">
      <h1>Oops , Not found!</h1> 
      <p>This dish does not exist on our menu</p>
   </div>
</div>
</template>

<script>

import AtomStarf from '../components/atoms/AtomStarRating.vue'
import { mapActions, mapGetters } from 'vuex';

export default {
   name:'ProductSearch',
   components:{
      AtomStarf
   },
   data(){
      return{
         error: null,
         sending: null,
         reviewText: '',
         showButton: null,
         name: '',
         description: '',
         price:'',
         image:'',
         reviewAvg: '',
         category:'',
         quantity: 1,
         id:'',
         loading: null,
      }
   },
   mounted(){
      this.searchProduct();
      addEventListener('load' , () => {
         this.$router.push('/')
      });
   },
   methods:{
      ...mapActions(['getProductById']),
      ...mapActions('cart' , ['addProduct']),
      addCartProduct(id){
         const p_id = {
            pro_id: id,
            quantity: this.quantity
         }
         if(!this.$store.getters.isLoggedIn){
            this.$router.push({name: 'Login'});
         }else{
            this.sending = true;
            this.addProduct(p_id).then(res => {
            if(res.status){
               this.sending =false;
            }
            }).catch(err => {
               this.sending = false;
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
      searchProduct(){
         if(this.$store.state.searchItems.length === 0){
            this.error = true
            return;
         }else{
            this.error = false;
            this.$store.state.searchItems.forEach( item => {
               this.loading = false;
               this.id = item.id;
               this.name = item.name;
               this.description = item.description;
               this.price = item.price;
               this.image = item.image;
               this.reviewAvg = item.averageReview;
               this.category = item.category;
            }); 
         }
      },
   },
   computed:{
      ...mapGetters({
         updateSearch: 'returnSearchItems' 
      }) 
   },
   watch:{
      updateSearch: function(){
         this.searchProduct()
      }
   }
}
</script>

<style lang="scss" scoped>
   /****Review****/
   .error{ 
      width: 80%;
      margin: 0px auto;
      margin-top: 4rem;
      text-align:  center;
   
      & h1{
         font-size: 50px;
      }
   }
   .review{
      display: inline-flex;
      width: 100%; 
   }
   .cart__add{
      display: flex;
      justify-content: space-between;
      padding: 10px 5px;

      .Add.button{
         display: inline-flex;
      }
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
      margin-top: 3rem;
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