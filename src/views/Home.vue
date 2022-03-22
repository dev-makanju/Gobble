<template>
  <div class="home">
    <HomePage/>
    <slider/>
    <bannerOrg/>
  </div>
</template>

<script>

// @ is an alias to /src

import HomePage from '@/components/templates/HomeLayout.vue'
import bannerOrg from '../components/organisms/HomeOrgs/bannerOrganism.vue'
import slider from '../components/templates/sliderTemplate.vue'

export default {
  name: 'Home',
  components:{
    HomePage,
    bannerOrg,
    slider
  },
  data(){
    return{
       isReturnCardsRatings:4.7
    }
  }
}
</script>
