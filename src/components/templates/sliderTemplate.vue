<template>
    <div class="slider">
        <div class="router-link">
            <router-link class="link" :to="{name:'MarketPlace'}">
                 Get Started
            </router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name:"sliderTemplate",
    }
</script>

<style lang="scss" scoped>
    .slider{
        height: 400px;
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
    }

</style>