<template>
    <div :class="[this.$store.state.isOpen ? 'market__place open' :'market__place' ]">
        <div class="market__section">
            <cardTemplate :isFilterCard="isReturnCardsRatings" @add-to-cart="addProductToCart"/>
        </div>
        <div v-if="this.$store.state.isOpen" class="market__section cart">
            <cartOrganism 
                @filter-cart="removeItem" 
                :cartItemsDetails="isCartActive" 
                :isEmpty="isEmpty" 
                @toggle-cart="toogleCart"/>
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
               isReturnCardsRatings:1.0,
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
.market__place{
    display: grid ;
    grid-template-columns: 1fr;
}
.market__place.open{
    display: grid ;
    grid-template-columns: 1fr 400px;

    .market__section.cart{
        background: #eee ;
        height: 100vh ;
        box-shadow: 0px 2px 45px 4px rgba( 0 , 0 , 0 , .3);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        width: 350px ;
        min-width: 400px;
        z-index: 2222;

        @media (max-width: 600px) {
            min-width: 280px;
        }
    }
}

</style>