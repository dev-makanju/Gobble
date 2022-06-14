<template>
    <div class="slider">
        <div class="router-link">
            <h2 class="text">Latest Products</h2>
        </div>
        <div class="router-link card-slider">
            <!--cards-->
            <div class="cards">
                <slidercard v-if="$store.state.product_loading" :cards="fakeCard"/>
                <slidercard v-else :cards="cards"/>
            </div>
        </div>
    </div>
</template>

<script>

    import slidercard from '../../components/organisms/sliderCard.vue' 
    import CardLoaderMixin from '../../mixins/CardLoaderMixin'

    export default {
        name:"sliderTemplate",
        mixins:[CardLoaderMixin],
        components: {
            slidercard,    
        },
        data(){
            return{
              fakeCard:[{
                  image:'',
                  price:'',
              },
              {
                image:'',
                price:'',
              },{
                image:'',
                price:'',
              },{
                image:'',
                price:'',
              },{
                image:'',
                price:'',
              },{
                image:'',
                price:'',
              },
              {
                image:'',
                price:'',
              },
              {
                image:'',
                price:'',
              }],  
              isVisible:null,
              cards:[],
            }  
        },  
        mounted(){
            this.getPostFeeds()
        },
        methods:{
            getPostFeeds(){
                this.cards = this.$store.getters.productFeed
            },
            getAllProduct(){
            //not really needed here
            },
        }
    }
</script>

<style lang="scss" scoped>
    .text{
        margin-top: 7rem;
        padding: 0px 10px;
    }

    .slider{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 90%;
        max-width: 1440px;
        margin: 0px auto;
        
        @media(max-width: 768px){
            width: 100%;
        }

        .router-link.card-slider{
            margin-bottom: 7rem;
            
            .link{
                padding: 10px;
                border-radius: 17px ;
                text-decoration: none ;
                border: 1px solid #065143;
                text-align: center;
                width: 200px;
                color: #065143;
            }
        }
         
        @media (max-width: 450px) {
            .swipe{
               display: flex;
               justify-content: center ;
               align-items: center;

                p{
                   color:#065143;
                   font-size: 20px;
                }
            }  
        } 
    }

</style>