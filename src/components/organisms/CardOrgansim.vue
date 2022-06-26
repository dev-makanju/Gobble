<template>
    <div class="card__wrapper">
    <div v-scrollAnimate  v-for="card in cards" :key="card.id" class="card">
        <div class="card-container">
        <div class="card_image_wrapper">
            <PuSkeleton v-if="card.image === '' " class="is__loading">
            </PuSkeleton>
            <div class="card__loaded">
               <img class="card__image" :src="card.image" alt="" onerror="this.style.display='none'">
            </div>
        </div>
        <div class="main-card">
            <div class="rating tab">
                <div class="rating">
                    <div class="item">
                       <AtomIcon :content="'heart'" style="color: #065143;"/>
                    </div>
                    <div class="item" style="display:inline-flex;margin-left: 4px; ">
                       <AtomStarf style="color:gold;font-size: 20px;"/> <p class="padding:2px">{{ card.averageReview }}</p>
                    </div>
                </div>
                <div class="rating">
                    <router-link class="det-link" :to="{name:'ProductDetails', params:{slug: card.id} }">View</router-link>                    
                </div>
            </div>
            <div class="card__text" style="margin-top: 10px;">
                <p>{{ card.name }}</p>
            </div>
            <div class="card__footer">
                <div class="footer-info">
                    <p style="color: #065143;font-size: 18px;">₦ &nbsp;{{ card.price}}.00</p>
                </div>
                <div class="footer-info">
                    <div v-if="!showButton">
                        <button @click="addToCart(card.id)" class="button-btn">
                           Add To Cart
                        </button>
                    </div>
                    <div v-if="showButton" class="edit-wrapper">
                        <div>
                            <router-link :to="{name:'EditProduct' , params:{id:card.id}}">
                               <td style="color:#000" class="icon"><font-awesome-icon icon="circle-check"/></td>
                            </router-link>
                        </div>
                        <div>
                            <td @click="deleteProduct(card.id)" :disabled="sending" class="icon"><font-awesome-icon icon="trash-alt"/></td>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
    import AtomIcon from '../atoms/AtomIcon.vue'
    import AtomStarf from '../atoms/AtomStarfRating.vue'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name:"CardOrganism",
        props:['cards'],
        components:{
            AtomIcon,
            AtomStarf
        },
        data(){
            return{
                sending: null,
                isVisible:null,
                admin: false,
                showButton: null,
                isAdding: null,
                quantity: 1,
            }
        },
        created(){
            this.delayImageLoader();
            this.showIsEditing();
        },
        methods:{
            ...mapGetters(['isLoggedIn']),
            ...mapActions(['editSingleProduct' , 'deleteSingleProduct']),
            ...mapActions('cart', ['addProduct']),

            delayImageLoader(){
              this.isVisible = false;
              setTimeout(() => {
                this.isVisible = true
              } , 5000)
            },
            updateCart(){
                
            },
            addToCart(id){
                const p_id = {
                    pro_id: id,
                    quantity: this.quantity
                }
                if(this.$store.getters.isLoggedIn){
                    this.sending = true;
                    this.addProduct(p_id).then( res => {
                        if(res.status){
                           this.sending = false;
                        }
                    }).catch(err => {
                        this.sending = false;
                        err
                    })
                }else{
                    this.$router.push({name: 'Login'})
                }
            },
            showIsEditing(){
                if(this.$store.state.auth.role == "ADMIN"){
                    if(this.$route.name == 'Product'){
                       this.showButton = true;
                       return;
                    }
                }else if(this.$route.name == 'Product'){
                    this.showButton = true;
                    return;
                }else {
                    this.showButton = false
                }
            },
            deleteProduct(id){
                this.deleteSingleProduct(id).then(res => {
                    if(res.status){
                        //okay done...
                    }
                }).catch(err => {
                   console.log(err)
                })
            },
            createObj(image){
                console.log(typeof image)
                const url =  URL.createObjectURL( new Blob([image] , {type: "image/jpg"}))  
                console.log(url)
            }
        },
        computed:{
            filterHomeInputs: function(){
                return this.cards
            },
        },
        watch:{
            $route(){
               this.showIsEditing()
            },
        }
    }
</script>

<style lang="scss" scoped>
    .tab{
        display: flex;
        justify-content: space-between; 
    }

    .det-link {
        text-decoration: underline;
        color: #3e5752;
        padding: 7px 10px;

        &:hover{
            color: #065143;
        }
    }

    .edit-wrapper{
        display: flex ;
        div{
            padding: 7px ;

            .icon{
                cursor: pointer; 
            }
        }
    }

    .card__wrapper{
        align-content: center;
        margin-top: 4rem; 
        display:  flex;
        justify-content: center;
        flex: 0 0 33.3333%;
        flex-direction: row;    
        flex-wrap: wrap;
        gap: 20px;

        @media (max-width: 800px){
          padding: 0px 5px;
        }

    }

    .card{
        width: 300px;
        min-width: 300px;
        min-height: 420px;
        border-radius: 5px;
        box-shadow: 0px 2px 30px 1px rgba(0 , 0 , 0 , .1);
        overflow: hidden ;
        transition: .5s ;

        @media (max-width: 450px){
            &.before-enter{
               opacity: 0;
               transform: translateY(30px);
            }

            &.enter{
                opacity: 1;
                transform: translateY(0px);
            }
        }


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
            border-radius: 4px ;
            border: 1px solid #065143 ;
            outline: none ;
            font-size: 14px;
            font-family: 'IM Fell English', serif;
            cursor: pointer;
            right: 0;
            color: #065143 ;  
            transition: .2s;
            position: relative;
            
            &.add{
                background: #0dc4a2;
                color: #065143;
            }

            &:active{
                transform: scale(1.1);
                /* Scaling button to 0.98 to its original size */
                box-shadow: 3px 2px 15px 7px rgba(0, 0, 0, .2);
                /* Lowering the shadow */
            }

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