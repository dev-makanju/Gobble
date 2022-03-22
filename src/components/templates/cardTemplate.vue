<template>
    <div>
        <CardOrganism :cards="itemsCard" @add-to-cart="addToCart"/>
        <div v-if="!isMarketPlace" class="button-wrapper">
            <router-link class="button-btn" :to="{name:'MarketPlace'}">Explore More</router-link>
        </div>
        <div v-if="isMarketPlace" class="button-wrapper">
            <Pagination/>
        </div>
    </div>
</template>

<script>
    import CardOrganism from '../organisms/CardOrgansim.vue'
    import Pagination from '../templates/pagination.vue'

    export default {
        name:"cardTemplate",
        props:['isFilterCard'],
        components:{
            CardOrganism,Pagination
        },
        data(){
            return{
                cards:[
                    {
                        id:1,
                        image:'f-image.jpg',
                        rating:'5.0',
                        description:'rice , fried rice , jollof rice',
                        price:'2500',
                        qty:1
                    },
                    {
                        id:2,
                        image:'i-image.jpg',
                        rating:'5.0',
                        description:'rice , fried rice , jollof rice',
                        price:'1500',
                        qty:1
                    },
                    {
                        id:3,
                        image:'f-image.jpg',
                        rating:'4.5',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:4,
                        image:'f-image.jpg',
                        rating:'4.5',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:5,
                        image:'i-image.jpg',
                        rating:'4.5',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:6,
                        image:'f-image.jpg',
                        rating:'4.8',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:7,
                        image:'h-image.jpg',
                        rating:'4.7',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:8,
                        image:'f-image.jpg',
                        rating:'4.5',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:9,
                        image:'f-image.jpg',
                        rating:'4.5',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:10,
                        image:'f-image.jpg',
                        rating:'4.5',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:11,
                        image:'f-image.jpg',
                        rating:'4.5',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:12,
                        image:'f-image.jpg',
                        rating:'5.0',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:13,
                        image:'f-image.jpg',
                        rating:'4.5',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:14,
                        image:'f-image.jpg',
                        rating:'4.5',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:15,
                        image:'f-image.jpg',
                        rating:'4.5',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:16,
                        image:'f-image.jpg',
                        rating:'4.5',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:17,
                        image:'f-image.jpg',
                        rating:'4.5',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:18,
                        image:'f-image.jpg',
                        rating:'4.5',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:19,
                        image:'f-image.jpg',
                        rating:'4.5',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:20,
                        image:'f-image.jpg',
                        rating:'4.5',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:21,
                        image:'f-image.jpg',
                        rating:'4.5',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:22,
                        image:'f-image.jpg',
                        rating:'4.5',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:23,
                        image:'f-image.jpg',
                        rating:'4.5',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:24,
                        image:'f-image.jpg',
                        rating:'4.5',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:25,
                        image:'f-image.jpg',
                        rating:'4.5',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                    {
                        id:26,
                        image:'f-image.jpg',
                        rating:'4.7',
                        description:'rice , fried rice , jollof rice',
                        price:'300',
                        qty:1
                    },
                ],
                isMarketPlace:null,
                page: 10 ,
            }
        },
        created(){
            this.isMarketRoute();
            this.getProductByPage()
        },
        methods:{
            isMarketRoute(){
                if(this.$route.name === "MarketPlace"){
                    this.isMarketPlace = true;
                    return;
                }
                this.isMarketPlace = false;
            },
            addProductToCart(value){
                this.$store.dispatch('addToCart' , value );
            },
            addToCart(value){
                this.$emit('add-to-cart' , value)
            },

            //pagination system
            //perPage
    
            getProductByPage(){
               const result = this.cards.length / this.page
               console.log(Math.floor(result));
            }
            //totalPage
        },
        watch:{
            $route(){
                this.isMarketRoute;
            }
        },
        computed:{
            itemsCard: function(){
                return this.cards.filter((card => card.rating >= this.isFilterCard ));
            }
        }
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