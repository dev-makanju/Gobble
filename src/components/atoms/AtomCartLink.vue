<template>
    <div @click="cartList.click" class="main">
        <router-link  class="cart-buttons" :to="{name:`${cartList.compName}`}">
            <slot></slot>
        </router-link>
        <div v-if="cartList.count > 0" :class="['count' ,updated ? ' update' : '']">
            <p>{{ cartList.count }}</p>
            </div>
         </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name:"AtomCartLink",
        props:['cartList'],
        data(){
            return{
                updated: null,
            }
        },
        methods:{
            updatedStyle(){
            
            },
            updateCount(){
                this.updated = true;
                setTimeout( () => {
                  this.updated = false; 
                } , 500)
            },
        },
        computed:{
            ...mapGetters('cart', {
               count: 'getCartCount',    
            }),
        },
        watch:{
            count: function(){
               this.updateCount()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cart-buttons{
        color: #eee;
    }

    .main{
        position: relative ;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .count{
        position: absolute;
        right: -14px ;
        top: -11px ;
        transition: .4s ease;
        transform: scale(1);

        &.update{
           animation: bounce .5s infinite alternate;
           animation-iteration-count: 4;

            @keyframes bounce {
                to { 
                   transform: scale(1.1); 
                }
            }

        }

        p{
            color: red;
            font-weight: bold;
            font-size: 18px;
        }
    }
</style>