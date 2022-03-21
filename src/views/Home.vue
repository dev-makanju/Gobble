<template>
  <div class="home">
    <HomePage/>
    <CardTemplate :isFilterCard="isReturnCardsRatings"/>
    <bannerOrg/>
  </div>
</template>

<script>

// @ is an alias to /src

import HomePage from '@/components/templates/HomeLayout.vue'
import CardTemplate from '../components/templates/cardTemplate.vue'
import bannerOrg from '../components/organisms/HomeOrgs/bannerOrganism.vue'

export default {
  name: 'Home',
  components:{
    HomePage,
    bannerOrg,
    CardTemplate,
  },
  data(){
    return{
       isReturnCardsRatings:4.7
    }
  }
}
</script>
