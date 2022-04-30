<template>
    <div class="slider">
        <div class="router-link">
            <h2 class="text">Latest Products</h2>
        </div>
        <div class="router-link card-slider">
            <!--cards-->
            <div class="cards">
                <slidercard :card="card"/>
            </div>
        </div>
    </div>
</template>

<script>

    import slidercard from '../../components/organisms/sliderCard.vue' 

    export default {
        name:"sliderTemplate",
        components:{
            slidercard,    
        },
        props:['cards'],
        data(){
            return{
                isVisible:null,
            }
        },
    }
</script>

<style lang="scss" scoped>
    .text{
        padding: 30px 10px;
    }

    .slider{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 90%;
        margin: 0px auto;
        
        @media(max-width: 768px){
            width: 100%;
        }

        .router-link.card-slider{
            padding:5px 0px;
            min-height: 250px;
            
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