<template>
    <div> 
        <CardOrganism
            v-if="this.$store.state.product_loading"
            :cards="fakeCard" 
            @add-to-cart="addToCart"
        />
        <CardOrganism 
            v-else
            :cards="paginated" 
            @add-to-cart="addToCart"
        />
        <div class="button-wrapper">
            <Pagination 
               :current="this.current"
               :pageSize="this.pageSize"
               :cards="this.cards"
               @paging="updateHandler"
               @value-subtract="subtractHandler"
               @value-increased="increasedHandler"
            />
        </div>
    </div>
</template>

<script>

    import CardOrganism from '../organisms/CardOrgansim.vue';
    import CardLoaderMixin from '../../mixins/CardLoaderMixin';
    import Pagination from '../Admin/molecules/pagination.vue'

    export default {
        name:"cardTemplate",
        props:['isFilterCard'],
        mixins:[CardLoaderMixin],
        components:{
            CardOrganism,
            Pagination
        },
        data(){
            return{
                fakeCard:[
                    {
                       image:'',
                       rating:'',
                       description:'',
                       price:'',
                    },
                    {
                       image:'',
                       rating:'',
                       description:'',
                       price:'',
                    },
                    {
                       image:'',
                       rating:'',
                       description:'',
                       price:'',
                    },
                    {
                       image:'',
                       rating:'',
                       description:'',
                       price:'',
                    },
                ],
                cards:[],
                paginated:[],
                isMarketPlace:null,
                current: 1,
                pageSize: 8 ,
            }
        },
        created(){
            this.isMarketRoute();
        },
        methods:{
            subtractHandler(value){
                this.current = value
            },
            increasedHandler(value){
               this.current = value
            },
            updateHandler(value){ 
               this.paginated = value
            },
            isMarketRoute(){
                if(this.$route.name === "MarketPlace"){
                    this.isMarketPlace = true;
                    return;
                }
                this.isMarketPlace = false;
            },
            getAllProduct(){
               this.cards = this.$store.state.products
            },
            addProductToCart(value){
               this.$store.dispatch('addToCart' , value );
            },
            addToCart(value){
                this.$emit('add-to-cart' , value)
            },
        },
        computed:{
            itemsCard: function(){
                return this.cards.filter((card => card.averageReview >= this.isFilterCard ));
            },
        },
        watch:{
            $route(){
               this.isMarketRoute;
            },  
        },
    }
</script>

<style lang="scss" scoped>

.button-btn{
    padding: 10px ;
    border-radius: 17px ;
    border: 1px solid #065143 ;
    outline: none ;
    font-size: 16px;
    font-family: 'IM Fell English', serif;
    cursor: pointer ;
    right: 0;
    color: #065143 ; 
    text-decoration: none;
    transition: 1s ease;

    &:hover{
        background: #065143 ;
        color: #eee;
    }
}

.button-wrapper{
    width:  80%;
    margin: 0px auto;
    padding: 20px ;
    display: flex ;
    justify-content: center ;
}

</style>