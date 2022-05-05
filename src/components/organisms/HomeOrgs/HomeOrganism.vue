<template>
    <div class="carousel-main">
        <transition-group name="fade" tag="div">
            <div v-for="i in [currentIndex]" :key="i">
                <img class="img" :src="currentImg.url" alt="">
            </div>
        </transition-group>
        <div  v-for="i in [currentIndex]" :key="i" class="banner__info">
            <h1>{{ currentImg.headLine }}</h1>
            <p>{{ currentImg.smallText }}</p>
        </div>
        <div class="overlay__link">
            <font-awesome-icon 
                class="prev" 
                @click="prev" 
                icon="angle-left"/>
            <font-awesome-icon 
                class="next" 
                @click="next" 
                icon="angle-right"/>
        </div>
    </div>
</template>

<script>
    export default {
        name:"HomeOrganism",
        data(){
            return{
                images: [
                    {
                       url:"https://cdn.pixabay.com/photo/2022/02/23/05/10/tiramisu-7030032_960_720.jpg",
                       headLine:"Enjoy 10% off your first purchase",
                       smallText:'make your first purchase by signing up...'
                    },
                    {
                       url:"https://cdn.pixabay.com/photo/2019/03/31/07/48/food-4092617_960_720.jpg",
                       headLine:'Yummy, delicious, fresh. ',
                       smallText:'Enjoy the taste that differs...'
                    },
                    {
                       url:"https://cdn.pixabay.com/photo/2022/01/28/12/17/fast-food-6974507_960_720.jpg",
                       headLine:'We are best at what we do',
                       smallText:'fast response and a good delivery time...'
                    },
                    {

                       url:"https://cdn.pixabay.com/photo/2018/05/15/09/01/foodora-3402507_960_720.jpg",
                       headLine:'Your no 1 online food vendor',
                       smallText:'"Amazing" is a way to describe us.'
                    },
                ],
                timer: null,
                currentIndex: 0,
            }
        },
        mounted(){
            this.startSlide()
        },
        methods:{
            startSlide(){
                this.timer = setInterval(this.next , 5000)
            },
            next(){
                this.currentIndex += 1
            },
            prev(){
                this.currentIndex -= 1
            }
        },
        computed:{
            currentImg: function(){
                return this.images[Math.abs(this.currentIndex) % this.images.length]
            }
        } 
    }
</script>

<style lang="scss" scoped>
    .carousel-main{
        height: 60vh;
        width: 100%;
        position: relative;

        .overlay__link{
            position: absolute;
            top: 0;
            display: flex;
            align-items: center;
            height: 60vh;
            width: 100%;
            margin:0px auto;
            background: rgba(0, 0, 0, 0.479);

            &:hover{
                .next,.prev{
                    opacity: 1;
                }
            }
        }

        .banner__info{
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            height: 60vh;
            width: 90%;
            margin: auto;
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            z-index: 11;

            h1{
                color: #eee;
                font-weight: 600;
                font-size: 3rem;
                padding: 20px 0px;
                font-family: 'Mochiy Pop P One', sans-serif;
            }

            p{
                font-weight: 100;
                font-size: 1.2rem;
                font-family: 'Mochiy Pop P One', sans-serif;
                color: #eee;
                margin-bottom: 2rem;
            }

        }
    }

    .fade-enter-active,
    .fade-leave-active{
        transition: all 0.9s ease;
        overflow: hidden;
        visibility: visible;
        position: absolute;
        width: 100%;
        opacity: 1;   
    }

    .fade-enter,
    .fade-leave-to{
        visibility: hidden;
        width: 100%;
        opacity: 0;
    }

    .img{
        height: 60vh;
        width: 100%;
        object-fit: cover;
    }

    .prev, .next {
        cursor: pointer;
        position: absolute;
        padding: 15px;
        border: 1px solid rgb(185, 185, 185);
        border-radius: 17px;
        color: #eee;
        transition: .8s ease-in-out;
        opacity: 0;

        &:hover{
            background: #eee;
            color: #065143;
            scale: 2px;
        }
    }

    .next{
        right: 0;
        margin-right: 20px;
        z-index: 222;
    }

    .prev{
        left: 0;
        margin-left: 20px;
        z-index: 222;
    }
</style>