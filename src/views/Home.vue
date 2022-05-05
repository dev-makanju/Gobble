<template>
  <div class="home">
    <HomePage/>
    <slider/>
    <banner/>
    <cardTemplate :isFilterCard="isReturnCardsRatings"/>
    <bannerOrg/>
  </div>
</template>

<script>
// @ is an alias to /src

import HomePage from '@/components/templates/HomeLayout.vue'
import bannerOrg from '../components/organisms/HomeOrgs/bannerOrganism.vue'
import banner from '../components/templates/bannerTemplate.vue'
import slider from '../components/templates/sliderTemplate.vue'
import cardTemplate from '../components/templates/cardTemplate.vue'

export default{
  name: 'Home',
  components:{
    HomePage,
    bannerOrg,
    banner,
    slider,
    cardTemplate
  },
  data(){
    return{
      isReturnCardsRatings:3.7
    }
  }
}
</script>

<style lang="scss" scoped>
   .home{
       margin-bottom: 6rem;
   }
</style>