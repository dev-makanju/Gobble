<template>
    <div>
        <CardOrganism :cards="itemsCard" @add-to-cart="addToCart"/>
        <div v-if="!isMarketPlace" class="button-wrapper">
            <router-link class="button-btn" :to="{name:'MarketPlace'}">Explore More</router-link>
        </div>
        <div v-if="isMarketPlace" class="button-wrapper">
            
        </div>
    </div>
</template>

<script>

    import CardOrganism from '../organisms/CardOrgansim.vue'

    export default {
        name:"cardTemplate",
        props:['isFilterCard'],
        components:{
            CardOrganism
        },
        data(){
            return{
                cards:[
                    {
                        id:1,
                        image:'https://cdn.pixabay.com/photo/2019/02/25/16/46/breakfast-4020028_960_720.jpg',
                        rating:'5.0',
                        description:'rich and delicious fries',
                        price:'800',
                        qty:1
                    },
                    {
                        id:2,
                        image:'https://cdn.pixabay.com/photo/2016/11/18/14/39/beans-1834984_960_720.jpg',
                        rating:'3.0',
                        description:'Fried egg, beans ans cheese',
                        price:'1500',
                        qty:1
                    },
                    {
                        id:3,
                        image:'https://cdn.pixabay.com/photo/2017/08/12/18/59/snack-2635035_960_720.jpg',
                        rating:'4.5',
                        description:'Hamburger , sandwich',
                        price:'500',
                        qty:1
                    },
                    {
                        id:4,
                        image:'https://cdn.pixabay.com/photo/2021/08/16/15/10/fried-chicken-6550521_960_720.jpg',
                        rating:'4.5',
                        description:'Fried chicken',
                        price:'2500',
                        qty:1
                    },
                    {
                        id:5,
                        image:'https://cdn.pixabay.com/photo/2016/11/19/02/22/schnipo-1837703_960_720.jpg',
                        rating:'4.5',
                        description:'Schnitzel with Fries',
                        price:'4500',
                        qty:1
                    },
                    {
                        id:6,
                        image:'https://cdn.pixabay.com/photo/2014/01/09/10/14/kimchi-fried-rice-241051_960_720.jpg',
                        rating:'4.8',
                        description:'Korean fried rice ',
                        price:'500',
                        qty:1
                    },
                    {
                        id:7,
                        image:'https://cdn.pixabay.com/photo/2021/05/31/01/10/fried-rice-6297407_960_720.jpg',
                        rating:'4.7',
                        description:'Asian Fried rice and Beef',
                        price:'300',
                        qty:1
                    },
                    {
                        id:8,
                        image:'https://cdn.pixabay.com/photo/2018/06/18/21/58/fish-3483465_960_720.jpg',
                        rating:'4.5',
                        description:'Fish , Sea Breams ',
                        price:'300',
                        qty:1
                    },
                    {
                        id:9,
                        image:'https://cdn.pixabay.com/photo/2018/05/30/19/18/burger-3442227_960_720.jpg',
                        rating:'4.5',
                        description:'Burger, Hamburger',
                        price:'300',
                        qty:1
                    },
                    {
                        id:10,
                        image:'https://cdn.pixabay.com/photo/2014/02/11/08/31/fried-rice-263882_960_720.jpg',
                        rating:'4.2',
                        description:'rice , fried rice ',
                        price:'1500',
                        qty:1
                    },
                    {
                        id:11,
                        image:'https://cdn.pixabay.com/photo/2017/02/15/12/22/meal-2068522_960_720.jpg',
                        rating:'4.5',
                        description:'Meal sauce',
                        price:'800',
                        qty:1
                    },
                    {
                        id:12,
                        image:'https://cdn.pixabay.com/photo/2021/06/21/15/03/salmon-6353898_960_720.jpg',
                        rating:'5.0',
                        description:'Salmon fish , fried shrimp',
                        price:'500',
                        qty:1
                    },
                    {
                        id:13,
                        image:'https://cdn.pixabay.com/photo/2015/04/08/13/14/pizza-712667_960_720.jpg',
                        rating:'4.5',
                        description:'Pizza Rolls , baked ',
                        price:'300',
                        qty:1
                    },
                    {
                        id:14,
                        image:'https://cdn.pixabay.com/photo/2013/12/30/15/58/eat-235771_960_720.jpg',
                        rating:'4.5',
                        description:'Chinese roasted duck ',
                        price:'900',
                        qty:1
                    },
                    {
                        id:15,
                        image:'https://cdn.pixabay.com/photo/2015/06/18/18/31/cevapcici-813967_960_720.jpg',
                        rating:'4.5',
                        description:'Cevapcici Flesh Minced meat',
                        price:'4000',
                        qty:1
                    },
                    {
                        id:16,
                        image:'https://cdn.pixabay.com/photo/2017/05/26/07/05/rice-2345381_960_720.jpg',
                        rating:'4.5',
                        description:'rice , fresh fish',
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