<template>
   <div class="profile-main">
      <ProfileUpdate/>
      <ProfileCard/>
   </div>
</template>

<script>

import ProfileCard from '../components/templates/profileTemp.vue'
import ProfileUpdate from '../components/Modals/profileUpdate.vue'

export default {
   name: 'Profile',
   components:{
      ProfileCard,
      ProfileUpdate,
   }
}

</script>

<style lang="scss" scoped>
   .profile-main{
      height: 110vh;
   }
</style>
