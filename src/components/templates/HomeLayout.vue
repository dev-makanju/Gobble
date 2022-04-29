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
    //
}

</style>