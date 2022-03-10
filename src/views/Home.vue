<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
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
