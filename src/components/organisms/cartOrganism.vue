<template>
    <transition name="cart__slider">
        <div v-if="this.$store.state.isOpen"  class="shopping__cart">
            <h4 v-if="!this.$store.state.cart.cartLoaded" style="text-align: center; color: red;">Loading...</h4>
            <div style="overflow-y:auto; height:80%">
                <div class="times__icon">
                    <font-awesome-icon class="icon-close" @click="$emit('toggle-cart')" icon="times"/>
                </div>
                <div v-if="cartItems.length !== 0">
                <div v-for="item in cartItems" :key="item.id" class="cart">
                    <div class="cart__wrapper">
                        <img class="cart__image" width="150" height="150" :src="item.image" onerror="this.style.display='none'">
                    </div>
                    <div>  
                        <div style="padding: 5px; margin-left:4px;width: 200px;">
                            <div>
                                <p>{{ item.product }}</p>
                                <p class="" style="margin-top: 4px;color:#065143;"><span> ₦ </span>{{ item.totalPrice }}</p>
                            </div>
                            <div class="cart__increment">
                                <div class="cart__add">
                                    <div>
                                        <font-awesome-icon 
                                            style="cursor:pointer;
                                            padding:5px; 
                                            border: 1px solid #065143; 
                                            border-radius: 5px;" 
                                            @click="reduceQty(item.id)" icon="subtract"/>
                                    </div>
                                    <div>
                                    <p style="padding: 5px;">{{ item.quantity }}</p>
                                    </div>
                                    <div>
                                        <font-awesome-icon 
                                            style="cursor:pointer; 
                                            padding:5px;
                                            border: 1px solid #065143;
                                            border-radius: 5px;" 
                                            @click="item.qty++" icon="plus"/>
                                    </div>
                                </div>
                                <div>
                                    <font-awesome-icon  
                                        style="padding: 5px;
                                        cursor: pointer;
                                        float:right;" 
                                        @click="filterCart(item.id)"
                                        icon="times"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div v-else>
            <h2 class="add-text">Kindly select an item to add to your cart...</h2>
        </div>
            </div>

            <!---Total purchase--->
            <div style="background: #eee;height:20%;" class="main_product_cart">
            <hr>
                <div class="purchase">
                    <div>
                        <h1 class="add-text">Total Purchase</h1>
                    </div>
                    <div>
                        <h2><span style="color: #065143 ;font-size:18px;">₦</span>{{ returnTotalPrice }}.00</h2>
                    </div>
                </div>
            <hr>
            <div style="display:flex; justify-content: flex-end; width: 100%; padding: 0px 10px;">
                <paystack           
                    :amount="parseInt(returnTotalPrice * 100)"
                    :email="'makurseme@gmail.com'" 
                    :paystackkey="get_paystack_details['PUBLIC_KEY']"
                    :reference="reference"
                    :callback="processPayment"
                    :close="get_paystack_details['close']"
                    class="btn-button">
                    Pay ₦{{ returnTotalPrice }}
                </paystack>
            </div>
           </div>
    </div>
    </transition>
</template>

<script>
    
import { mapGetters , mapActions, mapState } from "vuex";
import paystack from "vue-paystack";

    export default {
        name:"CartOrganism",
        props:['cartItemsDetails' , 'isEmpty'],
        components:{ 
            paystack 
        },
        data(){
            return{
                price:0,
                shippingFee: 4,
                cartItems: [],
            }
        },
        mounted(){
           this.getCartItems();
        },
        methods:{
            ...mapActions('payment', ['processPayment']),
            ...mapActions('cart', ['getCart']),
            ...mapState('cart', ['carts' , 'cartLoaded']),

            getCartItems(){
               this.getCart().then(res => {
                if(res.status){
                   this.cartItems = this.$store.state.cart.carts;
                }
               }).catch(err => {
                   err
               })
            },

            filterCart(item){
               this.$emit('filter-cart' , item );
            },

            reduceQty(id){
                const result = this.cartItemsDetails.find(res => res.id === id);
                if(result.qty !== 1 ){
                    result.qty--
                }else{
                    this.filterCart(result.id)
                }
            }
        },
        computed:{
            ...mapGetters('payment',[
               "Carts",
               "get_paystack_details",
               "getUserDetail",
            ]),
            reference() {
                let text = "";
                let possible =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (let i = 0; i < 10; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                return text;
            },
            returnTotalPrice: function(){
                let total = 0 
                const itms = this.cartItemsDetails;
                itms.forEach( (element) => {
                    total += parseInt(element.price) * element.qty;     
                });
                return total;
            },
        },
        watch:{
            returnTotalPrice: function(){
                this.$store.dispatch('setPrice' ,this.returnTotalPrice );
            }
        }
    }
</script>

<style lang="scss" scoped>

.icon-close{
    padding: 5px;
    border:  1px solid #065143;
    box-shadow: 0px 2px 5px rgba(0 , 0  , 0  , .1);
    border-radius: 3px;
}

.shopping__cart{
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column ;

    .add-text{
        font-size: 14px;
        font-family: 'Poppins' , sans-serif ;
    }
    
    .cart{
        display: flex ;
        flex-direction: row;
    }

    .times__icon{
        padding: 10px ;
        cursor: pointer;
    }

    .cart__image{
        border-radius: 7px;
        object-fit: cover;
        border: 1px solid #eee;
    }

    .cart__wrapper{
        float: left;
    }

    .cart__increment{
        display: flex ;
        margin-top: 3rem;

        .cart__add{
            display: flex ;
            flex-direction: row;
            width: 100%;
        }
    }
    .btn-button{
        padding: 7px ;
        border-radius: 17px ;
        border: 1px solid #065143 ;
        outline: none ;
        font-size: 16px;
        font-family: 'IM Fell English', serif;
        cursor: pointer ;
        right: 0;
        color: #065143 ;  
        transition: .5s ease;

        &:hover{
            background: #065143 ;
            color: #eee;
        }
    }

    .purchase{
        padding: 3px ;
        display: flex ;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    // .main_product_cart{
    //     position: absolute;
    //     bottom: 0px;
    //     width: 100%;
    // }
}

</style>