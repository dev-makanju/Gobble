<template>
    <div :class="[this.$store.state.isOpen ? 'market__place open' :'market__place' ]">
        <div class="market__section">
            <div class="market-banner">
                <img src="https://cdn.pixabay.com/photo/2017/07/16/11/57/fried-2509089_960_720.jpg" alt="">
                <div class="market-banner-overlay"></div>
                <div class="market-banner-overlay-text">
                    <h1>Enjoy the taste that differs.</h1>
                </div>
            </div>
            <cardTemplate :isFilterCard="isReturnCardsRatings" @add-to-cart="addProductToCart"/>
            <div v-if="this.$store.state.isOpen" class="market__overlay"></div>
        </div>
        <div :class="[this.$store.state.isOpen ? 'market__section open' : 'market__section cart']">
            <cartOrganism 
                @filter-cart="removeItem" 
                :cartItemsDetails="isCartActive" 
                :isEmpty="isEmpty" 
                @toggle-cart="toogleCart"
            />
        </div>
        <div class="top">
            <a class="back-top" href="#top" v-smooth-scroll>Up</a>
        </div>
    </div>
</template>

<script>  

    import cardTemplate from '../components/templates/cardTemplate.vue'
    import cartOrganism from '../components/organisms/cartOrganism.vue'

    export default {
        name:"MarketPlace",
        components:{
            cardTemplate , cartOrganism
        },
        data(){
            return{
               isReturnCardsRatings:0,
               isCartActive:[],
               isEmpty:null,
            }
        },
        methods:{
            toogleCart(){
                this.$store.dispatch('closeCart')
            },
            addProductToCart(value){
                const result = this.isCartActive.find(res => res.id === value.id);
                if(result == undefined){
                    this.isCartActive.push(value); 
                }else{
                    result.qty++
                    return
                }  
            },
            removeItem(value){
                this.$emit('remove-from-store' , value)
                this.isCartActive = this.isCartActive.filter( card => card.id !== value );
            }
        },
        created(){
           this.isEmpty = true;
        },
        watch:{
            isCartActive: function(){
                if(this.isCartActive.length === 0){
                    this.isEmpty = true
                    this.$store.dispatch('cartUpdated' , 0)
                }else{
                    this.isEmpty = false;
                    const count = this.isCartActive.length
                    this.$store.dispatch('cartUpdated' , count)
                }
            },   
        }
    }
</script>

<style lang="scss" scoped>
/***Product banner****/
.market-banner{
    position: relative;
    height: 40vh;
    overflow: hidden;

    &>img{
      height: 40vh;
      width: 100%;
      object-fit: cover;
    }

    .market-banner-overlay{
        height: 40vh;
        width: 100%;
        position: absolute;
        top: 0;
        background: rgba(0, 0, 0, 0.556);

        &-text{
            height: 40vh;
            width: 90%;
            margin: auto;
            position: absolute;
            inset: 0;

            &>h1{
                font-size: 40px;
                font-family: 'Mochiy Pop P One', sans-serif;
                color: #eee;
                display: flex;
                position: absolute;
                bottom: 0;
                padding-bottom: 2rem;
            }
        }
    }
}



.top{
    .back-top{
        padding: 7px;
        background: #065143 ;
        width: 40px;
        border-radius: 50%;
        font-size: 14px;
        font-family: 'Poppins' , sans-serif;
        color: #eee;
        box-shadow: 0px 2px 5px rgba( 0 , 0 , 0 , .3);
        position: fixed;
        z-index: 111;
        bottom: 2rem;
        right: 2rem;
        cursor: pointer ;
        font-weight: bold;
        font-size: 20px;
        text-decoration: none ;
    }
}

.market__overlay{
    background: rgba(0, 0, 0, 0.485);
    position: fixed ;
    inset: 0px;
}

.market__place{
    display: grid ;
    grid-template-columns: 1fr;
}
.market__place.open{  
     grid-template-columns: 1fr;
    .market__section{
        transition: .5s ease ;

        &.cart{
            background: #eee ;
            height: 100vh ;
            box-shadow: 0px 2px 45px 4px rgba( 0 , 0 , 0 , .3);
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            //width: 350px;
            transform: translateX(400px);
            min-width: 400px;
            z-index: 2222;

            @media (max-width: 600px) {
                min-width: 280px;
            }
        }

        &.open{
            background: #eee;
            height: 100vh;
            box-shadow: 0px 2px 45px 4px rgba( 0 , 0 , 0 , .3);
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            //width: 350px;
            transform: translateX(0px);
            min-width: 400px;
            z-index: 2222;

            @media (max-width: 600px) {
                min-width: 280px;
            }
        }
    }    
}

</style>