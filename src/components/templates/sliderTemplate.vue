<template>
    <div class="slider">
        <div class="router-link">
            <router-link class="link" :to="{name:'MarketPlace'}">
                 Get Started
            </router-link>
        </div>

        <carousel-3d>
        <slide :index="0">
            <img src="@/assets/mobile/people-g.jpg" alt="">
        </slide>
        <slide :index="1">
            <img src="@/assets/mobile/tomato-g.jpg" alt="">
        </slide>
        <slide :index="2">
            <img src="@/assets/mobile/dinner.jpg" alt="">
        </slide>
        </carousel-3d>

        <div class="swipe">
            <p>&lt;</p>&nbsp;&nbsp;&nbsp;<p>&gt;</p>
        </div>

    </div>
</template>

<script>
    import { Carousel3d, Slide } from 'vue-carousel-3d';

    export default {
        name:"sliderTemplate",
        components:{
            Carousel3d, 
            Slide
        },
        data(){
            return{
                slide:{
                    src:'',
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .slider{
        margin-top: 20px;

        .router-link{
            display: flex ;
            justify-content: center ;

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