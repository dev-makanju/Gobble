<template>
  <div class="home">
    <HomePage/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/templates/HomeLayout.vue'

export default {
  name: 'Home',
  components:{
    HomePage,
  }
}
</script>
