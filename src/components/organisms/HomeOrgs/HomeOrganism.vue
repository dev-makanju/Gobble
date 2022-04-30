<template>
    <div class="carousel-main">
        <transition-group name="fade" tag="div">
            <div v-for="i in [currentIndex]" :key="i">
                <img class="img" :src="currentImg" alt="">
            </div>
        </transition-group>
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
                   "https://cdn.pixabay.com/photo/2018/03/07/18/42/menu-3206748_960_720.jpg",
                   "https://cdn.pixabay.com/photo/2019/03/31/07/48/food-4092617_960_720.jpg",
                   "https://cdn.pixabay.com/photo/2022/01/28/12/17/fast-food-6974507_960_720.jpg",
                   "https://cdn.pixabay.com/photo/2018/11/04/16/12/morocco-3794323_960_720.jpg"
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
        height: 500px;
        width: 100%;
        position: relative;

        .overlay__link{
            position: absolute;
            top: 0;
            display: flex;
            align-items: center;
            height: 500px;
            width: 100%;
            margin:0px auto;
            background: rgba(0, 0, 0, 0.37);

            &:hover{
                .next,.prev{
                    opacity: 1;
                }
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
        height: 500px;
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
    }

    .prev{
        left: 0;
        margin-left: 20px;
    }
</style>