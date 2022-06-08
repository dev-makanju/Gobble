<template>
  <div class="home">
    <HomePage/>
    <slider/>
    <banner/>
    <landingPage/>
    <bannerOrg/>
  </div>
</template>

<script>
// @ is an alias to /src

import HomePage from '@/components/templates/HomeLayout.vue'
import bannerOrg from '../components/organisms/HomeOrgs/bannerOrganism.vue'
import banner from '../components/templates/bannerTemplate.vue'
import slider from '../components/templates/sliderTemplate.vue'
import landingPage from '../components/templates/landingPage.vue'

export default{
  name: 'Home',
  components:{
    HomePage,
    bannerOrg,
    banner,
    slider,
    landingPage
  },
  data(){
    return{
      isReturnCardsRatings:3.7,
      deleteAccount: null,
    }
  }
}
</script>

<style lang="scss" scoped>
    .home{
      margin-bottom: 6rem;
      position: relative;
    }
</style>