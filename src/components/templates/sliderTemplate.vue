<template>
    <div class="slider">
        <div class="router-link">
            <h2 class="text">Latest Products</h2>
        </div>
        <div class="router-link card-slider">
            <!--cards-->
            <div class="cards">
                <slidercard :cards="cards"/>
            </div>
        </div>
    </div>
</template>

<script>

    import slidercard from '../../components/organisms/sliderCard.vue' 

    export default {
        name:"sliderTemplate",
        components: {
            slidercard,    
        },
        data(){
            return{
              isVisible:null,
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
                    },]
            }  
        },
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