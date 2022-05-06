<template>
    <transition name="cart__slider">
    <div class="shopping__cart">
        <div style="overflow-y:auto; height:80%">
            <div class="times__icon">
                <font-awesome-icon @click="$emit('toggle-cart')" icon="times"/>
            </div>
            <div v-if="!isEmpty">
            <div v-for="items in cartItemsDetails" :key="items.id" class="cart">
                <div class="cart__wrapper">
                   <img class="cart__image" width="150" height="150" :src="items.image">
                </div>
                <div>  
                    <div style="padding: 5px; margin-left: 4px;">
                        <div>
                            <p>{{ items.description }}</p>
                            <p class="" style="margin-top: 4px;color:#065143;"><span>NgN</span>{{ items.price }}</p>
                        </div>
                        <div class="cart__increment">
                                <div class="cart__add">
                                    <div>
                                    <font-awesome-icon 
                                        style="cursor:pointer; 
                                        padding:5px;
                                        border: 1px solid #065143;
                                        border-radius: 5px;" 
                                        @click="items.qty++" icon="plus"/>
                                    </div>
                                    <div>
                                    <p style="padding: 5px;">{{ items.qty }}</p>
                                    </div>
                                    <div>
                                        <font-awesome-icon 
                                            style="cursor:pointer;
                                            padding:5px; 
                                            border: 1px solid #065143; 
                                            border-radius: 5px;" 
                                            @click="reduceQty(items.id)" icon="subtract"/>
                                    </div>
                                </div>
                                <font-awesome-icon  
                                    style="padding: 5px;
                                    cursor: pointer;
                                    float:right;" 
                                    @click="filterCart(items.id)"
                                    icon="times"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
              <h2>Kindly select an item to add to your cart...</h2>
        </div>
        </div>

         <!---Total purchase--->
         <div style="background: #eee;height:20%;" class="main_product_cart">
            <hr>
                <div class="purchase">
                    <div>
                        <h1>Total Purchase</h1>
                    </div>
                    <div>
                        <h1><span class="" style="color: #065143 ;font-size: 20px;">NgN</span>{{ returnTotalPrice }}.00</h1>
                    </div>
                </div>
            <hr>
            <div style="display:flex; justify-content: flex-end; width: 100%; padding: 0px 10px;">
                <router-link :to="{name:'Checkout'}">
                      <button class="btn-button">Check Out</button>
                </router-link>
            </div>
        </div>
    </div>
    </transition>
</template>

<script>
    export default {
        name:"CartOrganism",
        props:['cartItemsDetails' , 'isEmpty'],
        data(){
            return{
                price:0,
            }
        },
        methods:{
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

.shopping__cart{
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column ;
    
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

    .main_product_cart{
        position: absolute;
        bottom: 0px;
        width: 100%;
    }

    .cart__add{

    }

}

</style>