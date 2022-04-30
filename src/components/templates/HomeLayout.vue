<template>
    <div class="Home">
        <div class="Home__item">
            <div class="Home__text">
               <PuSkeleton>
                    <HomeOrganism/>
               </PuSkeleton>
            </div>
        </div>
    </div>
</template>

<script>
    
    import HomeOrganism from '../organisms/HomeOrgs/HomeOrganism.vue'
    
    export default {
        name:"HomeLayouts",
        components:{
            HomeOrganism,
        }    
    }
</script>

<style lang="scss" scoped>

</style>