<template>
   <div class="profile-main">
      <ProfileCard/>
   </div>
</template>

<script>

import ProfileCard from '../components/templates/profileTemp.vue'

export default {
   name: 'Profile',
   components:{
      ProfileCard
   }
}

</script>

<style lang="scss" scoped>
   .profile-main{
      height: 110vh;
   }
</style>
