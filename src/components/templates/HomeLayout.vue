<template>
    <div class="Home">
        <div class="Home__item">
            <div class="Home__text">
               <PuSkeleton>
                    <HomeOrganism/>
               </PuSkeleton>
            </div>
        </div>
        <div class="Home__item">
            <div class="item__title">
                <PuSkeleton height="300px" width="300px">
                    <ImageOrganism class="image-orgs"/>
                </PuSkeleton>
            </div>
        </div>
    </div>
</template>

<script>
    
    import HomeOrganism from '../organisms/HomeOrgs/HomeOrganism.vue'
    import ImageOrganism from '../organisms/HomeOrgs/ImageOrganism.vue'

    export default {
        name:"HomeLayouts",
        components:{
            HomeOrganism,
            ImageOrganism,
        }    
    }
</script>

<style lang="scss" scoped>

.Home{
    background: #A8B087;
    width: 100%;
    padding: 4px ;

    @media screen and (min-width:768px) {
        background: #A8B087;
        width: 90%;
        margin: 0px auto;
        height: 500px;
        border-radius: 20px;
        display: flex;
        flex-direction: row ;
        justify-content: center ;
        align-items: center;
        gap: 2px;
    }

    &__item{
       flex: 1;
       display: flex;
       justify-content: center;
       align-items: center;
    }

    &__text{ 
       padding: 20px 20px; 
       min-height: 350px;
    }
}

</style>