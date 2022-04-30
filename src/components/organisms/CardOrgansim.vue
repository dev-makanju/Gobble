<template>
    <div class="card__wrapper">
        <div v-for="card  in cards" :key="card.id" class="card">
            <div class="card_image_wrapper">
                <PuSkeleton class="is__loading">
                </PuSkeleton>
                <div v-if="isVisible" class="card__loaded">
                    <img class="card__image" :src="require(`@/assets/mobile/${card.image}`)" alt="">
                </div>
            </div>
            <div class="main-card">
                <div class="rating">
                    <div class="item">
                        <AtomIcon :content="'heart'" style="color: #065143;"/>
                    </div>
                    <div class="item" style="display:inline-flex;margin-left: 4px; ">
                        <AtomStarf style="color:gold;font-size: 20px;"/> <p class="padding:2px">{{ card.rating }}</p>
                    </div>
                </div>
                <div class="card__text" style="margin-top: 10px;">
                    <p>{{ card.description }}</p>
                </div>
                <div class="card__footer">
                    <div class="footer-info">
                        <p style="color: #065143;font-size: 18px;">NgN &nbsp;{{ card.price}}.00</p>
                    </div>
                    <div class="footer-info">
                        <button @click="addToCart(card)" class="button-btn">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AtomIcon from '../atoms/AtomIcon.vue'
    import AtomStarf from '../atoms/AtomStarfRating.vue'
    export default {
        name:"CardOrganism",
        props:['cards'],
        components:{
             AtomIcon,
             AtomStarf
        },
        data(){
            return{
                isVisible:null,
            }
        },
        created(){
            this.delayImageLoader();
        },
        methods:{
           delayImageLoader(){
              this.isVisible = false;
              setTimeout(() => {
                 this.isVisible = true
              } , 5000)
           },
           addToCart(card){
               this.$emit('add-to-cart' , card)
           }
        },
        computed:{
            filterHomeInputs: function(){
                return this.cards
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card__wrapper{
        padding: 0px 7px;
        margin: 0px auto ;
        margin-top: 5rem;
        display: flex ;
        flex-direction: row ;
        flex-wrap: wrap ;
        gap: 14px;
        justify-content: center;
        align-items: center;
    }

    .card{
        width: 300px;
        min-width: 300px;
        min-height: 420px;
        border-radius: 5px;
        box-shadow: 0px 2px 30px 1px rgba(0 , 0 , 0 , .1);
        overflow: hidden;
        transition: .5s ;

        &:hover{
             transform: scale(1.02);
        }

        &_image_wrapper{
            position: relative;
            width: 300px;
            min-width: 300px;
            height: 300px;
        }

        .button-btn{
            padding: 7px ;
            border-radius: 17px ;
            border: 1px solid #065143 ;
            outline: none ;
            font-size: 16px;
            font-family: 'IM Fell English', serif;
            cursor: pointer ;
            right: 0;
            color: #065143 ;  
            transition: .5s ease;

            &:hover{
                background: #065143 ;
                color: #eee;
            }
        }

        &__footer{
            display: flex ;
            flex-direction: row;
            justify-content: space-between ;
            align-items: center ;
            margin-top: 10px;
        }

        & .rating{
            display: flex ;
            flex-direction: row ;
            align-items: center;
        }

        & .main-card{
            padding: 10px;
        }
    }

    .card__image{
        width: 300px;
        min-width: 300px;
        height: 300px;
        object-fit: cover;
        position: absolute ;
        top: 0px;
        border-radius: 5px ;


    }

    .is__loading{
        width: 300px;
        min-width: 300px;
        height: 300px;
    }
</style>